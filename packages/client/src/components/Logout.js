import React, { useState, useContext } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import AuthContext from "../hooks/useAuthProvider";
import LoadingSpinner from "./LoadingSpinner";

function Logout() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { setAuth, setIsLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const axios = useAxiosPrivate();

  const handleLogout = async () => {
    localStorage.clear();
    setIsLoggingOut(true);
    try {
      await axios.post("/auth/logout", {
        withCredentials: true,
      });
      setIsLoggedIn(false);
      setAuth({});
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoggingOut(false);

      navigate("/");
    }
  };

  if (isLoggingOut) {
    return <LoadingSpinner />;
  }

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
