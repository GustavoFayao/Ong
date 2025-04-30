// src/components/admin/PrivateRoute.jsx
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../lib/firebase-config';

export const PrivateRoute = ({ children }) => {
  const [user, setUser] = useState(undefined); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  if (user === undefined) {
    return <div className="text-white text-center p-10">Carregando painel...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
