import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/handsWorking.jpg"


export default function HomePage (props) {



    
return (
    <>
    <div className='pl-44 h-screen max-h-screen flex flex-col bg-sky-900 overflow-scroll'>  
     
        <h1 className='text-amber-500 bg-sky-900 font-extrabold p-10 pb-16 text-3xl text-center' > 
            We design with your future in mind!
        </h1> 
         
        
        <div className='flex max-h-screen  max-lg:flex-col'>

            <img src={logo} className="w-auto h-1/2 max-lg:h-1/4 rounded-full ml-5 place-content-center  shadow-amber-500 shadow-lg"/>

            <div className='content-center rounded-2xl mt-0 m-10 h-96 w-auto overflow-y-scroll  text-slate-800 p-8 shadow-lg bg-slate-300 backdrop-opacity-80 border-double border-4 border-amber-500 '> 
               <h3 className='text-center underline text-pink-800 font-semibold'>Why Choose Total Product Design?</h3>
					<p className='p-2'>
						Total Product Design (TPD) is a growing design agency that
						specialized in creating powerful, effective brands and web presences
						for businesses of all sizes.
					</p>
					<p className='p-2'>
						Our team of experienced designers takes the time to understand your
						business, your goals, and your target audience, and we use this
						information to create a unique, tailored design that speaks directly
						to your audience.
					</p>
					<p className='p-2'>
						In addition to our attention to detail and personalized approach,
						TPD is also known for our innovative and cutting-edge designs. We
						are always on the lookout for new trends and techniques, and we are
						not afraid to push the boundaries in order to create something truly
						special and memorable.
					</p>
					<p className='p-2'>
						Overall, if you want a brand and web presence that truly stands out
						and gets results, TPD is the perfect choice. Contact us today to
						learn more about what we can do for your business.
					</p>
               
               <button className='mr-56 p-2 rounded-3xl bg-amber-500 text-pink-800 justify-items-end'><Link to='/register' > SIGN-UP  </Link> </button> 
            
            </div>

        </div>

    </div>
    </>
)}