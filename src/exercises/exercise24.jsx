import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";

const STORAGE_KEY = "registration-form-data";
const emptyForm = { username: "", email: "", password: "", confirmPassword: "", terms: false };

const getSavedForm = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...emptyForm, ...JSON.parse(saved) } : emptyForm;
  } catch {
    return emptyForm;
  }
};

const RegistrationForm = () => {
  const { register, handleSubmit, watch, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } =
    useForm({
      defaultValues: useMemo(getSavedForm, []),
      mode: "onChange",
      reValidateMode: "onChange",
    });
  const formData = watch();
  const password = watch("password", "");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("Registration Data:", data);
  };

  const handleReset = () => {
    reset(emptyForm);
    localStorage.removeItem(STORAGE_KEY);
  };

  const fieldClass = (name) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition focus:outline-none focus-visible:ring-4 ${
      errors[name]
        ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-100"
        : "border-slate-300 focus:border-indigo-500 focus:ring-indigo-100"
    }`;

  return (
    <section className="min-h-screen bg-slate-100 px-3 py-8 font-sans sm:px-6 sm:py-14" aria-labelledby="registration-title">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 lg:grid-cols-[.8fr_1.2fr]">
        <aside className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-800 to-violet-900 p-7 text-white sm:p-10 lg:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-400/20 blur-2xl" />
          <div className="relative flex h-full flex-col justify-between gap-12">
            <div>
              <span className="text-xs font-extrabold tracking-[0.18em] text-indigo-200">MEMBER PORTAL</span>
              <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">Start your journey with us.</h1>
              <p className="mt-4 max-w-sm text-sm leading-7 text-indigo-100">Create an account to unlock personalized opportunities, resources, and updates.</p>
            </div>
            <ul className="space-y-4 text-sm text-indigo-100">
              <li className="flex items-center gap-3"><span className="rounded-full bg-white/15 px-2 py-1">✓</span> Secure account creation</li>
              <li className="flex items-center gap-3"><span className="rounded-full bg-white/15 px-2 py-1">✓</span> Your progress is saved automatically</li>
              <li className="flex items-center gap-3"><span className="rounded-full bg-white/15 px-2 py-1">✓</span> Takes less than two minutes</li>
            </ul>
          </div>
        </aside>

        <div className="p-6 sm:p-10 lg:p-12">
          <header className="mb-8">
            <span className="text-xs font-extrabold tracking-[0.14em] text-indigo-600">WELCOME ABOARD</span>
            <h2 id="registration-title" className="mt-2 text-3xl font-bold text-slate-900">Create your account</h2>
            <p className="mt-2 text-sm text-slate-500">Use your details to get started.</p>
          </header>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5" noValidate>
          <div className="grid gap-2">
            <label htmlFor="username" className="text-sm font-bold text-slate-700">Username</label>
            <input id="username" className={fieldClass("username")} placeholder="e.g. KHADAR"
              autoComplete="username"
              maxLength={10}
              aria-describedby="username-help username-error"
              aria-invalid={Boolean(errors.username)} {...register("username", {
                required: "Username is required",
                pattern: {
                  value: /^[A-Z]+$/,
                  message: "Use uppercase letters only: A-Z",
                },
                maxLength: {
                  value: 30,
                  message: "Username must be 30 characters or fewer",
                },
              })} />
            <p id="username-help" className="text-xs text-slate-400">Uppercase letters only, maximum 10 characters.</p>
            {errors.username && <p id="username-error" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700" role="alert">{errors.username.message}</p>}
          </div>

          <div className="grid gap-2">
            <label htmlFor="registration-email" className="text-sm font-bold text-slate-700">Email address</label>
            <input id="registration-email" type="email" className={fieldClass("email")} placeholder="you@example.com"
              autoComplete="email"
              aria-describedby="email-help email-error"
              aria-invalid={Boolean(errors.email)} {...register("email", {
                required: "Email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" },
              })} />
            <p id="email-help" className="text-xs text-slate-400">Use a valid address such as name@example.com.</p>
            {errors.email && <p id="email-error" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700" role="alert">{errors.email.message}</p>}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="password" className="text-sm font-bold text-slate-700">Password</label>
              <input id="password" type="password" className={fieldClass("password")} placeholder="At least 6 characters"
                autoComplete="new-password"
                aria-invalid={Boolean(errors.password)} {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Use at least 6 characters" },
                })} />
              {errors.password && <p className="text-xs font-semibold text-red-700" role="alert">{errors.password.message}</p>}
            </div>
            <div className="grid gap-2">
              <label htmlFor="confirm-password" className="text-sm font-bold text-slate-700">Confirm password</label>
              <input id="confirm-password" type="password" className={fieldClass("confirmPassword")} placeholder="Repeat your password"
                autoComplete="new-password"
                aria-invalid={Boolean(errors.confirmPassword)} {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) => value === password || "Passwords do not match",
                })} />
              {errors.confirmPassword && <p className="text-xs font-semibold text-red-700" role="alert">{errors.confirmPassword.message}</p>}
            </div>
          </div>

          <div className={`flex items-center gap-2 rounded-xl border p-3 ${errors.terms ? "border-red-300 bg-red-50" : "border-transparent"}`}>
            <input id="terms" type="checkbox" className="h-4 w-4 accent-indigo-600" {...register("terms", { required: "You must accept the terms" })} />
            <label htmlFor="terms" className="text-sm font-bold text-slate-700">I accept the terms and conditions</label>
          </div>
          {errors.terms && <p className="-mt-3 text-xs font-semibold text-red-700" role="alert">{errors.terms.message}</p>}

          <div className="mt-1 flex flex-col-reverse gap-3 sm:flex-row">
            <button type="button" className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-600 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200 disabled:cursor-not-allowed disabled:opacity-60" onClick={handleReset} disabled={isSubmitting}>Reset form</button>
            <button type="submit" className="flex-1 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 font-bold text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200 disabled:cursor-not-allowed disabled:opacity-60" disabled={isSubmitting}>
              {isSubmitting ? "Creating account…" : "Create account"}
            </button>
          </div>
          {isSubmitSuccessful && <p className="rounded-xl border border-green-200 bg-green-50 p-3 text-center text-sm font-semibold text-green-700" role="status">✓ Your account has been created successfully.</p>}
          <p className="-mt-2 text-center text-sm text-slate-500">Your unfinished form is saved automatically on this device.</p>
        </form>
      </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
