import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HomePage.css';
import StoryImage3 from '../../src/assets/StoryImage3.webp';
import StoryImage1 from '../../src/assets/StoryImage1.webp';
import AboutUsImage from '../assets/StoryImage1.webp';
import bannerImage from '../assets/our-values-banner.webp';  
import Footer from '../Components/Footer';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div style={{ backgroundColor: '#58322B' }}>
     

       <Container fluid className="p-0">
            <Row className="m-0">
              {/* Left Column: Background Color and Text */}
              <Col
                md={6}
                className="d-flex align-items-center justify-content-center text-light p-5"
                style={{ backgroundColor: '#4A2E2A', minHeight: '400px', fontfamily: "Lora, serif"  }}
              >
                <div>
                   <h1 style={{ color: '#FFF5E4', fontSize: '34px', fontWeight: '500', marginBottom: '20px' }}>
                About Us
              </h1>
              <p style={{ color: '#FFF5E4', fontSize: '18px', lineHeight: '1.6' }}>
                Neightiv is an equestrian inspired brand, founded in 2024. We specialize in crafting innovative fashion products and accessories for women and men who adore horses!
              </p>
              <p style={{ color: '#FFF5E4', fontSize: '18px', lineHeight: '1.6' }}>
                The brand’s primary goal is establishing and reaching a vibrant equestrian lovers community.
              </p>
              <p style={{ color: '#FFF5E4', fontSize: '18px', lineHeight: '1.6' }}>
                With intricate craftsmanship in its products, Neightiv aims to celebrate the magical experience between people and their horses. Our carefully-curated digital prints enhance the emotions involved in being a rider, or just simply being around horses.
              </p>
                </div>
              </Col>
      
              {/* Right Column: Image */}
              <Col md={6} className="p-0">
                <img
                  src={AboutUsImage}
                  alt="Custom Silk Scarves"
                  className="img-fluid w-100"
                  style={{ minHeight: '400px', objectFit: 'cover' }}
                />
              </Col>
            </Row>
          </Container>

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
                    style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', marginTop: '120px', borderRadius: '5px' }}
                  />
      
          <p
  data-aos="fade-up"
  style={{
    // backgroundColor: '#f0dbc1',
    color: '#58322B',
    fontSize: '16px',
    lineHeight: '1.6',
    marginTop: '100px',
    padding: '20px 30px', 
    // border: '1px solid #c2a78e', 
    borderRadius: '8px',

    display: 'inline-block',
    // width: '107%', 
    boxSizing: 'border-box'
  }}
>
  In 2024, She launched her brand, <strong>NEIGHTIV</strong>, for people passionate about horses. The brand’s
  philosophy revolves around the calmness and power we experience around the beauty of horses. It is about the
  shared passion around horses, that has been directed towards art on silk.
</p>
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
                      borderRadius: '4px',
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
                    style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginTop: '40px', borderRadius: '5px' }}
                  />
      
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

             <section style={{ backgroundColor: '#fbeede', padding: '60px 0' }}>
      <Container>
        {/* Banner Image */}
        <div style={{ marginBottom: '40px' }}>
          <img
            src={bannerImage}
            alt="Our Values Banner"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              objectFit: 'cover',
            }}
          />
        </div>

      </Container>
    </section>

    <Footer/>
    </div>
  );
};





export default AboutUs;