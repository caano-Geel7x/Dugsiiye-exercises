export const dynamic = "force-dynamic";

export default function ServerRenderedTimePage() {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <p>
        <a href="/exercise2">Back to Exercise 2</a>
      </p>
      <h1>Server-rendered time</h1>
      <p>Rendered at: {currentTime}</p>
      <p>Refresh the page to request a newly rendered time.</p>
    </main>
  );
}
