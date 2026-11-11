"use client";

import { useActionState } from "react";
import {
  greetByName,
  submitEmail,
  validatePassword,
  type FormState,
} from "./actions";

const initialState: FormState = { message: "" };

export default function Exercise3Forms() {
  const [emailState, emailAction, isEmailPending] = useActionState(
    submitEmail,
    initialState
  );
  const [passwordState, passwordAction, isPasswordPending] = useActionState(
    validatePassword,
    initialState
  );
  const [nameState, nameAction, isNamePending] = useActionState(
    greetByName,
    initialState
  );

  return (
    <div>
      <section>
        <h2>1. Basic Form</h2>
        <form action={emailAction}>
          <label htmlFor="email">Email</label>{" "}
          <input id="email" name="email" type="email" required />
          <button type="submit" disabled={isEmailPending}>
            {isEmailPending ? "Submitting..." : "Submit email"}
          </button>
        </form>
        {emailState.message && (
          <p role="status" aria-live="polite">
            {emailState.message}
          </p>
        )}
      </section>

      <section>
        <h2>2. Required Field</h2>
        <form action={passwordAction}>
          <label htmlFor="password">Password (at least 6 characters)</label>{" "}
          <input id="password" name="password" type="password" required />
          <button type="submit" disabled={isPasswordPending}>
            {isPasswordPending ? "Checking..." : "Check password"}
          </button>
        </form>
        {passwordState.message && (
          <p
            role={passwordState.error ? "alert" : "status"}
            aria-live="polite"
          >
            {passwordState.message}
          </p>
        )}
      </section>

      <section>
        <h2>3. Full Name Greeting</h2>
        <form action={nameAction}>
          <label htmlFor="firstName">First name</label>{" "}
          <input id="firstName" name="firstName" autoComplete="given-name" required />
          <br />
          <label htmlFor="lastName">Last name</label>{" "}
          <input id="lastName" name="lastName" autoComplete="family-name" required />
          <br />
          <button type="submit" disabled={isNamePending}>
            {isNamePending ? "Sending..." : "Greet me"}
          </button>
        </form>
        {nameState.message && (
          <p
            role={nameState.error ? "alert" : "status"}
            aria-live="polite"
          >
            {nameState.message}
          </p>
        )}
      </section>
    </div>
  );
}
