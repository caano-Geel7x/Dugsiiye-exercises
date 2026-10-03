import { useParams } from 'react-router-dom';

export function Profile() {
  const { username } = useParams();

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800">👤 Profile Page</h2>
      <p className="mt-2 text-slate-600">
        Welcome back, <span className="font-semibold text-indigo-600">{username}</span>!
      </p>
    </div>
  );
}