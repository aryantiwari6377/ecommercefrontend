import axios from "../config/axiosinstance";
const apiUrl = process.env.REACT_APP_API_URL;

const getWishlistService =  async (productId) => {
    try {
        
      const res = await axios.get(`${apiUrl}/reviews/${productId}`);
      console.log("res");
      return res;
    } catch (error) {
      console.error("Error getwishlist:", error);
    }
  };


  
const submitreviewService =  async (productId,rating) => {
    try{
  const token = localStorage.getItem('token');
      
  const res = await axios.post(`${apiUrl}/reviews`, {
      productId,
      rating
  }, {
      headers: {
          'Authorization': `${token}`
      }
  })
  console.log("res");
      return res;
}
catch(error){
    console.error("Error getwishlist:", error);
}
}

  export {getWishlistService, submitreviewService };