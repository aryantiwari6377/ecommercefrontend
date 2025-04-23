import axios from "../config/axiosinstance";
const apiUrl = process.env.REACT_APP_API_URL;

  const profileimageService = async(uploadData) =>{
    try{
        const token = localStorage.getItem('token');
        const response = await axios.post(
            `${apiUrl }/uploadProfileImage`,
            { url: uploadData },
            {
              headers: {
                'Authorization': `${token}`,
              },
            }
          );
    
          return response;
        }
    catch(error){
        console.log(error);
        return {error: true, message: error.response?.data?.message || error.message || "Something went wrong"};
    }}
    
    export {profileimageService};