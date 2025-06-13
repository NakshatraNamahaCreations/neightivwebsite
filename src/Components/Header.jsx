import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import Logo from '../assets/Neightiv-full-logo.svg';

const Header = () => {
  return (
    <Navbar
      fixed="top"
      style={{ backgroundColor: '#FBEEDE', padding: '20px 0', height: '75px' }}
      expand="lg"
    >
      <Container fluid>
        <Nav className="me-auto" style={{ display: 'flex', gap: '10px', paddingLeft: '20px', alignItems: 'center' }}>
          <Nav.Link href="/shop" style={{ color: '#4a3728', fontSize: '16px', fontWeight: 'normal' }}>Shop</Nav.Link>
            <span style={{ width: '1px', height: '20px', backgroundColor: '#d3b9a3' }}></span>
          <Nav.Link href="/customprints" style={{ color: '#4a3728', fontSize: '16px', fontWeight: 'normal' }}>Custom Scarves</Nav.Link>
            <span style={{ width: '1px', height: '20px', backgroundColor: '#d3b9a3' }}></span>
          <Nav.Link href="/contactus" style={{ color: '#4a3728', fontSize: '16px', fontWeight: 'normal' }}>Contact Us</Nav.Link>
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

        <Nav style={{ paddingRight: '10px', alignItems: 'center' }}>
          <Nav.Link href="/about-us" style={{ color: '#4a3728', fontSize: '16px', fontWeight: 'normal' }}>About Us</Nav.Link>
            <span style={{ width: '1px', height: '20px', backgroundColor: '#d3b9a3' }}></span>
          <Nav.Link href="/ourworld" style={{ color: '#4a3728', fontSize: '16px', fontWeight: 'normal' }}>Our World</Nav.Link>
            <span style={{ width: '1px', height: '20px', backgroundColor: '#d3b9a3' }}></span>
          <Nav.Link href="/cart" style={{ color: '#4a3728', fontSize: '16px' }}>
            <FaShoppingCart />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
