import React from 'react';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import Logo from '../assets/Neightiv-full-logo.svg';
import countryList from 'country-list-js';

const Header = ({ country, onCountryChange }) => {
  // Get all countries dynamically
  const countries = Object.values(countryList.all)
    .map((c) => ({
      code: c.iso2,
      name: c.name,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
     <div className='d-none d-lg-block'>
      {/* Country dropdown fixed at the top */}
      <div
        style={{
          backgroundColor: '#4a3728',
          color: '#FBEEDE',
          textAlign: 'right',
          padding: '5px 20px',
          fontSize: '14px',
          position: 'fixed',

          top: 0,
          left: 0,
          right: 0,
          zIndex: 1001,
        }}
      >
        <Form.Select
          size="sm"
          value={country || ''}
          onChange={(e) => {
            console.log('Header: Selected country:', e.target.value);
            onCountryChange(e.target.value);
          }}
          style={{
            width: '160px',
            display: 'inline-block',
            marginTop:'-3%',
            backgroundColor: '#FBEEDE',
            color: '#4a3728',
            border: '1px solid #d3b9a3',
          }}
        >
          <option value="">Select Country</option>
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name} ({c.code})
            </option>
          ))}
        </Form.Select>
      </div>

      <Navbar
        fixed="top"
        style={{
          backgroundColor: '#FBEEDE',
          padding: '20px 0',
          height: '75px',
          marginTop: '24px',
        }}
        expand="lg"
      >
        <Container fluid>
          <Nav
            className="me-auto"
            style={{
              display: 'flex',
              gap: '10px',
              paddingLeft: '20px',
              alignItems: 'center',
            }}
          >
            <Nav.Link
              href="/shop"
              style={{ color: '#4a3728', fontSize: '16px', fontWeight: 'normal' }}
            >
              Shop
            </Nav.Link>
            <span style={{ width: '1px', height: '20px', backgroundColor: '#d3b9a3' }}></span>
            <Nav.Link
              href="/customprints"
              style={{ color: '#4a3728', fontSize: '16px', fontWeight: 'normal' }}
            >
              Custom Scarves
            </Nav.Link>
            <span style={{ width: '1px', height: '20px', backgroundColor: '#d3b9a3' }}></span>
            <Nav.Link
              href="/contactus"
              style={{ color: '#4a3728', fontSize: '16px', fontWeight: 'normal' }}
            >
              Contact Us
            </Nav.Link>
          </Nav>

          <Navbar.Brand
            href="/"
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: 0,
            }}
          >
            <img
              src={Logo}
              alt="NEIGHTIV Logo"
              style={{ height: '40px', objectFit: 'contain' }}
            />
          </Navbar.Brand>

          <Nav
            style={{
              paddingRight: '10px',
              alignItems: 'center',
            }}
          >
            <Nav.Link
              href="/about-us"
              style={{ color: '#4a3728', fontSize: '16px', fontWeight: 'normal' }}
            >
              About Us
            </Nav.Link>
            <span style={{ width: '1px', height: '20px', backgroundColor: '#d3b9a3' }}></span>
            <Nav.Link
              href="/ourworld"
              style={{ color: '#4a3728', fontSize: '16px', fontWeight: 'normal' }}
            >
              Our World
            </Nav.Link>
            <span style={{ width: '1px', height: '20px', backgroundColor: '#d3b9a3' }}></span>
            <Nav.Link href="/cart" style={{ color: '#4a3728', fontSize: '16px' }}>
              <FaShoppingCart />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
<div className="d-block d-lg-none">
  {/* Fixed Header */}
  <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1050 }}>
    {/* Country Dropdown */}
    <div
      style={{
        backgroundColor: '#5b342d',
        color: '#FBEEDE',
        padding: '5px 20px',
        fontSize: '14px',
      }}
    >
      <Form.Select
        size="sm"
        value={country || ''}
        onChange={(e) => onCountryChange(e.target.value)}
        style={{
          width: '100%',
          backgroundColor: '#FBEEDE',
          color: '#4a3728',
          border: '1px solid #d3b9a3',
        }}
      >
        <option value="">Select Country</option>
        {countries.map((c) => (
          <option key={c.code} value={c.code}>
            {c.name} ({c.code})
          </option>
        ))}
      </Form.Select>
    </div>

    {/* Navbar */}
    <Navbar
      expand="lg"
      style={{
        backgroundColor: '#FBEEDE',
        padding: '10px 0',
        height: '60px',
        position: 'relative',
      }}
    >
      <Container fluid>
        {/* Toggle Icon */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          aria-label="Toggle navigation"
          style={{
            backgroundColor: '#5b342d',
            border: 'none',
            color: '#FBEEDE',
            fontSize: '1.5rem',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <FaBars />
        </Navbar.Toggle>

        {/* Logo Center */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1100,
          }}
        >
          <Navbar.Brand href="/">
            <img
              src={Logo}
              alt="NEIGHTIV Logo"
              style={{ height: '30px', objectFit: 'contain' }}
              onError={(e) => (e.target.src = '/fallback-logo.png')}
            />
          </Navbar.Brand>
        </div>

        {/* Cart Icon */}
        <Nav.Link
          href="/cart"
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#4a3728',
            zIndex: 1100,
            fontSize: '1.5rem',
          }}
        >
          <FaShoppingCart />
        </Nav.Link>

        {/* Collapsible Nav Links */}
         <Navbar.Collapse
            id="basic-navbar-nav"
            style={{
              backgroundColor: '#5b342d',
              padding: '10px',
              zIndex: 1000,
              position: 'absolute',
              marginLeft:'-4%',
              top: '60px',
              width: '100%',
            }}
          >
            <Nav style={{ width: '100%' }}>
              <Nav.Link
                href="/about-us"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  color: '#FBEEDE',
                  backgroundColor: '#5b342d',
                  textAlign: 'center',
                  borderBottom: '1px solid #FBEEDE',
                  textDecoration: 'none',
                }}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="/shop"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  color: '#FBEEDE',
                  backgroundColor: '#5b342d',
                  textAlign: 'center',
                  borderBottom: '1px solid #FBEEDE',
                  textDecoration: 'none',
                }}
              >
                Shop
              </Nav.Link>
              <Nav.Link
                href="/customprints"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  color: '#FBEEDE',
                  backgroundColor: '#5b342d',
                  textAlign: 'center',
                  borderBottom: '1px solid #FBEEDE',
                  textDecoration: 'none',
                }}
              >
                Custom Prints
              </Nav.Link>
              <Nav.Link
                href="/ourworld"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  color: '#FBEEDE',
                  backgroundColor: '#5b342d',
                  textAlign: 'center',
                  borderBottom: '1px solid #FBEEDE',
                  textDecoration: 'none',
                }}
              >
                Our World
              </Nav.Link>
              <Nav.Link
                href="/contactus"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  color: '#FBEEDE',
                  backgroundColor: '#5b342d',
                  textAlign: 'center',
                  borderBottom: '1px solid #FBEEDE',
                  textDecoration: 'none',
                }}
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>

  {/* Add spacer below fixed header (60px Navbar + 42px Country Dropdown) */}
  <div style={{ paddingTop: '102px' }}></div>
