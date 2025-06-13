import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';

const ShippingPolicy = () => {
  return (
    <>
      <div style={{ backgroundColor: '#fbeede', padding: '50px 0', minHeight: '100vh', marginTop: '4%', fontFamily: 'Lora, serif' }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <h1 style={{ fontFamily: 'Lora, serif', color: '#3d1e19', fontWeight: '500', fontSize: '32px', marginBottom: '30px', textAlign:'center' }}>
                Shipping Policy
              </h1>
              <p style={{ color: '#000', fontSize: '16px', marginBottom: '20px' }}>
                At Neightiv, we are committed to delivering your favorite apparel to your doorstep as quickly and efficiently as possible. Please review our shipping policy below to understand how and when your order will be delivered.
              </p>

              <h2 style={{ fontFamily: 'Lora, serif', color: '#3d1e19', fontWeight: '500', fontSize: '24px', marginTop: '30px', marginBottom: '15px' }}>
                1. Order Processing Time
              </h2>
              <p style={{ color: '#000', fontSize: '16px', marginBottom: '10px' }}>
                All orders are processed within 1–3 business days.
              </p>
              <p style={{ color: '#000', fontSize: '16px', marginBottom: '10px' }}>
                Once processed, you will receive a confirmation email with tracking details.
              </p>

              <h2 style={{ fontFamily: 'Lora, serif', color: '#3d1e19', fontWeight: '500', fontSize: '24px', marginTop: '30px', marginBottom: '15px' }}>
                2. Domestic Shipping (India)
              </h2>
              <p style={{ color: '#3d1e19', fontSize: '16px', marginBottom: '10px' }}>
                <strong>Shipping Partners:</strong> We work with trusted logistics partners such as Delhivery, Bluedart, DTDC, and India Post.
              </p>
              <p style={{ color: '#3d1e19', fontSize: '16px', marginBottom: '10px' }}>
                <strong>Delivery Time:</strong> 3–7 business days depending on your location.
              </p>

              <h2 style={{ fontFamily: 'Lora, serif', color: '#3d1e19', fontWeight: '500', fontSize: '24px', marginTop: '30px', marginBottom: '15px' }}>
                3. International Shipping
              </h2>
              <p style={{ color: '#3d1e19', fontSize: '16px', marginBottom: '10px' }}>
                All Products by Neightiv will be shipped from India through shipping partners like FedEx, DHL, Aramex, and others based on destination.
              </p>
              <p style={{ color: '#3d1e19', fontSize: '16px', marginBottom: '10px' }}>
                <strong>Delivery Time:</strong> 7–14 business days (subject to customs clearance and local delivery times).
              </p>
              <p style={{ color: '#3d1e19', fontSize: '16px', marginBottom: '10px' }}>
                <strong>Shipping Charges:</strong> Calculated at checkout based on country and weight.
              </p>
              <p style={{ color: '#3d1e19', fontSize: '16px', marginBottom: '10px' }}>
                <strong>Customs & Duties:</strong>
              </p>
              <ul style={{ color: '#3d1e19', fontSize: '16px', paddingLeft: '20px', marginBottom: '10px' }}>
                <li>International orders may be subject to customs duties, taxes, and import fees, which are the responsibility of the customer.</li>
                <li>Neightiv is not responsible for delays caused by customs clearance.</li>
              </ul>

              <h2 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '24px', marginTop: '30px', marginBottom: '15px' }}>
                4. Order Tracking
              </h2>
              <p style={{ color: '#3d1e19', fontSize: '16px', marginBottom: '10px' }}>
                Once your order has been shipped, a tracking number will be sent to your registered email/SMS.
              </p>
              <p style={{ color: '#3d1e19', fontSize: '16px', marginBottom: '10px' }}>
                You can track your order using the link provided in the shipping confirmation message.
              </p>

              <h2 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '24px', marginTop: '30px', marginBottom: '15px' }}>
                5. Address & Delivery Issues
              </h2>
              <p style={{ color: '#3d1e19', fontSize: '16px', marginBottom: '10px' }}>
                Please ensure that your shipping address is complete and accurate.
              </p>
              <p style={{ color: '#3d1e19', fontSize: '16px', marginBottom: '10px' }}>
                We are not responsible for orders lost due to incorrect or incomplete addresses.
              </p>
              <p style={{ color: '#3d1e19', fontSize: '16px', marginBottom: '10px' }}>
                If a package is returned to us due to a failed delivery attempt, re-shipping charges may apply.
              </p>

              <h2 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '24px', marginTop: '30px', marginBottom: '15px' }}>
                6. Delays and Exceptions
              </h2>
              <p style={{ color: '#3d1e19', fontSize: '16px', marginBottom: '10px' }}>
                While we aim to deliver within the mentioned timeframes, delays may occur due to high demand, weather conditions, or unforeseen issues.
              </p>
              <p style={{ color: '#3d1e19', fontSize: '16px', marginBottom: '10px' }}>
                We will do our best to notify you in case of any unexpected delays.
              </p>

              <h2 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '24px', marginTop: '30px', marginBottom: '15px' }}>
                7. Need Help?
              </h2>
              <p style={{ color: '#3d1e19', fontSize: '16px', marginBottom: '10px' }}>
                If you have any queries about your order or need assistance, feel free to reach out to our support team:
              </p>
              <p style={{ color: '#3d1e19', fontSize: '16px', marginBottom: '10px' }}>
                📩 <strong>Email:</strong> <a href="mailto:contact@neightivglobal.com" style={{ color: '#000', textDecoration: 'underline' }}>contact@neightivglobal.com</a>
              </p>
              <p style={{ color: '#3d1e19', fontSize: '16px', marginBottom: '10px' }}>
                📞 <strong>Customer Care:</strong> +91-7338451937
              </p>
              <p style={{ color: '#3d1e19', fontSize: '16px', marginBottom: '10px' }}>
                📬 Or use the <a href="/contact" style={{ color: '#000', textDecoration: 'underline' }}>Contact Us</a> page on our website.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ShippingPolicy;