
import axios from "../config/axiosinstance";
const apiUrl = process.env.REACT_APP_API_URL;

const productlistService = async(category) =>{
    try{
        const response = await axios.get(`${apiUrl}/products/${category}`);
       
          return response;
        }
    catch(error){
        console.log(error);
        return {error: true, message: error.response?.data?.message || error.message || "Something went wrong"};
    }};


    const updatecartService = async(productId, quantity) =>{
        try{
            const token = localStorage.getItem('token');
            const response =   await axios.post(
                `${apiUrl}/addtocart`,
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
        }};
    

 
  
    
    export {productlistService, updatecartService};