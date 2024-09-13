import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '@/shared/lib/context';

export const ProtectedRoute = () => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) return <Navigate to="/login" replace />;

  return <Outlet />;
};