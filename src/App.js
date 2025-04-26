
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Profile from './Pages/Profile';
import CategoryPage from './Pages/Category';
import Loginpage from './Pages/Loginpage';
import Signuppage from './Pages/Signuppage';
import Passwordchange from './Pages/Passwordchange';
import Resetpassword from './Pages/Resetpassword';
import Productpage from './Pages/Productpage';
import Cardproducts from './Pages/Cardproducts';
import Orderlist from './Pages/Orderlist';
import Wishlist from './Pages/Wishlist';
import Returnpage from './Pages/Returnpage';
import Editprofile from './Pages/Editprofile';
import Faqpage from './Pages/Faqpage';
import TermConditionpage from './Pages/TermConditionpage';
import Shippingpage from './Pages/Shippingpage';
import Privacypolicy from './Pages/Privacypolicy';
import PrivateRoute from './Components/PrivateRoute';
import Fp from "./Pages/Fp";
import Dp from "./Pages/Dp";
import Navitem from './Pages/Navitem';
import Navnew from './Components/Navnew';
import Paymentpage from './Pages/Paymentpage';
import Cardpaymethod from './Pages/cardpaymethod';
import Cancel from './Pages/Cancel';
import Success from  './Pages/Success';
import Paypalpage from './Pages/Paypalpage';
import B from './Pages/B';

import Product40off from './Pages/Product40off';
import Product50off from './Pages/Product50off';
import Product60off from './Pages/Product60off';
import Shoes from './Pages/shoes';
import Shirt from './Pages/Shirt';
import Furniture from './Pages/Furniture';

function App() {
  return (
    <div className="App xl:mx-auto xl:w-[1200px]">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
        <Route path="/mobileandtablets" element={<PrivateRoute element={<CategoryPage category="mobile" />} />} />
        <Route path="/tvs" element={<PrivateRoute element={<CategoryPage category="tvs" />} />} />
        <Route path="/fashion" element={<PrivateRoute element={<CategoryPage category="fashion" />} />} />
        <Route path="/beauty" element={<PrivateRoute element={<CategoryPage category="beauty" />} />} />
        <Route path="/furniture" element={<PrivateRoute element={<CategoryPage category="furniture" />} />} />
        <Route path="/grocery" element={<PrivateRoute element={<CategoryPage category="grocery" />} />} />
        <Route path="/HomeKitchen" element={<PrivateRoute element={<CategoryPage category="kitchen" />} />} />
        <Route path="/passwordchange" element={<PrivateRoute element={<Passwordchange />} />} />
        <Route path="/reset-password/:token" element={<Resetpassword />} />
        <Route path="/productpage/:id" element={<PrivateRoute element={<Productpage />} />} />
        <Route path="/cardlist" element={<PrivateRoute element={<Cardproducts />} />} />
        <Route path="/orderlist" element={<PrivateRoute element={<Orderlist />} />} />
        <Route path="/wishlist" element={<PrivateRoute element={<Wishlist />} />} />
        <Route path="/return&refund" element={<PrivateRoute element={<Returnpage />} />} />
        <Route path="/faq" element={<PrivateRoute element={<Faqpage />} />} />
        <Route path="/editprofile" element={<PrivateRoute element={<Editprofile />} />} />
        <Route path="/termcondition" element={<PrivateRoute element={<TermConditionpage />} />} />
        <Route path="/shipping" element={<PrivateRoute element={<Shippingpage />} />} />
        <Route path="/privacypolicy" element={<PrivateRoute element={<Privacypolicy />} />} />
        <Route path="fp" element={<Fp />} />
        <Route path="dp" element={<Dp />} />
        <Route path="/navitems" element={<Navitem />} />
        <Route path="*" element={<Navigate to="/" />} />
        {/* <Route path="/navnew" element={ <Navnew/>} /> */}
        <Route path="/paymentpage" element={<Paymentpage/>} />
        <Route path="/cartpaymethod" element={<Cardpaymethod/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/cancel" element={<Cancel/>} />
        <Route path="/paypal" element={<Paypalpage/>}/>
        <Route path="/b/:id" element={<B  category="fashion"/>}/>
        <Route path="/40-off" element={<Product40off/>}/>
        <Route path="/50-off" element={<Product50off/>}/>
        <Route path="/60-off" element={<Product60off/>}/>
        <Route path="/shoes" element={<Shoes/>}/>
        <Route path="/shirts" element={<Shirt/>}/>
        <Route path="/furniture" element={<Furniture/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
