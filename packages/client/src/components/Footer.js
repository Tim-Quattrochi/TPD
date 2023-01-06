import React, { Component } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import logo from "../images/temp.jpg";

const Footer = () => {
  const { isLoggedIn } = useAuth();

  return (
    <footer className="bg-slate-800 text-red-600 flex flex-col text-center pb-4">
      {/* <h5 className='text-red-500 ' > Some Footer Details here </h5> */}

      <img src={logo} className=" w-1/6 self-center p-5"></img>

      <ul className="content-evenly">
        {isLoggedIn ? (
          ""
        ) : (
          <>
            <Link to="/register">SIGN-UP</Link>
            <Link to="/login">LOG-IN</Link>
          </>
        )}

        <li>~ copyright info ~</li>
      </ul>
    </footer>
  );
};

export default Footer;
