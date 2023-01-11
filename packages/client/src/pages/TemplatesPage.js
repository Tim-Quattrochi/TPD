import React from 'react'
import designSchemes from '../images/designObj'
import Templates from '../components/DesignTemplates/Templates'
import { Link } from 'react-router-dom'



export default function TemplatesPage (props) {

    console.log(Templates)
return (

<>
        <div className='h-screen max-h-screen flex flex-col bg-sky-900 overflow-scroll'> 

                <h2 className='text-amber-500 bg-sky-900 font-extrabold p-10 pb-16 text-3xl text-center' > 
                        Inspiration for Your Dream
                </h2>
        
                <div className="pl-44 h-screen w-full flex flex-col">  

                        <div id='templates' className='items-center flex h-80 w-auto overflow-x-auto  text-slate-800 '> 
                                {Templates.map( item => { return <Link to={item.routeLink} className="flex flex-col place-items-center pl-6"> <span className='text-white shadow-lg shadow-slate-900'> {item.name} </span> <img src={item.image} className="ml-20 mr-20 h-60 w-auto backdrop-opacity-80 shadow-lg shadow-slate-900 border-2 border-double border-amber-500" ></img>  </Link>  })} 
                        </div>
                        
                        <div id='logos' className='mt-5 items-center flex h-80 w-auto overflow-x-auto  text-slate-800 '> 
                                {designSchemes.logos.map( item =>  <img src={item.picture}  className="ml-20 mr-20 h-60 w-auto backdrop-opacity-80 shadow-lg shadow-slate-900 border-2 border-double border-amber-500"  ></img>  )}
                        </div>
                                
                </div>
        </div>
</>

)}
