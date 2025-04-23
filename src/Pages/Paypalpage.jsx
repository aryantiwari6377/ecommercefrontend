import React from 'react'
import { useState } from 'react'
import axios from 'axios';
function Paypalpage() {


      const [price, setprice] = useState('');
 

      const handlepay = async() => {
           const res = await axios.post('http://localhost:5000/api/order',{price});
           console.log("response is",res); 
           const paymentUrl = res.data.paymentUrl;

        // Redirect to PayPal payment URL
        window.location.href = paymentUrl; 
      }

  return (
    <div className='mt-32'>
       <form onSubmit={handlepay}>
          
           <input type='text' placeholder='price ' onClick={(e)=>{setprice(e.target.value)}}/>
         
           <button>pay</button>
       </form>
    </div>
  )
}

export default Paypalpage