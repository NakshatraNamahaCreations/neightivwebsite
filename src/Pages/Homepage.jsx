import React, { useEffect, useState } from 'react';
import { Container, Button, Row, Col , Carousel} from 'react-bootstrap';
import { Tilt } from 'react-tilt';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import axios from 'axios';
import Equestrian1 from '../../src/assets/Equestrian1.webp';
import Equestrian2 from '../../src/assets/Equestrian2.webp';
import bannerimage from '../../src/assets/Banner-imge-Neightiv_2.webp';
import group from '../../src/assets/Group_7.png';
import layout6 from '../../src/assets/layout6.webp';
import Image2 from '../../src/assets/image2.jpg';
import Image3 from '../../src/assets/image3.jpg';
import Image4 from '../../src/assets/image4.jpg';
import Image5 from '../../src/assets/image5.jpg';
import Image6 from '../../src/assets/image6.png';
import Image7 from '../../src/assets/image7.png';
import Image8 from '../../src/assets/image8.png';
import Image9 from '../../src/assets/image9.png';
import Image10 from '../../src/assets/image10.png';
import StoryImage1 from '../../src/assets/StoryImage1.webp';
import Footer from '../Components/Footer';
import StoryImage2 from '../../src/assets/StoryImage2.webp';
import StoryImage3 from '../../src/assets/StoryImage3.webp';
import Image11 from '../../src/assets/image_1.jpg';
import Image51 from '../../src/assets/image_4.jpg';
import Image21 from '../../src/assets/image_2.jpg';
import Image61 from '../../src/assets/image_5.webp';
import Image31 from '../../src/assets/image_3.webp';
import Image41 from '../../src/assets/image_6.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './ScrollToTop';
import layout1 from '../assets/layout1.webp';
import layout12 from '../assets/layout12.png';
import mobilebanner from '../assets/Mobilebanner.webp';
import { useCurrency } from './CurrencyContext';



