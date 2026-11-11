import Exercise3Forms from "./Exercise3Forms";

export default function Exercise3Page() {
  return (
    <main
      style={{
        maxWidth: "48rem",
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "sans-serif",
      }}
    >
      <p>
        <a href="/">All exercises</a> |{" "}
        <a href="/exercise4">Exercise 4</a>
      </p>
      <h1>Exercise 3: Server Actions and Forms</h1>
      <Exercise3Forms />
    </main>
  );
}
