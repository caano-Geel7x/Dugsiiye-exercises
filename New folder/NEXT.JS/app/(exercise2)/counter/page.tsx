import Counter from "./Counter";

export default function CounterExercisePage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <p>
        <a href="/exercise2">Back to Exercise 2</a>
      </p>
      <h1>Client Component Counter</h1>
      <Counter />
    </main>
  );
}
