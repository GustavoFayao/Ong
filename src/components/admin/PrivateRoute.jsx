// src/components/admin/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('admin') === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};