</div>



    </>
   
  );
};

export default Header;

{/* <div className="d-block d-lg-none">

      <div
        style={{
          backgroundColor: '#5b342d',
          color: '#FBEEDE',
          padding: '5px 20px',
          fontSize: '14px',
          position: 'relative',
          zIndex: 1050,
        }}
      >
        <Form.Select
          size="sm"
          value={country || ''}
          onChange={(e) => {
            console.log('Header: Selected country:', e.target.value);
            onCountryChange(e.target.value);
          }}
          style={{
            width: '100%',
            backgroundColor: '#FBEEDE',
            color: '#4a3728',
            border: '1px solid #d3b9a3',
          }}
        >
          <option value="">Select Country</option>
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name} ({c.code})
            </option>
          ))}
        </Form.Select>
      </div>

      <Navbar
        expand="lg"
        style={{
          backgroundColor: '#FBEEDE',
          padding: '10px 0',
          height: '60px',
          position: 'relative',
          zIndex: 1000,
        }}
      >
        <Container fluid>
         
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            aria-label="Toggle navigation"
            style={{
              backgroundColor: '#5b342d',
              border: 'none',
              color: '#FBEEDE',
              fontSize: '1.5rem',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <FaBars />
          </Navbar.Toggle>

          
          <div
            style={{
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1100,
            }}
          >
            <Navbar.Brand href="/">
              <img
                src={Logo}
                alt="NEIGHTIV Logo"
                style={{ height: '30px', objectFit: 'contain' }}
                onError={(e) => (e.target.src = '/fallback-logo.png')}
              />
            </Navbar.Brand>
          </div>

          <Nav.Link
            href="/cart"
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#4a3728',
              zIndex: 1100,
              fontSize: '1.5rem',
            }}
          >
            <FaShoppingCart />
          </Nav.Link>

             <Navbar.Collapse
            id="basic-navbar-nav"
            style={{
              backgroundColor: '#5b342d',
              padding: '10px',
              zIndex: 1000,
              position: 'absolute',
              marginLeft:'-4%',
              top: '60px',
              width: '100%',
            }}
          >
            <Nav style={{ width: '100%' }}>
              <Nav.Link
                href="/about-us"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  color: '#FBEEDE',
                  backgroundColor: '#5b342d',
                  textAlign: 'center',
                  borderBottom: '1px solid #FBEEDE',
                  textDecoration: 'none',
                }}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="/shop"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  color: '#FBEEDE',
                  backgroundColor: '#5b342d',
                  textAlign: 'center',
                  borderBottom: '1px solid #FBEEDE',
                  textDecoration: 'none',
                }}
              >
                Shop
              </Nav.Link>
              <Nav.Link
                href="/customprints"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  color: '#FBEEDE',
                  backgroundColor: '#5b342d',
                  textAlign: 'center',
                  borderBottom: '1px solid #FBEEDE',
                  textDecoration: 'none',
                }}
              >
                Custom Prints
              </Nav.Link>
              <Nav.Link
                href="/ourworld"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  color: '#FBEEDE',
                  backgroundColor: '#5b342d',
                  textAlign: 'center',
                  borderBottom: '1px solid #FBEEDE',
                  textDecoration: 'none',
                }}
              >
                Our World
              </Nav.Link>
              <Nav.Link
                href="/contactus"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  color: '#FBEEDE',
                  backgroundColor: '#5b342d',
                  textAlign: 'center',
                  borderBottom: '1px solid #FBEEDE',
                  textDecoration: 'none',
                }}
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div> */}