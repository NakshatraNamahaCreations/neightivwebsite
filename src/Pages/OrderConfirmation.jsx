import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';

const OrderConfirmation = () => {
  const { state } = useLocation();
  const { shiprocketOrderId, shipmentId } = state || {};
  const navigate = useNavigate();

  return (
    <>
      <div style={{ backgroundColor: '#fbeede', padding: '50px 0', minHeight: '100vh', marginTop: '4%' }}>
        <Container>
          <h2 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '32px', textAlign: 'center', marginBottom: '30px' }}>
            Order Confirmation
          </h2>
          <div style={{ textAlign: 'center', color: '#000' }}>
            <p style={{ fontSize: '16px', marginBottom: '20px' }}>
              Thank you for your order! Your order has been created successfully.
            </p>
            {shiprocketOrderId && (
              <p style={{ fontSize: '16px', marginBottom: '20px' }}>
                Order ID: {shiprocketOrderId}<br />
                Shipment ID: {shipmentId}
              </p>
            )}
            <p style={{ fontSize: '16px', marginBottom: '20px' }}>
              Payment is pending. Please complete payment to confirm your order.
            </p>
            <Button
              onClick={() => navigate('/shop')}
              style={{
                backgroundColor: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '0',
                padding: '10px 20px',
                fontWeight: '500',
              }}
            >
              Continue Shopping
            </Button>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default OrderConfirmation;