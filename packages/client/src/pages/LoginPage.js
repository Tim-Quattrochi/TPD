import React from 'react'
import { useState, useEffect } from 'react'


export default function LoginPage (props) {

    
return (

    <div>
     
    Sign in Here 

    <form>
        <label>
            Username:
            <input type="text" name="userame" /> 
        </label>

        <label>
            Password:
            <input type="password" name="password" /> 
        </label>
        
        <input type="submit" value="Sign In" />
    </form>
    
    </div>


)}