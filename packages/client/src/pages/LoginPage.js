import React from 'react'
import { useState, useEffect, useContext, useRef } from 'react'

import AuthContext from '../hooks/useAuth'
import axios from '../hooks/axios'

export default function LoginPage (props) {
    const { setAuth } = useContext(AuthContext)

    const userRef = useRef();
    const errRef = useRef();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errMessage, setErrMessage] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMessage('');
    }, [userName, password])


    //handle submit from  Dave Gray  Tutorial 
    const handleSignIn = async (e) =>{
        e.preventDefault() 

        try {
            const response = await axios.post('/users/login', 
                    JSON.stringify(userName, password), 
                {
                    headers: { 'Content-Type' : 'application /json'},
                    withCredentials: true
                }
            )
            console.log(JSON.stringify(response?.data))

            const accessToken = response?.data?.accessToken
            // const roles = response?.data?.roles
            //Authcontroller in  controllers  to define roles minute 28:00
            setAuth({ userName, password, accessToken }) // wemay not have roles implemeneted yet and it ay  throw errors

            setUserName('')
            setPassword('')
            setSuccess(true)

        } catch (err) {
            if( !err?.rsponse) {
                setErrMessage('No Server Response')

            } else if (err.response?.status === 400) {
                setErrMessage('Missing Username or Password')

            } else if (err.response?.status === 401) {
                setErrMessage('Unauthorized')

            } else {
                setErrMessage('Login Failed')

            }
            errRef.current.focus() // this is use with aria for onscreen  reading
        }
    }




return (

    <div className='flex flex-col text-center p-20'>
     
        <h2 className=' text-red-900 font-bold' > 
            Sign in Here 
        </h2>
        
        <form onSubmit={handleSignIn} >
            <label htmlFor='username' className='flex flex-col items-center' > </label>
            <input  type="text" 
                    name="userame"
                    id='username'
                    placeholder='Username...'
                    ref={userRef}
                    value={userName}
                    required
                    autoComplete="off"
                    onChange={(e) => setUserName(e.target.value)}
                    className=' bg-slate-200 w-6/12 mb-3' /> 


            <label htmlFor='password' className='flex flex-col items-center' > </label>
            <input  type="password" 
                    name="password" 
                    id='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    className=' bg-slate-200 w-6/12 mb-3' /> 

            <button className=' bg-red-800 w-2/12 text-gray-200 self-center' > 
                Sign-in
            </button>
        </form>

        <p  ref={errRef} 
            className={`${errMessage ? "visible" : "invisible"} `} 
            aria-live="assertive" >
                {errMessage}
        </p>
    
    </div>


)}

