import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Spinner } from 'react-bootstrap';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';

// Base API URL for development or production
const API_BASE_URL = 'https://api.neightivglobal.com';

const Checkout = () => {
  const { state } = useLocation();
  const { cartItems = [] } = state || {};
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    lastName: '',
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

  // Terms and Conditions (consider fetching from backend)
  const termsAndConditions = `
    1. All sales are final. Returns are accepted within 7 days of delivery, subject to our return policy.
    2. Products must be returned in original condition with packaging.
    3. Shipping costs are non-refundable unless the product is defective.
    4. Delivery timelines are estimates and may vary based on courier availability.
  `;

  // Normalize cart item for consistent pricing
  const normalizeItem = (item) => {
    const basePrice = parseFloat(item.price) || 0;
    const tax = basePrice * 0.12; // 12% tax for simplicity
    const totalPrice = basePrice + tax;
    return {
      ...item,
      basePrice,
      totalPrice,
    };
  };

  // Calculate totals in INR
  const calculateTotalsINR = () => {
    return cartItems.reduce(
      (totals, item) => {
        const normalizedItem = normalizeItem(item);
        return {
          baseTotal: totals.baseTotal + normalizedItem.basePrice * item.quantity,
          grandTotal: totals.grandTotal + normalizedItem.totalPrice * item.quantity,
        };
      },
      { baseTotal: 0, grandTotal: 0 }
    );
  };

  // Handle shipping details input changes
  const handleShippingChange = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
    setError(null); // Clear error on input change
  };

  // Check courier serviceability
  const checkServiceability = async (e) => {
    e.preventDefault();
    
    // Validate shipping details input
    if (!shippingDetails.pincode || !shippingDetails.name || !shippingDetails.lastName || !shippingDetails.address) {
      setError('Please complete required fields: Name, Last Name, Address, PIN Code.');
      return;
    }

    // Directly set the pickup postcode value (this could also be hardcoded or fetched from elsewhere)
    const pickupPostcode = '560034'; // Replace this with your actual pickup postcode
    
    if (!pickupPostcode) {
      setError('Configuration error: Pickup postcode is not set. Please contact support.');
      return;
    }

    try {
      setError(null);
      setLoading(true);
      
      // Calculate total weight for all items
      const totalWeight = cartItems.reduce(
        (sum, item) => sum + (parseFloat(item.weight) || 0.5) * item.quantity, 
        0
      );
      
      // Call the Shiprocket API to check serviceability
      const response = await axios.get(`${API_BASE_URL}/api/shiprocket/courier/serviceability`, {
        params: {
          pickup_postcode: pickupPostcode,
          delivery_postcode: shippingDetails.pincode,
          cod: 0,
          weight: totalWeight || 0.5,
        },
      });

      const couriers = response.data?.data?.available_courier_companies || [];
      
      // Filter couriers based on the country selection
      const filteredCouriers = shippingDetails.country === 'India'
        ? couriers
        : couriers.filter((c) => c.is_international);

      setShippingOptions(filteredCouriers);

      if (filteredCouriers.length === 0) {
        setError('No shipping options available for the provided PIN code.');
      }
    } catch (err) {
      console.error('Serviceability Error:', err.response?.data || err.message);
      setError('Unable to fetch shipping options. Please check PIN code or try again later.');
      setShippingOptions([]);
    } finally {
      setLoading(false);
    }
  };

  // Create order after payment verification
  // const createOrder = async (transactionId) => {
  //   try {
  //     if (cartItems.length === 0) {
  //       setError('Your cart is empty.');
  //       return;
  //     }

  //     if (!selectedCourier) {
  //       setError('Please select a shipping option.');
  //       return;
  //     }

  //     if (!shippingDetails.name || !shippingDetails.lastName || !shippingDetails.address || 
  //         !shippingDetails.city || !shippingDetails.pincode || !shippingDetails.state || 
  //         !shippingDetails.email || !shippingDetails.phone) {
  //       setError('Please complete all shipping details.');
  //       return;
  //     }

  //     const { grandTotal } = calculateTotalsINR();
  //     const normalizedGrandTotal = parseFloat(grandTotal.toFixed(2));
  //     const shippingRate = parseFloat((selectedCourier?.rate || 0).toFixed(2));
  //     const totalTax = parseFloat((normalizedGrandTotal * 0.12).toFixed(2));
  //     const now = new Date();
  //     const presentDateTime = now.toISOString().split('T')[0] + ' ' + now.toISOString().split('T')[1].substring(0, 5);

  //     const payload = {
  //       order_id: transactionId || `ORDER_${Date.now()}`,
  //       order_date: presentDateTime,
  //       pickup_location: "Primary",
  //       billing_customer_name: shippingDetails.name,
  //       billing_last_name: shippingDetails.lastName,
  //       billing_address: shippingDetails.address,
  //       billing_city: shippingDetails.city,
  //       billing_pincode: shippingDetails.pincode,
  //       billing_state: shippingDetails.state,
  //       billing_country: shippingDetails.country,
  //       billing_email: shippingDetails.email,
  //       billing_phone: shippingDetails.phone,
  //       shipping_is_billing: true,
  //       order_items: cartItems.map(item => ({
  //         name: item.name || "Unknown Product",
  //         sku: item.sku || `SKU_${Date.now()}`,
  //         units: item.quantity || 1,
  //         selling_price: parseFloat(item.price.toFixed(2)),
  //         tax: 12,
  //         total_price: parseFloat((item.price * (1 + 0.12)).toFixed(2)),
  //       })),
  //       payment_method: "Prepaid",
  //       shipping_charges: selectedCourier?.rate || 0,
  //       sub_total: normalizedGrandTotal,
  //       weight: 0.5,
  //       length: 10,
  //       breadth: 10,
  //       height: 1,
  //       grand_total: parseFloat((normalizedGrandTotal + selectedCourier?.rate).toFixed(2)),
  //       tax_breakup: { total_tax: totalTax },
  //       terms_and_conditions: termsAndConditions
  //     };

  //     console.log("Order Payload:", JSON.stringify(payload, null, 2));

  //     const response = await axios.post(`https://api.neightivglobal.com/api/shiprocket/create-shipment`, payload);
  //     const { shiprocketOrderId, shipmentId } = response.data;

  //     toast.success('Order created successfully! A confirmation email has been sent.');
  //     navigate('/order-confirmation', {
  //       state: {
  //         shiprocketOrderId,
  //         shipmentId,
  //       },
  //     });
  //   } catch (err) {
  //     console.error('Order Creation Error:', err.response?.data || err.message);
  //     setError(`Failed to create order: ${err.response?.data?.error || err.response?.data?.message || 'Please try again.'}`);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Create order after payment verification
