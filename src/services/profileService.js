import axios from "../config/axiosinstance";
const apiUrl = process.env.REACT_APP_API_URL;

const profileService = async() =>{
try{
    const token = localStorage.getItem('token');
const response = await axios.get(`${apiUrl}/profiledata`, {
        headers: {
          'Authorization': `${token}`,
        },
      });

      return response;
    }
catch(error){
    console.log(error);
    return {error: true, message: error.response?.data?.message || error.message || "Something went wrong"};
}}


export { profileService};