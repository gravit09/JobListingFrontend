import axios from "axios";
import { useAuth } from "./AuthProvider";

async function LoginHandler(props) {
  const { login } = useAuth();
  try {
    const res = await axios.post(
      "http://localhost:3000/api/user/login",
      props.loginDetails
    );
    console.log(res);

    if (res.data.success) {
      login(res.data.token);
      console.log("Response:", res);
    }
    return res;
  } catch (err) {
    console.error("Error in LoginHandler:", err);
    throw err;
  }
}

export { LoginHandler };
