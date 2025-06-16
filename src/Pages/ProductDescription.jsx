import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';
import { useCart } from './CartContext';

const ProductDescription = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const imageContainerRef = useRef(null);

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [isMaterialCareOpen, setIsMaterialCareOpen] = useState(false);
  const [isDimensionsOpen, setIsDimensionsOpen] = useState(false);
  const [isShippingReturnsOpen, setIsShippingReturnsOpen] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product and related products
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Fetch the specific product by ID
        const productResponse = await axios.get(`https://api.neightivglobal.com/api/products/${id}`);
        setProduct(productResponse.data);

        // Fetch all products for related products
        const allProductsResponse = await axios.get('https://api.neightivglobal.com/api/products');
        const filteredRelated = allProductsResponse.data
          .filter((p) => p._id !== id)
          .slice(0, 4);
        setRelatedProducts(filteredRelated);

        setLoading(false);
      } catch (err) {
        setError('Failed to fetch product or related products. Please try again later.');
        setLoading(false);
        console.error('Error fetching data:', err);
      }
    };

    fetchProduct();
    window.scrollTo(0, 0); // Reset page scroll to top
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollTop = 0; // Reset image container scroll
    }
  }, [id]);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(
        {
          id: product._id,
          name: product.name,
          price: product.amount,
         image: `https://api.neightivglobal.com${product.images[0]}`,
        },
        quantity
      );
      navigate('/cart');
    }
  };

  const toggleDescription = () => setIsDescriptionOpen(!isDescriptionOpen);
  const toggleMaterialCare = () => setIsMaterialCareOpen(!isMaterialCareOpen);
  const toggleDimensions = () => setIsDimensionsOpen(!isDimensionsOpen);
  const toggleShippingReturns = () => setIsShippingReturnsOpen(!isShippingReturnsOpen);

  if (loading) {
    return <div style={{ padding: '80px 0', textAlign: 'center' }}>Loading...</div>;
  }

  if (error || !product) {
    return <div style={{ padding: '80px 0', textAlign: 'center' }}>{error || 'Product not found'}</div>;
  }

  // Parse details field into materialCare object
  let materialCare = {
    material: 'N/A',
    detail: 'N/A',
    care: 'N/A',
  };
  try {
    const detailsObj = JSON.parse(product.details.replace(/\r\n/g, '')) || {};
    materialCare = {
      material: detailsObj.material || 'N/A',
      detail: detailsObj.detail || 'N/A',
      care: detailsObj.care || 'N/A',
    };
  } catch (e) {
    console.error('Error parsing details:', e);
  }

  // Prepare product images for display
  const productImages = product.images.map((image, index) => ({
    src: `https://api.neightivglobal.com${image}`,
    alt: `${product.name} Image ${index + 1}`,
  }));

  return (
    <>
      <div style={{ backgroundColor: '#fff', padding: '80px 0', position: 'relative', marginTop: '-2%' }}>
        <Container fluid>
          <Row>
            {/* Left Column - Product Images with Scroll (50%) */}
            <Col md={6} style={{ padding: 0 }}>
              <div
                ref={imageContainerRef}
                style={{ overflowY: 'auto', maxHeight: '' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                  {productImages.map((image, index) => (
                    <Image
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      fluid
                      style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                  ))}
                </div>
              </div>
            </Col>

            {/* Right Column - Product Details (Fixed, 50%) */}
            <Col md={6} style={{ position: 'sticky', top: '80px', height: 'fit-content', padding: '50px' }}>
              <h2 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '42px' }}>
                {product.name}
              </h2>
              <p style={{ fontWeight: '500', color: '#5b3327', fontSize: '18px' }}>
                Rs. {product.amount.toLocaleString('en-IN')} <span style={{ fontSize: '14px' }}>(exclusive of taxes)</span>
              </p>

              {/* Quantity Selector */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <Button
                  onClick={handleDecrement}
                  style={{
                    backgroundColor: '#fff',
                    color: '#5b3327',
                    border: '1px solid #5b3327',
                    borderRadius: '0',
                    padding: '5px 10px',
                  }}
                >
                  -
                </Button>
                <span
                  style={{
                    margin: '0 15px',
                    fontSize: '16px',
                    color: '#5b3327',
                    width: '30px',
                    textAlign: 'center',
                  }}
                >
                  {quantity}
                </span>
                <Button
                  onClick={handleIncrement}
                  style={{
                    backgroundColor: '#fff',
                    color: '#5b3327',
                    border: '1px solid #5b3327',
                    borderRadius: '0',
                    padding: '5px 10px',
                  }}
                >
                  +
                </Button>
              </div>

              {/* Add to Cart and Buy Now Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Button
                  onClick={handleAddToCart}
                  style={{
                    backgroundColor: '#5b3327',
                    border: 'none',
                    borderRadius: '0',
                    padding: '10px 0',
                    fontWeight: '500',
                  }}
                >
                  Add to Cart
                </Button>
                <Button
                  onClick={handleAddToCart}
                  style={{
                    backgroundColor: '#000',
                    border: 'none',
                    borderRadius: '0',
                    padding: '10px 0',
                    fontWeight: '500',
                  }}
                >
                  Buy it now
                </Button>
              </div>

              {/* Description Section with Toggle */}
              <div style={{ marginTop: '30px' }}>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                  onClick={toggleDescription}
                >
                  <h5 style={{ fontFamily: 'Lora, serif', color: 'black', margin: 0 }}>Description</h5>
                  <span style={{ fontSize: '20px', color: '#000' }}>{isDescriptionOpen ? '−' : '+'}</span>
                </div>
                {isDescriptionOpen && (
                  <p style={{ color: '#000', marginTop: '10px', fontSize: '18px' }}>
                    {product.description}
                  </p>
                )}
              </div>

              <hr style={{ borderTop: '1px solid #000', margin: '20px 0' }} />

              {/* Material & Care Section with Toggle */}
              <div>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                  onClick={toggleMaterialCare}
                >
                  <h5 style={{ fontFamily: 'Lora, serif', color: '#000', margin: 0 }}>Material & Care</h5>
                  <span style={{ fontSize: '20px', color: '#000' }}>{isMaterialCareOpen ? '−' : '+'}</span>
                </div>
                {isMaterialCareOpen && (
                  // <ul style={{ color: '#000', marginTop: '10px', paddingLeft: '20px' }}>
                  //   <li>Material: {materialCare.material}</li>
                  //   <li>{materialCare.detail}</li>
                  //   <li>Care instructions: {materialCare.care}</li>
                  // </ul>
                    <p style={{ color: '#000', marginTop: '10px', fontSize: '18px' }}>
                    {product.details}
                  </p>
                )}
              </div>

              <hr style={{ borderTop: '1px solid #000', margin: '20px 0' }} />

              {/* Dimensions Section with Toggle */}
              <div>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                  onClick={toggleDimensions}
                >
                  <h5 style={{ fontFamily: 'Lora, serif', color: '#000', margin: 0 }}>Dimensions</h5>
                  <span style={{ fontSize: '20px', color: '#000' }}>{isDimensionsOpen ? '−' : '+'}</span>
                </div>
                {isDimensionsOpen && (
                  <p style={{ color: '#000', marginTop: '10px' }}>
                    {product.dimension}
                  </p>
                )}
              </div>

              <hr style={{ borderTop: '1px solid #000', margin: '20px 0' }} />

              {/* Shipping and Returns Section with Toggle */}
              <div>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                  onClick={toggleShippingReturns}
                >
                  <h5 style={{ fontFamily: 'Lora, serif', color: '#000', margin: 0 }}>Shipping and Returns</h5>
                  <span style={{ fontSize: '20px', color: '#000' }}>{isShippingReturnsOpen ? '−' : '+'}</span>
                </div>
                {isShippingReturnsOpen && (
                  <ul style={{ color: '#000', marginTop: '10px', paddingLeft: '20px' }}>
                    <li>
                      <Link
                        to="/shipping-policy"
                        style={{ color: '#000', fontSize: '18px', textDecoration: 'none' }}
                      >
                        <span style={{ textDecoration: 'underline' }}>Click here</span> for our Shipping Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/return-policy"
                        style={{ color: '#000', fontSize: '18px', textDecoration: 'none' }}
                      >
                        <span style={{ textDecoration: 'underline' }}>Click here</span> for our Return Policy
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              <hr style={{ borderTop: '1px solid #5b3327', margin: '20px 0' }} />
            </Col>
          </Row>
        </Container>

        {/* Related Products Section */}
        <Container fluid style={{ marginTop: '50px', padding: '0 50px' }}>
          <h3 style={{ fontFamily: 'Lora, serif', color: '#5b3327', fontWeight: '500', marginBottom: '30px' }}>
            You may also like
          </h3>
          <Row>
            {relatedProducts.map((relatedProduct) => (
              <Col md={3} key={relatedProduct._id} style={{ marginBottom: '30px' }}>
                <div
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() => setHoveredProduct(relatedProduct._id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  onClick={() => navigate(`/product/${relatedProduct._id}`)}
                >
                  <Image
                    src={
                      hoveredProduct === relatedProduct._id && relatedProduct.images[1]
                        ? `https://api.neightivglobal.com${relatedProduct.images[1]}`
                        : `https://api.neightivglobal.com${relatedProduct.images[0]}`
                    }
                    alt={relatedProduct.name}
                    fluid
                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                  />
                  <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <p style={{ color: '#5b3327', fontSize: '16px', margin: 0 }}>{relatedProduct.name}</p>
                    <p style={{ color: '#5b3327', fontSize: '14px', fontWeight: '500' }}>
                      Rs. {relatedProduct.amount.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default ProductDescription;