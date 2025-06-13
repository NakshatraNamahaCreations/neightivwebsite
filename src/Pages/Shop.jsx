import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';

const Shop = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8011/api/products');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
        setLoading(false);
        console.error('Error fetching products:', err);
      }
    };
    fetchProducts();
  }, []);




  // Filter products based on type
  const filteredProducts =
    filter === 'all' ? products : products.filter((p) => p.dimension.toLowerCase().includes(filter));

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {/* Hover Styles */}
      <style>
        {`
          .product-card {
            position: relative;
            overflow: hidden;
          }
          .product-image {
            transition: opacity 0.4s ease;
            width: 100%;
            display: block;
          }
          .product-card .hover-image {
            position: absolute;
            top: 0;
            cursor: pointer;
            left: 0;
            opacity: 0;
          }
          .product-card:hover .hover-image {
            opacity: 1;
          }
          .product-card:hover .base-image {
            opacity: 0;
          }
        `}
      </style>

      <div style={{ backgroundColor: '#fff', padding: '80px 0', marginTop: '4%' }}>
        <Container>
          <Row className="justify-content-between align-items-center mb-4 px-3">
            <Col md="auto">
              <h2 style={{ fontFamily: 'Lora, serif', color: '#58322b', fontWeight: '500' }}>
                Equestrian Inspired Accessories
              </h2>
            </Col>
            <Col md="auto">
              <div className="d-flex">
                {['all', 'square', 'rectangular'].map((type, index) => {
                  const isActive = filter === type;
                  const label =
                    type === 'all'
                      ? 'All'
                      : type === 'square'
                      ? 'Square Scarves'
                      : 'Rectangular Scarves';

                  return (
                    <Button
                      key={type}
                      onClick={() => setFilter(type)}
                      style={{
                        backgroundColor: isActive ? '#5b3327' : 'transparent',
                        color: isActive ? '#ffffff' : '#5b3327',
                        border: '1px solid #5b3327',
                       
                        fontWeight: '500',
                        marginRight: index < 2 ? '10px' : '0',
                      }}
                    >
                      {label}
                    </Button>
                  );
                })}
              </div>
            </Col>
          </Row>

          <Row className="px-3">
            {filteredProducts.map((product) => (
              <Col md={4} className="mb-5 text-center" key={product._id}>
                <div
                  onClick={() => handleProductClick(product._id)}
                  style={{ cursor: 'pointer', textDecoration: 'none' }}
                >
                  <div className="product-card">
                    <Image
                      src={`http://localhost:8011${product.images[0]}`}
                      alt={product.name}
                      fluid
                      className="product-image base-image"
                    />
                    {product.images[1] && (
                      <Image
                        src={`http://localhost:8011${product.images[1]}`}
                        alt={`${product.name} Hover`}
                        fluid
                        className="product-image hover-image"
                      />
                    )}
                  </div>
                  <h5 style={{ marginTop: '15px', fontFamily: 'Lora', color: '#5b3327' }}>
                    {product.name}
                  </h5>
                  <p style={{ fontWeight: '500', color: '#5b3327' }}>
                    Rs. {product.amount.toLocaleString('en-IN')}
                  </p>
                </div>
              </Col>
            ))}
          </Row>

          {/* Button to test adding a product (for demonstration) */}
          {/* <Row className="px-3">
            <Col className="text-center">
              <Button onClick={handleAddSampleProduct} style={{ backgroundColor: '#5b3327', border: 'none' }}>
                Add Sample Product
              </Button>
            </Col>
          </Row> */}
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default Shop;