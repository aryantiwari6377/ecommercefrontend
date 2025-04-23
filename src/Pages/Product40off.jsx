import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import { addToCart } from '../Redux/Slices/cartSlice';
import {productlistService,updatecartService} from '../services/categoryService';

function Product40off() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedGender, setSelectedGender] = useState("men");
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [show, setShow] = useState(false);
 const category = "40-off";
  const filterOptions = {
    men: ["shirts", "t-shirts", "Hoodies","jeans", "shoes", "shorts"],
    women: ["top-tshirts", "jackets", "shoes", "kurtis", "sarees"],
    kid: ["shirts", "t-shirts", "frocks", "jackets", "shoes"],
  };

  const productpagefun = (productid) => {
    navigate(`/b/${productid}`);
  };
  
  const handleAddToCart = (product, event) => {
    event.stopPropagation();
    dispatch(addToCart({ productId: product._id, quantity: 1, price: product.price, name: product.name }));
    updateCartOnServer(product._id, 1);
  };

  const updateCartOnServer = async (productId, quantity) => {
    try {
       const response = await updatecartService(productId, quantity);
       if(!response.error){
        console.log("cart updated");
       }
    } catch (error) {
      console.error('Error updating cart on server:', error);
    }
  };

  const handleSearch = () => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await productlistService(category);
      if (response.error) {
        console.error("Failed to fetch products:", response.message);
        return;
      }
      console.log(response);
      setProducts(response.data);
     
    };

    if (category) {
      fetchProducts();
    }
  }, [category]);

  useEffect(() => {
    handleSearch();
  }, [searchTerm, products]);


  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 9;

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredProducts.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(filteredProducts.length / jobsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  
  return (
    <div className="mt-28 mx-4 md:mx-8 lg:mx-12">
      {/* Improved Header Section */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Title */}
          <div className="w-full md:w-auto">
            <h1 className="text-2xl text-green-600 font-bold capitalize">
              Products in {category}
            </h1>
            <div className="h-1 w-20 bg-green-600 mt-1 rounded-full"></div>
          </div>

         <div className={`flex w-full ${show ? "flex-col":"flex-row"} md:flex-row md:justify-between`}>
          {/* Search Bar */}
          <div className="w-full md:w-1/2 relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`${show ? "inline" : "hidden"} md:inline w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
              placeholder="Search products..."
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              onClick={()=>setShow(!show)}
            />
          </div>

       

</div>
        </div>
      </div>

      {/* Products Section */}
      {currentJobs.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentJobs.map((product) => (
              <div 
                key={product._id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => productpagefun(product._id)}
              >
                <div className="h-70 sm:h-60 overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt="productimage" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-gray-800 font-medium mb-2 line-clamp-1">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-red-500 font-bold">₹{product.price}</p>
                    <button 
                      className="bg-sky-100 text-sky-700 px-3 py-1 rounded hover:bg-sky-700 hover:text-white transition-colors"
                      onClick={(event) => handleAddToCart(product, event)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center items-center mt-10 mb-6">
            <button 
              className="h-10 w-10 rounded-full bg-black text-white mr-2 hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              {currentPage}
            </button>
            <button 
              className="h-10 w-10 rounded-full bg-black text-white ml-2 hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              {currentPage + 1}
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-10 text-center">
          <h3 className="text-xl font-medium text-gray-500">No products found</h3>
          <p className="mt-2 text-gray-400">Try changing your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}

export default Product40off;