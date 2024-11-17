import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} />;
  }
  return children ? children : <Outlet />;
};
export default ProtectedRoute;
