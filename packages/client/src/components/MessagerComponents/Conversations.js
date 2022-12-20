import React, { Component } from 'react'

const ConversationsList = () => {
    
    return (
        
   <>
        <li className=' drop-shadow-md rounded-xl p-3 m-4 w-8/12 h-auto text-left  text-gray-100 bg-slate-600 flex-wrap'> Fake message </li>
        <li className=' drop-shadow-md rounded-xl p-3 m-4 w-8/12 h-auto text-right  text-gray-100 bg-slate-400 flex-wrap'> Fake response </li>
        {/* retrieve message for user and map through  them  and apply  here
        make id sent and recieved ID in relation to current user  */}
   </>

     );
}

export default ConversationsList;