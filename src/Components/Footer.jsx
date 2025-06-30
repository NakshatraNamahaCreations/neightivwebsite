// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { FaInstagram } from 'react-icons/fa';
// import Logo from '../../src/assets/Clip_path_group.svg'
// import paypal from '../../src/assets/pay.png';
// import visa from '../../src/assets/visa.png';
// import threeimage from '../../src/assets/threeimage.png'
// import applepay from '../../src/assets/applepay.png'
// import stripe from '../../src/assets/stripe.png'

// const Footer = () => {
//   return (
//     <footer style={{ backgroundColor: '#5b342d', color: '#fff', paddingTop: '40px', fontFamily: 'Lora, serif' }}>
//       <Container fluid style={{ padding: '0 60px' }}>
      


//         {/* Center Logo */}
//         {/* Instagram and Logo Row */}
// <Row className="align-items-center justify-content-between mb-4">
//   <Col md={6}>
//     <a
//       href="https://www.instagram.com/neightiv.official/"
//       target="_blank"
//       rel="noopener noreferrer"
//       style={{ color: '#fff', textDecoration: 'none', fontSize: '16px', display: 'flex', alignItems: 'center' }}
//     >
//       <FaInstagram size={20} style={{ marginRight: '10px' }} />
//       Follow us on Instagram
//     </a>
//   </Col>
//   <Col md={6} className="text-center" >
//     <img
//       src={Logo}
//       alt="NEIGHTIV Logo"
//       style={{ maxHeight: '50px', objectFit: 'contain' , marginLeft:'-100%'}}
//     />
//   </Col>
// </Row>


//         {/* Divider */}
//         <hr style={{ borderColor: '#fff', opacity: 0.2, margin: '20px 0' }} />

//         {/* Navigation Links */}
//        <Row className="text-center">
//   <Col style={{fontFamily: 'Lora, serif', color:'fbeede'}}>
//     <div style={{ marginBottom: '15px' }}>
//       <a href="#" className="text-white mx-3" style={{ textDecoration: 'none' }}>Shop</a>
//       <a href="#" className="text-white mx-3" style={{ textDecoration: 'none' }}>Custom Scarves</a>
//       <a href="#" className="text-white mx-3" style={{ textDecoration: 'none' }}>Our World</a>
//       <a href="#" className="text-white mx-3" style={{ textDecoration: 'none' }}>About Us</a>
//       <a href="#" className="text-white mx-3" style={{ textDecoration: 'none' }}>Contact Us</a>
//     </div>
//     <div>
//        <a href="/terms-and-conditions" className="text-white mx-3" style={{ textDecoration: 'none' }}>Terms and Conditions</a>
//       <a href="/shipping-policy" className="text-white mx-3" style={{ textDecoration: 'none' }}>Shipping Policy</a>
//       <a href="/canellation-policy" className="text-white mx-3" style={{ textDecoration: 'none' }}>Cancellation Policy</a>
//       <a href="/exchange-policy" className="text-white mx-3" style={{ textDecoration: 'none' }}>Exchange Policy</a>
//       <a href="/privacy-policy" className="text-white mx-3" style={{ textDecoration: 'none' }}>Privacy Policy</a>
//     </div>
//   </Col>
// </Row>

//         {/* Divider */}
//         <hr style={{ borderColor: '#fff', opacity: 0.2, margin: '20px 0' }} />

//         {/* Bottom Row: Currency + Copyright */}
//         <Row className="align-items-center justify-content-between">
//           <Col md={6}>
//             <p className="mb-0" style={{ fontSize: '14px' }}>
//               &copy; 2025 NEIGHTIV. All Rights Reserved
//             </p>
//           </Col>
// <Col md="auto" className="d-flex gap-3">
//   {[
//     { src: paypal, alt: 'PayPal' },
//     { src: visa, alt: 'Visa' },
//     { src: threeimage, alt: 'MasterCard' },
//     { src: applepay, alt: 'Apple Pay' },
//     { src: stripe, alt: 'Stripe' },

//   ].map((item, index) => (
//     <div
//       key={index}
//       style={{
//         backgroundColor: '#fceede',
//         padding: '10px 12px',
//         borderRadius: '10px',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '40px',
//         width: '60px',
//       }}
//     >
//       <img src={item.src} alt={item.alt} style={{ maxHeight: '20px' }} />
//     </div>
//   ))}
// </Col>

//         </Row>
// <br/>
      
//       </Container>
//     </footer>
//   );
// };

