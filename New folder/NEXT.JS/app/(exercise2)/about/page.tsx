export const dynamic = "force-static";

export default function StaticAboutPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <p>
        <a href="/exercise2">Back to Exercise 2</a>
      </p>
      <h1>About Us</h1>
      <p>This is a statically rendered page in the Next.js App Router.</p>
    </main>
  );
}
