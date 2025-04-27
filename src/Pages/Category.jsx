
// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { useDispatch } from 'react-redux';
// // import axios from 'axios';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faFilter } from '@fortawesome/free-solid-svg-icons';
// // import { addToCart } from '../Redux/Slices/cartSlice';
// // import {productlistService,updatecartService} from '../services/categoryService';

// // function ProductList({ category }) {
// //   const [products, setProducts] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [filteredProducts, setFilteredProducts] = useState([]);
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();
// //   const [selectedGender, setSelectedGender] = useState("men");
// //   const [showFilterOptions, setShowFilterOptions] = useState(false);
// //   const [selectedFilters, setSelectedFilters] = useState([]);
  
// //   const filterOptions = {
// //     men: ["Shirt", "T-shirt", "Hoodies", "Shoes", "Shorts"],
// //     women: ["Top & T-shirt", "Jackets", "Shoes", "Kurtis", "Sarees"],
// //     kid: ["Shirts", "T-shirts", "Frocks", "Jackets", "Shoes"],
// //   };

  
// //   const productpagefun = (productid) => {
// //     navigate(`/b/${productid}`);
// //   };

  
  
// //   const handleAddToCart = (product,event) => {
// //     event.stopPropagation();
// //     dispatch(addToCart({ productId: product._id, quantity: 1, price: product.price, name: product.name }));;
// //     updateCartOnServer(product._id, 1);
// //      };

// //   const updateCartOnServer = async (productId, quantity) => {
// //     try {
// //        const response = await updatecartService(productId, quantity);
// //        if(!response.error){
// //         console.log("cart updated");
// //        }
// //     } catch (error) {
// //       console.error('Error updating cart on server:', error);
// //     }
// //   };

// //   const handleSearch = () => {
// //     const filtered = products.filter(product =>
// //       product.name.toLowerCase().includes(searchTerm.toLowerCase())
// //     );
// //     setFilteredProducts(filtered);
// //   };

// //   useEffect(() => {
// //     const fetchProducts = async () => {
   
// //         const response = await productlistService(category);
// //         if (response.error) {
// //           console.error("Failed to fetch products:", res.message);
// //           return;
// //         }
// //         // const data = await response.json();
// //         console.log(response);
// //         setProducts(response.data);
// //         setFilteredProducts(response.data);
// //         if (category === "fashion") {
// //           const fashiondata = response.data.filter((item) => item.details.gender === selectedGender);
// //           setProducts(fashiondata);
// //       }
      
    
// //     };

// //     if (category) {
// //       fetchProducts();
// //     }
// //   }, [category,selectedGender]);

// //   useEffect(() => {
// //     handleSearch();
// //   }, [searchTerm, products]);

// //   const [currentPage, setCurrentPage] = useState(1);
// //   const jobsPerPage = 9;

// //   const indexOfLastJob = currentPage * jobsPerPage;
// //   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
// //   const currentJobs = filteredProducts.slice(indexOfFirstJob, indexOfLastJob);

// //   const totalPages = Math.ceil(filteredProducts.length / jobsPerPage);

// //   const handleNextPage = () => {
// //     if (currentPage < totalPages) {
// //       setCurrentPage(currentPage + 1);
// //     }
// //   };

// //   const handlePrevPage = () => {
// //     if (currentPage > 1) {
// //       setCurrentPage(currentPage - 1);
// //     }
// //   };

// //   const handleFilter = () => {
// //     if (selectedFilters.length === 0) {
// //       setFilteredProducts(products);
// //       return;
// //     }
// //     const filteredProducts = products.filter((product) =>
// //       selectedFilters.includes(product.details.subcategory)
// //     );
// //     setFilteredProducts(filteredProducts);
// //   };
  

 





// //   return (
// //     <div className='mt-28'>
               
// //       <div className='md:flex items-center justify-between md:mx-10 flex-wrap'>
// //   <h1 className='text-xl text-green-600 font-bold text-[24px] mb-2'>
// //     Products in {category}
// //   </h1>

// //   <div className='flex justify-center items-center mb-2 mt-2 md:mt-0 md:ml-[20%] '>
// //     <input
// //       type='text'
// //       value={searchTerm}
// //       onChange={(e) => setSearchTerm(e.target.value)}
// //       className='p-2 border rounded-2xl outline-none w-[250px]'
// //       placeholder='Search products'
// //     />
// //   </div>

