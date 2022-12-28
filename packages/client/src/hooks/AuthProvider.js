import { createContext, useEffect, useState} from 'react'

const AuthContext = createContext({})

export const AuthProvider = ( { children } ) => {
    const [auth, setAuth] = useState({})
    console.log(auth)

    useEffect(() => {
        const authValue = JSON.parse(localStorage.getItem('user'))
        
        if(authValue){
            setAuth(authValue)
        }

    },[] )

    return (
        <AuthContext.Provider value={ { auth, setAuth } }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext; 