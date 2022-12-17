import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        
   <footer>
        <h5> Some Footer Details here </h5>

        <div>
        <Link to='/register' > SIGN-UP  </Link> 
        
        <Link to='/login' > LOG-IN   </Link> 
            ~ copyright info ? ~
        </div>

        <img src='../images/temp.jpg' ></img>

   </footer>

     );
}

export default Footer;