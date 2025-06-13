import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';

const PayPalCancel = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const status = query.get('status');
  const error = query.get('error');

  return (
    <>
      <div style={{ backgroundColor: '#fbeede', padding: '50px 0', minHeight: '100vh', marginTop: '4%' }}>
        <Container>
          <h2 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '32px', textAlign: 'center' }}>
            Payment Cancelled
          </h2>
          <p style={{ color: '#000', fontSize: '18px', textAlign: 'center', marginTop: '20px' }}>
            {error ? `Error: ${decodeURIComponent(error)}` : 'You cancelled the payment. Please try again or choose another payment method.'}
          </p>
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <Button
              onClick={() => navigate('/cart')}
              style={{
                backgroundColor: '#000',
                border: 'none',
                borderRadius: '0',
                padding: '10px 20px',
                fontWeight: '500',
              }}
            >
              Return to Cart
            </Button>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default PayPalCancel;