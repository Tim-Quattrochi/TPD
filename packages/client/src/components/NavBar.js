import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropDown";
import { useAuth } from "../hooks/useAuth";

import tempImg from "../images/temp.jpg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  return (
    <>
      <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-slate-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-3"
        >
          MENU
          {menuOpen ? (
            <ul className="text-left">
              <li>
                {" "}
                <Link to="/"> Home </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/staff"> About TPD </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/ideas"> Designs </Link>{" "}
              </li>
              {/* If not signed in  show below, otherwise, do not show the signiup and login */}
              <li>
                {isLoggedIn ? "" : <Link to="/login"> Login </Link>}
              </li>
              <li>
                {" "}
                {isLoggedIn ? (
                  ""
                ) : (
                  <Link to="/login"> Register </Link>
                )}
              </li>
              <li>
                {isLoggedIn ? (
                  <Link to="/projects"> Create a Project </Link>
                ) : (
                  ""()
                )}
              </li>
              <li>
                {" "}
                <Link to="/dashboard">Dashboard </Link>{" "}
              </li>
            </ul>
          ) : (
            ""
          )}
        </button>
        <div className="ml-auto">
          <ProfileDropdown />
        </div>
      </nav>
    </>
  );
};

export default NavBar;

{
  /* No user signed in show this
        
            <span> <Link to='/' > Home  </Link> </span>
            <span> <Link to='/staff' > About TPD  </Link> </span>
            <span> <Link to='/ideas' > Designs  </Link> </span>
            <span> <Link to='/login' > Login  </Link> </span>
            <span> <Link to='/register' > SIGN-UP  </Link> </span>


            maybe add image to link to login  with some default image ? 
        
         */
}

{
  /* user signed in? 
        
        
            <span> <Link to='/' > Home  </Link> </span>
            <span> <Link to='/ideas' > Designs  </Link> </span>
            <span> <Link to='/dashboard' > Profile Page  </Link> </span>
            <span> <Link to='/login' > Login  </Link> </span>

            Maybe add a drop  down  with links to  profile page and sign out      
        
        */
}
