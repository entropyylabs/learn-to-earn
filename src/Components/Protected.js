import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Protected = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useUserAuth();

  if (!user) {
    navigate("/login");
  }
  return children;
};

export default Protected;
