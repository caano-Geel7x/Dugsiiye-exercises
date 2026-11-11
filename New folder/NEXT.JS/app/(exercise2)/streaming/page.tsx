import { Suspense } from "react";
import SlowComponent from "./SlowComponent";

export const dynamic = "force-dynamic";

export default function SuspenseStreamingPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <p>
        <a href="/exercise2">Back to Exercise 2</a>
      </p>
      <h1>Streaming with Suspense</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <SlowComponent />
      </Suspense>
    </main>
  );
}
