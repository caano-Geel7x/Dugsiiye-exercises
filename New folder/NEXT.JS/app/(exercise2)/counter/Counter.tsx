"use client";

import { useState } from "react";

export default function ExerciseCounter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <p>Count: {count}</p>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increment
      </button>
    </section>
  );
}
