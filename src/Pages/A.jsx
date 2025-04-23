
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addToCart } from '../Redux/Slices/cartSlice';

function ProductList({ category }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productpagefun = (productid) => {
    navigate(`/b/${productid}`);
  };
  
  const handleAddToCart = (product,event) => {
    event.stopPropagation();
    dispatch(addToCart({ productId: product._id, quantity: 1, price: product.price, name: product.name }));;
    updateCartOnServer(product._id, 1);
     };

  const updateCartOnServer = async (productId, quantity) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/addtocart',
        { productId, quantity },
        {
          headers: {
            'Authorization': `${token}`,
          }
        }
      );
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
      try {
        const response = await fetch(`http://localhost:5000/api/products/${category}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (category) {
      fetchProducts();
    }
  }, [category]);

  useEffect(() => {
    handleSearch();
  }, [searchTerm, products]);

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 8;

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
    <div className='mt-28'>
                  <div className='md:flex justify-between md:mr-10 md:ml-10'>
                  <h1 className='text-xl text-green-600'>Products in {category}</h1>         
      <div className='flex items-center mb-2 justify-center mt-4'>
      
        <input
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='p-2 border rounded-2xl'
          placeholder='Search products'
        />
        <button onClick={handleSearch} className='ml-2 w-20 p-2 bg-yellow-500 text-white rounded-2xl'>
          Search
        </button>
      </div>
      </div>

      {currentJobs.length > 0 ? (
        <div className='mt-14'>
          <div className='grid md:grid-cols-3 gap-5 p-8 lg:p-24 lg:grid-cols-4 lg:gap-8'>
            {currentJobs.map((product) => (
              <div key={product._id} className="card h-80 rounded-sm border-black border-1 p-3 drop-shadow-2xl shadow-lg lg:h-[270px]" onClick={() => { productpagefun(product._id) }}>
                <div className='h-3/4 '>
                  <img src={product.imageUrl} alt="productimage" className='h-full w-full rounded-xl' />
                </div>
                <div className='h-3/6'>
                  <p>{product.name}</p>
                  <div className='flex justify-between pl-4'>
                  <p className='text-red-500 py-2'>₹{product.price}</p>
                  {/* <button className='w-full h-10 text-sky-700 hover:bg-sky-700 hover:text-white mx-2' onClick={(event) => { handleAddToCart(product._id, event) }}>Add to cart</button> */}
                  <button className='w-30 h-10 text-sky-700 hover:bg-sky-700 hover:text-white mx-2' onClick={(event) => { handleAddToCart(product,event) }}>Add to cart</button>
               </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 gap-10">
            <button 
              className='p-2 h-10 w-10 bg-black text-white rounded-full '
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              {currentPage}
            </button>
          
            <button 
              className='p-2 h-10 w-10 bg-black text-white  rounded-full '
              onClick={handleNextPage}
              disabled={currentPage === totalPages}

            >
              {currentPage + 1}
            </button>
          </div>
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default ProductList;
