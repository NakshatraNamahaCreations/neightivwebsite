import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobilenumber: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Client-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    if (!formData.firstname.trim()) {
      setError('First name is required.');
      return;
    }
    if (!formData.lastname.trim()) {
      setError('Last name is required.');
      return;
    }
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!phoneRegex.test(formData.mobilenumber)) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('https://api.neightivglobal.com/api/customers/register', {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        mobilenumber: formData.mobilenumber,
        password: formData.password,
      });

      console.log('Registration Success:', response.data);
      navigate('/login', { state: { success: 'Registration successful! Please log in.' } });
    } catch (err) {
      console.error('Registration Error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Failed to register. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div style={{ backgroundColor: '#fbeede', padding: '50px 0', minHeight: '100vh', marginTop: '4%' }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <h2 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '32px', textAlign: 'center', marginBottom: '30px' }}>
                Register
              </h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address *</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Mobile Number *</Form.Label>
                  <Form.Control
                    type="text"
                    name="mobilenumber"
                    value={formData.mobilenumber}
                    onChange={handleChange}
                    placeholder="Enter your 10-digit mobile number"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password *</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                  />
                </Form.Group>
                <Button
                  type="submit"
                  disabled={loading}
                  style={{
                    backgroundColor: '#000',
                    border: 'none',
                    borderRadius: '0',
                    padding: '10px 0',
                    fontWeight: '500',
                    width: '100%',
                  }}
                >
                  {loading ? 'Registering...' : 'Register'}
                </Button>
                {error && (
                  <p style={{ color: '#ff0000', fontSize: '12px', marginTop: '10px', textAlign: 'center' }}>
                    {error}
                  </p>
                )}
              </Form>
              <p style={{ textAlign: 'center', marginTop: '20px', color: '#000', fontSize: '16px' }}>
                Already have an account?{' '}
                <Link to="/login" style={{ color: '#000', textDecoration: 'underline' }}>
                  Log in
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Register;