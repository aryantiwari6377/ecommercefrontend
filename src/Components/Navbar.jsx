// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faHome, faUser, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// import Addcardmenu from './Addcardmenu'; 
// import borosil from "../images/borosil_blue_new.png";
// import '../Styles/Navbar.css';
// import { useSelector } from 'react-redux';

// function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSliderOpen, setIsSliderOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const toggleSlider = () => {
//     setIsSliderOpen(!isSliderOpen);
//   };

//   const items = useSelector((state) => state.cart.items);
//   const cartLength = items.length;

//   return (
//     <div className="w-full">
//       <nav className="flex items-center justify-between p-4">
//         <div className="leftnav">
//           <img src={borosil} alt="Borosil Logo" />
//         </div>
//         <div className="md:hidden flex items-center">
//           <button onClick={toggleMobileMenu} className="text-xl">
//             <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
//           </button>
//         </div>
//         <div className={`items-start flex flex-col md:flex md:flex-row md:space-x-4 absolute md:relative top-16 right-0 bg-white md:bg-transparent md:w-[45%] md:top-auto md:right-auto md:space-y-0 p-4 md:p-0 
//           ${isMobileMenuOpen ? 'block' : 'hidden'} md:block w-[340px] justify-between`}>
//           <Link to="/login" className="py-4 font-bold">Login</Link>
//           <Link to="/" className='py-4'><FontAwesomeIcon className="ficon" icon={faHome} /><span className='ml-1'>Home</span></Link>
//           <Link to="/profile" className='py-4'><FontAwesomeIcon className="ficon" icon={faUser} /><span className='ml-1'>Profile</span></Link>
//           {/* <div className="py-4"><FontAwesomeIcon className="ficon" onClick={toggleSlider} icon={faShoppingCart} /><span className='ml-1'>Cart {cartLength}</span></div> */}
//           <div className="relative py-4">
//             <FontAwesomeIcon className="ficon" onClick={toggleSlider} icon={faShoppingCart} />
//             {cartLength > 0 && (
//               <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
//                 {cartLength}
//               </span>
//             )}
//           </div>
//         </div>
//       </nav>
//      <Addcardmenu isOpen={isSliderOpen} toggleSlider={toggleSlider} />
//     </div>
//   );
// }

// export default Navbar;



// // import React, {useState} from 'react'
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faHome, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// // import '../Styles/Navbar.css';
// // import borosil from "../images/borosil_blue_new.png";
// // import {Link} from "react-router-dom";
// // import Addcardmenu from './Addcardmenu';

// // function Navbar() {
// //   const [isSliderOpen, setIsSliderOpen] = useState(false);

// //   const toggleSlider = () => {
// //     setIsSliderOpen(!isSliderOpen);
// //   };

// //   return (
// //     <div className="w-full">
// //      <nav className='flex '>
// //         <div className='leftnav  '>
// //              <img src={borosil}/>
// //         </div>
// //         <div className='rightnav  '>
// //             <Link to="/login" className='py-4 font-bold'>Login</Link>
// //          <Link to="/"><FontAwesomeIcon  className='ficon' icon={faHome}/></Link>
// //          <Link to="/profile">  <FontAwesomeIcon className='ficon' icon={faUser}/></Link>
// //            <FontAwesomeIcon className='ficon'  onClick={toggleSlider} icon={faShoppingCart}/>
// //          {/* <button className='ficon' onClick={toggleSlider}><FontAwesomeIcon icon={faShoppingCart}/></button> */}
// //         </div>
// //      </nav>
// //      <Addcardmenu isOpen={isSliderOpen} toggleSlider={toggleSlider} />
// //     </div>
// //   )
// // }

// // export default Navbar

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faUser, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import Addcardmenu from './Addcardmenu'; 
import borosil from "../images/borosil_blue_new.png";
import '../Styles/Navbar.css';
import { useSelector } from 'react-redux';
import axios from 'axios';
import User from '../images/user.jpg';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const location = useLocation();
  const profileUrl = useSelector((state) => state.profile.profileUrl);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const items = useSelector((state) => state.cart.items);
  const cartLength = items.length;

 
  useEffect(() => {
    closeMobileMenu();
  }, [location]);
  
  return (
    <div className="w-full">
      <nav className="flex items-center z-50 justify-between p-4">
        
        <div className="leftnav">
          <img src={borosil} alt="Borosil Logo" />
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-xl">
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
        <div className={`items-start flex flex-col md:flex md:flex-row md:space-x-4 absolute md:relative top-16 right-0 bg-white md:bg-transparent md:w-[45%] md:top-auto md:right-auto md:space-y-0 p-4 md:p-0 
          ${isMobileMenuOpen ? 'block' : 'hidden'} md:block w-[340px] justify-between`}>
          <Link to="/login" onClick={closeMobileMenu} className="py-4 font-bold">Login</Link>
          <Link to="/" onClick={closeMobileMenu} className='py-4'><FontAwesomeIcon className="ficon" icon={faHome} /><span className='ml-1'>Home</span></Link>
          {/* <Link to="/profile" onClick={closeMobileMenu} className='py-4'><FontAwesomeIcon className="ficon" icon={faUser} /><span className='ml-1'>Profile</span></Link> */}
        
          <div className="relative py-4 cursor-pointer">
            <FontAwesomeIcon className="ficon" onClick={toggleSlider} icon={faShoppingCart} />
            {cartLength > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {cartLength}
              </span>
            )}
            <span className='ml-1'>cart</span>
          </div>
          <Link to="/profile" onClick={closeMobileMenu} className='py-4'><div className='flex'><img src={profileUrl ? profileUrl : User} className='rounded-full h-10 w-10'/></div></Link>

          
        </div>
      </nav>
      <Addcardmenu isOpen={isSliderOpen} toggleSlider={toggleSlider} />
    </div>
  );
}

export default Navbar;
