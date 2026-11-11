import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
  NavLink,
  useNavigate,
  useLocation,
  useParams,
  Navigate,
  useRouteError,
} from 'react-router-dom';

const initialPosts = [
  { id: 1, title: 'Learn React', content: 'React helps you build user interfaces.' },
  { id: 2, title: 'JavaScript Basics', content: 'JavaScript is used to make web pages interactive.' },
  { id: 3, title: 'React Router', content: 'React Router helps you create different pages.' }
];

let nextId = 4;

const App = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const addPost = ({ title, content }) => {
    setPosts((currentPosts) => [
      ...currentPosts,
      { id: nextId++, title, content }
    ]);
  };

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AppState.Provider value={{ posts, addPost, isAuthenticated, login, logout }}>
      <div className="min-h-screen bg-gray-100 px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-3xl">
        <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold text-gray-900">React Blog</h1>
          <nav className="flex flex-wrap items-center gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`
              }
            >
              Home
            </NavLink>
            {isAuthenticated ? (
              <>
                <NavLink
                  to="/create"
                  className={({ isActive }) =>
                    `rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`
                  }
                >
                  Create Post
                </NavLink>
                <button
                  onClick={logout}
                  className="rounded-md bg-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`
                }
              >
                Login
              </NavLink>
            )}
          </nav>
        </header>
        <main className="rounded-xl bg-white p-5 shadow-sm sm:p-8">
          <Outlet />
        </main>
        </div>
      </div>
    </AppState.Provider>
  );
};

const AppState = React.createContext(null);

const Home = () => {
  const { posts } = React.useContext(AppState);
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get('search') || '';

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchValue = formData.get('search');
    navigate(`/?search=${encodeURIComponent(searchValue)}`);
  };

  return (
    <div>
      <h2 className="mb-5 text-2xl font-semibold text-gray-900">Blog Posts</h2>
      <form onSubmit={handleSearch} className="mb-6 flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          name="search"
          placeholder="Search posts"
          defaultValue={searchTerm}
          className="min-w-0 flex-1 rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <ul className="divide-y divide-gray-200">
        {filteredPosts.map((post) => (
          <li key={post.id} className="py-4 first:pt-0 last:pb-0">
            <Link
              to={`/posts/${post.id}`}
              className="font-medium text-blue-700 hover:text-blue-900 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CreatePost = () => {
  const { addPost } = React.useContext(AppState);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content });
    navigate('/');
  };

  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">Create a New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label className="block font-medium text-gray-700">
            Title:{' '}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-2 font-normal text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </label>
        </div>

        <div className="space-y-2">
          <label className="block font-medium text-gray-700">
            Content:{' '}
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows="5"
              cols="30"
              className="mt-2 block w-full resize-y rounded-md border border-gray-300 px-4 py-2 font-normal text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </label>
        </div>

        <button
          type="submit"
          className="rounded-md bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

const Login = () => {
  const { login } = React.useContext(AppState);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    login();
    const from = location.state?.from?.pathname || '/';
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h2 className="mb-3 text-2xl font-semibold text-gray-900">Login</h2>
      <p className="mb-5 text-gray-600">You must log in to access the Create Post page.</p>
      <button
        onClick={handleLogin}
        className="rounded-md bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
      >
        Log In
      </button>
    </div>
  );
};

const PostDetail = () => {
  const { posts } = React.useContext(AppState);
  const { postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const currentId = parseInt(postId);
  const post = posts.find((p) => p.id === currentId);

  if (!post) {
    return <p className="text-gray-600">Post not found.</p>;
  }

  const handleNavigation = (direction) => {
    const newId = direction === 'next' ? currentId + 1 : currentId - 1;
    const newPost = posts.find((p) => p.id === newId);

    if (newPost) {
      navigate(`/posts/${newId}`, {
        state: { fromPostId: currentId }
      });
    }
  };

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-gray-900">{post.title}</h2>
      <p className="mb-6 whitespace-pre-wrap leading-7 text-gray-700">{post.content}</p>

      <div className="flex gap-3">
        {currentId > 1 && (
          <button
            onClick={() => handleNavigation('prev')}
            className="rounded-md bg-gray-700 px-5 py-2 font-medium text-white hover:bg-gray-800"
          >
            Previous
          </button>
        )}

        {currentId < posts.length && (
          <button
            onClick={() => handleNavigation('next')}
            className="rounded-md bg-gray-700 px-5 py-2 font-medium text-white hover:bg-gray-800"
          >
            Next
          </button>
        )}
      </div>

      {location.state && (
        <p className="mt-5 text-sm text-gray-500">You navigated here from post ID: {location.state.fromPostId}</p>
      )}
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = React.useContext(AppState);
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};

const NotFound = () => {
  const error = useRouteError();

  return (
    <div className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-3 text-2xl font-semibold text-gray-900">Error</h2>
      <p className="mb-5 text-gray-600">{error?.statusText || error?.message || 'Page not found'}</p>
      <Link to="/" className="font-medium text-blue-700 hover:underline">Go back to Home</Link>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'posts/:postId',
        element: <PostDetail />
      },
      {
        path: 'create',
        element: (
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        )
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  }
]);

export default function Exercise26() {
  return <RouterProvider router={router} />;
}
