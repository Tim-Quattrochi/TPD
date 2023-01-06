import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {CgProfile} from 'react-icons/cg'


const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-8 w-8">
      <CgProfile
        className="h-8 w-8 rounded-full cursor-pointer"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <Link to="/edit-details" className="absolute right-0 w-48 px-4 py-2 text-sm font-medium leading-5 text-gray-700 bg-white rounded-md shadow-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
        onClick={toggleDropdown}
        >
        Edit Details
      </Link>
      )}
    </div>
  );
};

export default ProfileDropdown;