// // {category === "fashion" && (
// //   <div className="flex flex-col gap-4 mt-2 md:mt-0">
// //     {/* Dropdown */}
// //     <div className="flex gap-6 items-center">
// //       <select
// //         className="border border-gray p-1"
// //         value={selectedGender}
// //         onChange={(e) => setSelectedGender(e.target.value)}
// //       >
// //         <option value="men">men</option>
// //         <option value="women">women</option>
// //         <option value="kid">kid</option>
// //       </select>

// //       <div className="ml-auto mt-2 md:mt-0">
// //         <FontAwesomeIcon
// //           icon={faFilter}
// //           className="text-gray-600 cursor-pointer"
// //           onClick={() => setShowFilterOptions(true)}
// //         />
// //       </div>
// //     </div>

   
// //   </div>
// // )}



// //       {currentJobs.length > 0 ? (
// //         <div className='mt-6'>
// //           <div className='grid md:grid-cols-3 gap-5 p-8 lg:p-24 xl:grid-cols-4 xl:gap-8'>
// //             {currentJobs.map((product) => (
// //               <div key={product._id} className="card h-70 rounded-sm border-black border-1 p-3 drop-shadow-2xl shadow-lg lg:h-[270px]" onClick={() => { productpagefun(product._id) }}>
// //                 <div className='h-3/4 '>
// //                   <img src={product.imageUrl} alt="productimage" className='h-full w-full rounded-xl' />
// //                 </div>
// //                 <div className='h-3/6'>
// //                   <p>{product.name}</p>
// //                   <div className='flex justify-between pl-4'>
// //                   <p className='text-red-500 py-2'>₹{product.price}</p>
// //                   {/* <button className='w-full h-10 text-sky-700 hover:bg-sky-700 hover:text-white mx-2' onClick={(event) => { handleAddToCart(product._id, event) }}>Add to cart</button> */}
// //                   <button className='w-30 h-10 text-sky-700 hover:bg-sky-700 hover:text-white mx-2' onClick={(event) => { handleAddToCart(product,event) }}>Add to cart</button>
// //                </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //           <div className="flex justify-center mb-4 gap-10">
// //             <button 
// //               className='p-2 h-10 w-10 bg-black text-white rounded-full '
// //               onClick={handlePrevPage}
// //               disabled={currentPage === 1}
// //             >
// //               {currentPage}
// //             </button>
          
// //             <button 
// //               className='p-2 h-10 w-10 bg-black text-white  rounded-full '
// //               onClick={handleNextPage}
// //               disabled={currentPage === totalPages}

// //             >
// //               {currentPage + 1}
// //             </button>
// //           </div>
// //         </div>
// //       ) : (
// //         <p>No products found.</p>
// //       )}
// //     </div>
// //     </div>
// //   );
// // }

// // export default ProductList;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFilter, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { addToCart } from '../Redux/Slices/cartSlice';
// import {productlistService,updatecartService} from '../services/categoryService';

// function ProductList({ category }) {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [selectedGender, setSelectedGender] = useState("men");
//   const [showFilterOptions, setShowFilterOptions] = useState(false);
//   const [selectedFilters, setSelectedFilters] = useState([]);
  
//   const filterOptions = {
//     men: ["shirts", "t-shirts", "Hoodies","jeans", "shoes", "shorts"],
//     women: ["top-tshirts", "jackets", "shoes", "kurtis", "sarees"],
//     kid: ["shirts", "t-shirts", "frocks", "jackets", "shoes"],
//   };

//   const productpagefun = (productid) => {
//     navigate(`/b/${productid}`);
//   };
  
//   const handleAddToCart = (product, event) => {
//     event.stopPropagation();
//     dispatch(addToCart({ productId: product._id, quantity: 1, price: product.price, name: product.name }));
//     updateCartOnServer(product._id, 1);
//   };

//   const updateCartOnServer = async (productId, quantity) => {
//     try {
//        const response = await updatecartService(productId, quantity);
//        if(!response.error){
//         console.log("cart updated");
//        }
//     } catch (error) {
//       console.error('Error updating cart on server:', error);
//     }
//   };

//   const handleSearch = () => {
//     const filtered = products.filter(product =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await productlistService(category);
//       if (response.error) {
//         console.error("Failed to fetch products:", response.message);
//         return;
//       }
//       console.log(response);
//       setProducts(response.data);
//       setFilteredProducts(response.data);
//       if (category === "fashion") {
//         const fashiondata = response.data.filter((item) => item.details.gender === selectedGender);
//         setProducts(fashiondata);
//         setFilteredProducts(fashiondata);
//       }
//     };

