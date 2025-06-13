import React, { useEffect } from 'react';
import { Container, Button, Row, Col , Carousel} from 'react-bootstrap';
import { Tilt } from 'react-tilt';
import './HomePage.css';
import Equestrian1 from '../../src/assets/Equestrian1.webp';
import Equestrian2 from '../../src/assets/Equestrian2.webp';
import group from '../../src/assets/Group_7.png';
import Image1 from '../../src/assets/image1.jpg';
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




const HomePage = () => {

  

   const overlayMap = {
    [Image1]: Image6,
    [Image2]: Image7,
    [Image3]: Image8,
    [layout1]:layout12,
    [Image4]: Image9,
    [Image5]: Image10,
  };

    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="home-page">
      {/* Banner Section */}
      <div className="banner-section">
        <Container className="text-container">
          <Row>
            {/* Left Content Section */}
            <Col md={6}>
              <h1>Equestrian Inspired, <br/>Handcrafted with Love</h1>
              <p>
                Our fashion products are innovatively designed and intricately crafted, 
                Truly must-have pieces in your wardrobe!
              </p>
              <Button className="shop-now-btn">Shop Now</Button>
            </Col>

            {/* Right Content Section */}
            <Col md={6}>
              <div className="quote-section">
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
                display: 'inline-block'
              }}
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
                display: 'inline-block'
              }}
            >
              Rectangular Scarves
            </span>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>


