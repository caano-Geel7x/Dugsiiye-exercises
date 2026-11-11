interface User {
  username: string;
  password: string;
}

function login(user: User): void {
  console.log(`Logging in ${user.username}`);
}

const validUser: User = {
  username: "Amina",
  password: "123456",
};

login(validUser);

interface ExtendedUser extends User {
  email?: string;
}

function loginWithOptionalEmail(user: ExtendedUser): void {
  console.log(`Logging in ${user.username}`);
  if (user.email) {
    console.log(`Email: ${user.email}`);
  }
}

loginWithOptionalEmail({ username: "Ali", password: "abc123" });
loginWithOptionalEmail({ username: "Hodan", password: "xyz789", email: "hodan@example.com" });

interface ReadonlyUser {
  readonly id: number;
  username: string;
  password: string;
}

const user: ReadonlyUser = {
  id: 1,
  username: "Amina",
  password: "secret",
};

// user.id = 2; // This will cause an error in TypeScript.
