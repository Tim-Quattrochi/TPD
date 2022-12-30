import { useContext, useDebugValue } from "react";
import AuthContext from "./useAuthProvider";

export const useAuth = () => {
  const { auth, setIsLoggedIn } = useContext(AuthContext);
  useDebugValue(auth, (auth) =>
    auth?.user || auth?.userInfo
      ? setIsLoggedIn("Logged In")
      : setIsLoggedIn("Logged Out")
  );
  return useContext(AuthContext);
};