<section
      className="new-arrivals-section"
      style={{ backgroundColor: '#58322B', width: '100%', padding: '30px 0 50px 0' }}
    >
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h2 style={{ color: '#fff', marginBottom: '40px' }}>New Arrivals</h2>
            <Carousel indicators={false}>
              <Carousel.Item>
                <Row>
                  <Col md={4} data-aos="fade-right">
                    <Tilt
                      options={{
                        max: 25,
                        scale: 1.05,
                        speed: 400,
                        glare: true,
                        'max-glare': 0.5,
                      }}
                      className="tilt-wrapper"
                    >
                      <div className="image-wrapper">
                        <img
                          src={Image1}
                          alt="New Arrival 1"
                          className="arrival-image"
                        />
                        <div className="image-overlay">
                          <img
                            src={overlayMap[Image1]}
                            alt="Overlay Image 1"
                            className="arrival-image"
                          />
                        </div>
                        <div className="glossy-overlay"></div>
                      </div>
                      <p className="image-caption">Entry to the tack room</p>
                      <p className="image-price">Rs. 7,573.69</p>
                    </Tilt>
                  </Col>
                  <Col md={4} data-aos="fade-up">
                    <Tilt
                      options={{
                        max: 25,
                        scale: 1.05,
                        speed: 400,
                        glare: true,
                        'max-glare': 0.5,
                      }}
                      className="tilt-wrapper"
                    >
                      <div className="image-wrapper">
                        <img
                          src={Image2}
                          alt="New Arrival 2"
                          className="arrival-image"
                        />
                        <div className="image-overlay">
                          <img
                            src={overlayMap[Image2]}
                            alt="Overlay Image 2"
                            className="arrival-image"
                          />
                        </div>
                        <div className="glossy-overlay"></div>
                      </div>
                      <p className="image-caption">The grazing synergy</p>
                      <p className="image-price">Rs. 7,573.69</p>
                    </Tilt>
                  </Col>
                  <Col md={4} data-aos="fade-left">
                    <Tilt
                      options={{
                        max: 25,
                        scale: 1.05,
                        speed: 400,
                        glare: true,
                        'max-glare': 0.5,
                      }}
                      className="tilt-wrapper"
                    >
                      <div className="image-wrapper">
                        <img
                          src={Image3}
                          alt="New Arrival 3"
                          className="arrival-image"
                        />
                        <div className="image-overlay">
                          <img
                            src={overlayMap[Image3]}
                            alt="Overlay Image 3"
                            className="arrival-image"
                          />
                        </div>
                        <div className="glossy-overlay"></div>
                      </div>
                      <p className="image-caption">Saddle power</p>
                      <p className="image-price">Rs. 7,573.69</p>
                    </Tilt>
                  </Col>
                </Row>
              </Carousel.Item>

              <Carousel.Item>
                <Row>
                  <Col md={4} data-aos="fade-right">
                    <Tilt
                      options={{
                        max: 25,
                        scale: 1.05,
                        speed: 400,
                        glare: true,
                        'max-glare': 0.5,
                      }}
                      className="tilt-wrapper"
                    >
                      <div className="image-wrapper">
                        <img
                          src={layout1}
                          alt="New Arrival 3"
                          className="arrival-image"
                        />
                        <div className="image-overlay">
                          <img
                            src={overlayMap[layout1]}
                            alt="Overlay Image 3"
                            className="arrival-image"
                          />
                        </div>
                        <div className="glossy-overlay"></div>
                      </div>
                      <p className="image-caption">Saddles in Queue</p>
                      <p className="image-price">Rs. 7,573.69</p>
                    </Tilt>
                  </Col>
                  <Col md={4} data-aos="fade-up">
                    <Tilt
                      options={{
                        max: 25,
                        scale: 1.05,
                        speed: 400,
                        glare: true,
                        'max-glare': 0.5,
                      }}
                      className="tilt-wrapper"
                    >
                      <div className="image-wrapper">
                        <img
                          src={Image4}
                          alt="New Arrival 4"
                          className="arrival-image"
                        />
                        <div className="image-overlay">
                          <img
                            src={overlayMap[Image4]}
                            alt="Overlay Image 4"
                            className="arrival-image"
                          />
                        </div>
                        <div className="glossy-overlay"></div>
                      </div>
                      <p className="image-caption">Bits repeat (Green)</p>
                      <p className="image-price">Rs. 7,573.69</p>
                    </Tilt>
                  </Col>
                  <Col md={4} data-aos="fade-left">
                    <Tilt
                      options={{
                        max: 25,
                        scale: 1.05,
                        speed: 400,
                        glare: true,
                        'max-glare': 0.5,
                      }}
                      className="tilt-wrapper"
                    >
                      <div className="image-wrapper">
                        <img
                          src={Image5}
                          alt="New Arrival 5"
                          className="arrival-image"
                        />
                        <div className="image-overlay">
                          <img
                            src={overlayMap[Image5]}
                            alt="Overlay Image 5"
                            className="arrival-image"
                          />
                        </div>
                        <div className="glossy-overlay"></div>
                      </div>
                      <p className="image-caption">It's feed time (Green)</p>
                      <p className="image-price">Rs. 7,573.69</p>
                    </Tilt>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>

            <Button
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
                marginTop: '-9%'
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
              data-aos="zoom-in-up"
              style={{
                backgroundColor: '#5b342d',
                color: '#fff',
                padding: '10px 20px',
                textAlign: 'center',
                fontSize: '16px',
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



<section style={{ backgroundColor: '#fbeede', padding: '60px 0' }}>
  <Container>
    <h3 style={{ textAlign: 'center', color: '#3d2b1f', fontSize: '24px', marginBottom: '40px' }}>
      Follow Us On Instagram
    </h3>
    <Row className="justify-content-center">
      {[Image1, Image2, Image3, Image4, Image5, Image6].map((img, index) => (
        <Col key={index} xs={6} md={2} className="mb-4 d-flex justify-content-center">
          <a
            href="https://www.instagram.com/neightiv.official/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', position: 'relative', overflow: 'hidden', borderRadius: '' }}
          >
            <img
              src={img}
              alt={`Instagram ${index + 1}`}
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
                transition: '0.3s ease-in-out',
              }}
              onMouseOver={e => (e.currentTarget.style.filter = 'brightness(70%)')}
              onMouseOut={e => (e.currentTarget.style.filter = 'brightness(100%)')}
            />
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