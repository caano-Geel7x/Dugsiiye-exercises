import type { Metadata } from "next";
import type { ReactNode } from "react";
import ExerciseNavigation from "../components/ExerciseNavigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Exercises",
  description: "A step-by-step collection of Next.js practice exercises",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ExerciseNavigation />
        {children}
      </body>
    </html>
  );
}