//     if (category) {
//       fetchProducts();
//     }
//   }, [category, selectedGender]);

//   useEffect(() => {
//     handleSearch();
//   }, [searchTerm, products]);

//   useEffect(() => {
//     handleFilter();
//   }, [selectedFilters]);

//   const [currentPage, setCurrentPage] = useState(1);
//   const jobsPerPage = 9;

//   const indexOfLastJob = currentPage * jobsPerPage;
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//   const currentJobs = filteredProducts.slice(indexOfFirstJob, indexOfLastJob);

//   const totalPages = Math.ceil(filteredProducts.length / jobsPerPage);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleFilter = () => {
//     if (selectedFilters.length === 0) {
//       setFilteredProducts(products);
//       return;
//     }
//     const filteredProducts = products.filter((product) =>
//       selectedFilters.includes(product.details.subcategory)
//     );
//     setFilteredProducts(filteredProducts);
//   };
  
//   const toggleFilter = (filter) => {
//     const cleanedFilter = filter.replace(/-/g, "");
//     if (selectedFilters.includes(cleanedFilter)) {
//       setSelectedFilters(selectedFilters.filter(item => item !== cleanedFilter));
//     } else {
//       setSelectedFilters([...selectedFilters, cleanedFilter]);
//     }
//   };

//   const clearFilters = () => {
//     setSelectedFilters([]);
//     setFilteredProducts(products);
//   };

//   return (
//     <div className='mt-28'>
//       <div className='md:flex items-center justify-between md:mx-10 flex-wrap'>
//         <h1 className='text-xl text-green-600 font-bold text-[24px] mb-2'>
//           Products in {category}
//         </h1>

//         <div className='flex justify-center items-center mb-2 mt-2 md:mt-0 md:ml-[20%] '>
//           <input
//             type='text'
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className='p-2 border rounded-2xl outline-none w-[250px]'
//             placeholder='Search products'
//           />
//         </div>

//         {category === "fashion" && (
//           <div className="flex flex-col gap-4 mt-2 md:mt-0">
//             <div className="flex gap-6 items-center relative">
//               <select
//                 className="border border-gray p-1"
//                 value={selectedGender}
//                 onChange={(e) => {
//                   setSelectedGender(e.target.value);
//                   setSelectedFilters([]);
//                 }}
//               >
//                 <option value="men">men</option>
//                 <option value="women">women</option>
//                 <option value="kid">kid</option>
//               </select>

//               <div className="ml-auto mt-2 md:mt-0">
//                 <FontAwesomeIcon
//                   icon={faFilter}
//                   className="text-gray-600 cursor-pointer"
//                   onClick={() => setShowFilterOptions(!showFilterOptions)}
//                 />
//               </div>
//             </div>

