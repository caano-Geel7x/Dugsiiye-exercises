const examples = [
  {
    title: "Grouped route",
    path: "app/(dashboard)/notifications/page.tsx",
    code: `export default function NotificationsPage() {
  return <h1>Notifications</h1>;
}`,
  },
  {
    title: "Dynamic user route",
    path: "app/users/[username]/page.tsx",
    code: `type Props = {
  params: Promise<{ username: string }>;
};

export default async function UserPage({ params }: Props) {
  const { username } = await params;
  return <h1>Welcome, {username}</h1>;
}`,
  },
  {
    title: "Catch-all blog route",
    path: "app/blog/[...slug]/page.tsx",
    code: `type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  return <h1>You visited: {slug.join("/")}</h1>;
}`,
  },
  {
    title: "API user profile",
    path: "app/api/users/[username]/route.ts",
    code: `import { NextResponse } from "next/server";

type RouteContext = {
  params: Promise<{ username: string }>;
};

export async function GET(_request: Request, { params }: RouteContext) {
  const { username } = await params;
  return NextResponse.json({ username });
}`,
  },
];

export default function Exercise1() {
  return (
    <main
      style={{
        maxWidth: "48rem",
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Next.js Route Exercises</h1>

      <p>
        <a href="/">All exercises</a> |{" "}
        <a href="/exercise2">Exercise 2: Rendering</a>
      </p>

      <p>
        These routes are implemented in the app directory. The route group name
        does not appear in the URL.
      </p>

      <nav aria-label="Exercise route examples">
        <ul>
          <li>
            <a href="/notifications">Grouped route: /notifications</a>
          </li>
          <li>
            <a href="/users/amina">Dynamic user route: /users/amina</a>
          </li>
          <li>
            <a href="/blog/nextjs/routing">Catch-all blog route</a>
          </li>
          <li>
            <a href="/api/users/amina">User API: /api/users/amina</a>
          </li>
        </ul>
      </nav>

      {examples.map((example, index) => (
        <section key={example.path} style={{ marginTop: "2rem" }}>
          <h2>
            {index + 1}. {example.title}
          </h2>
          <p>
            <strong>File:</strong> <code>{example.path}</code>
          </p>
          {index === 0 && <p>Visit /notifications.</p>}
          <pre
            style={{
              overflowX: "auto",
              padding: "1rem",
              borderRadius: "0.5rem",
              background: "#111",
              color: "#fff",
            }}
          >
            <code>{example.code}</code>
          </pre>
        </section>
      ))}
    </main>
  );
}
