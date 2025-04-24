import { Navigate } from "react-router-dom";

const ProtectAdmin = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectAdmin;
