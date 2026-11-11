export default function HomePage() {
  return (
    <main className="site-main">
      <h1>Next.js Exercises</h1>
      <p>
        Work through the lessons in order. Each exercise builds on a different
        part of the Next.js App Router.
      </p>
      <ol className="exercise-cards">
        <li>
          <article className="exercise-card">
            <h2>Exercise 1: App Router</h2>
            <p>
              Practice route groups, dynamic segments, catch-all segments, and
              API routes.
            </p>
            <a href="/exercise1">Start Exercise 1</a>
          </article>
        </li>
        <li>
          <article className="exercise-card">
            <h2>Exercise 2: Rendering</h2>
            <p>
              Learn Server and Client Components, static rendering, SSR, and
              streaming with Suspense.
            </p>
            <a href="/exercise2">Start Exercise 2</a>
          </article>
        </li>
        <li>
          <article className="exercise-card">
            <h2>Exercise 3: Server Actions</h2>
            <p>Submit forms and validate email, password, and name fields.</p>
            <a href="/exercise3">Start Exercise 3</a>
          </article>
        </li>
        <li>
          <article className="exercise-card">
            <h2>Exercise 4: MongoDB Todo Manager</h2>
            <p>
              Build a todo manager with priorities, search, filters, and bulk
              updates.
            </p>
            <a href="/exercise4">Start Exercise 4</a>
          </article>
        </li>
      </ol>
    </main>
  );
}
