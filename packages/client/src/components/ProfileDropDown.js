import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {CgProfile} from 'react-icons/cg'


const ProfileDropdown = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${isOpen ? 'relative h-8 w-8 pb-56 pr-3':'relative h-8 w-8 pr-3'}`}>
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
                    <Link to="/projects" > Create a Project </Link>
                  </li>

                  <li className="right-0 w-auto px-4 py-2 text-sm font-medium leading-5 text-gray-700 bg-white rounded-md shadow-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                    <Link to="/edit-details" 
                    onClick={toggleDropdown}
                    >
                    Edit Details
                    </Link>
                  </li>

                  <li className="right-0 w-auto px-4 py-2 text-sm font-medium leading-5 text-gray-700 bg-white rounded-md shadow-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                    Signout 
                  </li>

              </ul>
              )}
              </>
            ):(
              <ul className="absolute right-0 w-48 px-4 py-2 text-sm font-medium leading-5 text-gray-700 bg-white rounded-md shadow-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                 
                 <li className="right-0 w-48 px-4 py-2 text-sm font-medium leading-5 text-gray-700 bg-white rounded-md shadow-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                    <Link to="/login"> Register </Link>
                 </li>

                 <li className="right-0 w-48 px-4 py-2 text-sm font-medium leading-5 text-gray-700 bg-white rounded-md shadow-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                    <Link to="/login"> SignIn </Link>
                 </li>
             
             </ul>
            )}
    </div>
  );
};

export default ProfileDropdown;
