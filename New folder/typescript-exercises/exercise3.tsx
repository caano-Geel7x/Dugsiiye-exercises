function fullName(first: string, last: string): string {
  return `${first} ${last}`;
}

function registerUser(
  username: string,
  isAdmin?: boolean,
  language: string = "en"
): void {
  console.log({ username, isAdmin, language });
}

function average(...scores: number[]): number {
  if (scores.length === 0) {
    throw new Error("Provide at least one score.");
  }

  return scores.reduce((total, score) => total + score, 0) / scores.length;
}

console.log(fullName("Amina", "Ali"));
registerUser("Amina");
registerUser("Ali", true, "so");
console.log(average(80, 90, 100));
console.log(average(75, 85, 95, 100));
