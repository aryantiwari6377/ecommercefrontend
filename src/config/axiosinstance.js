// src/axiosInstance.js
import axios from 'axios';

// Create an instance of axios with a base URL and default headers
const axiosInstance = axios.create({
 // baseURL: 'http://your-api-url.com', // Replace with your API URL
});



// Response interceptor to handle 401 Unauthorized errors
axiosInstance.interceptors.response.use(
  (response) => response, // If the response is successful, return it
  (error) => {
    if (error.response && error.response.status === 401) {
      // If the error is 401, remove the token and redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login'; // Redirect to login page
    }
    return Promise.reject(error); // Return the error if the response fails
  }
);

export default axiosInstance;
