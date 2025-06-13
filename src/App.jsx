import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import AboutUs from './Pages/Aboutus';
import HomePage from './Pages/Homepage';
import Header from './Components/Header';
import ContactSection from './Pages/ContactSection';
import CustomPrints from './Pages/Customprints';
import OurWorld from './Pages/Ourworld';
import Shop from './Pages/Shop';
import ProductDescription from './Pages/ProductDescription';
import Cart from './Pages/Cart';
import { CartProvider } from './Pages/CartContext';
import ShippingPolicy from './Pages/ShippingPolicy';
import CancellationPolicy from './Pages/CancellationPolicy';
import ExchangePolicy from './Pages/ExchangePolicy';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import PayPalSuccess from './Pages/PayPalSuccess';
import PayPalCancel from './Pages/PayPalCancel';
import TermsAndConditions from './Pages/TermsandCondition';



function App() {

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
    mirror: true 
  });
}, []);
  return (
   
<CartProvider>
 <Router>
         <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
           <Route path="/contactus" element={<ContactSection />} />
            <Route path="/customprints" element={<CustomPrints />} />
            <Route path="/ourworld" element={<OurWorld />} />
            <Route path="/shop" element={<Shop />} />
<Route path="/product/:id" element={<ProductDescription />} />
<Route path="/cart" element={<Cart />} />
<Route path="/shipping-policy" element={<ShippingPolicy />} />
<Route path="/canellation-policy" element={<CancellationPolicy />} />
<Route path="/exchange-policy" element={<ExchangePolicy />} />
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/paypal-success" element={<PayPalSuccess/>} />
        <Route path="/paypal-cancel" element={<PayPalCancel />} />

<Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </Router>
</CartProvider>
   
  );
}

export default App;