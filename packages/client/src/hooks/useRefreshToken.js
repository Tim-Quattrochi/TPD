import { faCropSimple } from "@fortawesome/free-solid-svg-icons";
import axios from "./useAxios";
import { useAuth } from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/auth/refresh", {
      //send with cookies
      withCredentials: true,
    });
    setAuth((user) => {
      return { user, token: response.data.token };
    });
    return response.data.token;
  };

  return refresh;
};

export default useRefreshToken;