const HomePage = () => {
const navigate = useNavigate();
const { convertPrice, currency } = useCurrency();
  const instagramPostLinks = [
    'https://www.instagram.com/p/DKzHCkvzLsO/?img_index=1', // Replace with actual post URL for Image1
    'https://www.instagram.com/p/DKZsVwPTZ4R/?img_index=1', // Replace with actual post URL for Image2
    'https://www.instagram.com/p/DJZFhKHz-yT/?img_index=1', // Replace with actual post URL for Image3
    'https://www.instagram.com/p/DIbeNx8Tvrj/', // Replace with actual post URL for Image4
    'https://www.instagram.com/p/DJULoE1zt63/?img_index=1', // Replace with actual post URL for Image5
    'https://www.instagram.com/p/DGxx_arTUxz/', // Replace with actual post URL for Image6
  ];


  const [newArrivals, setNewArrivals] = useState([]);

useEffect(() => {
  const fetchNewArrivals = async () => {
    try {
      const res = await axios.get('https://api.neightivglobal.com/api/products');
      const top6 = res.data.slice(0, 6); // Take only the latest 6 or based on logic
      setNewArrivals(top6);
    } catch (err) {
      console.error("Failed to fetch new arrivals", err);
    }
  };
  fetchNewArrivals();
}, []);

  
  

   const overlayMap = {
    [layout6]: Image6,
    [Image2]: Image7,
    [Image3]: Image8,
    [layout1]:layout12,
    [Image4]: Image9,
    [Image5]: Image10,
  };

  

    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


  const handleShopNowClick = () => {
    navigate('/shop'); 
  };

const handleCustomClick = () => {
  navigate('/customprints');
  window.scrollTo(0, 0);
};


  const handleourworldClick = () => {
    navigate('/ourworld');
        window.scrollTo(0, 0);
}

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };


  return (
    <div className="home-page"  >
      {/* Banner Section */}

      <div className='d-none d-lg-block'>
      <div className="banner-section" >
        <Container className="text-container">
          <Row>
            {/* Left Content Section */}
            <Col md={6}>
              <h1>Equestrian Inspired, <br/>Handcrafted with Love</h1>
              <p>
                Our fashion products are innovatively designed and intricately crafted, 
                Truly must-have pieces in your wardrobe!
              </p>
              <Button className="shop-now-btn" onClick={handleShopNowClick}>Shop Now</Button>
            

            </Col>

            {/* Right Content Section */}
            <Col md={6}>
              <div className="quote-section ">
                <p className="quote-text">
                  “The freedom in the reins, <br />
                  The belonging in your eyes, <br />
                  Felt so Neightiv to me, <br />
                  As time passed by”
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      </div>
          <div className="d-block d-lg-none">
  <div>
   <div className="mobile-banner" style={{ position: 'relative' }}>
      <img 
        src={mobilebanner} 
        alt="Equestrian Banner" 
        style={{ width: '100%', height: 'auto' }} 
      />
      
      {/* Quote positioned left on the image */}
      <div 
        style={{
          position: 'absolute', 
          left: '20px', 
          bottom: '-2px', 
          color: 'white', 
          fontSize: '8px',
          fontFamily: 'italic !important',
          lineHeight: '1.6',
          maxWidth: '90%'
        }}
      >
        <p>
          “The freedom in the reins, <br />
          The belonging in your eyes, <br />
          Felt so Neightiv to me, <br />
          As time passed by”
        </p>
      </div>
    </div>
    <Container>
      <Row style={{ backgroundColor: '#58322b',color:'white', padding: '20px 0' }}>
        {/* Left Content Section */}
        <Col md={6}>
          <h1>Equestrian Inspired, <br /> Handcrafted with Love</h1>
          <p>
            Our fashion products are innovatively designed and intricately crafted, 
            Truly must-have pieces in your wardrobe!
          </p>
          <Button style={{backgroundColor:'#f0dbc1', border:'1px solid #f0dbc1', color:'black'}}onClick={handleShopNowClick}>Shop Now</Button>
        </Col>

        {/* Right Content Section */}
        {/* <Col md={6}>
          <div>
            <p>
              “The freedom in the reins, <br />
              The belonging in your eyes, <br />
              Felt so Neightiv to me, <br />
              As time passed by”
            </p>
          </div>
        </Col> */}
      </Row>
    </Container>
    
   
  </div>
</div>
      {/* Equestrian Inspired Fashion Section */}
<section className="fashion-section" style={{overflow:'hidden'}}>
  <Container>
    <Row>
      <Col md={12} className="text-center">
        {/* Small Line, Logo, Small Line */}
        <div
          className="divider-logo-container"
          data-aos="zoom-in"
        >
          <img
            src={group}
            alt="Divider Logo"
            className="divider-logo"
          />
        </div>

        <h2 data-aos="fade-up">Equestrian Inspired Fashion</h2>
        <p className="subheading" data-aos="fade-up" data-aos-delay="200">Our range of silk scarves</p>
      </Col>
    </Row>

    <Row>
      <Col md={6} className="image-container" data-aos="fade-right">
        <div className="image-wrapper">
          <img
            src={Equestrian1}
            alt="Equestrian Fashion 1"
            className="fashion-image"
            style={{ width: "90%" }}
          />
          <div className="overlay-text" data-aos="fade-up" data-aos-delay="300">
          <span
  className="square-text"
  style={{
    borderBottom: '2px solid white',
    paddingBottom: '4px',
    display: 'inline-block',
    cursor: 'pointer',
  }}
  onClick={() => navigate('/shop?filter=square')}
>
  Square Scarves
</span>
          </div>
        </div>
      </Col>

      <Col md={6} className="image-container" data-aos="fade-left">
        <div className="image-wrapper">
          <img
            src={Equestrian2}
            alt="Equestrian Fashion 2"
            className="fashion-image"
            style={{ width: "90%" }}
          />
          <div className="overlay-text" data-aos="fade-up" data-aos-delay="300">
           <span
  className="square-text"
  style={{
    borderBottom: '2px solid white',
    paddingBottom: '4px',
    display: 'inline-block',
    cursor: 'pointer',
  }}
  onClick={() => navigate('/shop?filter=rectangular')}
>
  Rectangular Scarves
</span>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>


<div className="d-none d-lg-block">
<section
      className="new-arrivals-section"
      style={{ backgroundColor: '#58322B', width: '100%', padding: '30px 0 50px 0' }}
    >
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h2 style={{ color: '#fff', marginBottom: '40px' }}>New Arrivals</h2>
          <Carousel indicators={false}>
  {[0, 3].map((startIdx) => (
    <Carousel.Item key={startIdx}>
      <Row>
        {newArrivals.slice(startIdx, startIdx + 3).map((product, index) => (
          <Col md={4} key={product._id} data-aos={index === 0 ? 'fade-right' : index === 1 ? 'fade-up' : 'fade-left'}>
            <Tilt

              options={{ max: 25, scale: 1.05, speed: 400, glare: true, 'max-glare': 0.5 }}
              className="tilt-wrapper"
            >
              <div className="image-wrapper">
                <img
                 onClick={() => handleProductClick(product._id)}
                  src={`https://api.neightivglobal.com${product.images[0]}`}
                  alt={product.name}
                  className="arrival-image"
                />
                {product.images[1] && (
                  <div className="image-overlay">
                    <img
                     onClick={() => handleProductClick(product._id)}
                      src={`https://api.neightivglobal.com${product.images[1]}`}
                      alt={`${product.name} overlay`}
                      className="arrival-image"
                    />
                  </div>
                )}
                <div className="glossy-overlay"></div>
              </div>
              <p className="image-caption">{product.name}</p>
              <p className="image-price">
  {currency} {convertPrice(product.amount * 1.12)} <br />

</p>

              {/* <p className="image-price">{currency} {convertPrice(product.amount)}</p> */}
            </Tilt>
          </Col>
        ))}
      </Row>
    </Carousel.Item>
  ))}
</Carousel>


            <Button
            onClick={handleShopNowClick}
              style={{
                marginTop: '20px',
                backgroundColor: '#FBEEDE',
                color: '#58322B',
                border: 'none',
                padding: '10px 20px',
              }}
            >
            Explore All
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
</div>

<div className="d-block d-lg-none">
  <section
    className="new-arrivals-section"
    style={{ backgroundColor: '#58322B', width: '100%', padding: '30px 0 50px 0' }}
  >
    <Container>
      <Row>
        <Col md={12} className="text-center">
          <h2 style={{ color: '#fff', marginBottom: '40px' }}>New Arrivals</h2>

          <Carousel
            indicators={false}
            interval={3000}
            controls={true}
            pause="hover"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            {newArrivals.map((product) => (
              <Carousel.Item key={product._id}>
                <div
                  className="carousel-item-content"
                  style={{ height: '100%', cursor: 'pointer' }}
                  onClick={() => navigate(`/product/${product._id}`)}
                >
                  <div className="image-wrapper" style={{ height: '100%' }}>
                    <img
                      src={`https://api.neightivglobal.com${product.images[0]}`}
                      alt={product.name}
                      className="arrival-image"
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                    {product.images[1] && (
                      <div className="image-overlay">
                        <img
                          src={`https://api.neightivglobal.com${product.images[1]}`}
                          alt={`${product.name} overlay`}
                          className="arrival-image"
                        />
                      </div>
                    )}
                    <div className="glossy-overlay"></div>
                  </div>
                  <p className="image-caption">{product.name}</p>
                  {/* <p className="image-price">{currency} {convertPrice(product.amount)}</p> */}
                    <p className="image-price">
  {currency} {convertPrice(product.amount * 1.12)} <br />

</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>

          <Button
            onClick={handleShopNowClick}
            style={{
              marginTop: '-65px',
              backgroundColor: '#FBEEDE',
              color: '#58322B',
              border: 'none',
              padding: '10px 20px',
            }}
          >
            Explore All
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
</div>






    <section style={{ backgroundColor: '#FFF5E4', width: '100%', padding: '50px 0' , overflow:'hidden'}}>
  <Container>
    <Row className="mb-5">
      <Col md={12}>
        <h2
          style={{ color: '#58322B', fontWeight: 'bold', marginBottom: '20px', fontSize: '36px' }}
          data-aos="fade-up"
        >
          Our Story
        </h2>
        <Row>
          {/* Left Column */}
          <Col md={6}>
            <p
              data-aos="fade-right"
              style={{ color: '#58322B', fontSize: '20px', lineHeight: '1.6', marginBottom: '20px' }}
            >
              Our story started back in 2021, when our founder, Pannaga Bharadwaj, after a tiring cross-country ride,
              was spending some quality time with her horse. She had a remarkable moment with her horse as described in the
              above poem. In that moment, she realized how empowering the feeling was.
            </p>

            <img
              data-aos="zoom-in"
              src={StoryImage1}
              alt="Pannaga with Horse"
              style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', marginTop: '120px', borderRadius: '' }}
            />

            <p
              data-aos="fade-up"
              style={{ color: '#58322B', fontSize: '16px', lineHeight: '1.6', marginTop: '100px' }}
            >
              In 2024, She launched her brand, <strong>NEIGHTIV</strong>, for people passionate about horses. The brand’s
              philosophy revolves around the calmness and power we experience around the beauty of horses. It is about the
              shared passion around horses, that has been directed towards art on silk.
            </p>

            <img
              data-aos="zoom-in"
              src={StoryImage2}
              alt="First Silk Scarf"
              style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', marginTop: '100px', borderRadius: '' }}
            />
          </Col>

          {/* Right Column */}
          <Col md={6}>
            <div
              data-aos="fade-left"
              style={{
                backgroundColor: '#fce8d8',
                padding: '40px 30px',
                fontFamily: "'Georgia', serif",
                color: '#3f2c1e',
                fontSize: '14px',
                lineHeight: '1.4',
                fontWeight: '400',
                // borderRadius: '4px',
                marginTop: '3%'
              }}
            >
              <div style={{ borderLeft: '2px solid #c2a78e', paddingLeft: '20px' }}>
                <p style={{ marginBottom: '20px', whiteSpace: 'pre-line' }}>
                  “With my seat in the saddle,<br />
                  The power in the reins<br />
                  I came across a sparkle<br />
                  A sharp reflection of the universe,<br />
                  Revealing my existence to me.<br />
                  The depth of my soul<br />
                  In its rawest form.<br />
                  Be it anywhere in the world<br />
                  Or any culture,<br />
                  Cosmic energy came to life.<br />
                  The flaws in me turning into stardust.<br />
                  The minute atoms coming together,<br />
                  The subtle traditions at its high,<br />
                  I smiled to my inner self.<br />
                  Absorbing all the energy.<br />
                  But when I snapped back to reality,<br />
                  I realised the reflection was not a surface,<br />
                  But your eyes.”
                </p>
                <p style={{ fontWeight: 'bold', textAlign: 'right', marginTop: '10px', fontSize: '14px' }}>
                  – Pannaga Bharadwaj
                </p>
              </div>
            </div>

            <p
              data-aos="fade-right"
              style={{ color: '#58322B', fontSize: '16px', lineHeight: '1.6', marginTop: '60px' }}
            >
              While pursuing her graduation in Fashion Design and Marketing at Istituto Marangoni, School of Fashion, London,
              she explored the magical bond between a horse and a rider through art. Her collection during her college days was
              all about embracing the feeling of being around horses.
            </p>

            <img
              data-aos="zoom-in"
              src={StoryImage3}
              alt="Pannaga with Horse"
              style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', marginTop: '40px', borderRadius: '' }}
            />

            <h2
              data-aos="fade-up"
              style={{ color: '#58322B', fontWeight: 'bold', marginTop: '5%', fontSize: '36px' }}
            >
              Custom Scarves
            </h2>

            <p
              data-aos="fade-left"
              style={{ color: '#58322B', fontSize: '16px', lineHeight: '1.6' }}
            >
              Celebrate the timeless bond between you and your horse with our custom-printed scarves. Designed for everyone who
              cherishes this special connection, these unique garments honor a legacy that will be cherished for generations.
            </p>

            <div
            onClick={handleCustomClick}
              data-aos="zoom-in-up"
              style={{
                backgroundColor: '#5b342d',
                color: '#fff',
                padding: '10px 20px',
                textAlign: 'center',
                fontSize: '16px',
                cursor:'pointer',
                fontWeight: '500',
                marginTop: '30px',
                display: 'inline-block',
                fontFamily: "'Segoe UI', sans-serif"
              }}
            >
              Make your own Custom Scarves
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
</section>


<div className='d-none d-lg-block'>
<section style={{ backgroundColor: '#58322B', width: '100%', padding: '50px 0', overflow:'hidden' }}>
  <Container fluid>
    <Row>
      {/* Left: Image1 + Image5 */}
      <Col xs={12} md={4} className="d-flex flex-column justify-content-between">
        <img
          src={Image11}
          alt="Image1"
          data-aos="fade-right"
          style={{
            width: '100%',
            height: '420px',
            objectFit: 'cover',
            // borderRadius: '5px'
          }}
        />
        <img
          src={Image51}
          alt="Image5"
          data-aos="fade-right"
          data-aos-delay="200"
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            marginTop: '20px',
            // borderRadius: '5px'
          }}
        />
      </Col>

      {/* Center: Image2 + Text + Image6 */}
      <Col xs={12} md={4} className="d-flex flex-column justify-content-between">
        <img
          src={Image21}
          alt="Image2"
          data-aos="fade-up"
          style={{
            width: '100%',
            height: '250px',
            objectFit: 'cover',
            // borderRadius: '5px 5px 0 0'
          }}
        />

        <div
          data-aos="zoom-in-up"
          className="d-flex align-items-center justify-content-center"
          style={{ backgroundColor: '#5b342d', height: '150px' }}
        >
          <div className="text-center">
            <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>
              World through<br />our lenses
            </h3>
            <Button
onClick={handleourworldClick}
              style={{
                backgroundColor: '#fff5e4',
                color: '#5b342d',
                border: 'none',
                padding: '6px 16px',
                fontSize: '14px',
                fontWeight: '600',
                // borderRadius: '2px'
              }}
            >
              Explore All
            </Button>
          </div>
        </div>

        <img
          src={Image61}
          alt="Image6"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            width: '100%',
            height: '250px',
            objectFit: 'cover',
            // borderRadius: '0 0 5px 5px'
          }}
        />
      </Col>

      {/* Right: Image3 + Image4 */}
      <Col xs={12} md={4} className="d-flex flex-column justify-content-between">
        <img
          src={Image31}
          alt="Image3"
          data-aos="fade-left"
          style={{
            width: '100%',
            height: '225px',
            objectFit: 'cover',
            marginTop: '-2px',
            // borderRadius: '5px'
          }}
        />
        <img
          src={Image41}
          alt="Image4"
          data-aos="fade-left"
          data-aos-delay="200"
          style={{
            width: '100%',
            height: '400px',
            objectFit: 'cover',
            // borderRadius: '5px'
          }}
        />
      </Col>
    </Row>
  </Container>
