import React from 'react'
import { useState, useEffect } from 'react'


import UserTickets from '../components/UserTickets'
import UserMessages from '../components/MessagerComponents/UserMessages'
import UserInfo from '../components/UserInfo'
import UserProjects from '../components/UserProjects'


export default function Dashboard (props) {

    
return (

    <div>   
    <div id='userInfoDropDown'>
        <UserInfo />
    </div>
    
    <div id='userTickets'> 
        <UserTickets />
    </div>

    <div id='userProjects'> 
        <UserProjects />
    </div>


    <div id='msgBoard'>  
        <UserMessages />
    </div>

    </div>

)}