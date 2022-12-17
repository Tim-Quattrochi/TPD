import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
    
        <>       
        
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




        <nav > 
        
        <div>
            <h1> TPD </h1>

            <span> <Link to='/' > Home  </Link> </span>
            <span> <Link to='/staff' > About TPD  </Link> </span>
            <span> <Link to='/ideas' > Designs  </Link> </span>
            <span> <Link to='/dashboard' > Profile Page  </Link> </span>
            <span> <Link to='/login' > Login  </Link> </span>
            <span> <Link to='/register' > SIGN-UP  </Link> </span>
            
        </div>
        
        
        </nav>
        

        </>
       
     );
}

export default NavBar;