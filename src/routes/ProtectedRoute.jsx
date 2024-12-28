import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token1 = localStorage.getItem("access_token");
  const token2 = localStorage.getItem("get_token");

  if (!token1 && !token2) {
    return <Navigate to="/login" />;
  }

  return <>{children || <Outlet />}</>;
};

export default ProtectedRoute;
