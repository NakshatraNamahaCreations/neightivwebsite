import React from 'react';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
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
    <div>
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
  );
};

export default Header;