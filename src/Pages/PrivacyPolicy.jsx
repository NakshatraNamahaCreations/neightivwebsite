import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer'; // Assuming you have a Footer component

const PrivacyPolicy = () => {
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
                fontSize: '42px',
                textAlign: 'center',
                marginBottom: '40px',
              }}
            >
              Privacy Policy
            </h1>
            <p
              style={{
                fontSize: '18px',
                color: '#000',
                lineHeight: '1.6',
                marginBottom: '20px',
                textAlign: '',
              }}
            >
              Effective Date: 16/05/2025<br />
             Business Name: Neightiv<br />
           Website:{' '}
              <a
                href="https://www.neightivglobal.com"
                style={{ color: '#5b3327', textDecoration: 'underline' }}
              >
                www.neightivglobal.com
              </a>
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
              1. Introduction
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: '#000',
                lineHeight: '1.6',
                marginBottom: '20px',
              }}
            >
              At Neightiv, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use,
              and protect your personal information when you visit our website, shop our products, or interact with our
              services.
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
              2. Information We Collect
            </h2>
            <h3
              style={{
                fontFamily: 'Lora, serif',
                color: '#5b3327',
                fontWeight: '500',
                fontSize: '22px',
                marginBottom: '10px',
              }}
            >
              a. Personal Information
            </h3>
            <ul
              style={{
                fontSize: '18px',
                color: '#000',
                lineHeight: '1.6',
                paddingLeft: '30px',
                marginBottom: '15px',
              }}
            >
              <li style={{ marginBottom: '8px' }}>Name</li>
              <li style={{ marginBottom: '8px' }}>Email address</li>
              <li style={{ marginBottom: '8px' }}>Phone number</li>
              <li style={{ marginBottom: '8px' }}>Shipping and billing address</li>
              <li style={{ marginBottom: '8px' }}>Payment details (processed securely through third-party gateways)</li>
            </ul>
            <h3
              style={{
                fontFamily: 'Lora, serif',
                color: '#5b3327',
                fontWeight: '500',
                fontSize: '22px',
                marginBottom: '10px',
              }}
            >
              b. Technical & Usage Information
            </h3>
            <ul
              style={{
                fontSize: '18px',
                color: '#000',
                lineHeight: '1.6',
                paddingLeft: '30px',
                marginBottom: '15px',
              }}
            >
              <li style={{ marginBottom: '8px' }}>IP address</li>
              <li style={{ marginBottom: '8px' }}>Browser type and version</li>
              <li style={{ marginBottom: '8px' }}>Device type</li>
              <li style={{ marginBottom: '8px' }}>Pages visited, time spent, and navigation patterns</li>
            </ul>
            <h3
              style={{
                fontFamily: 'Lora, serif',
                color: '#5b3327',
                fontWeight: '500',
                fontSize: '22px',
                marginBottom: '10px',
              }}
            >
              c. Marketing Data
            </h3>
            <ul
              style={{
                fontSize: '18px',
                color: '#000',
                lineHeight: '1.6',
                paddingLeft: '30px',
                marginBottom: '15px',
              }}
            >
              <li style={{ marginBottom: '8px' }}>Preferences regarding promotional communications</li>
              <li style={{ marginBottom: '8px' }}>Information submitted through forms (e.g., newsletter sign-up)</li>
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
              3. How We Use Your Information
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
              <li style={{ marginBottom: '8px' }}>Process and fulfill orders</li>
              <li style={{ marginBottom: '8px' }}>Communicate with you about your orders, account, or support requests</li>
              <li style={{ marginBottom: '8px' }}>Send promotional emails (only with your consent)</li>
              <li style={{ marginBottom: '8px' }}>Improve our website, services, and user experience</li>
              <li style={{ marginBottom: '8px' }}>Comply with legal obligations</li>
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
              4. Sharing Your Information
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: '#000',
                lineHeight: '1.6',
                marginBottom: '15px',
              }}
            >
              We do not sell your personal information. However, we may share it with trusted third parties including:
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
              <li style={{ marginBottom: '8px' }}>
                Payment processors (e.g., Stripe, PayPal) to handle transactions securely
              </li>
              <li style={{ marginBottom: '8px' }}>Shipping carriers to deliver your orders</li>
              <li style={{ marginBottom: '8px' }}>
                Marketing platforms (e.g., email marketing tools) for communication, only if you have opted in
              </li>
              <li style={{ marginBottom: '8px' }}>
                Analytics providers (e.g., Google Analytics) to understand website usage and improve performance
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
              5. Cookies & Tracking
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: '#000',
                lineHeight: '1.6',
                marginBottom: '15px',
              }}
            >
              We use cookies and similar technologies to:
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
              <li style={{ marginBottom: '8px' }}>Remember your shopping cart</li>
              <li style={{ marginBottom: '8px' }}>Save login preferences</li>
              <li style={{ marginBottom: '8px' }}>Track website usage for analytics and improvement</li>
            </ul>
            <p
              style={{
                fontSize: '18px',
                color: '#000',
                lineHeight: '1.6',
                marginBottom: '20px',
              }}
            >
              You can adjust your browser settings to refuse cookies, though this may affect your experience.
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
              6. Your Rights
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: '#000',
                lineHeight: '1.6',
                marginBottom: '15px',
              }}
            >
              Depending on your location, you may have the right to:
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
              <li style={{ marginBottom: '8px' }}>Access the personal data we hold about you</li>
              <li style={{ marginBottom: '8px' }}>Correct or delete your information</li>
              <li style={{ marginBottom: '8px' }}>Object to or limit our data processing</li>
              <li style={{ marginBottom: '8px' }}>Withdraw consent for marketing communications</li>
            </ul>
            <p
              style={{
                fontSize: '18px',
                color: '#000',
                lineHeight: '1.6',
                marginBottom: '20px',
              }}
            >
              To exercise these rights, email us at{' '}
              <a
                href="mailto:contact@neightivglobal.com"
                style={{ color: '#5b3327', textDecoration: 'underline' }}
              >
                contact@neightivglobal.com
              </a>
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
              7. Data Security
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: '#000',
                lineHeight: '1.6',
                marginBottom: '20px',
              }}
            >
              We implement security measures to protect your personal information. However, no online platform is 100%
              secure. We encourage strong passwords and safe browsing practices.
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
              8. Retention
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: '#000',
                lineHeight: '1.6',
                marginBottom: '20px',
              }}
            >
              We retain your information only as long as necessary for business operations, legal obligations, or until
              you request deletion (where applicable).
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
              9. Third-Party Links
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: '#000',
                lineHeight: '1.6',
                marginBottom: '20px',
              }}
            >
              Our website may contain links to third-party sites (e.g., Instagram, payment gateways). We are not
              responsible for their privacy practices.
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
              10. Children’s Privacy
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: '#000',
                lineHeight: '1.6',
                marginBottom: '20px',
              }}
            >
              Our services are not intended for children under 13. We do not knowingly collect data from minors.
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
              11. Changes to This Privacy Policy
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: '#000',
                lineHeight: '1.6',
                marginBottom: '20px',
              }}
            >
              We may update this policy from time to time. Any changes will be posted on this page with an updated
              "Effective Date."
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
              12. Contact Us
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: '#000',
                lineHeight: '1.6',
                marginBottom: '15px',
              }}
            >
              If you have questions or requests regarding your personal information, please contact us at:
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
              <li style={{ marginBottom: '8px' }}>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:contact@neightivglobal.com"
                  style={{ color: '#5b3327', textDecoration: 'underline' }}
                >
                  contact@neightivglobal.com
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Address:</strong> #612, Suguna Upper Crest Apartment, Bangarappa Nagar Main Road, Gattigere, RR
                Nagar, Bangalore- 560098
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Phone:</strong>{' '}
                <a href="tel:+917338451937" style={{ color: '#5b3327', textDecoration: 'underline' }}>
                  +91-7338451937
                </a>
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

export default PrivacyPolicy;