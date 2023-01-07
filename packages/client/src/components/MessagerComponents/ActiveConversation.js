import React, { Component } from 'react'

const ActiveConversation = ({ messages }) => {

    return (
        
   <>
        {/* <li className='drop-shadow-md rounded-xl p-3 m-4 w-8/12 h-auto text-left  text-gray-100 bg-slate-600 flex-wrap'> Fake message </li>
        <li className=' drop-shadow-md rounded-xl p-3 m-4 w-8/12 h-auto text-right  text-gray-100 bg-slate-400 flex-wrap'> Fake response </li> */}
        {messages.map( (message) => (
          <li key={message.created} className='drop-shadow-md rounded-xl p-3 m-4 w-8/12 h-auto text-left  text-gray-100 bg-slate-600 flex-wrap'> 
               {message.text} 
               <br /> 
               ~{message.author} 
          </li>
        ))}
        
   </>

     );
}

export default ActiveConversation;