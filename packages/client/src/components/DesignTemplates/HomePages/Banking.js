import {React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstitution, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";


import bankComputer from "../templateAssets/PointeBank/bankComputer.jpg"
import bankBuilding from "../templateAssets/PointeBank/bankBuilding.jpg"
import bankGrowth from "../templateAssets/PointeBank/bankGrowth.jpg"
import bankVault from "../templateAssets/PointeBank/bankVault.jpg"

export default function Banking () {
  const [showMenu, setShowMenu] = useState(false)

  console.log("Links to page")

  return (
    <div className="w-screen h-screen visible">
      
      <div className="fixed flex justify-between z-40 pt-3 w-screen h-44 bg-gradient-to-r from-teal-900 to-teal-600"> 

          <h1 className="text-slate-100 text-5xl grid place-items-center font-extrabold ml-44 w-40 h-36 bg-gradient-to-br from-neutral-900 to-neutral-300 border-solid border-2 border-teal-900 shadow-md shadow-neutral-900"> 
            Pointe
            <br/>
            Bank
          </h1>

          <div className="z-50 h-10 w-5/6 mt-28 mr-10 pl-5 flex justify-end items-center bg-gradient-to-br from-teal-800 to-teal-900 ">

            <Link to=""  className="z-50 pr-8 pl-8  text-white font-semibold  shadow-md shadow-sky-900  pb-30 w-10">
              About
            </Link>

            <Link to="" className="z-50 pl-8 pr-16 text-white font-semibold  shadow-md shadow-sky-900  pb-30 w-10">  
              Careers
            </Link>

            <button onClick={() => showMenu === false ? setShowMenu(true) : setShowMenu(false)} 
                    className="z-50 text-white shadow-md shadow-sky-900 pb-30 w-10">     
                <FontAwesomeIcon icon={faInstitution} className="pr-2" />
                {showMenu === true ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}
            </button>

          </div>
      </div>

      {showMenu ? (

        <div className={`fixed grid place-self-end ml-56 mt-48 z-50 w-5/6 h-auto bg-white shadow-lg shadow-neutral-800`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white text-gray-600">
              <h6 className="block px-6 py-2 border-b border-gray-600 w-full "> Personal </h6>
              <Link to="" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">
              Checking & Savings
              </Link>

              <Link to="" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">
              Credit Cards
              </Link>

              <Link to="" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">
              Home Loans
              </Link>

              <Link to="" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">
              Auto Loans
              </Link>
              
              <Link to="" className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">
              Investments
              </Link>

              <Link to="" className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">
              Education and Goals
              </Link>

            </div>

            <div className="bg-white text-gray-600">
            <h6 className="block px-6 py-2 border-b border-gray-600 w-full "> Business </h6>
              <Link to="" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">
              Banking Solutions
              </Link>

              <Link to="" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">
              Business Credit Cards
              </Link>

              <Link to="" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">
              Product Support
              </Link>

              <Link to="" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">
              Resource Center
              </Link>
              
              <Link to="" className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">
              Accepting Payment Types
              </Link>

              
            </div>

            <div className="bg-white text-gray-600">
            <h6 className="block px-6 py-2 border-b border-gray-600 w-full "> Other </h6>
            <Link to="" className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">
              Make a Payment
            </Link>

            <Link to="" className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">
              Accepting Payment Types
            </Link>
            
            <Link to="" className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">
              Locations
            </Link>

            <Link to="" className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">
              Set a Meeting
            </Link>
            </div>

          </div>
        </div>

        ):(<div></div>)
      }

      <img src={bankBuilding} className="fixed w-screen h-screen z-0"></img>
      
      <div className="absolute flex flex-col items-center mt-48"> 

        <div className="flex justify-evenly text-center ml-40 mt-36 z-30 m-16 bg-opacity-80 bg-teal-100 shadow-lg shadow-neutral-800 w-4/6 h-72"> 

          <img src={bankGrowth} className="h-auto  w-2/4 shadow-lg  shadow-neutral-600"></img>

          <span className="w-2/6 mt-16 text-2xl font-semibold">
            Manage your budget and build your savings plan  with the help of our financial specialists. 
          </span>
        
        </div>

        <div className="text-3xl text-center ml-24 font-semibold border-4 border-double border-teal-900 text-red-700 flex justify-evenly place-items-center z-30 mt-32 mb-10 bg-teal-500 bg-opacity-80 shadow-lg shadow-neutral-800 w-9/12 h-72"> 
        
          <div className="z-30 w-40"> Keep your future secure. </div>

          <img src={bankVault} className="z-40 w-72 shadow-2xl shadow-neutral-900"></img>

          <div className="z-30 w-40"> Safegaurd your finances from theft. </div>

        </div>

        <div className="text-slate-700 flex justify-evenly text-center ml-40 mt-36 z-30 m-16 bg-opacity-80 bg-teal-100 shadow-lg shadow-neutral-800 w-4/6 h-72"> 


          <span className="w-2/6 mt-16 text-2xl font-semibold">
            Easy online access to your accounts, credit score, and 24 hour fraud assistance.
          </span>

          <img src={bankComputer} className="h-auto  w-2/4 shadow-lg  shadow-neutral-600"></img>



        </div>


      </div>

    </div>
  );
}