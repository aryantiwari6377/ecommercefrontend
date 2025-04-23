
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate, useParams } from 'react-router-dom';
import { updateQuantity } from '../Redux/Slices/cartSlice';
import axios from 'axios';
import { addToCart } from '../Redux/Slices/cartSlice';
import Reviewpage from './Reviewpage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/material';
import {fetchcartService, updatecartService} from '../services/cardProductService';
import {productService, orderlistService, addcartService,wishlistService} from '../services/productPageService';
import {getWishlistService, deletewishService} from '../services/wishListService';

function Productpage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: productId } = useParams();
  const cartItems = useSelector(state => state.cart.items);
  const [productpageQuantity, setProductpageQuantity] = useState(1);
  const [localQuantity, setLocalQuantity] = useState(1);
  const [Productdetail, setProductdetail] = useState("");
  const [discontent, setdiscontent] = useState(false);
  const [refundcontent, setrefundcontent] = useState(false);
  const [marketcontent, setmarketcontent] = useState(false);
  const [color, setColor] = useState("black");
  const [size, setSize] = useState("XL");
  const [isClicked, setclicked] = useState(false);


  const distogglefun = () => {
    setdiscontent(!discontent);
  }
  const marketcontentfun = () => {
    setmarketcontent(!marketcontent);
  }

  const refundtogglefun = () => {
    setrefundcontent(!refundcontent);
  }


  const handleAddToCart = (product, event) => {
    event.stopPropagation();
    dispatch(addToCart({ productId: product._id, quantity: 1, price: product.price, name: product.name }));;
    updateCartOnServer(product._id, 1);
  };

  const updateCartOnServer = async (productId, quantity) => {
    try {
      const token = localStorage.getItem('token');
      await addcartService(productId, quantity);
    } catch (error) {
      console.error('Error updating cart on server:', error);
    }
  };



  useEffect(() => {

    const prouctdetails = async (req, res) => {
      const token = localStorage.getItem('token');

      const response = await productService(productId);
      setProductdetail(response.data);
      // console.log("hey",response.data);
    }

    const fetchCartData = async () => {
     
        const token = localStorage.getItem('token');
        const response = await fetchcartService();
        const cart = response.data;
        const productInCart = cart.items.find(item => item.productId.toString() === productId);
        if (productInCart) {
          setProductpageQuantity(productInCart.quantity);
          setLocalQuantity(productInCart.quantity);
        }
   
    };

    fetchCartData();
    prouctdetails();
  }, [productId]);

  const orderlistfun = async (req, res) => {

      const response = await orderlistService(productpageQuantity,Productdetail,color,size);
    //  console.log("order:", response.data);
      navigate("/success");
    
  };


  const updateCart = async (quantity) => {
   
     const res = await updatecartService(productId,quantity);
    console.log("cart updated");
  };

  const increaseQuantity = () => {
    const newQuantity = productpageQuantity + 1;
    setProductpageQuantity(newQuantity);
    setLocalQuantity(newQuantity);
    dispatch(updateQuantity({ productId, quantity: newQuantity }));
    updateCart(newQuantity);
  };

  const decreaseQuantity = () => {
    if (productpageQuantity > 1) {
      const newQuantity = productpageQuantity - 1;
      setProductpageQuantity(newQuantity);
      setLocalQuantity(newQuantity);
      dispatch(updateQuantity({ productId, quantity: newQuantity }));
      updateCart(newQuantity);
    }
  };
  

  const addToWishlist = async () => {
    try {
      const token = localStorage.getItem('token');
     
      const response = await wishlistService(productId);
    
      setclicked(true);
 //     console.log(response.data.message); 
    
    } catch (error) {
   
      console.error('Error:', error.response ? error.response.data.message : error.message);
    }
  };

  const showWishlist = async () => {
   
    const response = await getWishlistService();
    
   const wishproduct = response.data.wishitems.map((item)=> item === productId); 
 if(wishproduct){setclicked(true);}
 //console.log(response.data);
 //   console.log(response.data.message); 
  
};


const deletewishproduct = async(productId) => {
 
  const response = await deletewishService(productId);  
  setclicked(false);
  if(response.status === 200){
         console.log("product removed");
  }
  else{
    console.log("not deleted");
  }

}

