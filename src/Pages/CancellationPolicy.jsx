import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';

const CancellationPolicy = () => {
  return (
    <>
      <div style={{ backgroundColor: '#fbeede', padding: '50px 0', minHeight: '100vh', marginTop: '4%', fontFamily: 'Lora, serif' }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <h1 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '32px', marginBottom: '30px', textAlign:'center' }}>
                Cancellation Policy
              </h1>

              <h2 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '24px', marginTop: '30px', marginBottom: '15px' }}>
                Overview
              </h2>
              <p style={{ color: '#000', fontSize: '16px', marginBottom: '10px' }}>
                Our refund and returns policy lasts 30 days. If 30 days have passed since your purchase, we can’t offer you a full refund or exchange.
              </p>
              <p style={{ color: '#000', fontSize: '16px', marginBottom: '10px' }}>
                To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
              </p>
              <p style={{ color: '#000', fontSize: '16px', marginBottom: '10px' }}>
                Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.
              </p>

              <h2 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '24px', marginTop: '30px', marginBottom: '15px' }}>
                Additional Non-Returnable Items
              </h2>
              <ul style={{ color: '#000', fontSize: '16px', paddingLeft: '20px', marginBottom: '10px' }}>
                <li>Gift cards</li>
                <li>Downloadable software products</li>
                <li>Some health and personal care items</li>
              </ul>
              <p style={{ color: '#000', fontSize: '16px', marginBottom: '10px' }}>
                To complete your return, we require a receipt or proof of purchase.
              </p>
              <p style={{ color: '#000', fontSize: '16px', marginBottom: '10px' }}>
                Please do not send your purchase back to the manufacturer.
              </p>
              <p style={{ color: '#000', fontSize: '16px', marginBottom: '10px' }}>
                There are certain situations where only partial refunds are granted:
              </p>
              <ul style={{ color: '#000', fontSize: '16px', paddingLeft: '20px', marginBottom: '10px' }}>
                <li>Book with obvious signs of use</li>
                <li>CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been opened</li>
                <li>Any item not in its original condition, is damaged or missing parts for reasons not due to our error</li>
                <li>Any item that is returned more than 30 days after delivery</li>
              </ul>

              <h2 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '24px', marginTop: '30px', marginBottom: '15px' }}>
                Refunds
              </h2>
              <p style={{ color: '#000', fontSize: '16px', marginBottom: '10px' }}>
                Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
              </p>
              <p style={{ color: '#000', fontSize: '16px', marginBottom: '10px' }}>
                If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
              </p>

              <h2 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '24px', marginTop: '30px', marginBottom: '15px' }}>
                Late or Missing Refunds
              </h2>
              <p style={{ color: '#000', fontSize: '16px', marginBottom: '10px' }}>
                If you haven’t received a refund yet, first check your bank account again.
              </p>
              <p style={{ color: '#000', fontSize: '16px', marginBottom: '10px' }}>
                Then contact your credit card company, it may take some time before your refund is officially posted.
              </p>
              <p style={{ color: '#000', fontSize: '16px', marginBottom: '10px' }}>
                Next contact your bank. There is often some processing time before a refund is posted.
              </p>
              <p style={{ color: '#000', fontSize: '16px', marginBottom: '10px' }}>
                If you’ve done all of this and you still have not received your refund yet, please contact us at{' '}
                <a href="mailto:contact@neightivglobal.com" style={{ color: '#000', textDecoration: 'underline' }}>
                  contact@neightivglobal.com
                </a>.
              </p>

              <h2 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '24px', marginTop: '30px', marginBottom: '15px' }}>
                Exchanges
              </h2>
              <p style={{ color: '#000', fontSize: '16px', marginBottom: '10px' }}>
                We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at{' '}
                <a href="mailto:contact@neightivglobal.com" style={{ color: '#000', textDecoration: 'underline' }}>
                  contact@neightivglobal.com
                </a>{' '}
                and send your item to: Neightiv Returns, 612, Suguna Upper Crest Apartment, Bangarappa Nagar Main road, Gattigere, RR Nagar, Bangalore- 560098
              </p>

              <h2 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '24px', marginTop: '30px', marginBottom: '15px' }}>
                Shipping Returns
              </h2>
              <p style={{ color: '#000', fontSize: '16px', marginBottom: '10px' }}>
                To return your product, you should mail your product to: Neightiv Returns, 612, Suguna Upper Crest Apartment, Bangarappa Nagar Main road, Gattigere, RR Nagar, Bangalore- 560098
              </p>
              <p style={{ color: '#000', fontSize: '16px', marginBottom: '10px' }}>
                You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
              </p>
              <p style={{ color: '#000', fontSize: '16px', marginBottom: '10px' }}>
                Depending on where you live, the time it may take for your exchanged product to reach you may vary.
              </p>
              <p style={{ color: '#000', fontSize: '16px', marginBottom: '10px' }}>
                If you are returning more expensive items, you may consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.
              </p>

              <h2 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '24px', marginTop: '30px', marginBottom: '15px' }}>
                Contact Us
              </h2>
              <p style={{ color: '#000', fontSize: '16px', marginBottom: '10px' }}>
              If you have any questions about this Refund Policy, please contact us.
              </p>
              
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default CancellationPolicy;