import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/handsWorking.jpg"


export default function HomePage (props) {



    
return (
    <>
    <div className='pl-44  h-screen max-h-screen flex flex-col '>  
     
        <h1 className='text-red-900 font-semibold p-10 pb-16 text-3xl text-center' > 
        We design with your future in mind!
       </h1> 
         
        
        <div className='flex justify-between pb-20'>
        <img src={logo} className="w-6/12 rounded-2xl ml-5 align place-content-center"/>

      
        <button className=' mr-56'><Link to='/register' > SIGN-UP  </Link> </button> 
        </div>

           

        <div className=' text-center ml-20 mr-20'> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi etiam dignissim diam quis enim lobortis. Id ornare arcu odio ut sem. Leo vel orci porta non pulvinar neque laoreet. Nisi scelerisque eu ultrices vitae. Massa vitae tortor condimentum lacinia. Nunc congue nisi vitae suscipit tellus mauris a diam. Vel quam elementum pulvinar etiam non. Urna duis convallis convallis tellus id interdum. Dapibus ultrices in iaculis nunc sed augue.
        </div>
        
       
    </div>
    </>
)}
