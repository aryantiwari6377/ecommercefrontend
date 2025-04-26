
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {deletewishService, getWishlistService} from '../services/wishListService'

function Wishlist() {
  const [Wishlist, setWishlist] = useState([]); 
  const navigate = useNavigate();
    
  const shortenName = (name) => {
    const words = name.trim().split(' ');
    return words.length > 2 ? words.slice(0, 2).join(' ') + '...' : name;
  };
  
  const deletewishproduct = async(productId) => {
 
    const response = await deletewishService(productId);  
    console.log("response is:",response);
    setWishlist(response.data.wishlist.wishitem); 
    if(response.status === 200){
           console.log("product removed");
    }
    else{
      console.log("not deleted");
    }
  
  }

  const showWishlist = async () => {
   
     
      const response = await getWishlistService();
      
      setWishlist(response.data.wishitems); 
  //  console.log(response.data);
  //     console.log(response.data.message); 
    
  };

  const productpageopen =(productId)=>{
          navigate(`/b/${productId}`);
  }

  useEffect(() => {
    showWishlist(); 
  }, []);

  return (
    <div className='mt-32'>
      <div className='font-bold flex list-none justify-between w-[45%] ml-[46%] text-xl'><li>Product</li><li>Price</li></div>
      {Wishlist && Wishlist.length > 0 ? ( 
        Wishlist.map(item => (
          <div key={item.productId} className='mt-10 bg-[rgb(255,255,255)] p-4 rounded-2xl shadow-xl' >
            <div className='flex justify-between mb-6 w-[94%]' onClick={()=>productpageopen(item.productId)}>
              <div className='h-[100px] w-[172px]'> 
                <img src={item.imageUrl} alt={item.name} className='h-[70px] w-[80px] ml-[46px]'/>
              </div>
              <div >{shortenName(item.name)}</div>
              <div className='w-[60px]'>{item.price}</div>
            </div>
            <div className='flex justify-end gap-4 text-red-500'>
              <span><FontAwesomeIcon icon={faTrash}  onClick={(e) => { e.stopPropagation(); deletewishproduct(item.productId); }}/></span>
            </div>
          </div>
        ))
      ) : (
        <p>No items in your wishlist</p>
      )}
    </div>
  );
}

export default Wishlist;
