
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeFromCart, setCartItems } from '../Redux/Slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import {updatecartService,deletecartService,fetchcartService} from '../services/cardProductService';

function Cardproducts() {

  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateCartQuantity = async (productId, quantity) => {
   
      const response = await updatecartService(productId, quantity);

      if (response.data.success) {
        console.log('Quantity updated in the database');
      } else {
        console.error('Failed to update quantity in the database');
      }
  
  };

  const increaseQuantity = async (productId) => {
    const item = cartItems.find(item => item.productId === productId);
    if (item) {
      const newQuantity = item.quantity + 1;
      dispatch(updateQuantity({ productId, quantity: newQuantity }));
      await updateCartQuantity(productId, newQuantity);
    }
  };

  const decreaseQuantity = async (productId) => {
    const item = cartItems.find(item => item.productId === productId);
    if (item && item.quantity > 0) {
      const newQuantity = item.quantity - 1;
      dispatch(updateQuantity({ productId, quantity: newQuantity }));
      await updateCartQuantity(productId, newQuantity);
    }
  };

  const deleteCartproduct = async(productId) => {
   
    const token = localStorage.getItem('token');
    const response = await deletecartService(productId);
    console.log("response is:",response);
    if(response.status === 200){
           console.log("product removed");
    }
    else{
      console.log("not deleted");
    }
    
  }

  const deleteCartProduct = (productId) => {
    dispatch(removeFromCart({ productId }));
     deleteCartproduct(productId);
  };

  const fetchCart = async () => {
 
      const token = localStorage.getItem('token');
      const response = await fetchcartService();
      dispatch(setCartItems(response.data.items));
    
  };

 


    
  const productpageopen =(productId)=>{
    navigate(`/productpage/${productId}`);
}


  useEffect(() => {
    fetchCart();
  }, [dispatch]);

  return (
    <div className='mt-32'>
      <div className='flex font-bold list-none justify-between md:justify-evenly  p-3 sm:p-6 text-xl '><li>Product</li><li>Price</li><li>Quantity</li><li>Total</li></div>
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <div key={item.productId} className='mt-10 bg-[rgb(255,255,255)] p-4  rounded-2xl shadow-xl md:pl-[20px] lg:pl-[50px] md:mx-[70px]' onClick={()=>{productpageopen(item.productId)}}>
            <div className='flex justify-between mb-6 w-full md:w-[96%] lg:w-[92%] lg:px-10'>
              <div className='h-[100px] w-[172px] text-center'>
                <img src={item.imageUrl} alt={item.name} className='h-[70px] w-[80px] md:ml-[46px]'/><p className='text-left mt-[6px] w-[100px] md:w-auto'>{item.name}</p>
              </div>
              <div className='w-[60px] text-start'>{item.price}</div>
              <div className="flex items-center gap-2 h-[40px]">
                <button className="px-2 py-1 border border-black rounded-md" onClick={(e) => {  e.stopPropagation(); decreaseQuantity(item.productId);}}>-</button>
                <p className='px-2 py-1 border border-black rounded-md'>{item.quantity}</p>
                <button className="px-2 py-1 border border-black rounded-md" onClick={(e) => {  e.stopPropagation(); increaseQuantity(item.productId);}}>+</button>
              </div>
              <div  className='w-[60px]'>{item.quantity * item.price}</div>
            </div>
            <div className='flex justify-end gap-4 text-red-500'>
              <span><FontAwesomeIcon icon={faTrash}  onClick={(e) => { e.stopPropagation(); deleteCartProduct(item.productId); }}/></span>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}

export default Cardproducts;
