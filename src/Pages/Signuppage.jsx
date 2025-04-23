import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import User from '../images/user.jpg'
import axios from 'axios';
import {signupService} from '../services/authenticationService';

function Signuppage() {

           const [name, setname] = useState("");     
           const [email, setemail] = useState("");
           const [password, setpassword] = useState("");
           const image =  User;
           
             const navigate = useNavigate();
           const onsubmitfun = async (e) => {
            e.preventDefault();
            try {
              const response = await signupService(name,email,password,image);
                console.log(response.data.message);
              if (response) {
                alert('Account created');
              } else {
                alert('Account not created');
              }
              
              console.log(response.data);
              navigate("/login");
            } catch (error) {
              console.error('There was an error creating the account!', error);
            }
          };
        

  return (
    <div className="mt-32 w-3/6 w-[50%] ml-[25%] lg:w-[400px] lg:mx-auto">
    <form onSubmit={onsubmitfun}>
    <div className='flex flex-col'>
       <label className='text-left'>Name</label>
         <input type="text" name="name" className='border-b-2 border-black focus:outline-none' value={name} onChange={(e)=>{setname(e.target.value)}}/>
         </div>
      <div className='flex flex-col'>
       <label className='text-left'>Email</label>
         <input type="text" name="email" className='border-b-2 border-black focus:outline-none' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
         </div>
         <div className='flex flex-col'>
         <label className='text-left'>Password</label>
         <input type="text" name="password" className='border-b-2 border-black focus:outline-none value={password}' onChange={(e)=>{setpassword(e.target.value)}}/>
         
         </div>
         <button className='w-20 h-8 bg-sky-700 text-white  rounded-full mt-4 font-bold'>Signup</button>
         <p className='text-center  text-xs py-4 text-blue-500'>Already have account? <Link to="/login">Login</Link></p>
    </form>
</div>
  )
}

export default Signuppage