</section>
</div>

<div className='d-block d-lg-none'>
  <section style={{ backgroundColor: '#58322B', width: '100%', padding: '50px 0', overflow: 'hidden' }}>
    <Container fluid>
      <Row>
        {/* Left: Image1 + Image5 */}
        <Col xs={12} className="d-flex flex-column justify-content-between mb-4">
          <img
            src={Image11}
            alt="Image1"
            data-aos="fade-right"
            style={{
              width: '100%',
              height: '250px',
              objectFit: 'cover',
              marginBottom: '15px',
            }}
          />
          <img
            src={Image51}
            alt="Image5"
            data-aos="fade-right"
            data-aos-delay="200"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
            }}
          />
        </Col>

        {/* Center: Image2 + Text + Image6 */}
        <Col xs={12} className="d-flex flex-column justify-content-between mb-4">
          <img
            src={Image21}
            alt="Image2"
            data-aos="fade-up"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              marginBottom: '15px',
            }}
          />

          <div
            data-aos="zoom-in-up"
            className="d-flex align-items-center justify-content-center"
            style={{ backgroundColor: '#5b342d', height: '150px' }}
          >
            <div className="text-center">
              <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>
                World through<br />our lenses
              </h3>
              <Button
                onClick={handleourworldClick}
                style={{
                  backgroundColor: '#fff5e4',
                  color: '#5b342d',
                  border: 'none',
                  padding: '6px 16px',
                  fontSize: '14px',
                  fontWeight: '600',
                }}
              >
                Explore All
              </Button>
            </div>
          </div>

          <img
            src={Image61}
            alt="Image6"
            data-aos="fade-up"
            data-aos-delay="200"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              marginTop: '15px',
            }}
          />
        </Col>

        {/* Right: Image3 + Image4 */}
        <Col xs={12} className="d-flex flex-column justify-content-between">
          <img
            src={Image31}
            alt="Image3"
            data-aos="fade-left"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              marginBottom: '15px',
            }}
          />
          <img
            src={Image41}
            alt="Image4"
            data-aos="fade-left"
            data-aos-delay="200"
            style={{
              width: '100%',
              height: '250px',
              objectFit: 'cover',
            }}
          />
        </Col>
      </Row>
    </Container>
  </section>
