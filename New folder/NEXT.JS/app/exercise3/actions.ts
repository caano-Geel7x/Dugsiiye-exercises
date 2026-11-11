"use server";

export type FormState = {
  message: string;
  error?: boolean;
};

export async function submitEmail(
  _previousState: FormState,
  formData: FormData
): Promise<FormState> {
  const email = String(formData.get("email") ?? "").trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { message: "Enter a valid email address.", error: true };
  }

  console.log("Email submitted:", email);
  return { message: "Thanks for submitting!" };
}

export async function validatePassword(
  _previousState: FormState,
  formData: FormData
): Promise<FormState> {
  const password = String(formData.get("password") ?? "");

  if (password.length < 6) {
    return { message: "Password must be at least 6 characters long.", error: true };
  }

  return { message: "Password is valid." };
}

export async function greetByName(
  _previousState: FormState,
  formData: FormData
): Promise<FormState> {
  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName = String(formData.get("lastName") ?? "").trim();

  if (!firstName || !lastName) {
    return { message: "Enter both your first name and last name.", error: true };
  }

  return { message: `Hello, ${firstName} ${lastName}!` };
}
