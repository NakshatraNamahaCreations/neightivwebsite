import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(location.state?.success || null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Client-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!formData.password) {
      setError('Password is required.');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('https://api.neightivglobal.com/api/customers/login', {
        email: formData.email,
        password: formData.password,
      });

      console.log('Login Success:', response.data);
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/shop', { state: { success: 'Login successful!' } });
    } catch (err) {
      console.error('Login Error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Failed to log in. Please check your credentials.');
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
                Login
              </h2>
              {success && (
                <p style={{ color: '#008000', fontSize: '14px', textAlign: 'center', marginBottom: '20px' }}>
                  {success}
                </p>
              )}
              <Form onSubmit={handleSubmit}>
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
                  {loading ? 'Logging in...' : 'Log In'}
                </Button>
                {error && (
                  <p style={{ color: '#ff0000', fontSize: '12px', marginTop: '10px', textAlign: 'center' }}>
                    {error}
                  </p>
                )}
              </Form>
              <p style={{ textAlign: 'center', marginTop: '20px', color: '#000', fontSize: '16px' }}>
                Don't have an account?{' '}
                <Link to="/register" style={{ color: '#000', textDecoration: 'underline' }}>
                  Register
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

export default Login;