import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { invoiceUrls = [] } = location.state || {};

  const handleDownload = (url) => {
    if (url && /^https?:\/\/.*\.pdf$/i.test(url)) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert('Invalid or missing PDF URL.');
    }
  };

  return (
    <div style={{backgroundColor:'#fbeede'}}>
    <Container style={{ paddingTop: '50px', minHeight: '80vh', marginTop:'7%', backgroundColor:'#fbeede' }}>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h2>🎉 Order Confirmed!</h2>
          <p>Thank you for your purchase. Your DHL shipment is being processed.</p>

          {invoiceUrls.length > 0 ? (
            <div>
              <h4 className="mt-4">📄 Download Invoice(s)</h4>
              {invoiceUrls.map((url, index) => (
                <Button
                  key={index}
                  onClick={() => handleDownload(url)}
                  variant="primary"
                  className="m-2"
                >
                  Download PDF {index + 1}
                </Button>
              ))}
            </div>
          ) : (
            <p>No invoice available at this time.</p>
          )}

          <Button
            variant="dark"
            className="mt-4"
            onClick={() => navigate('/shop')}
          >
            Back to Shop
          </Button>
        </Col>
      </Row>
    </Container>
    </div>

  );
};

export default Confirmation;
