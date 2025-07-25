import Signup from "../../../components/signup/Signup";
import { useLocation } from "react-router-dom";

const SignUpPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name") || "";

  return (
    <div>
      <Signup initialName={name} />
    </div>
  )
}

export default SignUpPage