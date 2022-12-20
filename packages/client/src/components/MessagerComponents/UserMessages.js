import React, { Component, useState } from 'react'
import ActiveConversation from './ActiveConversation'
import ConversationsList from './Conversations';



const UserMessages = () => {
let message = ""
const {newMessage, setNewMessage} = useState("")

const handleMessageBox = (e) => {
     e.preventDefault()
     // console.log(e.target.value)
    return message = e.target.value
}

const sendMessage = (e) => {
     e.preventDefault()
     console.log(message)
     setNewMessage(message)
}







    return (
        
   <>  
     
        <div className='bg-slate-900 w-4/12 h-96 border-double border-4 border-slate-700 flex flex-col items-center'>
         
          <h4 className=' w-full text-gray-100 bg-red-800 text-center font-semibold border-b-slate-700 border-solid border-b-2 mb-3'> Messages </h4>
         
          <div className='flex w-11/12 h-auto justify-evenly'> 

               {/* 
               <ul className='flex flex-col text-center bg-slate-800 bg-opacity-50 w-12/12' > 
                    <ConversationsList /> 
               </ul> */}

               <div className='w-11/12 h-auto'>
                    <ul className='w-11/12 h-64 bg-slate-100 bg-opacity-5'  > 
                         <ActiveConversation />
                         
                    </ul>
     
                    <form className='bg-white w-11/12 h-10 flex' >
                              <input type="text" name="message" onChange={handleMessageBox} className='bg-white w-10/12'/> 
                              <button type='submit'onClick={sendMessage} className=' border-l-2 border-slate-400 w-auto flex-wrap'> Send </button>
                         
                    </form>
               </div>

          </div>
          
          
        
        </div>
   </>

     );
}

export default UserMessages;