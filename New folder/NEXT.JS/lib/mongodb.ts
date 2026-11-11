import { MongoClient } from "mongodb";

const globalForMongo = globalThis as typeof globalThis & {
  mongoClientPromise?: Promise<MongoClient>;
};

function getMongoClientPromise(): Promise<MongoClient> {
  if (globalForMongo.mongoClientPromise) {
    return globalForMongo.mongoClientPromise;
  }

  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    throw new Error(
      "MONGODB_URI is not set. Copy .env.example to .env.local and configure your MongoDB connection."
    );
  }

  const clientPromise = new MongoClient(mongoUri).connect();
  if (process.env.NODE_ENV !== "production") {
    globalForMongo.mongoClientPromise = clientPromise;
  }

  return clientPromise;
}

export async function getTodosCollection() {
  const client = await getMongoClientPromise();
  const database = client.db(process.env.MONGODB_DB ?? "nextjs_exercises");

  return database.collection<TodoDocument>("todos");
}

export type TodoPriority = "low" | "medium" | "high";

export type TodoDocument = {
  title: string;
  completed: boolean;
  priority: TodoPriority;
  createdAt: Date;
  updatedAt: Date;
};
