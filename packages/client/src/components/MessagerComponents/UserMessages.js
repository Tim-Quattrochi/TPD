import React, { useState, useEffect } from 'react'
import ActiveConversation from './ActiveConversation'
import ConversationsList from './Conversations';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useAuth } from '../../hooks/useAuth';

const UserMessages = () => {
     const [messages, setMessages] = useState([])
     const {newMessage, setNewMessage} = useState("")
     const [visibility, setVisibility ] = useState( 'invisible' )
     const axios = useAxiosPrivate();
     const { auth } = useAuth();

     let userId = auth.id

console.log(useAuth())
let message = ""


const retrieveMessages = async () => {
    await axios.get(`/${userId}/messages`)
     .then((res) => { 
          setMessages(res.data)
          console.log(res.data)
     })
     .catch((err) => console.log(err))
}

useEffect(() => {
     retrieveMessages()
},[])


const handleMessageBox = (e) => {
    e.preventDefault()
     // console.log(e.target.value)
    message = e.target.value
    
}

const sendMessage = (e) => {
     e.preventDefault()
     console.log(message)
     axios.post(`/${userId}/messages`, {text: message})
          .then(res => console.log(res))
          .catch(err => console.log(err))
     
     
}


    return (
        
   <>  
        <div className={`${visibility === 'invisible' ? 'bg-slate-900 w-4/12 h-9 border-double border-4 border-slate-700 flex flex-col items-center absolute' : 'bg-slate-900 w-4/12 h-96 border-double border-4 border-slate-700 flex flex-col items-center absolute'}`}>
         
          <h4 className='w-full text-gray-100 bg-red-800 text-center font-semibold border-b-slate-700 border-solid border-b-2 mb-3'
               type="button"
          onClick={() => visibility === 'visible' ? setVisibility('invisible') : setVisibility('visible')}
          > 
          
          Messages 
          
          </h4>
         
          <div className={`${visibility} ${visibility === 'invisible' ? 'w-11/12 h-0' : 'flex w-11/12 h-auto justify-evenly'}`}> 

               {/* 
               <ul className='flex flex-col text-center bg-slate-800 bg-opacity-50 w-12/12' > 
                    <ConversationsList /> 
               </ul> */}

               <div className='w-11/12 h-auto'>
                    <ul className='w-11/12 h-64 bg-slate-100 bg-opacity-5'  > 
                         <ActiveConversation messages={messages}/>
                         
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