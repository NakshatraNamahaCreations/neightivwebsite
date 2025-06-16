import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';

const Checkout = () => {
  const { state } = useLocation();
  const { cartItems } = state || { cartItems: [] };
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    country: 'India',
    pincode: '',
    phone: '',
    email: '',
  });
  const [shippingOptions, setShippingOptions] = useState([]);
  const [selectedCourier, setSelectedCourier] = useState(null);

  const GST_RATE = 0.12;
  const CGST_RATE = GST_RATE / 2; // 6%
  const SGST_RATE = GST_RATE / 2; // 6%

  // Terms and Conditions
  const termsAndConditions = `
    1. All sales are final. Returns are accepted within 7 days of delivery, subject to our return policy.
    2. Products must be returned in original condition with packaging.
    3. Shipping costs are non-refundable unless the product is defective.
    4. GST is calculated at 12% (6% CGST + 6% SGST) as per Indian tax regulations.
    5. Delivery timelines are estimates and may vary based on courier availability.
  `;

  // Normalize cart item to ensure all required fields exist
  const normalizeItem = (item) => {
    if (item.basePrice && item.cgst && item.sgst && item.totalPrice) {
      return item;
    }
    const basePrice = item.price || 0;
    const cgst = basePrice * CGST_RATE;
    const sgst = basePrice * SGST_RATE;
    const totalPrice = basePrice + cgst + sgst;
    return {
      ...item,
      basePrice,
      cgst,
      sgst,
      totalPrice,
    };
  };

  // Calculate totals for INR
  const calculateTotalsINR = () => {
    return cartItems.reduce(
      (totals, item) => {
        const normalizedItem = normalizeItem(item);
        return {
          baseTotal: totals.baseTotal + normalizedItem.basePrice * item.quantity,
          cgstTotal: totals.cgstTotal + normalizedItem.cgst * item.quantity,
          sgstTotal: totals.sgstTotal + normalizedItem.sgst * item.quantity,
          grandTotal: totals.grandTotal + normalizedItem.totalPrice * item.quantity,
        };
      },
      { baseTotal: 0, cgstTotal: 0, sgstTotal: 0, grandTotal: 0 }
    );
  };

  const handleShippingChange = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };

  const checkServiceability = async (e) => {
    e.preventDefault();
    if (!shippingDetails.pincode || !shippingDetails.name || !shippingDetails.address) {
      setError('Please complete required fields: Name, Address, PIN Code.');
      return;
    }

    try {
      setError(null);
      const response = await axios.get('https://api.neightivglobal.com/api/shiprocket/courier/serviceability', {
        params: {
          pickup_postcode: '560034',
          delivery_postcode: shippingDetails.pincode,
          cod: 0,
          weight: 0.5,
        },
      });

      const couriers = response.data?.data?.available_courier_companies || [];
      const filteredCouriers = shippingDetails.country === 'India'
        ? couriers
        : couriers.filter((c) => ['FedEx', 'DHL', 'Aramex'].includes(c.courier_name));

      setShippingOptions(filteredCouriers);
      if (filteredCouriers.length === 0) {
        setError('No shipping options available for the provided PIN code.');
      }
    } catch (err) {
      console.error('Serviceability Error:', err.response?.data || err.message);
      setError('Unable to fetch shipping options. Please check PIN code or try again later.');
      setShippingOptions([]);
    }
  };

  const createOrder = async () => {
    if (cartItems.length === 0) {
      setError('Your cart is empty.');
      return;
    }
    if (!selectedCourier) {
      setError('Please select a shipping option.');
      return;
    }
    if (!shippingDetails.name || !shippingDetails.address || !shippingDetails.pincode || !shippingDetails.email || !shippingDetails.phone) {
      setError('Please complete all shipping details.');
      return;
    }

    const phoneRegex = /^\+?\d{10,12}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!phoneRegex.test(shippingDetails.phone)) {
      setError('Invalid phone number (10-12 digits required).');
      return;
    }
    if (!emailRegex.test(shippingDetails.email)) {
      setError('Invalid email address.');
      return;
    }

    setLoading(true);
    setError(null);

    const { baseTotal, cgstTotal, sgstTotal, grandTotal } = calculateTotalsINR();

    const payload = {
      paypalOrderId: `TEMP_${Date.now()}`,
      order_date: new Date().toISOString().split('T')[0],
      pickup_location: 'Primary',
      billing_customer_name: shippingDetails.name.split(' ')[0] || shippingDetails.name,
      billing_last_name: shippingDetails.name.split(' ')[1] || '',
      billing_address: shippingDetails.address,
      billing_city: shippingDetails.city,
      billing_pincode: shippingDetails.pincode,
      billing_state: shippingDetails.state,
      billing_country: shippingDetails.country,
      billing_email: shippingDetails.email,
      billing_phone: shippingDetails.phone.replace('+', ''),
      shipping_is_billing: true,
      order_items: cartItems.map((item) => {
        const normalizedItem = normalizeItem(item);
        return {
          name: normalizedItem.name,
          sku: normalizedItem.id || `SKU_${normalizedItem.name.replace(/\s+/g, '_')}`,
          quantity: normalizedItem.quantity,
          price: normalizedItem.totalPrice,
          cgst: normalizedItem.cgst,
          sgst: normalizedItem.sgst,
          base_price: normalizedItem.basePrice,
        };
      }),
      payment_method: 'Prepaid',
      sub_total: grandTotal + (selectedCourier?.rate || 0),
      shipping_cost: selectedCourier?.rate || 0,
      tax_details: {
        base_total: baseTotal,
        cgst_total: cgstTotal,
        sgst_total: sgstTotal,
      },
      terms_and_conditions: termsAndConditions,
      length: 10,
      breadth: 10,
      height: 1,
      weight: 0.5,
    };

    try {
      const response = await axios.post('https://api.neightivglobal.com/api/shiprocket/orders/create', payload);
      navigate('/order-confirmation', {
        state: {
          shiprocketOrderId: response.data.shiprocketOrderId,
          shipmentId: response.data.shipmentId,
        },
      });
    } catch (err) {
      console.error('Order Creation Error:', err.response?.data || err.message);
      setError(`Failed to create order: ${err.response?.data?.message || 'Please try again.'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div style={{ backgroundColor: '#fbeede', padding: '50px 0', minHeight: '100vh', marginTop: '4%' }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={12}>
              <h2 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '32px', textAlign: 'center', marginBottom: '30px' }}>
                Checkout
              </h2>

              {cartItems.length === 0 ? (
                <div style={{ textAlign: 'center', color: '#000' }}>
                  <p style={{ fontSize: '16px' }}>Your cart is empty. Please add items to proceed.</p>
                  <Button
                    onClick={() => navigate('/shop')}
                    style={{
                      backgroundColor: '#000',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '0',
                      padding: '10px 20px',
                      fontWeight: '500',
                    }}
                  >
                    Shop Now
                  </Button>
                </div>
              ) : (
                <Row>
                  <Col md={6}>
                    <h3 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '24px', marginBottom: '20px' }}>
                      Shipping Details
                    </h3>
                    <Form onSubmit={checkServiceability}>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={shippingDetails.name}
                          onChange={handleShippingChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Address *</Form.Label>
                        <Form.Control
                          type="text"
                          name="address"
                          value={shippingDetails.address}
                          onChange={handleShippingChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>City *</Form.Label>
                        <Form.Control
                          type="text"
                          name="city"
                          value={shippingDetails.city}
                          onChange={handleShippingChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>State *</Form.Label>
                        <Form.Control
                          type="text"
                          name="state"
                          value={shippingDetails.state}
                          onChange={handleShippingChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Country *</Form.Label>
                        <Form.Control
                          as="select"
                          name="country"
                          value={shippingDetails.country}
                          onChange={handleShippingChange}
                          required
                        >
                          <option>India</option>
                          <option>United States</option>
                          <option>United Kingdom</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>PIN Code *</Form.Label>
                        <Form.Control
                          type="text"
                          name="pincode"
                          value={shippingDetails.pincode}
                          onChange={handleShippingChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone *</Form.Label>
                        <Form.Control
                          type="text"
                          name="phone"
                          value={shippingDetails.phone}
                          onChange={handleShippingChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={shippingDetails.email}
                          onChange={handleShippingChange}
                          required
                        />
                      </Form.Group>
                      <Button
                        type="submit"
                        style={{
                          backgroundColor: '#000',
                          border: 'none',
                          borderRadius: '0',
                          padding: '10px 20px',
                          fontWeight: '500',
                        }}
                      >
                        Check Shipping Options
                      </Button>
                    </Form>

                    {shippingOptions.length > 0 && (
                      <div style={{ marginTop: '20px' }}>
                        <h4 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '20px' }}>
                          Available Shipping Options
                        </h4>
                        {shippingOptions.map((option) => (
                          <div key={option.courier_company_id} style={{ marginBottom: '10px' }}>
                            <Form.Check
                              type="radio"
                              label={`${option.courier_name} - Rs. ${option.rate} (Est. Delivery: ${option.estimated_delivery_days} days)`}
                              name="courier"
                              value={option.courier_company_id}
                              onChange={() => setSelectedCourier(option)}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </Col>

                  <Col md={6}>
                    <h3 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '24px', marginBottom: '20px' }}>
                      Order Summary
                    </h3>
                    {cartItems.map((item) => {
                      const normalizedItem = normalizeItem(item);
                      return (
                        <Row key={normalizedItem.id} style={{ marginBottom: '10px' }}>
                          <Col>
                            <p style={{ color: '#000', fontSize: '16px', margin: 0 }}>
                              {normalizedItem.name} x {normalizedItem.quantity}
                            </p>
                            <p>Unit Price (Excl. Tax): Rs. {normalizedItem.basePrice}</p>
{/* <p>Taxable Value: Rs. {normalizedItem.taxableValue}</p>
<p>CGST (6%): Rs. {normalizedItem.cgst}</p>
<p>SGST (6%): Rs. {normalizedItem.sgst}</p>
<p>Total Price (Incl. Tax): Rs. {normalizedItem.totalPrice}</p> */}


                          </Col>
                          <Col style={{ textAlign: 'right' }}>
                            <p style={{ color: '#000', fontSize: '16px', margin: 0 }}>
                              Rs. {(normalizedItem.totalPrice * normalizedItem.quantity).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </p>
                          </Col>
                        </Row>
                      );
                    })}
                    {selectedCourier && (
                      <Row style={{ marginBottom: '10px' }}>
                        <Col>
                          <p style={{ color: '#000', fontSize: '16px', margin: 0 }}>
                            Shipping ({selectedCourier.courier_name})
                          </p>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                          <p style={{ color: '#000', fontSize: '16px', margin: 0 }}>
                            Rs. {selectedCourier.rate.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </p>
                        </Col>
                      </Row>
                    )}
                    <Row style={{ borderTop: '1px solid #000', paddingTop: '10px', marginTop: '20px' }}>
                      <Col>
                        <p style={{ fontWeight: '500', color: '#000', fontSize: '16px', margin: 0 }}>
                          Total (incl. taxes and shipping)
                        </p>
                      </Col>
                      <Col style={{ textAlign: 'right' }}>
                        <p style={{ fontWeight: '500', color: '#000', fontSize: '16px', margin: 0 }}>
                          Rs. {(calculateTotalsINR().grandTotal + (selectedCourier?.rate || 0)).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                      </Col>
                    </Row>
                    <div style={{ marginTop: '20px' }}>
                      <h4 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '20px' }}>
                        Terms and Conditions
                      </h4>
                      <p style={{ color: '#000', fontSize: '14px', whiteSpace: 'pre-wrap' }}>
                        {termsAndConditions}
                      </p>
                    </div>
                    <Button
                      onClick={createOrder}
                      disabled={loading}
                      style={{
                        backgroundColor: '#000',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '0',
                        padding: '10px 0',
                        fontWeight: '500',
                        width: '100%',
                        marginTop: '20px',
                      }}
                    >
                      {loading ? 'Processing...' : 'Create Order'}
                    </Button>
                    {error && (
                      <p style={{ color: '#ff0000', fontSize: '12px', marginTop: '10px' }}>
                        {error}
                      </p>
                    )}
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;