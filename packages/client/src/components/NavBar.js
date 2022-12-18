import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import tempImg from '../images/temp.jpg'


const NavBar = () => {

const [menuOpen, setMenuOpen] = useState(false)
const [userOpen, setUserOpen] = useState(false)


    return (
    
        <>       
        <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-slate-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light"
        > 

       
            <button onClick={() => setMenuOpen(!menuOpen)} className='ml-3' > 
                MENU 
                {menuOpen ? 
                    <ul className='text-left'>
                        <li> <Link to='/' > Home  </Link> </li>
                        <li> <Link to='/staff' > About TPD  </Link> </li>
                        <li> <Link to='/ideas' > Designs  </Link> </li>
                        {/* If not signed in  show below, otherwise, do not show the signiup and login */}
                        <li> <Link to='/login' > Login  </Link> </li>
                        <li> <Link to='/register' > SIGN-UP  </Link> </li>
                    </ul>    
                : ""}
            </button> 

            <button onClick={() => setUserOpen(!userOpen)}>
                <img src={tempImg} className='w-10 h-10 mr-3'></img>

                {userOpen ? 
                    <ul className='text-left'>
                        <li> <Link to='/dashboard' > Dashboard  </Link> </li>
                        {/* add functionality  to sign  out the user here and redirect to home page */}
                        <li> <Link to='' > Logout  </Link> </li>
                    </ul>    
                : ""}

            </button>
        </nav>
        </>
       
     );
}

export default NavBar;





 {/* No user signed in show this
        
            <span> <Link to='/' > Home  </Link> </span>
            <span> <Link to='/staff' > About TPD  </Link> </span>
            <span> <Link to='/ideas' > Designs  </Link> </span>
            <span> <Link to='/login' > Login  </Link> </span>
            <span> <Link to='/register' > SIGN-UP  </Link> </span>


            maybe add image to link to login  with some default image ? 
        
         */}


        {/* user signed in? 
        
        
            <span> <Link to='/' > Home  </Link> </span>
            <span> <Link to='/ideas' > Designs  </Link> </span>
            <span> <Link to='/dashboard' > Profile Page  </Link> </span>
            <span> <Link to='/login' > Login  </Link> </span>

            Maybe add a drop  down  with links to  profile page and sign out      
        
        */}


