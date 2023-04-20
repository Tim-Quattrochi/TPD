import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Logout from "./Logout";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.classList.contains("hamburger-menu")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick); //clean up
  }, [menuOpen]);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-800 p-6 h-full">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <h1 className="font-semibold text-xl">TPD</h1>
      </div>
      <div className="block lg:hidden">
        <button
          className="hamburger-menu  flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="hamburger-menu fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full flex items-end text-center flex-col flex-grow lg:flex-row lg:items-center justify-between lg:w-auto lg:inline-block ${
          !menuOpen ? "hidden" : ""
        }`}
      >
        <Link
          to="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Home
        </Link>
        <Link
          to="/staff"
          className="block mt-4 ml- lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-2"
        >
          About TPD
        </Link>
        <Link
          to="/ideas"
          className="block mt-4 ml-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        >
          Designs
        </Link>
        {"   "}
        {isLoggedIn ? (
          <>
            <Link
              to="/dashboard"
              className="block mt-4 ml-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Dashboard
            </Link>

            <Logout />
          </>
        ) : (
          <Link
            to="/login"
            className="block mt-4 ml-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Log in
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