useEffect(()=>{
  showWishlist();
},[]);

  return (
    <div className='mt-32'>
      <div className=" flex flex-col md:flex-row gap-x-6">
        <div className="w-full md:w-2/4">
          <img src={Productdetail.imageUrl} className="h-1/2 w-full p-2 lg:w-[80%] lg:h-[56%] lg:mt-[10%] lg:ml-[10%]" />
          <div><span className='font-bold text-lg'>Description:- </span>{Productdetail.description}</div>
        </div>
        <div className="w-full md:w-2/4 p-6">
        <FontAwesomeIcon icon={faHeart} className={`float-end text-2xl  ${isClicked ? 'text-red-500' : 'text-black'}`} onClick={isClicked ?  deletewishproduct : addToWishlist} />

       
          <p className="text-xl mb-4 text-start font-medium"> {Productdetail.name}</p>
          <div className="flex items-center mb-2 gap-2">
            
                    <b className="text-lg">${Productdetail.price}</b>
            <s className="text-lg">${Productdetail.price + 130}</s>
            <p className="text-lg text-green-500">
  {Math.round(((Productdetail.price + 130 - Productdetail.price) / (Productdetail.price + 130)) * 100)}% off
</p>
          </div>
          <div className="mb-8 text-start">inclusive of Taxes + Free delivery</div>
          <div className="mb-6">
            <div className="flex flex-row items-center">
              <p className='font-medium'>Color: <span className='font-thin'>{color}</span></p>
            </div>
            <div className="flex gap-2 mt-2">
              <button className="bg-black w-10 h-10 rounded-xl" onClick={() => setColor("black")}></button>
              <button className="bg-blue-400 w-10 h-10 rounded-xl" onClick={() => setColor("blue")}></button>
              <button className="bg-green-400 w-10 h-10 rounded-xl" onClick={() => setColor("green")}></button>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex flex-row items-center">
              <p className='font-medium'>Size: <span className='font-thin'>{size}</span></p>
            </div>
            <div className="flex gap-2 mt-2">
              <button className="px-4 py-2 border border-black rounded-md hover:bg-gray-600 hover:text-yellow-500" onClick={() => setSize("S")}>S</button>
              <button className="px-4 py-2 border border-black rounded-md hover:bg-gray-600 hover:text-yellow-500" onClick={() => setSize("M")}>M</button>
              <button className="px-4 py-2 border border-black rounded-md hover:bg-gray-600 hover:text-yellow-500" onClick={() => setSize("L")}>L</button>
              <button className="px-4 py-2 border border-black rounded-md hover:bg-gray-600 hover:text-yellow-500" onClick={() => setSize("XL")}>XL</button>
              <button className="px-4 py-2 border border-black rounded-md hover:bg-gray-600 hover:text-yellow-500" onClick={() => setSize("XXL")}>XXL</button>
            </div>
          </div>
          <div className="mb-10 lg:w-[86%]">
            <div className="flex flex-row items-center">
              <p className='font-medium'>Qty:</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <button className="px-4 py-2 border border-black rounded-md text-2xl" onClick={decreaseQuantity}>-</button>
              <p className='px-4 py-2 border border-black rounded-md text-2xl'>{productpageQuantity}</p>
              <button className="px-4 py-2 border border-black rounded-md text-2xl" onClick={increaseQuantity}>+</button>
            </div>
          </div>
          <div className='flex gap-4'>
            <button className='px-4 py-2 bg-sky-700 text-white w-40 h-10 rounded-2xl font-bold' onClick={(event) => { handleAddToCart(Productdetail, event) }}>Add to cart</button>
            <button className="px-4 py-2 bg-yellow-500 text-white w-40 h-10 rounded-2xl font-bold" onClick={orderlistfun}>Buy Now</button>
          </div>
        
        
        
        
        
      


        </div>
      </div>
      
      <div className='mt-10 bg-[rgb(255,255,255)] p-4 rounded-2xl shadow-xl'>
            <div className='flex justify-between mb-6'><div className='font-bold'>Specification</div><div className='text-2xl'>+</div></div>
            <div>
              <div className='flex justify-between mb-6' onClick={distogglefun}>
                <div className='font-bold'>Description</div><div className='text-2xl' >{discontent ? '-' : '+'}</div>
              </div>
              {discontent &&

                <div className="space-y-4 mb-6">

                  <div >
                    <p className="flex-shrink-0 font-bold text-left">Size & Fit:</p>
                    <ul className="list-disc pl-5 text-left">
                      <li>Every Polo T Shirt is tailored with regular fit over years of testing.</li>
                      <li>Our model (Height: 6ft, Chest: 38 in) is wearing a Large size.</li>
                      <li>Please refer to the size chart for more accuracy.</li>
                    </ul>
                  </div>


                  <div >
                    <p className="flex-shrink-0 font-bold text-left">Wash Care:</p>
                    <ul className="list-disc pl-5 text-left">
                      <li>Cold and gentle machine wash</li>
                      <li>Do not use bleach & fabric softener</li>
                      <li>Do not iron directly</li>
                      <li>Use mild detergent only</li>
                    </ul>
                  </div>
                </div>
              }
            </div>

            <div>
              <div className='flex justify-between mb-6' onClick={refundtogglefun} >
                <div className='font-bold'> Return & Refund Policy</div><div className='text-2xl'>{refundcontent ? '-' : '+'}</div>
              </div>
              {refundcontent && <div className='text-left mb-2'>We provide free shipping on all orders. Pay online to avoid charges of Rs 50/product applicable on COD orders. The return or exchange can be done within 15 days after delivery. Every delivery from Beyoung is processed under excellent condition and in the fastest time possible. For our beloved customers care, we give contactless delivery. Refer to FAQ for more information.</div>}
            </div>

            <div>
              <div className='flex justify-between' onClick={marketcontentfun}>
                <div className='font-bold'>Marketed By</div><div className='text-2xl'>{marketcontent ? '-' : '+'}</div>
              </div>
              {marketcontent && <div className='flex flex-col gap-4'>
                <div>
                  <p className='font-bold text-left'>Country of Origin:</p>
                  <p className='text-left'>India</p>
                </div>
                <div>
                  <p className='font-bold text-left'>Manufactured and Sold By:</p>
                  <p className='text-left'>Beyoung Folks Pvt. Ltd.Eklingpura Chouraha, Ahmedabad Main Road (NH 8- Near Mahadev Hotel) Udaipur, India- 313002</p>
                </div>
                <p className='text-left font-bold'>aryan@gmail.com</p>
              </div>}
            </div>

          </div>

    <Reviewpage productId={productId}/>
    </div>

  );
}

export default Productpage;
