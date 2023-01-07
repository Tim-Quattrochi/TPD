import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/handsWorking.jpg"


export default function HomePage (props) {



    
return (
    <>
    <div className='pl-44  h-screen max-h-screen flex flex-col bg-sky-900'>  
     
        <h1 className='text-amber-500 font-extrabold p-10 pb-16 text-3xl text-center' > 
            We design with your future in mind!
       </h1> 
         
        
        <div className='flex  pb-20'>

            <img src={logo} className=" w-6/12 rounded-full ml-5 align place-content-center shadow-amber-500 shadow-lg"/>

            <div className='content-center rounded-2xl ml-20 mr-20 text-slate-800 p-16 shadow-lg bg-slate-300 backdrop-opacity-80 '> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi etiam dignissim diam quis enim lobortis. Id ornare arcu odio ut sem. Leo vel orci porta non pulvinar neque laoreet. Nisi scelerisque eu ultrices vitae. Massa vitae tortor condimentum lacinia. Nunc congue nisi vitae suscipit tellus mauris a diam. Vel quam elementum pulvinar etiam non. Urna duis convallis convallis tellus id interdum. Dapibus ultrices in iaculis nunc sed augue.
                <button className='mr-56 p-2 rounded-3xl bg-amber-500 text-pink-800 justify-items-end'><Link to='/register' > SIGN-UP  </Link> </button> 
            </div>

        </div>

    </div>
    </>
)}
