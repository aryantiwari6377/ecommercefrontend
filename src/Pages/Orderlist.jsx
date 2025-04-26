import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {deleteorderService,orderlistService } from '../services/orderListService';


function Orderlist() {

    const [userorder, setuserorder] = useState([]);
    const navigate= useNavigate();
    
    const userOrder = async () => {
       
     
          const response = await orderlistService();
          // console.log(response);
          if(!response.error){
          setuserorder(response.data.orders);
         // console.log("user orders are", userorder);
          }
      
      };
   
       const deleteorder = async(productId) =>{
     
           
            const response = await deleteorderService(productId);
          if(!response.error){
            // console.log(response.data.orders);
            setuserorder(response.data.orders);
          }
       }

      useEffect(()=>{
          
        userOrder();
      },[])

    

const productpageopen = (productid) => {
  navigate(`/b/${productid}`);
};


  return (
    <div className='mt-32'>
    {userorder.length > 0 ? (
      userorder.map(order => (
        <div  className='flex justify-between mb-6 mt-10 bg-[rgb(255,255,255)] p-4 rounded-2xl shadow-xl'>
          <div className='flex gap-[90px] sm:gap-60'  onClick={()=>{productpageopen(order.productId)}}>
            <div className='h-[100px] w-[80px]'>
              <img src={order.imageUrl} alt={order.name} className='h-full'/>
            </div>
            <div>{order.totalprice}</div>
             
          </div>
          <div className='flex justify-end gap-4 text-red-500'>
            <span onClick={() => deleteorder(order._id)}>cancel order</span>
          </div>
        </div>
      ))
    ) : (
      <p>no order</p>
    )}
  </div>
  )
}

export default Orderlist