// export default Footer;


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
<div>
     <footer className='d-none d-lg-block'
    style={{
        backgroundColor: '#5b342d',
        color: '#fff',
        paddingTop: '40px',
        fontFamily: 'Lora, serif',
      }}
    >
      <Container fluid style={{ padding: '0 5vw' }}>
        {/* Instagram and Logo Row */}
        <Row className="align-items-center justify-content-between mb-4">
          <Col xs={12} md={6} className="mb-3 mb-md-0 d-flex align-items-center justify-content-center justify-content-md-start">
            <a
              href="https://www.instagram.com/neightiv.official/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <FaInstagram size={20} style={{ marginRight: '10px' }} />
              Follow us on Instagram
            </a>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end">
            <img
              src={Logo}
              alt="NEIGHTIV Logo"
              style={{
                maxHeight: '50px',
                objectFit: 'contain',
                marginLeft: 0,
                width: 'auto',
                maxWidth: '80vw',
              }}
            />
          </Col>
        </Row>

        {/* Divider */}
        <hr style={{ borderColor: '#fff', opacity: 0.2, margin: '20px 0' }} />

        {/* Navigation Links */}
        <Row className="text-center">
          <Col style={{ fontFamily: 'Lora, serif', color: '#fbeede' }}>
            <div style={{ marginBottom: '15px', flexWrap: 'wrap' }}>
              <a href="/shop" className="text-white mx-2 my-1 d-inline-block" style={{ textDecoration: 'none' }}>Shop</a>
              <a href="/customprints" className="text-white mx-2 my-1 d-inline-block" style={{ textDecoration: 'none' }}>Custom Scarves</a>
              <a href="/ourworld" className="text-white mx-2 my-1 d-inline-block" style={{ textDecoration: 'none' }}>Our World</a>
              <a href="/about-us" className="text-white mx-2 my-1 d-inline-block" style={{ textDecoration: 'none' }}>About Us</a>
              <a href="/contactus" className="text-white mx-2 my-1 d-inline-block" style={{ textDecoration: 'none' }}>Contact Us</a>
            </div>
            <div style={{ flexWrap: 'wrap' }}>
              <a href="/terms-and-conditions" className="text-white mx-2 my-1 d-inline-block" style={{ textDecoration: 'none' }}>Terms and Conditions</a>
              <a href="/shipping-policy" className="text-white mx-2 my-1 d-inline-block" style={{ textDecoration: 'none' }}>Shipping Policy</a>
              <a href="/canellation-policy" className="text-white mx-2 my-1 d-inline-block" style={{ textDecoration: 'none' }}>Cancellation Policy</a>
              <a href="/exchange-policy" className="text-white mx-2 my-1 d-inline-block" style={{ textDecoration: 'none' }}>Exchange Policy</a>
              <a href="/privacy-policy" className="text-white mx-2 my-1 d-inline-block" style={{ textDecoration: 'none' }}>Privacy Policy</a>
            </div>
          </Col>
        </Row>

        {/* Divider */}
        <hr style={{ borderColor: '#fff', opacity: 0.2, margin: '20px 0' }} />

        {/* Bottom Row: Payment Icons and Copyright */}
        <Row className="align-items-center justify-content-between">
          <Col xs={12} md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0" style={{ fontSize: '14px' }}>
              &copy; 2025 NEIGHTIV. All Rights Reserved
            </p>
          </Col>
          <Col xs={12} md="auto" className="d-flex justify-content-center justify-content-md-end gap-2 gap-md-3 flex-wrap">
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
                  marginBottom: '8px',
                }}
              >
                <img src={item.src} alt={item.alt} style={{ maxHeight: '20px', maxWidth: '100%' }} />
              </div>
            ))}
          </Col>
        </Row>
        <br />
      </Container>
      <style>
        {`
          @media (max-width: 767.98px) {
            footer {
              padding-top: 24px !important;
            }
            .mb-4 {
              margin-bottom: 1.5rem !important;
            }
            .text-md-end {
              text-align: center !important;
              margin-top: 10px;
            }
            .text-md-start {
              text-align: center !important;
            }
            .d-flex.gap-2, .d-flex.gap-3 {
              gap: 10px !important;
              flex-wrap: wrap !important;
            }
            .text-center {
              text-align: center !important;
            }
          }
        `}
      </style>
    </footer>
    <footer
  className="d-block d-lg-none"
  style={{
    backgroundColor: '#5b342d',
    color: '#FBEEDE',
    padding: '20px 0',
    fontFamily: 'Lora, serif',
  }}
