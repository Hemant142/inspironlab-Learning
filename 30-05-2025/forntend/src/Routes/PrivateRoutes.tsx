import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoutes({ children }: { children: ReactNode }) {
  const token = useSelector(
    (state: { auth: { token: string } }) => state.auth.token
  );

  const location = useLocation();

  if (token) {
    return children;
  }
  return <Navigate to={"/login"} state={location.pathname} replace={true} />;
}
