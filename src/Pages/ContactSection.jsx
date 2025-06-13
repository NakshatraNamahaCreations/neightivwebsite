import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaInstagram } from 'react-icons/fa';
import contactbanner from '../assets/contactusbanner.png';
import Footer from '../Components/Footer';

const ContactSection = () => {
  return (
    <>
    <section style={{ backgroundColor: '#fbeede', paddingTop: '0', paddingBottom: '60px' }}>
      {/* Banner Section */}
      <div
        style={{
          width: '100%',
          height: '400px',
          backgroundImage: `url(${contactbanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '30px 60px',
        }}
      >
        <h1 style={{
          color: '#fff',
          fontSize: '48px',
          fontWeight: 'bold',
          fontFamily: 'Georgia, serif',
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
        }}>
        Let's have a talk
        </h1>
      </div>

      {/* Contact Info and Form */}
      <Container style={{ marginTop: '40px' }}>
        <Row style={{
          border: '1px solid #5b342d',
          padding: '40px',
          margin: 'auto',
        }}>
          {/* Left Contact Info */}
          <Col md={6} style={{ borderRight: '1px solid #5b342d' }}>
            <p style={{
              color: '#3f2c1e',
              fontSize: '20px',
              fontFamily: 'Georgia, serif',
              lineHeight: '1.7',
              marginBottom: '40px',
            }}>
              We’re here to help with any questions you may have. Feel free to reach out to us anytime!
            </p>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <div style={styles.iconCircle}>
                <FaPhoneAlt color="white" />
              </div>
              <span style={styles.contactText}>+91-7338451937</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <div style={styles.iconCircle}>
                <FaEnvelope color="white" />
              </div>
              <span style={styles.contactText}>contact@neightivglobal.com</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={styles.iconCircle}>
                <FaInstagram color="white" />
              </div>
              <span style={styles.contactText}>Follow us on Instagram</span>
            </div>
          </Col>

          {/* Right Contact Form */}
          <Col md={6}>
            <Form>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label style={styles.label}>Name</Form.Label>
                    <Form.Control type="text" style={styles.input} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label style={styles.label}>Email</Form.Label>
                    <Form.Control type="email" style={styles.input} />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group style={{ marginTop: '20px' }}>
                <Form.Label style={styles.label}>Message</Form.Label>
                <Form.Control as="textarea" rows={4} style={styles.input} placeholder="Type your message here" />
              </Form.Group>
              <Button style={styles.button}>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
    <Footer/>
    </>
  );
};

const styles = {
  iconCircle: {
    width: '36px',
    height: '36px',
    backgroundColor: '#5b342d',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '16px',
  },
  contactText: {
    color: '#3f2c1e',
    fontSize: '17px',
    fontFamily: 'Georgia, serif',
  },
  label: {
    color: '#3f2c1e',
    fontFamily: 'Georgia, serif',
    fontSize: '16px',
    marginBottom: '8px',
  },
  input: {
    border: 'none',
    borderBottom: '1px solid #3f2c1e',
    borderRadius: '0',
    backgroundColor: 'transparent',
    color: '#3f2c1e',
  },
  button: {
    backgroundColor: '#5b342d',
    color: 'white',
    border: 'none',
    marginTop: '30px',
    padding: '10px 30px',
    fontWeight: 'bold',
    borderRadius: '2px',
  }
};

export default ContactSection;
