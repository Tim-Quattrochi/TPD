import React from 'react'
import { useState, useEffect, useContext } from 'react'

import AuthContext from '../hooks/useAuth'

import axios from '../hooks/axios'
const LOGINPATH = './login'


export default function LoginPage (props) {
    const { setAuth } = useContext(AuthContext)
    /* handle submit from  Dave Gray  Tutorial 
    const handleSubmit = async (e) =>{
        e.preventDefault() 



        try {
            const response = await axios.post(LOGINPATH, 
                    JSON.stringify(user, password), 
                {
                    headers: { 'Content-Type' : 'application /json'},
                    withCredentials: true
                }
            )
            console.log(JSON.stringify(response?.data))

            const accesstoken = response?.data?.accessToken
            const roles = response?.data?.roles
            setAuth({ user, password, roles, accessToken }) // wemay not have roles implemeneted yet and it ay  throw errors

            setUser('')
            setPassword('')
            setSuccess(true)

        } catch (err) {
            if( !err?.rsponse) {
                setErrMsg('No Server Response')

            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password')

            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized')

            } else {
                setErrMsg('Login Failed')

            }
            errRef.current.focus() // this is use with aria for onscreen  reading
        }
    }
    
    */




return (

    <div className='flex flex-col text-center p-20'>
     
    <h2 className=' text-red-900 font-bold' > 
        Sign in Here 
    </h2>

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