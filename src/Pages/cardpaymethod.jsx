import React from 'react'
import visa3 from '../images/visa3.png'
import visa4 from '../images/visa4.png'
import mastercard from '../images/mastercard.jpg'
function cardpaymethod() {

    
    return(
    <div className='mt-32'>
    
    <form  className='text-left ml-40 shadow-2xl w-[50%]'>
    <div>
        <div>
    <label>card informatin:</label>
      <div className='flex'>
        <input type='text' placeholder=' 1234 1234 1234 1234'/>
         <img src={visa4} className=' w-[30px] '/>
         <img src={mastercard} className=' w-[30px] '/>
      </div>
      <div>
         <input placeholder='MM/YY'/>
         <input placeholder="CVC"/>
      </div>
      </div>
      <div>
      <label>cardholder name:</label>
      <div >
        <input placeholder='Full name of card'/>
      </div>
      </div>
      <div>
      <label>country:</label>
      <input placeholder='india'/>
      </div>
</div>
      <button type='submit'>Pay</button>
    </form>
  </div>
);
}

export default cardpaymethod