import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';
import { useCurrency } from './CurrencyContext';

const Shop = () => {
  const navigate = useNavigate();
  const { currency, convertPrice } = useCurrency();
  const [filter, setFilter] = useState('all');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api.neightivglobal.com/api/products');
        setProducts(response.data);
        setLoading(false);
        console.log('Shop: Products fetched', response.data);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
        setLoading(false);
        console.error('Shop: Error fetching products:', err);
      }
    };
    fetchProducts();
  }, []);

  // Log currency changes
  useEffect(() => {
    console.log('Shop: Currency updated to', currency);
  }, [currency]);

  // Calculate price with 12% tax
  const calculatePriceWithTax = (basePrice) => {
    const taxRate = 0.12;
    const priceWithTax = basePrice * (1 + taxRate);
    console.log('Shop: Price with tax', basePrice, '→', priceWithTax);
    return priceWithTax;
  };

  // Filter products based on type
  const filteredProducts =
    filter === 'all'
      ? products
      : products.filter((p) =>
          filter === 'square'
            ? p.dimension.toLowerCase().includes('square') // Filter for square scarves
            : p.dimension.toLowerCase().includes('cm') && !p.dimension.toLowerCase().includes('square') // Filter for rectangular scarves
        );

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
          .product-image-rectangular {
            width: 100%;
            height: auto;  /* Adjusting height for rectangular images */
          }
          .product-image-square {
            width: 100%;
            height: 100%; /* Ensures square image */
            object-fit: cover;
          }
        `}
      </style>

      <div style={{ backgroundColor: '#fff', padding: '80px 0', marginTop: '100px' }}>
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
            {filteredProducts.map((product) => {
              const priceWithTax = calculatePriceWithTax(product.amount);
              const convertedPrice = convertPrice(priceWithTax);

              // Apply a conditional class for rectangular scarves based on the product name or dimension
              const imageClass = product.name.toLowerCase().includes('mare and filly') || product.dimension.toLowerCase().includes('cm') && !product.dimension.toLowerCase().includes('square')
                ? 'product-image-rectangular'
                : 'product-image-square';

              return (
                <Col md={4} className="mb-5 text-center" key={product._id}>
                  <div onClick={() => handleProductClick(product._id)} style={{ cursor: 'pointer', textDecoration: 'none' }}>
                    <div className="product-card">
                      <Image
                        src={`https://api.neightivglobal.com${product.images[0]}`}
                        alt={product.name}
                        fluid
                        className={`product-image ${imageClass}`}
                      />
                      {product.images[1] && (
                        <Image
                          src={`https://api.neightivglobal.com${product.images[1]}`}
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
                      {currency} {Number(convertedPrice).toLocaleString('en', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default Shop;
