import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer'; // Assuming you have a Footer component

const ExchangePolicy = () => {
  return (
    <>
    <div style={{ backgroundColor: '#fbeede', padding: '80px 0', minHeight: '100vh', fontFamily: 'Lora, serif', }}>
      <Container>
        <Row>
          <Col md={12}>
            <h1
              style={{
                fontFamily: 'Lora, serif',
                color: '#5b3327',
                fontWeight: '500',
                fontSize: '40px',
                textAlign: 'center',
                marginBottom: '40px',
              }}
            >
              Exchange Policy
            </h1>
            <p
              style={{
                fontSize: '20px',
                color: '#000',
                lineHeight: '1.6',
                marginBottom: '20px',
              }}
            >
              At Neightiv, we want you to love what you wear. If something isn’t right, we’re here to help.
            </p>

            <h2
              style={{
                fontFamily: 'Lora, serif',
                color: '#5b3327',
                fontWeight: '500',
                fontSize: '28px',
                marginTop: '30px',
                marginBottom: '15px',
              }}
            >
              1. Exchange Eligibility
            </h2>
            <ul
              style={{
                fontSize: '18px',
                color: '#000',
                lineHeight: '1.6',
                paddingLeft: '30px',
                marginBottom: '20px',
              }}
            >
              <li style={{ marginBottom: '10px' }}>
                The item must be unused, unwashed, and in original condition with all tags and packaging intact.
              </li>
              <li style={{ marginBottom: '10px' }}>
                The items with manufacturing defects ONLY shall be eligible for an exchange. Head to our Damaged or
                Incorrect items section for more details.
              </li>
              <li style={{ marginBottom: '10px' }}>
                Exchange requests must be made within 7 days of delivery.
              </li>
              <li style={{ marginBottom: '10px' }}>
                Items purchased during sales, promotions, or clearance events are final sale and not eligible for an
                exchange.
              </li>
              <li style={{ marginBottom: '10px' }}>
                The custom scarves we offer are one-of-a-kind pieces developed based on every particular order; therefore,
                they are not eligible for returns/exchanges.
              </li>
            </ul>

            <h2
              style={{
                fontFamily: 'Lora, serif',
                color: '#5b3327',
                fontWeight: '500',
                fontSize: '28px',
                marginTop: '30px',
                marginBottom: '15px',
              }}
            >
              2. How to Initiate an Exchange
            </h2>
            <p style={{ fontSize: '20px', color: '#000', lineHeight: '1.6', marginBottom: '15px' }}>
              To request an exchange:
            </p>
            <ul
              style={{
                fontSize: '18px',
                color: '#000',
                lineHeight: '1.6',
                paddingLeft: '30px',
                marginBottom: '20px',
              }}
            >
              <li style={{ marginBottom: '10px' }}>
                Email us at{' '}
                <a
                  href="mailto:contact@neightivglobal.com"
                  style={{ color: '#5b3327', textDecoration: 'underline' }}
                >
                  contact@neightivglobal.com
                </a>{' '}
                with your order number, item(s) you wish to exchange, and the reason.
              </li>
              <li style={{ marginBottom: '10px' }}>
                Our team will confirm eligibility and provide return instructions.
              </li>
              <li style={{ marginBottom: '10px' }}>
                Once approved, ship the item(s) back to the address provided during shipping.
              </li>
              <li style={{ marginBottom: '10px' }}>
                Please do not return items without prior approval.
              </li>
              <li style={{ marginBottom: '10px' }}>
                Once we receive the returned item and inspect it, your replacement will be dispatched within 5–7 business
                days.
              </li>
              <li style={{ marginBottom: '10px' }}>
                If the replacement item is unavailable, store credit will be issued.
              </li>
            </ul>

            <h2
              style={{
                fontFamily: 'Lora, serif',
                color: '#5b3327',
                fontWeight: '500',
                fontSize: '28px',
                marginTop: '30px',
                marginBottom: '15px',
              }}
            >
              3. Return Shipping for Exchanges
            </h2>
            <ul
              style={{
                fontSize: '18px',
                color: '#000',
                lineHeight: '1.6',
                paddingLeft: '30px',
                marginBottom: '20px',
              }}
            >
              <li style={{ marginBottom: '10px' }}>
                For domestic (India) returns, customers are responsible for return shipping unless the item is damaged or
                incorrect.
              </li>
              <li style={{ marginBottom: '10px' }}>
                For international returns, shipping, customs duties, and taxes are to be borne by the customer.
              </li>
              <li style={{ marginBottom: '10px' }}>
                We recommend using a trackable courier service as Neightiv is not liable for lost return shipments.
              </li>
            </ul>

            <h2
              style={{
                fontFamily: 'Lora, serif',
                color: '#5b3327',
                fontWeight: '500',
                fontSize: '28px',
                marginTop: '30px',
                marginBottom: '15px',
              }}
            >
              4. Important Notes
            </h2>
            <ul
              style={{
                fontSize: '18px',
                color: '#000',
                lineHeight: '1.6',
                paddingLeft: '30px',
                marginBottom: '20px',
              }}
            >
              <li style={{ marginBottom: '10px' }}>
                Returns that do not meet our policy will not be accepted and will be returned to the customer at their
                expense.
              </li>
              <li style={{ marginBottom: '10px' }}>
                All communications with respect to custom scarves are all personal, either via email or WhatsApp.
              </li>
              <li style={{ marginBottom: '10px' }}>
                Neightiv reserves the right to refuse returns from customers with excessive return history or suspected
                abuse of our return policy.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      
    </div>
    <Footer />
    </>
  );
};

export default ExchangePolicy;