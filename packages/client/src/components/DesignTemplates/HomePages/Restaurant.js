import React from "react";
import { Link } from "react-router-dom";
import pizza1 from "../templateAssets/tonysPizza/pizza1.jpg"
import pizza2 from "../templateAssets/tonysPizza/pizza2.jpg"
import pizza3 from "../templateAssets/tonysPizza/pizza3.jpg"


export default function Restaurant () {


  return (
    

      <div className="bg-black w-screen h-screen font-sans">
        
        <div className="h-52 bg-red-700 shadow-lg shadow-amber-600 grid place-content-center border-4 border-solid border-amber-900"> 

          <h1 className="text-white text-7xl font-extrabold"> Tony's Pizzeria </h1>

          <div className="flex w-3/6 justify-evenly ml-60 mt-5 text-white">

            <Link className="pl-10"> Menu </Link> 

            <Link className="pl-10"> About </Link>

            <Link className="pl-10"> Contact </Link>
          
          </div>
        
        </div>

        <div className="grid place-items-center"> 

        <h3 className="text-center text-white font-bold text-5xl mt-24 ml-32 border-b-4 border-double border-white pb-5"> Voted #1 Pizza in LA 2010! </h3>
        
        

        <div className="flex justify-center ml-32 mt-5"> 

<img src={pizza1} className="w-3/12 rounded-t-full shadow-lg shadow-amber-600 m-8 border-2 border-solid border-amber-900"></img>
<img src={pizza3} className="w-4/12 rounded-t-full shadow-lg shadow-amber-600 m-8 border-2 border-solid border-amber-900"></img>
<img src={pizza2} className="w-3/12 rounded-t-full shadow-lg shadow-amber-600 m-8 border-2 border-solid border-amber-900"></img>


</div>
        

        <button className=" ml-32 text-white font-bold text-3xl bg-red-700 w-1/4 rounded-full shadow-sm shadow-white"> ORDER NOW </button>
        
        </div>
        

      </div>

    
  );
}