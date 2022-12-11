import React from 'react'
import { useState, useEffect } from 'react'
import { Form } from 'react-router-dom'


export default function HomePage(props) {

    
return (
    <>
    <div>   


    Begin your companies online expansion!
    
    <form>
        <label>
            Company Name:
            <input type="text" name="companyName" /> 
        </label>

        <label>
            Username:
            <input type="text" name="userame" /> 
        </label>

        <label>
            Email:
            <input type="email" name="email" /> 
        </label>

        <label>
            Password:
            <input type="password" name="password" /> 
        </label>
        
        <input type="submit" value="Register" />
        {/* On submit, push  data to back  end as new user and reroute to userdashboard */}
    </form>

    </div>
    </>

)}