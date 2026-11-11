// src/exercises/exercise26.jsx
```jsx
import React, { createContext, useContext, useState } from 'react';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useNavigate,
} from 'react-router-dom';

const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

const Exercise26Layout = () => {
  return (
    <div>
      <h1>My App</h1>
      <Outlet />
    </div>
  );
};

const Login = () => {
  const { isAuthenticated, login } = useContext(AuthContext);
  const navigate = useNavigate();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleLogin = () => {
    login();
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the protected dashboard!</p>
    </div>
  );
};

const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Sorry, this page does not exist.</p>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Exercise26Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      {
        path: 'dashboard',
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
        ],
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);

export default function Exercise26() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
```;
