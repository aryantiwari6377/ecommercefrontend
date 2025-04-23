import axios from "../config/axiosinstance";
const apiUrl = process.env.REACT_APP_API_URL;

const deletewishService = async (productId) => {
    try {
        const token = localStorage.getItem('token');
      const res = await axios.delete(`${apiUrl}/deletewishlist/${productId}`, {
        headers: { Authorization: `${token}` },
      });
      console.log("Product deleted successfully");
      return res;
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  
const getWishlistService =  async () => {
    try {
        const token = localStorage.getItem('token');
      const res = await axios.get(`${apiUrl}/getwishlist`, {
        headers: { Authorization: `${token}` },
      });
      console.log("res");
      return res;
    } catch (error) {
      console.error("Error getwishlist:", error);
    }
  };


  export { deletewishService, getWishlistService };