//             {/* Filter Options Modal */}
//             {showFilterOptions && (
//               <div className="absolute right-10 top-40 z-10 bg-white p-4 shadow-lg rounded-md border">
//                 <div className="flex justify-between items-center mb-2">
//                   <h3 className="font-semibold">Filter by Category</h3>
//                   <FontAwesomeIcon 
//                     icon={faTimes} 
//                     className="cursor-pointer" 
//                     onClick={() => setShowFilterOptions(false)} 
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                 {filterOptions[selectedGender].map((option) => {
//   const normalizedOption = option.replace(/-/g, "");  // Declare and normalize the option

//   return (
//     <div key={option} className="flex items-center gap-2">
//       <input
//         type="checkbox"
//         id={option}
//         checked={selectedFilters.includes(normalizedOption)}  // Use normalized version for checking
//         onChange={() => toggleFilter(normalizedOption)}  // Pass normalized version when toggling
//         className="w-4 h-4"
//       />
//       <label htmlFor={option}>{option}</label>
//     </div>
//   );
// })}

//                 </div>
//                 <div className="mt-4 flex justify-between">
//                   <button 
//                     className="bg-gray-200 px-3 py-1 rounded"
//                     onClick={clearFilters}
//                   >
//                     Clear All
//                   </button>
//                   <button 
//                     className="bg-blue-600 text-white px-3 py-1 rounded"
//                     onClick={() => setShowFilterOptions(false)}
//                   >
//                     Apply
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {currentJobs.length > 0 ? (
//           <div className='mt-6'>
//             <div className='grid md:grid-cols-3 gap-5 p-8 lg:p-24 xl:grid-cols-4 xl:gap-8'>
//               {currentJobs.map((product) => (
//                 <div key={product._id} className="card h-70 rounded-sm border-black border-1 p-3 drop-shadow-2xl shadow-lg lg:h-[270px]" onClick={() => { productpagefun(product._id) }}>
//                   <div className='h-3/4 '>
//                     <img src={product.imageUrl} alt="productimage" className='h-full w-full rounded-xl' />
//                   </div>
//                   <div className='h-3/6'>
//                     <p>{product.name}</p>
//                     <div className='flex justify-between pl-4'>
//                       <p className='text-red-500 py-2'>₹{product.price}</p>
//                       <button className='w-30 h-10 text-sky-700 hover:bg-sky-700 hover:text-white mx-2' onClick={(event) => { handleAddToCart(product, event) }}>Add to cart</button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-center mb-4 gap-10">
//               <button 
//                 className='p-2 h-10 w-10 bg-black text-white rounded-full'
//                 onClick={handlePrevPage}
//                 disabled={currentPage === 1}
//               >
//                 {currentPage}
//               </button>
//               <button 
//                 className='p-2 h-10 w-10 bg-black text-white rounded-full'
//                 onClick={handleNextPage}
//                 disabled={currentPage === totalPages}
//               >
//                 {currentPage + 1}
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="w-full text-center mt-10">
//             <p>No products found.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductList;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import { addToCart } from '../Redux/Slices/cartSlice';
import {productlistService,updatecartService} from '../services/categoryService';

function ProductList({ category }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedGender, setSelectedGender] = useState("men");
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [show, setShow] = useState(false);

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
     // console.log(response);
      setProducts(response.data);
      setFilteredProducts(response.data);
      if (category === "fashion") {
        const fashiondata = response.data.filter((item) => item.details.gender === selectedGender);
        setProducts(fashiondata);
        setFilteredProducts(fashiondata);
      }
    };

    if (category) {
      fetchProducts();
    }
  }, [category, selectedGender]);

  useEffect(() => {
    handleSearch();
  }, [searchTerm, products]);

  useEffect(() => {
    handleFilter();
  }, [selectedFilters]);

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

  const handleFilter = () => {
    if (selectedFilters.length === 0) {
      setFilteredProducts(products);
      return;
    }
    const filteredProducts = products.filter((product) =>
      selectedFilters.includes(product.details.subcategory)
    );
    setFilteredProducts(filteredProducts);
  };
  
  const toggleFilter = (filter) => {
    const cleanedFilter = filter.replace(/-/g, "");
    if (selectedFilters.includes(cleanedFilter)) {
      setSelectedFilters(selectedFilters.filter(item => item !== cleanedFilter));
    } else {
      setSelectedFilters([...selectedFilters, cleanedFilter]);
    }
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    setFilteredProducts(products);
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

          {/* Filter Section */}
          {category === "fashion" && (
            <div className="w-full md:w-auto flex items-center gap-3 mt-1 md:justify-end">
              <select
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={selectedGender}
                onChange={(e) => {
                  setSelectedGender(e.target.value);
                  setSelectedFilters([]);
                }}
              >
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kid">Kids</option>
              </select>

              <button 
                className="bg-green-600 text-white p-3 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors"
                onClick={() => setShowFilterOptions(!showFilterOptions)}
              >
                <FontAwesomeIcon icon={faFilter} />
                <span className="hidden md:inline">Filter</span>
              </button>
            </div>
          )}

</div>
        </div>
      </div>

      {/* Filter Options Modal */}
      {showFilterOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-40 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Filter by Category</h3>
              <FontAwesomeIcon 
                icon={faTimes} 
                className="cursor-pointer" 
                onClick={() => setShowFilterOptions(false)} 
              />
            </div>
            
            <div className="border-b border-gray-200 mb-4 pb-2">
              <div className="grid grid-cols-2 gap-2">
                {filterOptions[selectedGender].map((option) => {
                  const normalizedOption = option.replace(/-/g, "");
                  
                  return (
                    <div key={option} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={option}
                        checked={selectedFilters.includes(normalizedOption)}
                        onChange={() => toggleFilter(option)}
                        className="w-4 h-4 accent-green-600"
                      />
                      <label htmlFor={option} className="text-gray-700 capitalize">{option}</label>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="mt-4 flex justify-between">
              <button 
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
                onClick={clearFilters}
              >
                Clear All
              </button>
              <button 
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                onClick={() => setShowFilterOptions(false)}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

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
          <h3 className="text-xl font-medium text-gray-500">Loading....</h3>
         
        </div>
      )}
    </div>
  );
}

export default ProductList;