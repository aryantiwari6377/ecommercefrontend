import React, { useState } from 'react'
import axios from 'axios';
import {forgotpasswordService} from '../services/authenticationService';

function Passwordchange() {
    const [email, setemail] = useState("");
    const onsubmitfun= async(e)=>{
        
            e.preventDefault();
             const response = await forgotpasswordService(email);
                 if(response.ok){
                  console.log("all things work correctly");
                  alert("email sended");
                 }
        
    }
  return (
    <div className='mt-32 w-3/6 mx-[25%]'>
       <form onSubmit={onsubmitfun}>
               <label>Email</label>
               <input type='text' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
               <button className='bg-sky-700 text-white w-20 h-50 mt-4 py-1 rounded-2xl'>send</button>
       </form>
    </div>
  )
}

export default Passwordchange