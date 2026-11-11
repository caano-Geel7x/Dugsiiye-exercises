import { useState } from "react";

const LogInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setisLoggedIn] = useState(false);

const handleLogin = (event)=> {
    event.preventDefault();
    if(username && password){
        setisLoggedIn(true)
    }
};
const handleLogout = ()=> {
    setPassword('');
    setUsername('');
    setisLoggedIn(false)
};
 
if(isLoggedIn){
    return(
    <div className="mx-auto my-8 max-w-xl overflow-hidden rounded-3xl border border-emerald-400/20 bg-slate-900 p-8 text-center text-white shadow-2xl shadow-emerald-950/30 sm:p-12">
    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-400/15 text-3xl text-emerald-300">✓</div>
    <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Access granted</p>
    <h2 className="mb-3 text-3xl font-bold tracking-tight">Welcome, {username}!</h2>
    <p className="mx-auto mb-8 max-w-sm text-sm leading-6 text-slate-400">You are signed in and ready to continue your work.</p>
    <button className="rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 font-bold text-slate-200 transition hover:border-slate-500 hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-700" onClick={handleLogout}>Sign out</button>
        </div>
    );
}
        


  return (
    <div className="mx-auto my-8 max-w-xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 text-white shadow-2xl shadow-black/30">
      <div className="border-b border-slate-800 bg-gradient-to-br from-indigo-500/20 via-slate-950 to-slate-950 px-6 py-8 sm:px-10">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/20 text-xl text-indigo-300">↗</div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">Private workspace</p>
        <h2 className="text-3xl font-bold tracking-tight text-white">Welcome back</h2>
        <p className="mt-2 text-sm text-slate-400">Sign in to continue to your dashboard.</p>
      </div>

    <form onSubmit={handleLogin} className="grid gap-5 px-6 py-8 sm:px-10">
      <div className="grid gap-2">
        <label htmlFor="login-username" className="text-sm font-semibold text-slate-300">
          Username
        </label>
          <input
            id="login-username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            autoComplete="username"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-600 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/15"
            required
          />
      </div>

      <div className="grid gap-2">
        <label htmlFor="login-password" className="text-sm font-semibold text-slate-300">
          Password
        </label>
          <input
            id="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            autoComplete="current-password"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-600 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/15"
            required
          />
      </div>

      <button type="submit" className="mt-2 w-full rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-3.5 font-bold text-white shadow-lg shadow-indigo-950/40 transition hover:-translate-y-0.5 hover:from-indigo-400 hover:to-violet-500 focus:outline-none focus:ring-4 focus:ring-indigo-400/25">Sign in</button>
      <p className="text-center text-xs text-slate-500">Protected workspace access</p>
   </form>
   </div>
  );
};

export default LogInForm;
