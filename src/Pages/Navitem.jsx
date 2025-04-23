
import React, { useState } from 'react';
import axios from 'axios';
import {navitemService} from '../services/navitemService';

function Navitem() {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [link, setLink] = useState("");

  const handleform = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

   
      const res = await navitemService(name,icon,link);

      console.log("Response:", res.data); // Log the success message
  
  };

  return (
    <div className='mt-32'>
      <form onSubmit={handleform}>
        <label>NAME</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Link</label>
        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />

        <label>Icon</label>
        <input type="text" value={icon} onChange={(e) => setIcon(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Navitem;