</div>





<section style={{ backgroundColor: '#fbeede', padding: '40px 0' }}>
  <Container>
    <h3 style={{ textAlign: 'center', color: '#3d2b1f', fontSize: '24px', marginBottom: '30px' }}>
      Follow Us On Instagram
    </h3>

    <Row className="flex-nowrap overflow-auto" style={{ gap: '10px' , }}>
      {[
        'https://www.instagram.com/p/DKzHCkvzLsO/',
        'https://www.instagram.com/p/DJZFhKHz-yT/',
        'https://www.instagram.com/p/DIbeNx8Tvrj/',
        'https://www.instagram.com/p/DJULoE1zt63/',
        'https://www.instagram.com/p/DGxx_arTUxz/',
        // 'https://www.instagram.com/p/DGxx_arTUxz/',

      ].map((link, index) => (
        <Col key={index} xs="auto" style={{ minWidth: '250px' }}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <iframe
              src={`https://www.instagram.com/p/${link.split('/p/')[1].replace('/', '')}/embed`}
              width="200"
              height="250"
              frameBorder="0"
              scrolling="no"
              allowTransparency
              allow="encrypted-media"
              style={{ borderRadius: '8px' }}
            ></iframe>
          </a>
        </Col>
      ))}
    </Row>
  </Container>
</section>


<Footer/>
<ScrollToTop />
    </div>
  );
};

export default HomePage;