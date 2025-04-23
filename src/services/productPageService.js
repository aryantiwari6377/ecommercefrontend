

import axios from "../config/axiosinstance";
const apiUrl = process.env.REACT_APP_API_URL;

const productService = async(productId) =>{
try{
    const token = localStorage.getItem('token');
const response = await axios.get(`${apiUrl}/productdetail/${productId}`, {
    headers: { 'Authorization': `${token}` }
  });


      return response;
    }
catch(error){
    console.log(error);
    return {error: true, message: error.response?.data?.message || error.message || "Something went wrong"};
}}



const orderlistService = async( productpageQuantity,Productdetail,color,size) =>{
    try{
        const token = localStorage.getItem('token');
    const response =await axios.post(`${apiUrl}/orderlist`, {
        quantity: productpageQuantity,
        product: Productdetail,
        color: color,
        size: size,
      }, {
        headers: { 'Authorization': `${token}` }
      });
    
          return response;
        }
    catch(error){
        console.log(error);
        return {error: true, message: error.response?.data?.message || error.message || "Something went wrong"};
    }}
    

    
const addcartService = async( productId, quantity) =>{
    try{
        const token = localStorage.getItem('token');
    const response =await axios.post(
        'http://localhost:5000/api/addtocart',
        { productId, quantity },
        {
          headers: {
            'Authorization': `${token}`,
          }
        }
      );
    
          return response;
        }
    catch(error){
        console.log(error);
        return {error: true, message: error.response?.data?.message || error.message || "Something went wrong"};
    }}

const wishlistService = (productId) =>{
    try{
        const token = localStorage.getItem('token');
    const res = axios.post(`http://localhost:5000/api/wishlist/${productId}`, 
        { productId }, 
        { 
          headers: {
            'Authorization': `${token}`,
            
          }
        }
        
      );
    } catch(error){
        console.log(error);
        return {error: true, message: error.response?.data?.message || error.message || "Something went wrong"};
    }
}
    
    


export {productService, orderlistService,addcartService,wishlistService};