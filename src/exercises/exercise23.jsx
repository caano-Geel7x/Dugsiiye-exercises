import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

const STORAGE_KEY = "developer-application-form";
const initialFormData = { fullName: "", email: "", role: "", experience: "", skills: [], agreeToTerms: false, notifications: false };

const getSavedData = () => {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    return savedData ? { ...initialFormData, ...JSON.parse(savedData) } : initialFormData;
  } catch {
    return initialFormData;
  }
};

function Formvalid() {
  const [submitMessage, setSubmitMessage] = useState("");
  const { register, handleSubmit, watch, reset, formState: { errors, isSubmitting } } = useForm({
    defaultValues: useMemo(getSavedData, []), mode: "onChange", reValidateMode: "onChange",
  });
  const formData = watch();

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const roles = ["Frontend Developer", "Backend Developer", "Full Stack Developer", "UI/UX Designer", "Product Manager"];
  const skillOptions = ["React", "JavaScript", "TypeScript", "Node.js", "Python", "Java", "UI Design", "API Development"];
  const inputClass = (name) => `w-full rounded-xl border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition focus:outline-none focus-visible:ring-4 ${errors[name] ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-100" : "border-slate-300 focus:border-indigo-500 focus:ring-indigo-100"}`;

  const onSubmit = async (data) => {
    setSubmitMessage("");
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("Form submitted:", data);
    setSubmitMessage("Application submitted successfully!");
  };

  const handleReset = () => {
    reset(initialFormData);
    localStorage.removeItem(STORAGE_KEY);
    setSubmitMessage("");
  };

  return (
    <section className="min-h-screen bg-slate-100 px-3 py-8 font-sans sm:px-6 sm:py-14" aria-labelledby="application-title">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 lg:grid-cols-[.8fr_1.2fr]">
        <aside className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-800 to-violet-900 p-7 text-white sm:p-10 lg:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-400/20 blur-2xl" />
          <div className="relative flex h-full flex-col justify-between gap-12">
            <div>
              <span className="text-xs font-extrabold tracking-[0.18em] text-indigo-200">CAREER OPPORTUNITY</span>
              <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">Bring your skills to the team.</h1>
              <p className="mt-4 max-w-sm text-sm leading-7 text-indigo-100">Share your experience and help us discover where your strengths can make an impact.</p>
            </div>
            <ul className="space-y-4 text-sm text-indigo-100">
              <li className="flex items-center gap-3"><span className="rounded-full bg-white/15 px-2 py-1">✓</span> Tell us what you do best</li>
              <li className="flex items-center gap-3"><span className="rounded-full bg-white/15 px-2 py-1">✓</span> Your progress is saved automatically</li>
              <li className="flex items-center gap-3"><span className="rounded-full bg-white/15 px-2 py-1">✓</span> Complete the application in minutes</li>
            </ul>
          </div>
        </aside>

        <div className="p-6 sm:p-10 lg:p-12">
          <header className="mb-8">
            <span className="text-xs font-extrabold tracking-[0.14em] text-indigo-600">YOUR PROFILE</span>
            <h2 id="application-title" className="mt-2 text-3xl font-bold text-slate-900">Developer application</h2>
            <p className="mt-2 text-sm text-slate-500">A few details help us understand your experience.</p>
          </header>

          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5" noValidate>
            <div className="grid gap-2">
              <label htmlFor="fullName" className="text-sm font-bold text-slate-700">Full name</label>
              <input id="fullName" className={inputClass("fullName")} placeholder="e.g. Alex Johnson" autoComplete="name" aria-invalid={Boolean(errors.fullName)} {...register("fullName", { required: "Full name is required", pattern: { value: /^[a-zA-Z\s]{2,30}$/, message: "Enter 2–30 letters only" } })} />
              {errors.fullName && <p className="text-xs font-semibold text-red-700" role="alert">{errors.fullName.message}</p>}
            </div>

            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-bold text-slate-700">Email address</label>
              <input id="email" type="email" className={inputClass("email")} placeholder="you@example.com" autoComplete="email" aria-invalid={Boolean(errors.email)} {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" } })} />
              {errors.email && <p className="text-xs font-semibold text-red-700" role="alert">{errors.email.message}</p>}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="role" className="text-sm font-bold text-slate-700">Target role</label>
                <select id="role" className={inputClass("role")} {...register("role", { required: "Please select a role" })}>
                  <option value="">Select a role</option>
                  {roles.map((role) => <option key={role} value={role}>{role}</option>)}
                </select>
                {errors.role && <p className="text-xs font-semibold text-red-700" role="alert">{errors.role.message}</p>}
              </div>
              <div className="grid gap-2">
                <label htmlFor="experience" className="text-sm font-bold text-slate-700">Years of experience</label>
                <input id="experience" type="number" min="0" max="50" className={inputClass("experience")} placeholder="0" {...register("experience", { required: "Experience is required", min: { value: 0, message: "Cannot be negative" }, max: { value: 50, message: "Cannot exceed 50 years" } })} />
                {errors.experience && <p className="text-xs font-semibold text-red-700" role="alert">{errors.experience.message}</p>}
              </div>
            </div>

            <fieldset className="grid gap-3">
              <legend className="text-sm font-bold text-slate-700">Core skills <span className="font-medium text-slate-400">(choose at least 3)</span></legend>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {skillOptions.map((skill) => <label key={skill} className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs font-semibold text-slate-600 transition hover:border-indigo-300 hover:bg-indigo-50 has-[:checked]:border-indigo-400 has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-700"><input type="checkbox" value={skill} className="h-4 w-4 accent-indigo-600" {...register("skills", { validate: (value) => value.length >= 3 || "Please select at least 3 skills" })} /><span>{skill}</span></label>)}
              </div>
              {errors.skills && <p className="text-xs font-semibold text-red-700" role="alert">{errors.skills.message}</p>}
            </fieldset>

            <div className={`flex items-center gap-2 rounded-xl border p-3 ${errors.agreeToTerms ? "border-red-300 bg-red-50" : "border-transparent"}`}>
              <input id="agreeToTerms" type="checkbox" className="h-4 w-4 accent-indigo-600" {...register("agreeToTerms", { required: "You must agree to the terms" })} />
              <label htmlFor="agreeToTerms" className="text-sm font-bold text-slate-700">I agree to the terms and conditions</label>
            </div>
            {errors.agreeToTerms && <p className="-mt-3 text-xs font-semibold text-red-700" role="alert">{errors.agreeToTerms.message}</p>}

            <label className="flex items-center gap-2 rounded-xl p-3 text-sm font-bold text-slate-700"><input type="checkbox" className="h-4 w-4 accent-indigo-600" {...register("notifications")} /> Receive notifications about new opportunities</label>

            <div className="mt-1 flex flex-col-reverse gap-3 sm:flex-row">
              <button type="button" className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-600 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200 disabled:cursor-not-allowed disabled:opacity-60" onClick={handleReset} disabled={isSubmitting}>Reset form</button>
              <button type="submit" className="flex-1 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 font-bold text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200 disabled:cursor-not-allowed disabled:opacity-60" disabled={isSubmitting}>{isSubmitting ? "Submitting…" : "Submit application"}</button>
            </div>
            {submitMessage && <p className="rounded-xl border border-green-200 bg-green-50 p-3 text-center text-sm font-semibold text-green-700" role="status">✓ {submitMessage}</p>}
            <p className="-mt-2 text-center text-sm text-slate-500">Your progress is saved automatically on this device.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Formvalid;
