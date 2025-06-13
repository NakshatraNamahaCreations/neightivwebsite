import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scarves from '../assets/Scarves.webp';
import Custom_print_process from '../assets/Custom_print_process.webp';
import Isabelle1 from '../assets/Isabelle1.webp';
import Isabelle2 from '../assets/Isabelle2.webp';
import Dona1 from '../assets/Dona1.jpg';
import Dona2 from '../assets/Dona2.jpg';
import Arya1 from '../assets/Arya1.webp';
import Arya2 from '../assets/Arya2.webp';
import Matthieu1 from '../assets/Matthieu1.webp';
import Matthieu2 from '../assets/Matthieu2.jpg';
import Riding1 from '../assets/Riding1.jpg';
import Riding2 from '../assets/Riding2.jpg';
import Footer from '../Components/Footer';


const CustomPrints = () => {
  return (
    <div style={{fontFamily:'lora serif'}}>
    <Container fluid className="p-0">
      <Row className="m-0">
        {/* Left Column: Background Color and Text */}
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center text-light p-5"
          style={{ backgroundColor: '#4A2E2A', minHeight: '400px' }}
        >
          <div>
            <h1 className="display-4 fw" style={{fontSize:'48px', fontFamily:'Lora serif'}}>Get customised silk scarves!</h1>
            <p className="lead" style={{fontSize:'17px'}}>
              We offer customisation of silk scarves as you desire. A timeless keepsake to cherish your equestrian memories, no matter where you are.
            </p>
          </div>
        </Col>

        {/* Right Column: Image */}
        <Col md={6} className="p-0">
          <img
            src={Scarves}
            alt="Custom Silk Scarves"
            className="img-fluid w-100"
            style={{ minHeight: '400px', objectFit: 'cover' }}
          />
        </Col>
      </Row>
    </Container>
     <Container fluid className="p-0">
        <Row className="m-0">
          <Col className="p-0">
            <img
              src={Custom_print_process}
              alt="Additional Scarves Display"
              className="img-fluid w-100"
              style={{ minHeight: '400px', objectFit: 'cover' }}
            />
          </Col>
        </Row>
      </Container>
       <Container fluid className="py-5" style={{ backgroundColor: '#fbeede' }}>
        <h2 className="text-center mb-5" style={{ color: '#4A2E2A', fontFamily: 'Lora, serif', fontSize: '36px' }}>
          Examples of Custom Scarves
        </h2>
        <Row className="justify-content-center">
          {/* Left Column: Two Images */}
         <Col md={6}>
  <div className="d-flex justify-content-between">
    <div className="text-center mx-2">
      <img
        src={Isabelle1}
        alt="Custom Scarf Example 1"
        className="img-fluid mb-2"
        style={{  width: '320px', borderRadius: '' }}
      />
     
    </div>
    <div className="text-center mx-2">
      <img
        src={Isabelle2}
        alt="Custom Scarf Example 2"
        className="img-fluid mb-2"
        style={{   width: '320px', borderRadius: '' }}
      />

    </div>
  </div>
</Col>


          {/* Right Column: Text Content */}
          <Col md={6} className="d-flex align-items-center">
            <p style={{ fontSize: '20px', color: '#333', lineHeight: '1.6' }}>
              <strong>Isabelle Halseder</strong> had ordered for a long scarf dedicated to her sport, dressage. She also wanted a scarf that was very meaningful to her, featuring her horses alongside her husband. We had received her order along with pictures, preferred style, and colors.
            </p>
          </Col>
        </Row>
<br/>
     <Row className="justify-content-center mt-2">
  {/* Left Column: Two Equal Images Side by Side */}
  <Col md={6}>
    <div className="d-flex justify-content-between">
      <div className="text-center mx-2">
        <img
          src={Dona1}
          alt="Custom Scarf Example 1"
          style={{
            width: '320px',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '',
          }}
        />
      </div>
      <div className="text-center mx-2">
        <img
          src={Dona2}
          alt="Custom Scarf Example 2"
          style={{
            width: '320px',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '',
          }}
        />
      </div>
    </div>
  </Col>

  {/* Right Column: Text */}
  <Col md={6} className="d-flex align-items-center">
    <p style={{ fontSize: '20px', color: '#333', lineHeight: '1.6' }}>
      <strong>Dona</strong> a keen horse rider from Belgium, wanted a simple custom scarf
      with a fun placement of bits and bridles in her chosen color palette.
    </p>
  </Col>
</Row>
<br/>
   <Row className="justify-content-center mt-2">
  {/* Left Column: Two Equal Images Side by Side */}
  <Col md={6}>
    <div className="d-flex justify-content-between">
      <div className="text-center mx-2">
        <img
          src={Arya1}
          alt="Custom Scarf Example 1"
          style={{
            width: '320px',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '',
          }}
        />
      </div>
      <div className="text-center mx-2">
        <img
          src={Arya2}
          alt="Custom Scarf Example 2"
          style={{
             width: '320px',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '',
          }}
        />
      </div>
    </div>
  </Col>

  {/* Right Column: Text */}
  <Col md={6} className="d-flex align-items-center">
    <p style={{ fontSize: '20px', color: '#333', lineHeight: '1.6' }}>
      <strong>Arya </strong>  had ordered for a custom scarf featuring his jumping. We created this beautiful scarf that showcases the process of a jump, from take-off to landing.
    </p>
  </Col>
</Row>
<br/>
   <Row className="justify-content-center mt-2">
  {/* Left Column: Two Equal Images Side by Side */}
  <Col md={6}>
    <div className="d-flex justify-content-between">
      <div className="text-center mx-2">
        <img
          src={Matthieu1}
          alt="Custom Scarf Example 1"
          style={{
           width: '320px',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '',
          }}
        />
      </div>
      <div className="text-center mx-2">
        <img
          src={Matthieu2}
          alt="Custom Scarf Example 2"
          style={{
         width: '320px',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '',
          }}
        />
      </div>
    </div>
  </Col>

  {/* Right Column: Text */}
  <Col md={6} className="d-flex align-items-center">
    <p style={{ fontSize: '20px', color: '#333', lineHeight: '1.6' }}>
      <strong>Matthieu </strong>  a rider and trainer from Belgium, wanted a scarf that features him riding his horse. We created this elegant scarf that shows him and his horse.
    </p>
  </Col>
</Row>

<br/>
   <Row className="justify-content-center mt-2">
  {/* Left Column: Two Equal Images Side by Side */}
  <Col md={6}>
    <div className="d-flex justify-content-between">
      <div className="text-center mx-2">
        <img
          src={Riding1}
          alt="Custom Scarf Example 1"
          style={{
             width: '320px',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '',
          }}
        />
      </div>
      <div className="text-center mx-2">
        <img
          src={Riding2}
          alt="Custom Scarf Example 2"
          style={{
            width: '320px',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '',
          }}
        />
      </div>
    </div>
  </Col>

  {/* Right Column: Text */}
  <Col md={6} className="d-flex align-items-center">
    <p style={{ fontSize: '20px', color: '#333', lineHeight: '1.6' }}>
      Embassy International Riding School had given a bulk order for our Square silk scarves featuring their horses, equestrian-themed designs, and playful placements along with their logo. We designed and delivered 5 different scarves for them as shown.
    </p>
  </Col>
</Row>

<div className="mt-4 text-center">
  <p style={{ fontSize: '30px' ,}}>
    Email us for further details at{" "}
    <a href="mailto:contact@neightivglobal.com" style={{ color: 'black' ,}}>
      contact@neightivglobal.com
    </a>
  </p>
</div>

      </Container>

      <Footer/>
      </div>
  );
};

export default CustomPrints;