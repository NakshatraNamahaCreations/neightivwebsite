import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Footer from '../Components/Footer';
import styles from '../stylesheets/ContactSection.module.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      toast.error('Please fill in all fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      toast.error('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://api.neightivglobal.com/api/contact', formData);
      toast.success('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (err) {
      console.error('Contact Form Submission Error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Failed to send your message. Please try again.');
      toast.error('Failed to send your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />
      <section className={styles.sectionBg}>
        {/* Banner Section */}
        <div className={styles.banner}>
          <h1 className={styles.bannerTitle}>Let's have a talk</h1>
        </div>

        {/* Contact Info and Form */}
        <Container className={styles.containerPad}>
          <Row className={styles.contactRow}>
            {/* Left Contact Info */}
            <Col md={6} className={styles.infoCol}>
              <p className={styles.infoText}>
                We’re here to help with any questions you may have. Feel free to reach out to us anytime!
              </p>

              <div className={styles.contactItem}>
                <div className={styles.iconCircle}>
                  <FaPhoneAlt color="white" />
                </div>
                <span className={styles.contactText}>+91-7338451937</span>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconCircle}>
                  <FaEnvelope color="white" />
                </div>
                <span className={styles.contactText}>contact@neightivglobal.com</span>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconCircle}>
                  <FaInstagram color="white" />
                </div>
                <span className={styles.contactText}>Follow us on Instagram</span>
              </div>
            </Col>

            {/* Right Contact Form */}
            <Col md={6} className={styles.formCol}>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group>
                      <Form.Label className={styles.label}>Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={styles.input}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group>
                      <Form.Label className={styles.label}>Email *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={styles.input}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className={styles.textareaGroup}>
                  <Form.Label className={styles.label}>Message *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="Type your message here"
                    required
                  />
                </Form.Group>
                <Button type="submit" className={styles.button} disabled={loading}>
                  {loading ? <Spinner animation="border" size="sm" /> : 'Submit'}
                </Button>
                {error && (
                  <p style={{ color: '#ff0000', fontSize: '12px', marginTop: '10px' }}>
                    {error}
                  </p>
                )}
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default ContactSection;