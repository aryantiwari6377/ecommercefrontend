// import React from 'react';
import bagicon from '../images/bagicon.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { updateQuantity, removeFromCart, setCartItems } from '../Redux/Slices/cartSlice';


const Addcardmenu = ({ isOpen, toggleSlider }) => {

  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const updateCartQuantity = async (productId, quantity) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:5000/api/updateCartQuantity', {
        productId,
        quantity
      }, {
        headers: { 'Authorization': `${token}` }
      });

      if (response.data.success) {
        console.log('Quantity updated in the database');
      } else {
        console.error('Failed to update quantity in the database');
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
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
    try{
    const token = localStorage.getItem('token');
    const response = await axios.delete(`http://localhost:5000/api/deletecartproduct/${productId}`,
  
      {
     headers:{ 'Authorization': `${token}` }
    })
    console.log("response is:",response);
    if(response.status === 200){
           console.log("product removed");
    }
    else{
      console.log("not deleted");
    }
    }
    catch(error){
          console.log(error);
    }
  }

  const deleteCartProduct = (productId) => {
    dispatch(removeFromCart({ productId }));
     deleteCartproduct(productId);
  };

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/usercart', {
        headers: {
          'Authorization': `${token}`
        }
      });
      console.log("c",response);
      dispatch(setCartItems(response.data.items));
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };

 


    
  const productpageopen =(productId)=>{
    navigate(`/productpage/${productId}`);
}


  useEffect(() => {
    fetchCart();
  },[]);

  return (
    <div className={`fixed top-0 right-0 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out w-80 md:w-[40%] h-full bg-white shadow-lg z-50 overflow-y-auto`}>
    {/* Cart slider that toggles visibility using isOpen property */}
    <button 
      className="absolute top-2.5 right-2.5 bg-none text-black border-none text-4xl cursor-pointer hover:bg-white focus:outline-none" 
      onClick={toggleSlider}
    > 
      ×
    </button> 
  
    <img src={bagicon} alt="Bag Icon" className="w-full"/>
      
    {cartItems.length > 0 ? (
      cartItems.slice(0, 3).map(item => (
        <div key={item.productId} className='mt-10 bg-[rgb(255,255,255)]  rounded-2xl shadow-xl m-2' onClick={()=>{productpageopen(item.productId)}}>
          <div className='flex justify-between mb-6 w-full md:w-[92%]'>
            <div className='h-[70px] w-[90px]  text-center'>
              <img src={item.imageUrl} alt={item.name} className='h-[50px] w-[60px]  rounded-md'/>
              <p className='text-[12px]'>{item.name}</p>
            </div>
            <div className='w-[60px] text-start'>{item.price}</div>
            <div className="flex items-center gap-2 h-[40px]">
              <button className="px-2 py-1 border border-black rounded-md"  onClick={(e) => {  e.stopPropagation(); decreaseQuantity(item.productId);}} >-</button>
              <p className='px-2 py-1 border border-black rounded-md'>{item.quantity}</p>
              <button className="px-2 py-1 border border-black rounded-md"  onClick={(e) => {  e.stopPropagation(); increaseQuantity(item.productId);}} >+</button>
            </div>
            <div className='w-[60px]'>{item.quantity * item.price}</div>
          </div>
          <div className='flex justify-end gap-4 text-red-500' onClick={(e) => { e.stopPropagation(); deleteCartProduct(item.productId); }}>
            <span><FontAwesomeIcon icon={faTrash} /></span>
          </div>
        </div>
      ))
    ) : (
      <p className="p-4 text-center">Your cart is empty.</p>
    )}
  
   {cartItems.length > 0 ? <a href="/cardlist" className='text-green-500 block mt-4 text-center'>Go to Cart List</a> : null}
  </div>
  
  );
};

export default Addcardmenu;
