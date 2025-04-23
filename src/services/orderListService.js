import axios from "../config/axiosinstance";
const apiUrl = process.env.REACT_APP_API_URL;

const deleteorderService = async(productId) =>{
    try{
        const token = localStorage.getItem('token');
        const response = await axios.delete(`${apiUrl}/deleteorder`,{
            data: { productId } , 
            headers: {
              'Authorization': `${token}`
            }
        });
    
          return response;
        }
    catch(error){
        console.log(error);
        return {error: true, message: error.response?.data?.message || error.message || "Something went wrong"};
    }}
    


    
const orderlistService = async() =>{
    try{
        const token = localStorage.getItem('token');
        const response = 
        await axios.get(`${apiUrl}/userorder`, {
               
            headers: {
              'Authorization': `${token}`
            }
          });
    
          return response;
        }
    catch(error){
        console.log(error);
        return {error: true, message: error.response?.data?.message || error.message || "Something went wrong"};
    }}
    




    
    export { deleteorderService, orderlistService };

