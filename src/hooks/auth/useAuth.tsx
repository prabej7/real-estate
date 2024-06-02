import { useState } from "react";
import User from "../../types/users";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setAuthentication] = useState<boolean>(false);

  const navigate_to = (user: User) => {
    if (user.role == "admin") {
      navigate("/admin");
    }
    if (user.role == "user") {
      navigate("/account");
    }
  };

  return { isAuthenticated, navigate_to };
};

export default useAuth;
