import React from 'react';
import './style.css';
import Wishlist from './component/Wishlist';
import Home from './component/Home';
import Blogs from './component/Blogs';
import Product from './component/Product';
import GridList from './component/GridList';
import AboutUs from './component/AboutUs';
import Account from './component/Account';
import Register from './component/Register';
import ForgotPassword from './component/ForgotPassword';
import Login from './component/Login';
import Checkout from './component/Checkout';
import Cart from './component/Cart';
import Billing from './component/Billing';
import Address from './component/Address';
import OrderHistory from './component/OrderHistory';
import Profile from './component/Profile';
import ProWishlist from './component/ProWishlist';
import Faq from './component/Faq';
import Contact from './component/Contact';
import TermCondition from './component/TermCondition';
import Search from './component/Search';
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='index' element={<Home></Home>}/>
        <Route path='wishlist' element={<Wishlist></Wishlist>}/>
        <Route path='blog' element={<Blogs></Blogs>}/>
        <Route path='product' element={<Product></Product>}/>
        <Route path='grid-list' element={<GridList></GridList>}/>
        <Route path='about-us' element={<AboutUs></AboutUs>}/>
        <Route path='account' element={<Account></Account>}/>
        <Route path='register' element={<Register></Register>}/>
        <Route path='forgot-password' element={<ForgotPassword></ForgotPassword>}/>
        <Route path='login' element={<Login></Login>}/>
        <Route path='checkout' element={<Checkout></Checkout>}/>
        <Route path='cart' element={<Cart></Cart>}/>
        <Route path='billing-info' element={<Billing></Billing>}/>
        <Route path='addresses' element={<Address></Address>}/>
        <Route path='order-history' element={<OrderHistory></OrderHistory>}/>
        <Route path='profile' element={<Profile></Profile>}/>
        <Route path='pro-wishlist' element={<ProWishlist></ProWishlist>}/>
        <Route path='faq%27s' element={<Faq></Faq>}/>
        <Route path='contact' element={<Contact></Contact>}/>
        <Route path='terms-conditions' element={<TermCondition></TermCondition>}/>
        <Route path='search' element={<Search></Search>}/>
      </Routes>
    </div>
  );
}

export default App;
