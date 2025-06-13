import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram } from 'react-icons/fa';
import Logo from '../../src/assets/Clip_path_group.svg'
import paypal from '../../src/assets/pay.png';
import visa from '../../src/assets/visa.png';
import threeimage from '../../src/assets/threeimage.png'
import applepay from '../../src/assets/applepay.png'
import stripe from '../../src/assets/stripe.png'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#5b342d', color: '#fff', paddingTop: '40px', fontFamily: 'Lora, serif' }}>
      <Container fluid style={{ padding: '0 60px' }}>
      


        {/* Center Logo */}
        {/* Instagram and Logo Row */}
<Row className="align-items-center justify-content-between mb-4">
  <Col md={6}>
    <a
      href="https://www.instagram.com/neightiv.official/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: '#fff', textDecoration: 'none', fontSize: '16px', display: 'flex', alignItems: 'center' }}
    >
      <FaInstagram size={20} style={{ marginRight: '10px' }} />
      Follow us on Instagram
    </a>
  </Col>
  <Col md={6} className="text-center" >
    <img
      src={Logo}
      alt="NEIGHTIV Logo"
      style={{ maxHeight: '50px', objectFit: 'contain' , marginLeft:'-100%'}}
    />
  </Col>
</Row>


        {/* Divider */}
        <hr style={{ borderColor: '#fff', opacity: 0.2, margin: '20px 0' }} />

        {/* Navigation Links */}
       <Row className="text-center">
  <Col style={{fontFamily: 'Lora, serif', color:'fbeede'}}>
    <div style={{ marginBottom: '15px' }}>
      <a href="#" className="text-white mx-3" style={{ textDecoration: 'none' }}>Shop</a>
      <a href="#" className="text-white mx-3" style={{ textDecoration: 'none' }}>Custom Scarves</a>
      <a href="#" className="text-white mx-3" style={{ textDecoration: 'none' }}>Our World</a>
      <a href="#" className="text-white mx-3" style={{ textDecoration: 'none' }}>About Us</a>
      <a href="#" className="text-white mx-3" style={{ textDecoration: 'none' }}>Contact Us</a>
    </div>
    <div>
       <a href="/terms-and-conditions" className="text-white mx-3" style={{ textDecoration: 'none' }}>Terms and Conditions</a>
      <a href="/shipping-policy" className="text-white mx-3" style={{ textDecoration: 'none' }}>Shipping Policy</a>
      <a href="/canellation-policy" className="text-white mx-3" style={{ textDecoration: 'none' }}>Cancellation Policy</a>
      <a href="/exchange-policy" className="text-white mx-3" style={{ textDecoration: 'none' }}>Exchange Policy</a>
      <a href="/privacy-policy" className="text-white mx-3" style={{ textDecoration: 'none' }}>Privacy Policy</a>
    </div>
  </Col>
</Row>

        {/* Divider */}
        <hr style={{ borderColor: '#fff', opacity: 0.2, margin: '20px 0' }} />

        {/* Bottom Row: Currency + Copyright */}
        <Row className="align-items-center justify-content-between">
          <Col md={6}>
            <p className="mb-0" style={{ fontSize: '14px' }}>
              &copy; 2025 NEIGHTIV. All Rights Reserved
            </p>
          </Col>
<Col md="auto" className="d-flex gap-3">
  {[
    { src: paypal, alt: 'PayPal' },
    { src: visa, alt: 'Visa' },
    { src: threeimage, alt: 'MasterCard' },
    { src: applepay, alt: 'Apple Pay' },
    { src: stripe, alt: 'Stripe' },

  ].map((item, index) => (
    <div
      key={index}
      style={{
        backgroundColor: '#fceede',
        padding: '10px 12px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40px',
        width: '60px',
      }}
    >
      <img src={item.src} alt={item.alt} style={{ maxHeight: '20px' }} />
    </div>
  ))}
</Col>

        </Row>
<br/>
      
      </Container>
    </footer>
  );
};

export default Footer;
