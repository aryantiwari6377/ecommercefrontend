
import axios from "../config/axiosinstance";
const apiUrl = process.env.REACT_APP_API_URL;

const fetchcartService = async() =>{
    try{
        const token = localStorage.getItem('token');
        const response = await axios.get(`${apiUrl}/usercart`, {
          headers: {
            'Authorization': `${token}`
          }
        });
          return response;
        }
    catch(error){
        console.log(error);
        return {error: true, message: error.response?.data?.message || error.message || "Something went wrong"};
    }};



const deletecartService = async(productId) =>{
    try{
        const token = localStorage.getItem('token');
        const response = await  axios.delete(`${apiUrl}/deletecartproduct/${productId}`,
            {
           headers:{ 'Authorization': `${token}` }
          })
          return response;
        }
    catch(error){
        console.log(error);
        return {error: true, message: error.response?.data?.message || error.message || "Something went wrong"};
    }};
   

const updatecartService = async(productId, quantity) =>{
    try{
        const token = localStorage.getItem('token');
        const response = await axios.post(`${apiUrl}/updateCartQuantity`, {
            productId,
            quantity
          }, {
            headers: { 'Authorization': `${token}` }
          });
          return response;
        }
    catch(error){
        console.log(error);
        return {error: true, message: error.response?.data?.message || error.message || "Something went wrong"};
    }};
   



    export {fetchcartService,deletecartService,updatecartService} ;