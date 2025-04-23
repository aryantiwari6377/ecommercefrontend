import React from 'react'
import special from '../images/specialoff.png';
import specialoffblue from '../images/specialoffblue.png';
import specialoffgreen from '../images/specialoffgreen.png';
import specialoffpink from '../images/specialoffpink.png';

function Dp() {
  return (
    
          <div className='h-[60vh] mt-10 mb-10 md:mb-20'>
         <h1 className='mt-10 mb-10 font-bold text-3xl'>Discount Zone</h1>
       <div className='  h-3/4  flex justify-around font-bold'>
            
           
            <div className=' h-full w-[20%] border-black  bg-green-100 rounded-xl shadow-2xl'>
            <div className='h-1/2  flex flex-col justify-center items-center'><p className=' text-2xl'>40% off</p><p className=' text-lg'>Big saving Ahead!</p></div>
            <img src={specialoffgreen}/>
            </div>
            <div className=' h-full w-[20%] border-black bg-blue-100 rounded-xl shadow-2xl'>
                <div className='h-1/2 flex flex-col justify-center items-center'><p className=' text-2xl'>50% off</p><p className='text-lg'>Half Price Extravaganza!</p></div>
                <img src={specialoffblue}/>
            </div>
            <div className='  h-full w-[20%] border-black bg-red-100 rounded-xl shadow-2xl'>
                <div className='h-1/2   flex flex-col justify-center items-center'><p  className=' text-2xl'>70% off</p><p className='text-lg'>Mega Discount Alert!</p></div>
             <img src={specialoffpink}/>
            </div>
       </div>
     </div>
  )
}

export default Dp