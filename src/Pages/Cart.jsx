import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const exchangeRate = 0.012; // Example: 1 INR = 0.012 USD (update with real-time rate)

  const calculateTotalINR = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotalUSD = () => {
    return parseFloat((calculateTotalINR() * exchangeRate).toFixed(2));
  };

  const handlePayPalCheckout = async () => {
    if (cartItems.length === 0) {
      setError('Your cart is empty.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const tokenResponse = await axios.post('http://localhost:8011/api/paypal/token');
      const accessToken = tokenResponse.data.access_token;

      const orderResponse = await axios.post(
        'http://localhost:8011/api/paypal/create-order',
        {
          amount: calculateTotalUSD(),
          currency_code: 'USD',
          cartItems: cartItems.map((item) => ({
            name: item.name,
            price: parseFloat((item.price * exchangeRate).toFixed(2)), // Convert INR to USD
            quantity: item.quantity,
            sku: item.id, // Optional: product ID as SKU
          })),
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const approvalLink = orderResponse.data.links.find((link) => link.rel === 'approve');
      if (approvalLink) {
        window.location.href = approvalLink.href;
      } else {
        throw new Error('No approval link found in PayPal response.');
      }
    } catch (err) {
      console.error('PayPal checkout error:', err);
      setError('Failed to initiate PayPal payment. Please try again.');
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '32px' }}>
                  Your cart
                </h2>
                <Button
                  variant="link"
                  onClick={() => navigate('/shop')}
                  style={{ color: '#000', textDecoration: 'underline', fontSize: '16px' }}
                >
                  Continue shopping
                </Button>
              </div>

              {cartItems.length === 0 ? (
                <div style={{ textAlign: 'center', color: '#000', marginTop: '50px' }}>
                  <h3 style={{ fontFamily: 'Lora, serif', fontWeight: '500', fontSize: '30px', marginBottom: '20px' }}>
                    Your cart is empty
                  </h3>
                  <Button
                    onClick={() => navigate('/shop')}
                    style={{
                      backgroundColor: '#000',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '0',
                      padding: '10px 20px',
                      fontWeight: '500',
                      marginBottom: '30px',
                    }}
                  >
                    Continue shopping
                  </Button>
                  <p style={{ fontSize: '20px' }}>
                    Have an account?{' '}
                    <span
                      onClick={() => navigate('/login')}
                      style={{ color: '#000', textDecoration: 'underline', cursor: 'pointer' }}
                    >
                      Log in
                    </span>{' '}
                    to check out faster.
                  </p>
                </div>
              ) : (
                <>
                  <Row style={{ borderBottom: '1px solid #000', paddingBottom: '10px', marginBottom: '20px' }}>
                    <Col md={4}>
                      <p style={{ fontWeight: '500', color: '#000', fontSize: '14px', margin: 0 }}>
                        PRODUCT
                      </p>
                    </Col>
                    <Col md={4} style={{ textAlign: 'center' }}>
                      <p style={{ fontWeight: '500', color: '#000', fontSize: '14px', margin: 0 }}>
                        QUANTITY
                      </p>
                    </Col>
                    <Col md={4} style={{ textAlign: 'right' }}>
                      <p style={{ fontWeight: '500', color: '#000', fontSize: '14px', margin: 0 }}>
                        TOTAL
                      </p>
                    </Col>
                  </Row>

                  {cartItems.map((item) => (
                    <Row key={item.id} style={{ marginBottom: '20px', alignItems: 'center' }}>
                      <Col md={4}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                          />
                          <div>
                            <p style={{ fontWeight: '500', color: '#000', fontSize: '16px', margin: 0 }}>
                              {item.name}
                            </p>
                            <p style={{ color: '#000', fontSize: '14px', margin: 0 }}>
                              Rs. {item.price.toLocaleString('en-IN')}
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col md={4} style={{ textAlign: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                          <Button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            style={{
                              backgroundColor: '#fbeede',
                              color: '#000',
                              border: '1px solid #000',
                              borderRadius: '0',
                              padding: '5px 10px',
                            }}
                          >
                            -
                          </Button>
                          <span style={{ fontSize: '16px', color: '#000' }}>
                            {item.quantity}
                          </span>
                          <Button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            style={{
                              backgroundColor: '#fbeede',
                              color: '#000',
                              border: '1px solid #000',
                              borderRadius: '0',
                              padding: '5px 10px',
                            }}
                          >
                            +
                          </Button>
                          <Button
                            onClick={() => removeFromCart(item.id)}
                            style={{
                              backgroundColor: 'transparent',
                              border: 'none',
                              color: 'gray',
                              fontSize: '20px',
                              padding: '0 10px',
                            }}
                          >
                            <FaTrash />
                          </Button>
                        </div>
                      </Col>
                      <Col md={4} style={{ textAlign: 'right' }}>
                        <p style={{ fontWeight: '500', color: '#000', fontSize: '16px', margin: 0 }}>
                          Rs. {(item.price * item.quantity).toLocaleString('en-IN')}
                        </p>
                      </Col>
                    </Row>
                  ))}
                </>
              )}
            </Col>
          </Row>
        </Container>

        {cartItems.length > 0 && (
          <Container fluid>
            <Row>
              <Col md={12}>
                <div style={{ textAlign: 'right', marginBottom: '30px' }}>
                  <p style={{ fontWeight: '500', color: '#000', fontSize: '16px' }}>
                    Estimated total Rs. {calculateTotalINR().toLocaleString('en-IN')} (~${calculateTotalUSD()})
                  </p>
                  <p style={{ color: '#000', fontSize: '12px', marginBottom: '20px' }}>
                    Taxes, discounts, and shipping calculated at checkout.
                  </p>
                  <div style={{ display: 'inline-block', width: '200px' }}>
                    <Button
                      onClick={() => navigate('/checkout')}
                      style={{
                        backgroundColor: '#000',
                        border: 'none',
                        borderRadius: '0',
                        padding: '10px 0',
                        fontWeight: '500',
                        width: '100%',
                        marginBottom: '10px',
                      }}
                    >
                      Check out
                    </Button>
                    <Button
                      onClick={handlePayPalCheckout}
                      disabled={loading}
                      style={{
                        backgroundColor: '#ffcc00',
                        color: '#000',
                        border: 'none',
                        borderRadius: '0',
                        padding: '10px 0',
                        fontWeight: '500',
                        width: '100%',
                      }}
                    >
                      {loading ? 'Processing...' : 'Pay with PayPal'}
                    </Button>
                    {error && (
                      <p style={{ color: '#ff0000', fontSize: '12px', marginTop: '10px' }}>
                        {error}
                      </p>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;