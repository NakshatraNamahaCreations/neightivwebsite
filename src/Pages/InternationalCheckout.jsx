import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useCart } from './CartContext';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';

const InternationalCheckout = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [shippingDetails, setShippingDetails] = useState({
    receiverName: '',
    receiverAddress: '',
    receiverCity: '',
    receiverPostalCode: '',
    receiverStateCode: '',
    receiverPhone: '',
    receiverCountryCode: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shippingQuote, setShippingQuote] = useState(null);

  const exchangeRate = 0.012;

  // Normalize cart item to use base price only
  const normalizeItem = (item) => {
    const basePrice = item.price || 0;
    return { ...item, basePrice };
  };

  // Calculate totals in USD for PayPal without tax
  const calculateTotalUSD = () => {
    const grandTotal = cartItems.reduce(
      (total, item) => {
        const normalizedItem = normalizeItem(item);
        return total + normalizedItem.basePrice * item.quantity;
      },
      0
    );
    return parseFloat((grandTotal * exchangeRate).toFixed(2));
  };

  // Calculate shipment details for DHL
  const calculateShipmentDetails = () => {
    const totalWeight = cartItems.reduce((sum, item) => sum + (item.weight || 1), 0); // Default 1kg per item
    
    return {
      weight: totalWeight.toString(),
      length: '10', // Default dimensions (cm), adjust as needed
      width: '10',
      height: '1',
    };
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Validate shipping details
  const validateShippingDetails = () => {
    const requiredFields = [
      'receiverName',
      'receiverAddress',
      'receiverCity',
      'receiverPostalCode',
      'receiverStateCode',
      'receiverPhone',
      'receiverCountryCode',
    ];
    for (let field of requiredFields) {
      if (!shippingDetails[field]) {
        setError(`Please fill in ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
        return false;
      }
    }
    if (shippingDetails.receiverCountryCode === 'IN') {
      setError('This page is for international shipping only. Please use the regular checkout for India.');
      return false;
    }
    return true;
  };

  // Handle DHL shipping and PayPal payment
  const handleDHLAndPayPal = async () => {
    if (!validateShippingDetails()) return;

    setLoading(true);
    setError(null);

    try {
      const shipmentDetails = calculateShipmentDetails();
      const totalUSD = calculateTotalUSD();

      // Step 1: Create order by sending data to backend for DHL shipment
      const shipmentResponse = await axios.post("https://api.neightivglobal.com/api/dhl/create-shipment", {
        receiverName: shippingDetails.receiverName,
        receiverAddress: shippingDetails.receiverAddress,
        receiverCity: shippingDetails.receiverCity,
        receiverPostalCode: shippingDetails.receiverPostalCode,
        receiverStateCode: shippingDetails.receiverStateCode,
        receiverPhone: shippingDetails.receiverPhone,
        receiverCountryCode: shippingDetails.receiverCountryCode,
        declaredValue: totalUSD.toString(),
        weight: shipmentDetails.weight,
        length: shipmentDetails.length,
        width: shipmentDetails.width,
        height: shipmentDetails.height,
        cartItems: cartItems,
      });

      console.log('📦 Order Created (DHL Shipment):', shipmentResponse.data);
      alert("Order created successfully!");

      // Step 2: Initiate PayPal Payment after successful order creation
      const tokenResponse = await axios.post('https://api.neightivglobal.com/api/paypal/token');
      const accessToken = tokenResponse.data.access_token;

      const orderResponse = await axios.post(
        'https://api.neightivglobal.com/api/paypal/create-order',
        {
          amount: calculateTotalUSD(),
          currency_code: 'USD',
          cartItems: cartItems.map((item) => {
            const normalizedItem = normalizeItem(item);
            return {
              name: normalizedItem.name,
              price: parseFloat((normalizedItem.basePrice * exchangeRate).toFixed(2)),
              quantity: normalizedItem.quantity,
              sku: normalizedItem.id,
            };
          }),
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      const approvalLink = orderResponse.data.links.find((link) => link.rel === 'approve');
      if (approvalLink) {
        window.location.href = approvalLink.href;
      } else {
        throw new Error('No approval link found in PayPal response.');
      }
    } catch (err) {
      console.error('❌ Error:', err.response?.data || err.message);
      const errorMessage =
        err.response?.data?.error?.message ||
        err.response?.data?.message ||
        'Failed to process order or payment. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div style={{ backgroundColor: '#fbeede', padding: '50px 0', minHeight: '100vh', marginTop: '4%' }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={12}>
              <h2 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '32px', marginBottom: '20px' }}>
                International Checkout
              </h2>
              {cartItems.length === 0 ? (
                <div style={{ textAlign: 'center', color: '#000', marginTop: '50px' }}>
                  <h3>Your cart is empty</h3>
                  <Button
                    onClick={() => navigate('/shop')}
                    style={{
                      backgroundColor: '#000',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '0',
                      padding: '10px 20px',
                    }}
                  >
                    Continue shopping
                  </Button>
                </div>
              ) : (
                <>
                  <h4 style={{ color: '#000', marginBottom: '20px' }}>Shipping Details</h4>
                  <Form>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Receiver Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="receiverName"
                            value={shippingDetails.receiverName}
                            onChange={handleInputChange}
                            placeholder="e.g., John Doe"
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Address *</Form.Label>
                          <Form.Control
                            type="text"
                            name="receiverAddress"
                            value={shippingDetails.receiverAddress}
                            onChange={handleInputChange}
                            placeholder="e.g., 123 Main Street, Apt 4B"
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>City *</Form.Label>
                          <Form.Control
                            type="text"
                            name="receiverCity"
                            value={shippingDetails.receiverCity}
                            onChange={handleInputChange}
                            placeholder="e.g., New York"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Postal Code *</Form.Label>
                          <Form.Control
                            type="text"
                            name="receiverPostalCode"
                            value={shippingDetails.receiverPostalCode}
                            onChange={handleInputChange}
                            placeholder="e.g., 10001"
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>State/Region Code *</Form.Label>
                          <Form.Control
                            type="text"
                            name="receiverStateCode"
                            value={shippingDetails.receiverStateCode}
                            onChange={handleInputChange}
                            placeholder="e.g., NY"
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone *</Form.Label>
                          <Form.Control
                            type="text"
                            name="receiverPhone"
                            value={shippingDetails.receiverPhone}
                            onChange={handleInputChange}
                            placeholder="e.g., +11234567890"
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Country Code (e.g., US, CN) *</Form.Label>
                          <Form.Control
                            type="text"
                            name="receiverCountryCode"
                            value={shippingDetails.receiverCountryCode}
                            onChange={handleInputChange}
                            placeholder="e.g., US"
                            required
                          />
                          <Form.Text muted>Enter the two-letter ISO country code (not IN for international).</Form.Text>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                  <div style={{ marginTop: '20px' }}>
                    <h4 style={{ color: '#000', marginBottom: '20px' }}>Order Summary</h4>
                    {cartItems.map((item) => {
                      const normalizedItem = normalizeItem(item);
                      return (
                        <Row key={normalizedItem.id} style={{ marginBottom: '10px' }}>
                          <Col md={6}>{normalizedItem.name} (x{normalizedItem.quantity})</Col>
                          <Col md={6} style={{ textAlign: 'right' }}>
                            ${((normalizedItem.basePrice * normalizedItem.quantity) * exchangeRate).toFixed(2)}
                          </Col>
                        </Row>
                      );
                    })}
                    <hr />
                    <div style={{ textAlign: 'right', marginTop: '20px' }}>
                      <p style={{ fontWeight: '600', color: '#000', fontSize: '18px' }}>
                        Total: ${calculateTotalUSD().toFixed(2)} (USD)
                      </p>
                      {shippingQuote && (
                        <p style={{ color: '#000', fontSize: '14px' }}>
                          Shipping Quote: {JSON.stringify(shippingQuote)}
                        </p>
                      )}
                      {error && (
                        <p style={{ color: '#ff0000', fontSize: '12px', marginBottom: '10px' }}>
                          {error}
                        </p>
                      )}
                      <Button
                        onClick={handleDHLAndPayPal}
                        disabled={loading}
                        style={{
                          backgroundColor: '#ffcc00',
                          color: '#000',
                          border: 'none',
                          borderRadius: '0',
                          padding: '10px 20px',
                          fontWeight: '500',
                          width: '200px',
                        }}
                      >
                        {loading ? 'Processing...' : 'Pay with PayPal (DHL)'}
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default InternationalCheckout;