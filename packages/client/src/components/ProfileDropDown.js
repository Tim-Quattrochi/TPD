import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Logout from "./Logout";

const ProfileDropdown = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        isOpen
          ? "relative h-8 w-8 pb-40 pr-3"
          : "relative h-8 w-8 pr-3"
      }`}
    >
      <CgProfile
        className={`h-8 w-8 rounded-full cursor-pointer`}
        onClick={toggleDropdown}
      />

      {isLoggedIn ? (
        <>
          {isOpen && (
            <ul className="absolute right-0 w-36 px-4 py-2 text-sm font-medium leading-5 text-gray-700 bg-white rounded-md shadow-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
              <li className="right-0 w-auto px-4 py-2 text-sm font-medium leading-5 text-gray-700 bg-white rounded-md shadow-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                <Link to="/dashboard">Dashboard</Link>
              </li>

              <li className="right-0 w-auto px-4 py-2 text-sm font-medium leading-5 text-gray-700 bg-white rounded-md shadow-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                <Link to="/edit-details" onClick={toggleDropdown}>
                  Edit Details
                </Link>
              </li>

              <li className="right-0 w-auto px-4 py-2 text-sm font-medium leading-5 text-gray-700 bg-white rounded-md shadow-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                <Logout />
              </li>
            </ul>
          )}
        </>
      ) : (
        <>
          {isOpen && (
            <ul className="absolute right-0 w-36 px-4 py-2 text-sm font-medium leading-5 text-gray-700 bg-white rounded-md shadow-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
              <li className="right-0 w-auto px-4 py-2 text-sm font-medium leading-5 text-gray-700 bg-white rounded-md shadow-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                <Link to="/register"> Register </Link>
              </li>

              <li className="right-0 w-auto px-4 py-2 text-sm font-medium leading-5 text-gray-700 bg-white rounded-md shadow-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                <Link to="/login"> Sign In </Link>
              </li>
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default ProfileDropdown;
