import { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import AuthContext from "../hooks/useAuthProvider";
import axios from "../hooks/useAxios";
import useLocalStorage from "../hooks/useLocalStorage";
import { LockClosedIcon } from "@heroicons/react/20/solid";

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
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-sky-900">
              Log in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSignIn}>
            <input
              type="hidden"
              name="remember"
              defaultValue="true"
            />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="userName" className="sr-only">
                  Username
                </label>
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  autoComplete="username"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Username"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/register"
                  className="font-medium text-sky-900 hover:text-indigo-500"
                >
                  Not a member??
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-sky-900 py-2 px-4 text-sm font-medium text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-white"
                    aria-hidden="true"
                  />
                </span>
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
