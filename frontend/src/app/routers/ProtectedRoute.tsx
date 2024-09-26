import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '@/shared/lib/context';

export const ProtectedRoute = () => {
  const authContext = useContext(AuthContext);

  if (!authContext?.isAuth) return <Navigate to="/login" replace />;

  return <Outlet />;
};