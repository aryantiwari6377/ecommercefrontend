
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

import User from '../images/user.jpg';

function Fp() {

  const [isLoggedIn, setIsLoggedIn] = useState(false); 


  return (
    <div className='mt-32 lg:mx-60'>
      <div className='relative flex justify-between border-b-2 pb-4 '>
        <div className='ml-4'>
          {isLoggedIn ? (
            <p className='text-4xl text-left font-bold'>Hello, username!</p>
          ) : (
            <>
              <p className='text-4xl text-left font-bold'>Hey,</p>
              <p className='text-4xl text-left font-bold'>there!</p>
            </>
          )}
        </div>
        <div className='bg-black rounded-full p-2'>
          <img src={User} className='rounded-full w-20 h-20' alt='Profile' />
        </div>
        {!isLoggedIn && (
          <span className='absolute -bottom-[10px] left-0 bg-white px-2 text-md text-red-400'>
           <a href="/login"> Login Now &gt;</a>
          </span>
        )}
      </div>
      <div className='py-10 flex flex-col gap-5 md:gap-20'>
        <p className='text-left mx-2 text-sm'>ORDERS AND WISHLIST</p>
        <div className='mx-2 pb-4 flex justify-between border-b-2'>
          <p className='font-medium'>Orders</p>
          <FontAwesomeIcon icon={faClipboardList} className='float-end text-2xl text-black' />
        </div>
        <div className='mx-2 pb-4 flex justify-between border-b-2'>
          <p className='font-medium'>Wishlist</p>
          <FontAwesomeIcon icon={faHeart} className='float-end text-2xl text-black' />
        </div>
      </div>
      <div>
        <p className='text-left mx-2 text-sm'>SUPPORT</p>
        <div className='mx-2 pb-4 flex justify-between border-b-2'>
          <p className='font-medium'>Help Center</p>
          <FontAwesomeIcon icon={faCircleQuestion} className='float-end text-2xl text-black' />
        </div>
      </div>
    </div>
  );
}

export default Fp;
