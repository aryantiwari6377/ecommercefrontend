
import axios from "../config/axiosinstance";
const apiUrl = process.env.REACT_APP_API_URL;

  const navitemService = async(name,icon,link) =>{
    try{
     
        const response = await axios.post(`${apiUrl}/navitem`, {
            name: name,  // Send the form values as strings
            icon: icon,
            link: link
          });
    
          return response;
        }
    catch(error){
        console.log(error);
        return {error: true, message: error.response?.data?.message || error.message || "Something went wrong"};
    }}
    
    export {navitemService};