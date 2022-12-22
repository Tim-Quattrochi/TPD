import { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../hooks/useAuth';
import axios from '../hooks/axios';

export default function LoginPage(props) {
  const { setAuth } = useContext(AuthContext);

  const userRef = useRef();
  const errRef = useRef();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMessage('');
  }, [userName, password]);
  console.log(userName, password);
  //handle submit from  Dave Gray  Tutorial
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        '/auth/login',
        JSON.stringify({ userName, password }),

        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));

      const token = response?.data?.token; // token is the same as accessToken.
      // const roles = response?.data?.roles
      //Authcontroller in  controllers  to define roles minute 28:00
      setAuth({ userName, password, token }); // wemay not have roles implemeneted yet and it ay  throw errors

      setUserName('');
      setPassword('');
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMessage('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMessage('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMessage('Unauthorized');
      } else {
        setErrMessage('Login Failed');
      }
      errRef.current.focus(); // this is use with aria for onscreen  reading
    }
  };

  return (
    <>
      {success ? (
        <div className="flex flex-col items-center text-center p-20 bg-cyan-900">
          <div className="bg-white w-fit pl-8 pr-8 pb-5 pt-5">
            <h1 className=" text-red-900 font-bold text-5xl shadow-sm mb-3 border-solid border-2 border-b-red-900 border-t-0 border-l-0 border-r-0">
              You are Logged in!
            </h1>

            <Link to={'/dashboard'}> Go to My Dashboard </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center text-center p-20 bg-cyan-900">
          <div className="bg-white w-fit pl-8 pr-8 pb-5 pt-5">
            <h2 className=" text-red-900 font-bold mb-3">
              Sign in Here
            </h2>

            <form onSubmit={handleSignIn} className>
              <label
                htmlFor="username"
                className="flex flex-col items-center"
              >
                {' '}
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username..."
                ref={userRef}
                value={userName}
                required
                autoComplete="off"
                onChange={(e) => setUserName(e.target.value)}
                className=" bg-slate-200 w-8/12 mb-4"
              />
              <label
                htmlFor="password"
                className="flex flex-col items-center"
              >
                {' '}
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                required
                placeholder="Password..."
                onChange={(e) => setPassword(e.target.value)}
                className=" bg-slate-200 w-8/12 mb-4"
              />{' '}
              <br />
              <button className=" bg-red-800 w-6/12 text-white self-center">
                Sign-in
              </button>
            </form>

            <p
              ref={errRef}
              className={`${errMessage ? 'visible' : 'invisible'} `}
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
