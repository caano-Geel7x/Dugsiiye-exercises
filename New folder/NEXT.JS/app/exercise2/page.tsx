const exercises = [
  { title: "Server Component: products", href: "/products" },
  { title: "Client Component: counter", href: "/counter" },
  { title: "SSR simulation: current time", href: "/ssr" },
  { title: "Static page: About Us", href: "/about" },
  { title: "Streaming: Suspense loading", href: "/streaming" },
];

export default function Exercise2Page() {
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
        <a href="/exercise3">Exercise 3</a>
      </p>
      <h1>Exercise 2: Rendering in Next.js</h1>
      <ol>
        {exercises.map((exercise) => (
          <li key={exercise.href}>
            <a href={exercise.href}>{exercise.title}</a>
          </li>
        ))}
      </ol>
    </main>
  );
}
