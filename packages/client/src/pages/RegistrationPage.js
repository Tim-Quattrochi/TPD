import React from 'react'
import { useState, useEffect } from 'react'
import { Form } from 'react-router-dom'


export default function RegistrationPage (props) {

    
return (
    <>
    <div className='flex flex-col text-center p-20' >   

    <h2 className=' text-red-900 font-bold' > Begin your companies online expansion! </h2>
    
    
    <form className='flex justify-center flex-col' >

        <label className='flex flex-col items-center' >
            Company Name:
            <input type="text" name="companyName" className=' bg-slate-200 w-6/12 mb-3' /> 
        </label>

        <label className='flex flex-col items-center' >
            Username:
            <input type="text" name="userame" className=' bg-slate-200 w-6/12 mb-3' /> 
        </label>

        <label className='flex flex-col items-center' >
            Email:
            <input type="email" name="email" className=' bg-slate-200 w-6/12 mb-3'/> 
        </label>

        <label className='flex flex-col items-center' >
            Password:
            <input type="password" name="password" className=' bg-slate-200 w-6/12 mb-3'/> 
        </label>
        

        <input type="submit" value="Register" className=' bg-red-800 w-2/12 text-gray-200 self-center'/>
        {/* On submit, push  data to back  end as new user and reroute to userdashboard */}
    </form>

    </div>
    </>

)}