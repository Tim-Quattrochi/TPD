import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropDown";
import { useAuth } from "../hooks/useAuth";


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  return (
    <>
      <nav className="absolute p-3 w-40 h-screen flex flex-col flex-wrap pl-3 py-3 bg-slate-800 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">

        <h1 className=" font-semibold text-6xl shadow-md pt-3 pb-3 mb-0"> 
        TPD </h1>
        
            <ul className="pt-1">

              <li>
                <Link to="/"> Home </Link>
              </li>

              <li>
                <Link to="/staff"> About TPD </Link>
              </li>

              <li>
                <Link to="/ideas"> Designs </Link>
              </li>

            </ul>


        <div className="ml-auto mt-auto">
          <ProfileDropdown  isLoggedIn={isLoggedIn}/>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

