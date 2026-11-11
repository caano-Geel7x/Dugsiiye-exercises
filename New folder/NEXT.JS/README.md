# Next.js Exercises

This project is arranged as four exercises. Start at `/` and follow Exercises
1, 2, 3, and 4 in order. The numbered navigation stays available at the top of
every page.

## Run the project

From this directory:

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`. To check the project, run:

```powershell
npm run typecheck
npm run build
```

## Exercises

| Order | Page | What to practice |
| --- | --- | --- |
| 1 | `/exercise1` | Route groups, dynamic routes, catch-all routes, and API routes |
| 2 | `/exercise2` | Server and Client Components, static rendering, SSR, and Suspense |
| 3 | `/exercise3` | Server Actions, form submission, and validation |
| 4 | `/exercise4` | MongoDB todos, priorities, search, filters, bulk operations, and timestamps |

Exercise 1's route demonstrations are available at `/notifications`,
`/users/amina`, `/blog/nextjs/routing`, and `/api/users/amina`.
Exercise 2's demonstrations are linked from `/exercise2`.

## Folder guide

```text
app/
  (exercise1)/             Exercise 1 route demonstrations
  (exercise2)/             Exercise 2 route demonstrations
  exercise1/               Exercise 1 guide page and component
  exercise2/               Exercise 2 guide page
  exercise3/               Exercise 3 page, forms, and Server Actions
  exercise4/               Exercise 4 page, todo UI, and Server Actions
  globals.css              Shared page and navigation styles
  layout.tsx               Shared app layout and metadata
  page.tsx                 Ordered home page
components/
  ExerciseNavigation.tsx   Shared numbered exercise navigation
lib/
  mongodb.ts               Shared MongoDB connection and todo types
```

Parenthesized folders are Next.js route groups: they organize source files
without adding a segment to the URL. For example, files inside
`app/(exercise2)/counter` still serve `/counter`.

## Exercise 4 MongoDB setup

Exercise 4 needs a MongoDB server or Atlas connection. Copy `.env.example` to
`.env.local`, then set `MONGODB_URI` to your connection string. You can set
`MONGODB_DB` to choose a database; it defaults to `nextjs_exercises`.
Restart the development server after changing environment variables.