const createOrder = async (transactionId) => {
  try {
    if (cartItems.length === 0) {
      setError('Your cart is empty.');
      return;
    }

    if (!selectedCourier) {
      setError('Please select a shipping option.');
      return;
    }

    if (!shippingDetails.name || !shippingDetails.lastName || !shippingDetails.address || 
        !shippingDetails.city || !shippingDetails.pincode || !shippingDetails.state || 
        !shippingDetails.email || !shippingDetails.phone) {
      setError('Please complete all shipping details.');
      return;
    }

    // Step 1: Check stock availability
    const stockCheckPayload = {
      items: cartItems.map(item => ({
        productId: item.id || item._id,
        quantity: item.quantity || 1,
      })),
    };

    setLoading(true);
    const stockCheckResponse = await axios.post(`${API_BASE_URL}/api/products/check-stock`, stockCheckPayload);
    
    if (!stockCheckResponse.data.available) {
      setError('One or more items are out of stock.');
      setLoading(false);
      return;
    }

    // Step 2: Update stock (reduce stock and increment soldStock)
    const stockUpdateResponse = await axios.post(`${API_BASE_URL}/api/products/update-stock`, stockCheckPayload);
    
    if (stockUpdateResponse.status !== 200) {
      setError('Failed to update stock. Please try again.');
      setLoading(false);
      return;
    }

    // Step 3: Create the Shiprocket order
    const { grandTotal } = calculateTotalsINR();
    const normalizedGrandTotal = parseFloat(grandTotal.toFixed(2));
    const shippingRate = parseFloat((selectedCourier?.rate || 0).toFixed(2));
    const totalTax = parseFloat((normalizedGrandTotal * 0.12).toFixed(2));
    const now = new Date();
    const presentDateTime = now.toISOString().split('T')[0] + ' ' + now.toISOString().split('T')[1].substring(0, 5);

    const payload = {
      order_id: transactionId || `ORDER_${Date.now()}`,
      order_date: presentDateTime,
      pickup_location: "Primary",
      billing_customer_name: shippingDetails.name,
      billing_last_name: shippingDetails.lastName,
      billing_address: shippingDetails.address,
      billing_city: shippingDetails.city,
      billing_pincode: shippingDetails.pincode,
      billing_state: shippingDetails.state,
      billing_country: shippingDetails.country,
      billing_email: shippingDetails.email,
      billing_phone: shippingDetails.phone,
      shipping_is_billing: true,
      order_items: cartItems.map(item => ({
        name: item.name || "Unknown Product",
        sku: item.sku || `SKU_${Date.now()}`,
        units: item.quantity || 1,
        selling_price: parseFloat(item.price.toFixed(2)),
        tax: 12,
        total_price: parseFloat((item.price * (1 + 0.12)).toFixed(2)),
      })),
      payment_method: "Prepaid",
      shipping_charges: shippingRate,
      sub_total: normalizedGrandTotal,
      weight: 0.5,
      length: 10,
      breadth: 10,
      height: 1,
      grand_total: parseFloat((normalizedGrandTotal + shippingRate).toFixed(2)),
      tax_breakup: { total_tax: totalTax },
      terms_and_conditions: termsAndConditions,
    };

    console.log("Order Payload:", JSON.stringify(payload, null, 2));

    const response = await axios.post(`${API_BASE_URL}/api/shiprocket/create-shipment`, payload);
    const { shiprocketOrderId, shipmentId } = response.data;

    toast.success('Order created successfully! A confirmation email has been sent.');
    navigate('/order-confirmation', {
      state: {
        shiprocketOrderId,
        shipmentId,
      },
    });
  } catch (err) {
    console.error('Order Creation Error:', err.response?.data || err.message);
    setError(`Failed to create order: ${err.response?.data?.error || err.response?.data?.message || 'Please try again.'}`);
  } finally {
    setLoading(false);
  }
};

  // Handle checkout process
 const handleCheckout = async () => {
  if (cartItems.length === 0) {
    setError('Your cart is empty.');
    return;
  }
  if (!selectedCourier || !selectedCourier.rate || selectedCourier.rate <= 0) {
    setError('Please select a valid shipping option with a rate.');
    return;
  }
  if (!shippingDetails.name || !shippingDetails.lastName || !shippingDetails.address || 
      !shippingDetails.city || !shippingDetails.state || !shippingDetails.country || 
      !shippingDetails.pincode || !shippingDetails.phone || !shippingDetails.email) {
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

  // Step 1: Check stock availability
  const stockCheckPayload = {
    items: cartItems.map(item => ({
      productId: item.id || item._id,
      quantity: item.quantity || 1,
    })),
  };

  try {
    setLoading(true);
    setError(null);
    const stockCheckResponse = await axios.post(`${API_BASE_URL}/api/products/check-stock`, stockCheckPayload);
    
    if (!stockCheckResponse.data.available) {
      setError('One or more items are out of stock.');
      setLoading(false);
      return;
    }

    if (shippingDetails.country === 'India') {
      const { grandTotal } = calculateTotalsINR();
      const amountToCharge = parseFloat((grandTotal + selectedCourier.rate).toFixed(2));

      const payload = {
        amount: amountToCharge * 100,
        currency: 'INR',
        customerDetails: {
          name: `${shippingDetails.name} ${shippingDetails.lastName}`,
          phone: shippingDetails.phone,
          email: shippingDetails.email,
        },
        paypalOrderId: `ORDER_${Date.now()}`,
        cartItems: cartItems.map((item) => ({
          id: item.id || item._id || 'N/A',
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        shippingDetails,
        selectedCourier,
        termsAndConditions,
        redirectUrl: `${window.location.origin}/order-confirmation?callback=true`,
      };

      console.log('PhonePe checkout payload:', payload);

      const orderResponse = await axios.post(`${API_BASE_URL}/api/phonepe/initiate-payment`, payload);
      const { redirectUrl } = orderResponse.data;
      
      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        throw new Error('Payment URL not received.');
      }
    } else {
      console.log('Creating international order...');
      createOrder();
    }
  } catch (err) {
    console.error('Checkout error:', err.response?.data || err.message);
    setError(`Failed to proceed: ${err.response?.data?.error || 'Please try again.'}`);
    setLoading(false);
  }
};

  // Handle payment callback
  useEffect(() => {
    const callback = searchParams.get('callback');
    const transactionId = searchParams.get('transactionId');

    if (callback === 'true' && transactionId) {
      setLoading(true);
      axios
        .get(`${API_BASE_URL}/api/phonepe/verify-payment?transactionId=${transactionId}`)
        .then((response) => {
          if (response.data.success && response.data.paymentStatus === 'completed') {
            createOrder(transactionId);
          } else {
            setError('Payment verification failed. Please try again.');
            setLoading(false);
          }
        })
        .catch((err) => {
          console.error('Payment verification error:', err.response?.data || err.message);
          setError('Failed to verify payment. Please try again.');
          setLoading(false);
        });
    }
  }, [searchParams]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />
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
                  {/* Shipping Details Section */}
                  <Col md={6}>
                    <h3 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '24px', marginBottom: '20px' }}>
                      Shipping Details
                    </h3>
                    <Form onSubmit={checkServiceability}>
                      <Form.Group className="mb-3">
                        <Form.Label>First Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={shippingDetails.name}
                          onChange={handleShippingChange}
                          required
                          isInvalid={error && !shippingDetails.name}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          value={shippingDetails.lastName}
                          onChange={handleShippingChange}
                          required
                          isInvalid={error && !shippingDetails.lastName}
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
                          isInvalid={error && !shippingDetails.address}
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
                          isInvalid={error && !shippingDetails.city}
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
                          isInvalid={error && !shippingDetails.state}
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
                          isInvalid={error && !shippingDetails.pincode}
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
                          isInvalid={error && !/^\+?\d{10,12}$/.test(shippingDetails.phone)}
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
                          isInvalid={error && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(shippingDetails.email)}
                        />
                      </Form.Group>
                      <Button
                        type="submit"
                        disabled={loading}
                        style={{
                          backgroundColor: '#000',
                          border: 'none',
                          borderRadius: '0',
                          padding: '10px 20px',
                          fontWeight: '500',
                        }}
                      >
                        {loading ? <Spinner animation="border" size="sm" /> : 'Check Shipping Options'}
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
                              label={`${option.courier_name} - Rs. ${option.rate} (Est. Delivery: ${option.estimated_delivery_days || 'N/A'} days)`}
                              name="courier"
                              value={option.courier_company_id}
                              onChange={() => setSelectedCourier(option)}
                              checked={selectedCourier?.courier_company_id === option.courier_company_id}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </Col>

                  {/* Order Summary Section */}
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
                      onClick={handleCheckout}
                      disabled={loading || !selectedCourier}
                      style={{
                        backgroundColor: shippingDetails.country === 'India' ? '#3bb143' : '#000',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '0',
                        padding: '10px 0',
                        fontWeight: '500',
                        width: '100%',
                        marginTop: '10px',
                      }}
                    >
                      {loading ? <Spinner animation="border" size="sm" /> : shippingDetails.country === 'India' ? 'Pay with PhonePe' : 'Place Order'}
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