import React from 'react'
import designSchemes from '../images/designObj'



export default function TemplatesPage (props) {

    
return (

<>
<h2 className='text-red-900 font-semibold pt-10 pb-10 text-3xl text-center' > 
    Inspration for Your Dream
    </h2>
    
    <div className="pl-44 h-screen flex flex-col">  

 
    
    <div id='templates' className=' h-11/12 max-w-fit overflow-auto mr-20 ml-20'> 

            {designSchemes.templates.map( item =>  <img src={item.picture} className="pl-20 pb-20 pr-20 h-96 w-96" ></img>  )}
        
    </div>
    
    <div id='logos' className=' h-11/12 max-w-fit overflow-auto  mr-20 ml-20'> 

            {designSchemes.logos.map( item =>  <img src={item.picture} className=" pl-20 pb-20 pr-20 h-96 w-96" ></img>  )}
    
    </div>
    
    {/* <div id='schemes' className=' h-11/12 max-w-fit overflow-auto  mr-20 ml-20'> 

            {designSchemes.colorTemplates.map( item => <img src={item.picture} className="pl-20 pb-20 pr-20 h-60 w-auto" ></img>)}
      
    </div> */}
    
    
     
    </div>
</>

)}