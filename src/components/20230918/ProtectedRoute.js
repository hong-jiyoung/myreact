import { useContext } from "react";
import { Login } from "./Login";
import { GameContext } from "./GameShop";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const { user, setUser } = useContext(GameContext);

  if (user.name && user.email) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