>
  <Container>
    {/* Instagram Link */}
    <Row className="mb-3">
      <Col className="text-center">
        <a
          href="https://www.instagram.com/neightiv.official/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#FBEEDE',
            textDecoration: 'none',
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FaInstagram size={20} style={{ marginRight: '10px', color: '#FBEEDE' }} />
          Follow us on Instagram
        </a>
      </Col>
    </Row>

    {/* Divider */}
    <Row>
      <Col>
        <hr style={{ borderColor: '#FBEEDE', opacity: 0.2, margin: '20px 0' }} />
      </Col>
    </Row>

    {/* Navigation Links */}
    {/* <Row>
      <Col>
        {['Shop', 'Custom Scarves', 'Our World', 'About Us', 'Contact Us'].map((link, index) => (
          <a
            key={index}
            href={`/${link.toLowerCase().replace(' ', '-')}`}
            style={{
              display: 'block',
              width: '100%',
              fontSize: '20px',
              color: '#FBEEDE',
              backgroundColor: '#5b342d',
              textAlign: 'center',
              textDecoration: 'none',
            }}
          >
            {link}
          </a>
        ))}
      </Col>
      <Col>
        {['Cancellation Policy', 'Refund Policy', 'Privacy Policy'].map((link, index) => (
          <a
            key={index}
            href={`/${link.toLowerCase().replace(' ', '-')}`}
            style={{
              display: 'block',
              width: '100%',
              fontSize: '20px',
              color: '#FBEEDE',
              backgroundColor: '#5b342d',
              textAlign: 'center',
              textDecoration: 'none',
            }}
          >
            {link}
          </a>
        ))}
      </Col>
    </Row> */}

    <Row>
  {/* First Column - Navigation Links */}
  <Col className="text-center">
    <a
      href="/shop"
      style={{
        display: 'block',
        width: '100%',
        fontSize: '18px',
        color: '#FBEEDE',
        backgroundColor: '#5b342d',
        textAlign: 'center',
        textDecoration: 'none',
        // padding: '10px',
      }}
    >
      Shop
    </a>
    <a
      href="/customprints"
      style={{
        display: 'block',
        width: '100%',
        fontSize: '18px',
        color: '#FBEEDE',
        backgroundColor: '#5b342d',
        textAlign: 'center',
        textDecoration: 'none',
        // padding: '10px',
      }}
    >
      Custom Scarves
    </a>
    <a
      href="/ourworld"
      style={{
        display: 'block',
        width: '100%',
        fontSize: '18px',
        color: '#FBEEDE',
        backgroundColor: '#5b342d',
        textAlign: 'center',
        textDecoration: 'none',
        // padding: '10px',
      }}
    >
      Our World
    </a>
    <a
      href="/about-us"
      style={{
        display: 'block',
        width: '100%',
        fontSize: '18px',
        color: '#FBEEDE',
        backgroundColor: '#5b342d',
        textAlign: 'center',
        textDecoration: 'none',
        // padding: '10px',
      }}
    >
      About Us
    </a>
    <a
      href="/contactus"
      style={{
        display: 'block',
        width: '100%',
        fontSize: '18px',
        color: '#FBEEDE',
        backgroundColor: '#5b342d',
        textAlign: 'center',
        textDecoration: 'none',
        // padding: '10px',
      }}
    >
      Contact Us
    </a>
  </Col>

  {/* Second Column - Terms and Conditions Links */}
  <Col className="text-center">
    <a
      href="/canellation-policy"
      style={{
        display: 'block',
        width: '100%',
        fontSize: '18px',
        color: '#FBEEDE',
        backgroundColor: '#5b342d',
        textAlign: 'center',
        textDecoration: 'none',
        // padding: '10px',
      }}
    >
      Cancellation Policy
    </a>
    <a
      href="/terms-and-conditions"
      style={{
        display: 'block',
        width: '100%',
        fontSize: '18px',
        color: '#FBEEDE',
        backgroundColor: '#5b342d',
        textAlign: 'center',
        textDecoration: 'none',
        
        // padding: '10px',
      }}
    >
      Terms and Conditions
    </a>
     <a
      href="/shipping-policy"
      style={{
        display: 'block',
        width: '100%',
        fontSize: '18px',
        color: '#FBEEDE',
        backgroundColor: '#5b342d',
           whiteSpace:'nowrap',
        textAlign: 'center',
        textDecoration: 'none',
        // padding: '10px',
      }}
    >
    Shipping Policy
    </a>
    <a
      href="/privacy-policy"
      style={{
        display: 'block',
        width: '100%',
        fontSize: '18px',
        color: '#FBEEDE',
        backgroundColor: '#5b342d',
        textAlign: 'center',
        whiteSpace:'nowrap',
        textDecoration: 'none',
        // padding: '10px',
      }}
    >
      Privacy Policy
    </a>
  </Col>
</Row>




    {/* Divider */}
    <Row>
      <Col>
        <hr style={{ borderColor: '#FBEEDE', opacity: 0.2, margin: '20px 0' }} />
      </Col>
    </Row>

    

    {/* Copyright and Payment Icons */}
    <Row>
      <Col className="text-center mb-3">
        <p style={{ fontSize: '14px', margin: '0' }}>© 2025 NEIGHTIV. All Rights Reserved</p>
      </Col>
    </Row>

    <Row>
      <Col className="text-center">
        <div className="d-flex justify-content-center gap-2 flex-wrap">
          {[{ src: paypal, alt: 'PayPal' }, { src: visa, alt: 'Visa' }, { src: threeimage, alt: 'MasterCard' }, { src: applepay, alt: 'Apple Pay' }, { src: stripe, alt: 'Stripe' }].map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#FBEEDE',
                padding: '10px 12px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '40px',
                width: '60px',
              }}
            >
              <img src={item.src} alt={item.alt} style={{ maxHeight: '20px', maxWidth: '100%' }} />
            </div>
          ))}
        </div>
      </Col>
    </Row>
  </Container>
</footer>

    </div>
  );
};

export default Footer;