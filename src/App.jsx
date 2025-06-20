import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { CartProvider } from './Pages/CartContext';
import { CurrencyProvider } from './Pages/CurrencyContext';
import AboutUs from './Pages/Aboutus';
import HomePage from './Pages/Homepage';
import Header from './Components/Header';
import ContactSection from './Pages/ContactSection';
import CustomPrints from './Pages/Customprints';
import OurWorld from './Pages/Ourworld';
import Shop from './Pages/Shop';
import ProductDescription from './Pages/ProductDescription';
import Cart from './Pages/Cart';
import ShippingPolicy from './Pages/ShippingPolicy';
import CancellationPolicy from './Pages/CancellationPolicy';
import ExchangePolicy from './Pages/ExchangePolicy';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import PayPalSuccess from './Pages/PayPalSuccess';
import PayPalCancel from './Pages/PayPalCancel';
import TermsAndConditions from './Pages/TermsandCondition';
import Checkout from './Pages/Checkout';
import OrderConfirmation from './Pages/OrderConfirmation';
import DHLOrder from './Pages/DHLOrder';
import Register from './Pages/Registr';
import Login from './Pages/Login';
import InternationalCheckout from './Pages/InternationalCheckout';
import axios from 'axios';
import countryList from 'country-list-js';

const fallbackExchangeRates = {
  INR: 1,
  USD: 0.012,
  GBP: 0.0094,
  CAD: 0.016,
  AUD: 0.018,
  EUR: 0.011,
};

function App() {
  const [country, setCountry] = useState('US'); // Default to US
  const [currency, setCurrency] = useState('USD'); // Default to USD
  const [exchangeRates, setExchangeRates] = useState(fallbackExchangeRates);
  const [isAllowed, setIsAllowed] = useState(true);
  const [loading, setLoading] = useState(true);

  // Handle country change from dropdown
  const handleCountryChange = (countryCode) => {
    console.log('App: Country changed to', countryCode);
    setCountry(countryCode);
    const countryData = countryList.findByIso2(countryCode);
    const newCurrency = countryData?.currency?.code || 'USD';
    setCurrency(newCurrency);
    console.log('App: Currency set to', newCurrency);
  };

  // Convert price from INR to target currency
  const convertPrice = (priceInINR) => {
    if (!currency || !exchangeRates[currency]) {
      console.warn(`App: No exchange rate for ${currency}, returning INR ${priceInINR}`);
      return priceInINR.toFixed(2);
    }
    const rate = exchangeRates[currency];
    const converted = (priceInINR * rate).toFixed(2);
    console.log(`App: Converting ${priceInINR} INR to ${converted} ${currency} (rate: ${rate})`);
    return converted;
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    // Fetch exchange rates
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(
          'https://v6.exchangerate-api.com/v6/ddc87754cb9abbbe4d5c0b29/latest/INR'
        );
        setExchangeRates(response.data.conversion_rates || fallbackExchangeRates);
        console.log('App: Exchange rates fetched', response.data.conversion_rates);
      } catch (error) {
        console.error('App: Error fetching exchange rates, using fallback:', error);
        setExchangeRates(fallbackExchangeRates);
      }
    };

    // Fetch IP-based country
    const fetchCountry = async () => {
      try {
        const response = await axios.get('http://ip-api.com/json');
        const countryCode = response.data.countryCode || 'US';
        setCountry(countryCode);
        const countryData = countryList.findByIso2(countryCode);
        const initialCurrency = countryData?.currency?.code || 'USD';
        setCurrency(initialCurrency);
        console.log('App: Initial country', countryCode, 'currency', initialCurrency);
        setLoading(false);
      } catch (error) {
        console.error('App: Error fetching IP data:', error);
        setCountry('US');
        setCurrency('USD');
        setLoading(false);
      }
    };

    fetchExchangeRates();
    fetchCountry();
  }, []);

  // Log currency and exchange rates changes
  useEffect(() => {
    console.log('App: Currency updated to', currency, 'with rates', exchangeRates);
  }, [currency, exchangeRates]);

  // Component to conditionally render Header
  const Layout = ({ children }) => {
    const location = useLocation();
    const noHeaderRoutes = ['/login', '/register'];
    const showHeader = !noHeaderRoutes.includes(location.pathname);

    return (
      <>
        {showHeader && <Header country={country} onCountryChange={handleCountryChange} />}
        {children}
      </>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <CurrencyProvider value={{ country, currency, convertPrice }}>
      <CartProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  {isAllowed ? <HomePage /> : <div>Access Denied</div>}
                </Layout>
              }
            />
            <Route
              path="/about-us"
              element={
                <Layout>
                  <AboutUs />
                </Layout>
              }
            />
            <Route
              path="/contactus"
              element={
                <Layout>
                  <ContactSection />
                </Layout>
              }
            />
            <Route
              path="/customprints"
              element={
                <Layout>
                  <CustomPrints />
                </Layout>
              }
            />
            <Route
              path="/ourworld"
              element={
                <Layout>
                  <OurWorld />
                </Layout>
              }
            />
            <Route
              path="/shop"
              element={
                <Layout>
                  <Shop />
                </Layout>
              }
            />
            <Route
              path="/product/:id"
              element={
                <Layout>
                  <ProductDescription />
                </Layout>
              }
            />
            <Route
              path="/cart"
              element={
                <Layout>
                  <Cart />
                </Layout>
              }
            />
            <Route
              path="/shipping-policy"
              element={
                <Layout>
                  <ShippingPolicy />
                </Layout>
              }
            />
            <Route
              path="/canellation-policy"
              element={
                <Layout>
                  <CancellationPolicy />
                </Layout>
              }
            />
            <Route
              path="/exchange-policy"
              element={
                <Layout>
                  <ExchangePolicy />
                </Layout>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <Layout>
                  <PrivacyPolicy />
                </Layout>
              }
            />
            <Route
              path="/paypal-success"
              element={
                <Layout>
                  <PayPalSuccess />
                </Layout>
              }
            />
            <Route
              path="/paypal-cancel"
              element={
                <Layout>
                  <PayPalCancel />
                </Layout>
              }
            />
            <Route
              path="/terms-and-conditions"
              element={
                <Layout>
                  <TermsAndConditions />
                </Layout>
              }
            />
            <Route
              path="/checkout"
              element={
                <Layout>
                  <Checkout />
                </Layout>
              }
            />
            <Route
              path="/register"
              element={
                <Layout>
                  <Register />
                </Layout>
              }
            />
            <Route
              path="/login"
              element={
                <Layout>
                  <Login />
                </Layout>
              }
            />
            <Route
              path="/order-confirmation"
              element={
                <Layout>
                  <OrderConfirmation />
                </Layout>
              }
            />
            <Route
              path="/dhlorder"
              element={
                <Layout>
                  <DHLOrder />
                </Layout>
              }
            />
            <Route
              path="/international-checkout"
              element={
                <Layout>
                  <InternationalCheckout />
                </Layout>
              }
            />
            <Route
              path="*"
              element={
                <Layout>
                  <div>Access Denied. This page is restricted to specific countries.</div>
                </Layout>
              }
            />
          </Routes>
        </Router>
      </CartProvider>
    </CurrencyProvider>
  );
}

export default App;