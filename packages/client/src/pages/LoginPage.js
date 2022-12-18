import React from 'react'
import { useState, useEffect } from 'react'


export default function LoginPage (props) {

    
return (

    <div className='flex flex-col text-center p-20'>
     
     <h2 className=' text-red-900 font-bold' > Sign in Here </h2>

    <form>

        <label className='flex flex-col items-center' >
            Username:
            <input type="text" name="userame"  className=' bg-slate-200 w-6/12 mb-3' /> 
        </label>
       

        <label className='flex flex-col items-center' >
            Password:
            <input type="password" name="password" className=' bg-slate-200 w-6/12 mb-3' /> 
        </label>
        
        <input type="submit" value="Sign In" className=' bg-red-800 w-2/12 text-gray-200 self-center' />


    </form>
    
    </div>


)}