import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Resetpassword() {
  const [newpassword, setnewpassword] = useState("");
  const { token } = useParams();
 const navigate = useNavigate();
  const onsubmitfun = async (e) => {
    e.preventDefault();
    try {
      const response = await resetpasswordService(newpassword);
      if (response.status === 200) {
        console.log("All things work correctly");
        alert("Password updated");
        navigate('/login');
      }
    } catch (error) {
      console.error("Error updating password:", error);
      alert("An error occurred while updating the password");
    }
  };

  return (
    <div className='mt-32 w-3/6 mx-[25%]'>
      <form onSubmit={onsubmitfun}>
        <label>New Password</label>
        <input 
          type='password' 
          value={newpassword} 
          onChange={(e) => setnewpassword(e.target.value)} 
          required 
        />
        <button  className='bg-sky-700 text-white w-20 h-50 mt-4 py-1 rounded-2xl'>
          Send
        </button>
      </form>
    </div>
  );
}

export default Resetpassword;
