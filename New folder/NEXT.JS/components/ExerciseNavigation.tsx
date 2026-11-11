import Link from "next/link";

const exercises = [
  { number: 1, title: "App Router", href: "/exercise1" },
  { number: 2, title: "Rendering", href: "/exercise2" },
  { number: 3, title: "Server Actions", href: "/exercise3" },
  { number: 4, title: "MongoDB Todos", href: "/exercise4" },
];

export default function ExerciseNavigation() {
  return (
    <header className="site-header">
      <Link className="site-brand" href="/">
        Next.js Practice
      </Link>
      <nav aria-label="Exercises">
        <ol className="exercise-navigation">
          {exercises.map((exercise) => (
            <li key={exercise.number}>
              <Link href={exercise.href}>
                <span className="exercise-number">{exercise.number}</span>
                <span className="exercise-navigation-title">
                  {exercise.title}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
}
