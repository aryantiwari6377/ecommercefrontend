import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faUser, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import Addcardmenu from './Addcardmenu'; 
import borosil from "../images/borosil_blue_new.png";
import '../Styles/Navbar.css';
import { useSelector } from 'react-redux';
import axios from 'axios';

// Define a lookup table for FontAwesome icons
const iconLookup = {
  faBars: faBars,
  faHome: faHome,
  faUser: faUser,
  faShoppingCart: faShoppingCart,
  faTimes: faTimes,
};

function Navnew() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [navItems, setNavItems] = useState([]); // Store nav items fetched from the server
  const location = useLocation();
  const profileUrl = useSelector((state) => state.profile.profileUrl);
  const items = useSelector((state) => state.cart.items);
  const cartLength = items.length;


  const fetchNavItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/getnavitem'); 
      console.log("hello");
      console.log(response );
      setNavItems(response.data);
      console.log("state is",navItems);
    } catch (error) {
      console.error("Error fetching navbar items:", error);
    }
  };


  useEffect(() => {
   
   
    fetchNavItems();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    closeMobileMenu();
  }, [location]);

  return (
    <div className="w-full mt-42">
        <p>Hello</p>
      <nav className="flex items-center justify-between p-4">
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
          
          {navItems.map((item) => (
            <Link to={item.link} onClick={closeMobileMenu} className="py-4 font-bold" key={item.name}>
              <FontAwesomeIcon className="ficon" icon={iconLookup[item.icon]} />
              <span className="ml-1">{item.name}</span>
            </Link>
          ))}

          {/* Cart Icon */}
          <div className="relative py-4">
            <FontAwesomeIcon className="ficon" onClick={toggleSlider} icon={faShoppingCart} />
            {cartLength > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {cartLength}
              </span>
            )}
            <span className="ml-1">Cart</span>
          </div>

          {/* Profile Image */}
          <Link to="/profile" onClick={closeMobileMenu} className="py-4">
            <div className="flex">
              <img src={profileUrl} className="rounded-full h-10 w-10" alt="Profile" />
            </div>
          </Link>
         
           <button onClick={fetchNavItems}>get</button>
        </div>
      </nav>
      <Addcardmenu isOpen={isSliderOpen} toggleSlider={toggleSlider} />
    </div>
  );
}

export default Navnew;
