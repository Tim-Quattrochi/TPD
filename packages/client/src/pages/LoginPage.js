import { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import AuthContext from "../hooks/useAuthProvider";
import axios from "../hooks/useAxios";
import useLocalStorage from "../hooks/useLocalStorage";

export default function LoginPage(props) {
  const { setAuth, setIsLoggedIn } = useContext(AuthContext);
  const userRef = useRef({});
  const errRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  //if the users token expires, they will be redirected to
  //the log in page, after log in, they will be directed
  //back to the page they were viewing, if not then take to dashboard.
  const from = location.state?.from?.pathname || "/dashboard";

  const [value, setValue] = useLocalStorage("user", null);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMessage("");
  }, [userName, password]);

  //handle submit from  Dave Gray  Tutorial
  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "/auth/login",
        JSON.stringify({ userName, password }),

        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const auth = {
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        userName: response.data.userName,
        email: response.data.email,
      };
      
      setValue(auth); //this is setting local storage.
      setIsLoggedIn(true);

      console.log(auth)
      console.log(response)
      const token = response?.data?.token;
      // token is the same as accessToken.

      setAuth({
        token,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        userName: response.data.userName,
        email: response.data.email,
      }); //for AuthProvider, sends  access token

      setUserName("");
      setPassword("");
      setSuccess(true);
      setIsLoading(false);

      navigate(from, { replace: true }); //navigate to their last page state if they were logged out and
      //had to log back in
    } catch (err) {
      if (!err?.response) {
        setErrMessage("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMessage("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMessage("Unauthorized");
      } else {
        setErrMessage("Login Failed");
      }
      errRef.current.focus(); // this is use with aria for onscreen  reading
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }
  
  return (
    <>
      {success ? (
        <div className="flex flex-col items-center text-center p-20 bg-cyan-900">
          <div className="bg-white w-fit pl-8 pr-8 pb-5 pt-5">
            <h1 className=" text-red-900 font-bold text-5xl shadow-sm mb-3 border-solid border-2 border-b-red-900 border-t-0 border-l-0 border-r-0">
              You are Logged in!
            </h1>

            <Link to={"/dashboard"}> Go to My Dashboard </Link>
          </div>
        </div>
      ) : (
        <div className="grid place-content-center pl-44 h-screen bg-sky-900 overflow-scroll">
          <div className="bg-slate-800 bg-opacity-80 shadow-md shadow-black rounded px-8 pt-6 pb-8 mb-4 grid place-content-center">
            <h2 className="text-center text-amber-500 underline text-lg font-bold shadow-sm shadow-pink-800  bg-transparent mb-3">
              Sign in Here
            </h2>

            <form
              onSubmit={handleSignIn}
              className="flex flex-col justify-center items-center"
            >
              <label htmlFor="username" className="flex flex-col">
                {" "}
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username..."
                ref={userRef}
                required
                autoComplete="off"
                onChange={(e) => setUserName(e.target.value)}
                // onBlur={() => setUserName(name)}
                className=" bg-white w-8/12 mb-4"
              />
              <label
                htmlFor="password"
                className="flex flex-col items-center"
              >
                {" "}
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                autoComplete="on"
                required
                placeholder="Password..."
                onChange={(e) => setPassword(e.target.value)}
                className=" bg-white w-8/12 mb-4"
              />{" "}
              <button className="shadow-lg shadow-gray-900  bg-amber-500 w-1/2 text-pink-800 rounded-md  font-bold self-center p-2 ">
                Sign-in
              </button>
              <div className="text-amber-500 pt-1 font-bold hover:underline">
                <Link to="/register">Not registered?</Link>
              </div>
            </form>

            <p
              ref={errRef}
              className={`${errMessage ? "visible" : "invisible"} `}
              aria-live="assertive"
            >
              {errMessage}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
