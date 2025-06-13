import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grazing from '../assets/Grazing-Horse-2.webp';
import forestwalk from '../assets/Forest walk.mov';
import pannaga from '../assets/pannaga.webp';
import morning from '../assets/morning.webp';
import image1 from '../assets/image1-text.jpg';
import image2 from '../assets/image2-text.webp';
import finalImage from '../assets/finalImage.webp';
import imageLeft from '../assets/imageLeft.webp';
import imageRight from '../assets/imageRight.webp';
import imageCenter from '../assets/imageCenter.webp';
import world1 from '../assets/world1.webp';
import world2 from '../assets/world2.webp';
import imageLeft1 from '../assets/imageLeft1.webp';
import imageCenter2 from '../assets/imageCenter2.webp';
import imageRight3 from '../assets/imageRight3.jpg';
import finalImage1 from '../assets/finalImage1.webp';
import LeftImage from '../assets/LeftImage.webp';
import RightImage from '../assets/RightImage.jpg';
import forestwalkmove from '../assets/forestwalkmove.mov';
import right from '../assets/right.jpg';
import left from '../assets/left.jpg';
import Footer from '../Components/Footer';

const OurWorld = () => {
  return (
    <>

    <Container fluid className="p-0">
      {/* Full-Width Section with Background and Text */}
      <Row className="m-0">
        <Col
          className="d-flex align-items-center justify-content-center text-light py-5"
          style={{ backgroundColor: '#4A2E2A', minHeight: '300px' }}
        >
          <h2
            className="text-center"
            style={{
              fontSize: '30px',
              fontFamily: 'Lora, serif',
              fontWeight: 'normal',
              lineHeight: '1.5',
              color:'#FBEEDE',
              marginTop:'5%'
            }}
          >
            Dive into our poetic world of horses, <br/>our picturesque journal, filled with <br/>enchanting visuals and dramatic poems!
          </h2>
        </Col>
      </Row>
    </Container>

       <Container fluid className="py-5" style={{ backgroundColor: '#fbeede', padding: '0 3rem' }}>
  {/* Row 1 */}
<Row className="align-items-center px-4">
  <Col md={4} className="text-center mb-4 mb-md-0">
    <img
      src={Grazing}
      alt="Horse in Morning Sun"
      className="img-fluid"
      style={{ width: '800px', height: '600px', objectFit: 'cover' }}
    />
  </Col>
  <Col md={4} className="text-center">
    <p
      style={{
        fontSize: '1.6rem',
        fontFamily: 'Lora',
        color: '#58322b',
        lineHeight: '1.4',
        fontWeight: '500',
      }}
    >
      Soaking in the <br /> morning sun, <br /> on horse back <br /> is our style
    </p>
  </Col>
  <Col md={4}>
    <video
      autoPlay
      muted
      loop
      playsInline
      src={forestwalk}
      className="img-fluid"
      style={{ width: '800px', height: '600px', objectFit: 'cover' }}
    >
      <source src={forestwalk} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </Col>
</Row>

  {/* Row 2 */}
<Row className="align-items-center mt-4 px-4">
  {/* Left Column: Text */}
  <Col md={4} className="text-center mb-4 mb-md-0">
    <p
      style={{
        fontSize: '1.6rem',
        color: '#58322b',
        fontFamily: 'Lora, serif',
        lineHeight: '1.5',
        fontWeight: 500,
      }}
    >
      Fresh dew and <br />
      post ride gossip session! <br />
      <span style={{ fontSize: '1.8rem', fontWeight: 500 }}>
        (horses are the best secret keepers)
      </span>
    </p>
  </Col>

  {/* Right Column: Two Images Inside Nested Row */}
  <Col md={8}>
    <Row className="g-3"> {/* gap-3 between columns */}
      <Col md={6}>
        <img
          src={pannaga}
          alt="Gossip Session"
          className="img-fluid"
          style={{ borderRadius: '', width: '800px', objectFit: 'cover', height: '100%' }}
        />
      </Col>
      <Col md={6}>
        <img
          src={morning}
          alt="Morning Field"
          className="img-fluid"
          style={{ borderRadius: '', width: '800px', objectFit: 'cover', height: '100%' }}
        />
      </Col>
    </Row>
  </Col>
</Row>


  {/* Row 3 */}
  <Row className="align-items-center mt-4 px-4">
    <Col md={4} className="text-center mb-4 mb-md-0">
      <img
        src={image1}
        alt="Horse in Morning Sun"
        className="img-fluid"
        style={{ borderRadius: '', width: '100%' }}
      />
    </Col>

    <Col md={4} className="text-center">
      <p
        style={{
          fontSize: '1.6rem',
          fontFamily: 'Lora',
          color: '#58322b',
          lineHeight: '1.4',
          fontWeight: '500',
        }}
      >
        Bound by time's unyielding <br />
        thread, we remain as one
      </p>
    </Col>

    <Col md={4}>
      <img
        src={image2}
        alt="Horse in Morning Sun"
        className="img-fluid"
        style={{ borderRadius: '', width: '100%' }}
      />
    </Col>
  </Row>
  {/* Row 4: Full Width Single Image with Same Padding */}
<Row className="mt-4 px-4">
  <Col>
    <img
      src={finalImage} // replace with your image variable
      alt="Final Showcase"
      className="img-fluid"
      style={{ width: '100%', borderRadius: '' , height:'400px'}}
    />
  </Col>
</Row>

<Row className="justify-content-center mt-5 px-4">
  <Col md={8} className="text-center">
    <h4 style={{ fontWeight: '550', fontFamily: 'Lora', color: '#58322b', fontSize:'1.6rem' }}>Slippery Wood</h4>
    <p style={{ whiteSpace: 'pre-line', fontSize: '1.4rem', fontFamily: 'Lora', color: '#58322b', lineHeight: '1.3', fontWeight:"400" }}>
      The early morning air,{"\n"}
      The dews on leather{"\n"}
      The saddle all slippery,{"\n"}
      The stirrups slipping like feathers.{"\n"}
      The fire inside{"\n\n"}

      With a voice that roars,{"\n"}
      The sound of freedom,{"\n"}
      The fragrance of wood.{"\n"}
      Getting through the time,{"\n"}
      That seemed so long.{"\n"}
      But stored in the heart forever,{"\n"}
      As the moment,{"\n"}
      When time stopped.
    </p>
    <p style={{ fontWeight: '400', fontSize: '1.6rem', fontFamily: 'Lora', color: '#58322b' }}>
      – Pannaga Bharadwaj
    </p>
  </Col>
</Row>


<Row className="mt-5 px-4">
  <Col md={4} className="text-center mb-4 mb-md-0">
    <img
      src={imageLeft} // replace with actual image variable
      alt="Left"
      className="img-fluid"
      style={{ borderRadius: '', width: '100%', objectFit: 'cover' }}
    />
  </Col>
  <Col md={4} className="text-center mb-4 mb-md-0">
    <img
      src={imageCenter} // replace with actual image variable
      alt="Center"
      className="img-fluid"
      style={{ borderRadius: '', width: '100%', objectFit: 'cover' }}
    />
  </Col>
  <Col md={4} className="text-center">
    <img
      src={imageRight} // replace with actual image variable
      alt="Right"
      className="img-fluid"
      style={{ borderRadius: '', width: '100%', objectFit: 'cover' }}
    />
  </Col>
</Row>


  <Row className="align-items-center mt-4 px-4">
    <Col md={4} className="text-center mb-4 mb-md-0">
      <img
        src={world1}
        alt="Horse in Morning Sun"
        className="img-fluid"
        style={{ borderRadius: '', width: '100%', height:'600px' }}
      />
    </Col>

    <Col md={4} className="text-center">
      <p
        style={{
          fontSize: '1.5rem',
          fontFamily: 'Lora',
          color: '#58322b',
          lineHeight: '1.4',
          fontWeight: '500',
        }}
      >
       Style our scarves<br/>
with endless flair.<br/>
Let each fold and twist<br/>
tell a new tale.
      </p>
    </Col>

    <Col md={4}>
      <img
        src={world2}
        alt="Horse in Morning Sun"
        className="img-fluid"
        style={{ borderRadius: '', width: '100%', height:'600px' }}
      />
    </Col>
  </Row>


  <Row className="mt-5 px-4">
  <Col md={4} className="text-center mb-4 mb-md-0">
    <img
      src={imageLeft1} // replace with actual image variable
      alt="Left"
      className="img-fluid"
      style={{ borderRadius: '', width: '100%', objectFit: 'cover' }}
    />
  </Col>
  <Col md={4} className="text-center mb-4 mb-md-0">
    <img
      src={imageCenter2} // replace with actual image variable
      alt="Center"
      className="img-fluid"
      style={{ borderRadius: '', width: '100%', objectFit: 'cover' }}
    />
  </Col>
  <Col md={4} className="text-center">
    <img
      src={imageRight3} // replace with actual image variable
      alt="Right"
      className="img-fluid"
      style={{ borderRadius: '', width: '100%', objectFit: 'cover' }}
    />
  </Col>
</Row>


<Row className="justify-content-center mt-5 px-4">
  <Col md={8} className="text-center">
    <h4 style={{ fontWeight: '550', fontFamily: 'Lora', color: '#58322b', fontSize:'1.6rem' }}>Bold Rhythm</h4>
    <p style={{ whiteSpace: 'pre-line', fontSize: '1.4rem', fontFamily: 'Lora', color: '#58322b', lineHeight: '1.3', fontWeight:"400" }}>
    Bold decisions,{"\n"}
     Gradient smiles,{"\n"}
      The feeling of control at its prime.{"\n"}
     Long reins, Galloping long miles.{"\n"}
      The rhythm of the earth,{"\n"}
     The dust that glows,{"\n"}
      The power it gives,{"\n"}
   The depth it holds.{"\n"}
    </p>
    <p style={{ fontWeight: '400', fontSize: '1.6rem', fontFamily: 'Lora', color: '#58322b' }}>
      – Pannaga Bharadwaj
    </p>
  </Col>
</Row>


<Row className="mt-4 px-4">
  <Col>
    <img
      src={finalImage1} // replace with your image variable
      alt="Final Showcase"
      className="img-fluid"
      style={{ width: '100%', borderRadius: '' ,}}
    />
  </Col>
</Row>


  <Row className="mt-5 px-4">
  <Col md={4} className="text-center mb-4 mb-md-0">
    <img
      src={LeftImage}
      alt="Left"
      className="img-fluid"
      style={{ borderRadius: '0', width: '800px', height: '600px', objectFit: 'cover' }}
    />
  </Col>
  <Col md={4} className="text-center mb-4 mb-md-0">
    <video
      autoPlay
      muted
      loop
      playsInline
      src={forestwalkmove}
      className="img-fluid"
      style={{ borderRadius: '0', width: '800px', height: '600px', objectFit: 'cover' }}
    >
      <source src={forestwalk} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </Col>
  <Col md={4} className="text-center">
    <img
      src={RightImage}
      alt="Right"
      className="img-fluid"
      style={{ borderRadius: '0', width: '800px', height: '600px', objectFit: 'cover' }}
    />
  </Col>
</Row>


  <Row className="align-items-center mt-4 px-4">
    <Col md={4} className="text-center mb-4 mb-md-0">
      <img
        src={right}
        alt="Horse in Morning Sun"
        className="img-fluid"
        style={{ borderRadius: '', width: '100%' }}
      />
    </Col>

    <Col md={4} className="text-center">
      <p
        style={{
          fontSize: '1.5rem',
          fontFamily: 'Lora',
          color: '#58322b',
          lineHeight: '1.4',
          fontWeight: '500',
        }}
      >
       Stepping out in<br />
      Neightiv feels like....
      </p>
    </Col>

    <Col md={4}>
      <img
        src={left}
        alt="Horse in Morning Sun"
        className="img-fluid"
        style={{ borderRadius: '', width: '100%' }}
      />
    </Col>
  </Row>

</Container>


<Footer/>
      </>
  );
};

export default OurWorld;