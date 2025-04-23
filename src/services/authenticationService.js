import axios from "../config/axiosinstance";
const apiUrl = process.env.REACT_APP_API_URL;

const loginService = async(email, password) =>{
    try{
    const response = await axios.post(`${apiUrl}/login`, { email, password }, { headers: { 'Content-Type': 'application/json' } });
    return response;
}
    catch(error){
        console.log(error);
        return {error: true, message: error.response?.data?.message || error.message || "Something went wrong"};
    
    }
}

const signupService = async(name,email,password,image) =>{
    try{
    const response = await axios.post(`${apiUrl}/signup`, {
        name,
        email,
        password,
        image
      });
      return response;
    }catch(error){
        console.log(error);
        return {error: true, message: error.response?.data?.message || error.message || "Something went wrong"};
    
    }
}


const forgotpasswordService = async(email) =>{
    try{
        
        const response = await axios.post(`${apiUrl}/forgotpasswordrequest`,{email});

      return response;
    }catch(error){
        console.log(error);
        return {error: true, message: error.response?.data?.message || error.message || "Something went wrong"};
    
    }
}




const resetpasswordService = async(newpassword) =>{
    try{
        const token = localStorage.getItem('token');
        const response =  await axios.post(`${apiUrl}/reset-password/${token}`, { newpassword });

      return response;
    }catch(error){
        console.log(error);
        return {error: true, message: error.response?.data?.message || error.message || "Something went wrong"};
    
    }
}




export {loginService,signupService,forgotpasswordService,resetpasswordService};