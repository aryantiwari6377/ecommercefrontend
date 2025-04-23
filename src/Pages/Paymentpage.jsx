
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faWallet, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

function PaymentOptions() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();
  
  const handleSelect = (option) => {
    setSelectedOption(option);
  };


  return (
    <div className='mt-32'>
      <p className='text-left ml-12 lg:ml-32'>PAYMENT METHOD</p>

      <div className='mt-10 md:mx-40 lg:mx-80'>
        <div className='flex gap-4 md:justify-between'>
          

          <div
            className={`relative shadow-2xl p-4 bg-white rounded-xl cursor-pointer ${selectedOption === 'creditCard' ? 'border-4 border-sky-500' : ''}`}
            onClick={() => handleSelect('creditCard')} onclick={navigate("/cartpaymethod")}
          >
            <FontAwesomeIcon icon={faCreditCard} />
            <p>CREDIT CARD</p>
            {selectedOption === 'creditCard' && (
              <FontAwesomeIcon
                icon={faCheckCircle}
                className='absolute top-[-0.5rem] right-[-0.5rem] text-sky-500'
                size='2xl'
              />
            )}
          </div>
   
          <div
            className={`relative shadow-2xl p-4 bg-white rounded-xl cursor-pointer ${selectedOption === 'paypal' ? 'border-4 border-sky-500' : ''}`}
            onClick={() => handleSelect('paypal')} onclick={()=>navigate("/Paypalpage")}
          >
            <FontAwesomeIcon icon={faPaypal} />
            <p>PAYPAL</p>
            {selectedOption === 'paypal' && (
              <FontAwesomeIcon
                icon={faCheckCircle}
                className='absolute top-[-0.5rem] right-[-0.5rem] text-sky-500'
                size='2xl'
              />
            )}
          </div>

       
          <div
            className={`relative shadow-2xl p-4 bg-white rounded-xl cursor-pointer ${selectedOption === 'cash' ? 'border-4 border-sky-500' : ''}`}
            onClick={() => handleSelect('cash')}
          >
            <FontAwesomeIcon icon={faWallet} />
            <p>PAY CASH</p>
            {selectedOption === 'cash' && (
              <FontAwesomeIcon
                icon={faCheckCircle}
                className='absolute top-[-0.5rem] right-[-0.5rem] text-sky-500'
                size='2xl'
              />
            )}
          </div>

        </div>
      </div>

       <div>
           
       </div>

    </div>
  );



}
export default PaymentOptions;
