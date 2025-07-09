import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';
import { useCurrency } from './CurrencyContext';

const countryOptions = [
  { code: 'US', name: 'United States' },
  { code: 'CN', name: 'China' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'CA', name: 'Canada' },
  { code: 'AU', name: 'Australia' },
  { code: 'DE', name: 'Germany' },
  { code: 'FR', name: 'France' },
  { code: 'JP', name: 'Japan' },
  { code: 'BR', name: 'Brazil' },
  { code: 'MX', name: 'Mexico' },
  
];

const InternationalCheckout = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const { currency, convertPrice } = useCurrency();

  const [shippingDetails, setShippingDetails] = useState({
    receiverName: '',
    receiverAddress: '',
    receiverCity: '',
    receiverPostalCode: '',
    receiverStateCode: '',
    receiverPhone: '',
    receiverCountryCode: '',
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shippingChargeUSD, setShippingChargeUSD] = useState('0.00');

  const normalizeItem = (item) => {
    const totalPrice = Number(item.price) || 0;
    return { ...item, totalPrice };
  };

  const calculateSubtotal = () => {
    const itemsTotal = cartItems.reduce(
      (total, item) => {
        const normalizedItem = normalizeItem(item);
        const convertedTotalPrice = Number(convertPrice(normalizedItem.totalPrice));
        return total + convertedTotalPrice * item.quantity;
      },
      0
    );
    return itemsTotal.toFixed(2);
  };

  const getConvertedShippingCharge = () => {
    const converted = Number(convertPrice(shippingChargeUSD || '0')).toFixed(2);
    return converted;
  };

  const calculateTotal = () => {
    const subtotal = Number(calculateSubtotal());
    const shipping = Number(getConvertedShippingCharge());
    return (subtotal + shipping).toFixed(2);
  };

  const calculateShipmentDetails = () => {
    const totalWeight = cartItems.reduce((sum, item) => sum + (item.weight || 1), 0);
    return {
      weight: totalWeight.toString(),
      length: '10',
      width: '10',
      height: '1',
    };
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  useEffect(() => {
    const fetchShippingCharge = async () => {
      if (
        !shippingDetails.receiverPostalCode ||
        !shippingDetails.receiverCountryCode ||
        !shippingDetails.receiverCity ||
        shippingDetails.receiverCountryCode === 'IN'
      ) {
        setShippingChargeUSD('0.00');
        return;
      }

      setLoading(true);
      try {
        const shipmentDetails = calculateShipmentDetails();
        const totalDeclaredValue = cartItems.reduce(
          (sum, item) => sum + Number(convertPrice(normalizeItem(item).totalPrice)) * item.quantity,
          0
        );

        const response = await axios.post('https://api.neightivglobal.com/api/dhl/calculate-shipping-charge', {
          receiverPostalCode: shippingDetails.receiverPostalCode,
          receiverCountryCode: shippingDetails.receiverCountryCode,
          receiverCity: shippingDetails.receiverCity,
          cartItems: cartItems.map((item) => {
            const normalizedItem = normalizeItem(item);
            const convertedPrice = Number(convertPrice(normalizedItem.totalPrice)).toFixed(2);
            return {
              name: normalizedItem.name,
              price: convertedPrice,
              quantity: normalizedItem.quantity,
              sku: normalizedItem.id,
            };
          }),
          weight: shipmentDetails.weight,
          length: shipmentDetails.length,
          width: shipmentDetails.width,
          height: shipmentDetails.height,
          declaredValue: totalDeclaredValue.toFixed(2),
          currency,
        });

        setShippingChargeUSD(response.data.shippingCharge);
        console.log('Fetched shipping charge (USD):', response.data.shippingCharge);
      } catch (err) {
        console.error('Error fetching shipping charge:', err.response?.data || err.message);
        setError(err.response?.data?.error || 'Failed to calculate shipping charge. Please check your input and try again.');
        setShippingChargeUSD('0.00');
      } finally {
        setLoading(false);
      }
    };

    fetchShippingCharge();
  }, [
    shippingDetails.receiverPostalCode,
    shippingDetails.receiverCountryCode,
    shippingDetails.receiverCity,
    cartItems,
    currency,
    convertPrice,
  ]);

  const validateShippingDetails = () => {
    const requiredFields = [
      'receiverName',
      'receiverAddress',
      'receiverCity',
      'receiverPostalCode',
      'receiverStateCode',
      'receiverPhone',
      'receiverCountryCode',
    ];
    for (let field of requiredFields) {
      if (!shippingDetails[field]) {
        setError(`Please fill in ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
        return false;
      }
    }
    if (shippingDetails.receiverCountryCode === 'IN') {
      setError('This page is for international shipping only. Please use the regular checkout for India.');
      return false;
    }
    if (!countryOptions.some((country) => country.code === shippingDetails.receiverCountryCode)) {
      setError('Please select a valid country from the list.');
      return false;
    }
    return true;
  };



// working
// const handleDHLAndPayPal = async () => {
//   if (!validateShippingDetails()) return;

//   setLoading(true);
//   setError(null);

//   try {
//     const shipmentDetails = calculateShipmentDetails();
//     const totalAmount = Number(calculateSubtotal()).toFixed(2);

//     const shipmentResponse = await axios.post('https://api.neightivglobal.com/api/dhl/create-shipment', {
//       receiverName: shippingDetails.receiverName,
//       receiverAddress: shippingDetails.receiverAddress,
//       receiverCity: shippingDetails.receiverCity,
//       receiverPostalCode: shippingDetails.receiverPostalCode,
//       receiverStateCode: shippingDetails.receiverStateCode,
//       receiverPhone: shippingDetails.receiverPhone,
//       receiverCountryCode: shippingDetails.receiverCountryCode,
//       declaredValue: totalAmount,
//       currency: currency,
//       weight: shipmentDetails.weight,
//       length: shipmentDetails.length,
//       width: shipmentDetails.width,
//       height: shipmentDetails.height,
//       cartItems: cartItems.map((item) => {
//         const normalizedItem = normalizeItem(item);
//         const convertedPrice = Number(convertPrice(normalizedItem.totalPrice)).toFixed(2);
//         return {
//           name: normalizedItem.name,
//           price: convertedPrice,
//           quantity: normalizedItem.quantity,
//           sku: normalizedItem.id,
//         };
//       }),
//       freightCharge: getConvertedShippingCharge(),
//     });

//     console.log('📦 DHL Shipment Response:', shipmentResponse.data);

//     const resultMatch = shipmentResponse.data.match(/<PostShipment_CSBVResult>(.*?)<\/PostShipment_CSBVResult>/s);
//     const resultText = resultMatch ? resultMatch[1].trim() : '';

//     const urls = resultText.match(/https?:\/\/[^\s;]+/g);
//     if (urls && urls.length > 0) {
// //       // 🔓 Open all URLs (before any other await!)
// //       urls.forEach((url) => {
// //         window.open(url, '_blank', 'noopener,noreferrer');
// //       });
// //       navigate('/orderConfirmation', {
// //   state: {
// //     invoiceUrls: urls,
// //   },
// // });

//     } else {
//       console.warn('No URLs found in DHL response');
//       setError('No PDF URL found from DHL.');
//     }

//     // ✅ PayPal token & payment
//     const tokenResponse = await axios.post('https://api.neightivglobal.com/api/paypal/token');
//     const accessToken = tokenResponse.data.access_token;

//     const exchangeRate = 1; 
  

// const totalUSD = calculateTotal(); 

// const subtotalUSD = calculateSubtotal(); // just product prices
// const shippingUSD = getConvertedShippingCharge();




//     const orderResponse = await axios.post(
//   'https://api.neightivglobal.com/api/paypal/create-order',
//   {
//     // amount: totalUSD,
//     // currency_code: 'USD',
//       amount: calculateTotal(),           
//     currency_code: currency, 
//     cartItems: [
//       ...cartItems.map((item) => {
//         const normalizedItem = normalizeItem(item);
//         const price = Number(convertPrice(normalizedItem.totalPrice)).toFixed(2);
//         return {
//           name: normalizedItem.name,
//           price: parseFloat(price),
//           quantity: normalizedItem.quantity,
//           sku: normalizedItem.id,
//         };
//       }),
//       {
//         name: 'Shipping',
//         price: parseFloat(shippingUSD),
//         quantity: 1,
//         sku: 'shipping_fee',
//       },
//     ],
//     return_url: `${window.location.origin}/paypal-success?invoiceUrls=${encodeURIComponent(JSON.stringify(urls))}`, // 🔁 Return URL after payment
//     cancel_url: `${window.location.origin}/cancel`,
//   },
//   {
//     headers: { Authorization: `Bearer ${accessToken}` },
//   }
// );

//     const approvalLink = orderResponse.data.links.find((link) => link.rel === 'approve');
//     if (approvalLink) {
//       window.location.href = approvalLink.href;
//     } else {
//       throw new Error('No approval link found in PayPal response.');
//     }

//   } catch (err) {
//     console.error('❌ Error:', err.response?.data || err.message);
//     setError(err.response?.data?.error || err.message || 'Failed to process order or payment. Please try again.');
//   } finally {
//     setLoading(false);
//   }
// };

// working done dhl
// const handleDHLAndPayPal = async () => {
//   if (!validateShippingDetails()) return;

//   setLoading(true);
//   setError(null);

//   try {
//     const shipmentDetails = calculateShipmentDetails();
//     const totalAmount = Number(calculateSubtotal()).toFixed(2);

//     // 📨 Create DHL Shipment
//     const shipmentResponse = await axios.post('https://api.neightivglobal.com/api/dhl/create-shipment', {
//       receiverName: shippingDetails.receiverName,
//       receiverAddress: shippingDetails.receiverAddress,
//       receiverCity: shippingDetails.receiverCity,
//       receiverPostalCode: shippingDetails.receiverPostalCode,
//       receiverStateCode: shippingDetails.receiverStateCode,
//       receiverPhone: shippingDetails.receiverPhone,
//       receiverCountryCode: shippingDetails.receiverCountryCode,
//       declaredValue: totalAmount,
//       currency: currency,
//       weight: shipmentDetails.weight,
//       length: shipmentDetails.length,
//       width: shipmentDetails.width,
//       height: shipmentDetails.height,
//       cartItems: cartItems.map((item) => {
//         const normalizedItem = normalizeItem(item);
//         const convertedPrice = Number(convertPrice(normalizedItem.totalPrice)).toFixed(2);
//         return {
//           name: normalizedItem.name,
//           price: convertedPrice,
//           quantity: normalizedItem.quantity,
//           sku: normalizedItem.id,
//         };
//       }),
//       freightCharge: getConvertedShippingCharge(),
//     });

//     console.log('📦 DHL Shipment Response:', shipmentResponse.data);

//     // ✅ Extract PDF URLs from JSON response
//     const { invoicePath, shipmentPdfPath } = shipmentResponse.data;
//     const urls = [shipmentPdfPath, invoicePath].filter(Boolean); // Clean empty URLs

//     if (!urls.length) {
//       console.warn('No URLs found in DHL response');
//       setError('No PDF URL found from DHL.');
//       return;
//     }

//     // 🔐 Get PayPal access token
//     const tokenResponse = await axios.post('https://api.neightivglobal.com/api/paypal/token');
//     const accessToken = tokenResponse.data.access_token;

//     const subtotalUSD = calculateSubtotal();
//     const shippingUSD = getConvertedShippingCharge();

//     // 🛒 Create PayPal Order
//     const orderResponse = await axios.post(
//       'https://api.neightivglobal.com/api/paypal/create-order',
//       {
//         amount: calculateTotal(),
//         currency_code: currency,
//         cartItems: [
//           ...cartItems.map((item) => {
//             const normalizedItem = normalizeItem(item);
//             const price = Number(convertPrice(normalizedItem.totalPrice)).toFixed(2);
//             return {
//               name: normalizedItem.name,
//               price: parseFloat(price),
//               quantity: normalizedItem.quantity,
//               sku: normalizedItem.id,
//             };
//           }),
//           {
//             name: 'Shipping',
//             price: parseFloat(shippingUSD),
//             quantity: 1,
//             sku: 'shipping_fee',
//           },
//         ],
//         return_url: `${window.location.origin}/paypal-success?invoiceUrls=${encodeURIComponent(JSON.stringify(urls))}`,
//         cancel_url: `${window.location.origin}/cancel`,
//       },
//       {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       }
//     );

//     // 🔁 Redirect to PayPal
//     const approvalLink = orderResponse.data.links.find((link) => link.rel === 'approve');
//     if (approvalLink) {
//       window.location.href = approvalLink.href;
//     } else {
//       throw new Error('No approval link found in PayPal response.');
//     }

//   } catch (err) {
//     console.error('❌ Error:', err.response?.data || err.message);
//     setError(err.response?.data?.error || err.message || 'Failed to process order or payment. Please try again.');
//   } finally {
//     setLoading(false);
//   }
// };

const handleDHLAndPayPal = async () => {
  if (!validateShippingDetails()) return;
  setLoading(true);
  setError(null);

  try {
    const shipmentDetails = calculateShipmentDetails();
    const totalAmount = Number(calculateSubtotal()).toFixed(2);
    const shippingUSD = getConvertedShippingCharge();

    // Store shipment data in localStorage (temporarily until user returns)
    localStorage.setItem('pendingShipment', JSON.stringify({
      receiverName: shippingDetails.receiverName,
      receiverAddress: shippingDetails.receiverAddress,
      receiverCity: shippingDetails.receiverCity,
      receiverPostalCode: shippingDetails.receiverPostalCode,
      receiverStateCode: shippingDetails.receiverStateCode,
      receiverPhone: shippingDetails.receiverPhone,
      receiverCountryCode: shippingDetails.receiverCountryCode,
      declaredValue: totalAmount,
      currency,
      weight: shipmentDetails.weight,
      length: shipmentDetails.length,
      width: shipmentDetails.width,
      height: shipmentDetails.height,
      cartItems: cartItems.map((item) => {
        const normalizedItem = normalizeItem(item);
        const convertedPrice = Number(convertPrice(normalizedItem.totalPrice)).toFixed(2);
        return {
          name: normalizedItem.name,
          price: convertedPrice,
          quantity: normalizedItem.quantity,
          sku: normalizedItem.id,
        };
      }),
      freightCharge: shippingUSD,
    }));

    const tokenRes = await axios.post('https://api.neightivglobal.com/api/paypal/token');
    const accessToken = tokenRes.data.access_token;

    const orderRes = await axios.post(
      'https://api.neightivglobal.com/api/paypal/create-order',
      {
        amount: calculateTotal(),
        currency_code: currency,
        cartItems: [
          ...cartItems.map((item) => {
            const normalizedItem = normalizeItem(item);
            const price = Number(convertPrice(normalizedItem.totalPrice)).toFixed(2);
            return {
              name: normalizedItem.name,
              price: parseFloat(price),
              quantity: normalizedItem.quantity,
              sku: normalizedItem.id,
            };
          }),
          {
            name: 'Shipping',
            price: parseFloat(shippingUSD),
            quantity: 1,
            sku: 'shipping_fee',
          },
        ],
        return_url: `${window.location.origin}/paypal-success`,
        cancel_url: `${window.location.origin}/cancel`,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const approvalLink = orderRes.data.links.find((l) => l.rel === 'approve');
    if (approvalLink) {
      window.location.href = approvalLink.href;
    } else {
      throw new Error('PayPal approval link missing');
    }
  } catch (err) {
    console.error('❌ PayPal Error:', err.message);
    setError('Payment failed: ' + err.message);
  } finally {
    setLoading(false);
  }
};





// const handleDHLAndPayPal = async () => {
//   if (!validateShippingDetails()) return;

//   setLoading(true);
//   setError(null);

//   try {
//     const shipmentDetails = calculateShipmentDetails();
//     const totalAmount = Number(calculateSubtotal()).toFixed(2);

//     const shipmentResponse = await axios.post('https://api.neightivglobal.com/api/dhl/create-shipment', {
//       receiverName: shippingDetails.receiverName,
//       receiverAddress: shippingDetails.receiverAddress,
//       receiverCity: shippingDetails.receiverCity,
//       receiverPostalCode: shippingDetails.receiverPostalCode,
//       receiverStateCode: shippingDetails.receiverStateCode,
//       receiverPhone: shippingDetails.receiverPhone,
//       receiverCountryCode: shippingDetails.receiverCountryCode,
//       declaredValue: totalAmount,
//       currency: currency,
//       weight: shipmentDetails.weight,
//       length: shipmentDetails.length,
//       width: shipmentDetails.width,
//       height: shipmentDetails.height,
//       cartItems: cartItems.map((item) => {
//         const normalizedItem = normalizeItem(item);
//         const convertedPrice = Number(convertPrice(normalizedItem.totalPrice)).toFixed(2);
//         return {
//           name: normalizedItem.name,
//           price: convertedPrice,
//           quantity: normalizedItem.quantity,
//           sku: normalizedItem.id,
//         };
//       }),
//       freightCharge: getConvertedShippingCharge(),
//     });

//     console.log('📦 DHL Shipment Response:', shipmentResponse.data);

//     const resultMatch = shipmentResponse.data.match(/<PostShipment_CSBVResult>(.*?)<\/PostShipment_CSBVResult>/s);
//     const resultText = resultMatch ? resultMatch[1].trim() : '';

//     const urls = resultText.match(/https?:\/\/[^\s;]+/g);
//     if (urls && urls.length > 0) {
//       // 🔓 Open all URLs (before any other await!)
//       urls.forEach((url) => {
//         window.open(url, '_blank', 'noopener,noreferrer');
//       });
//       navigate('/orderConfirmation', {
//   state: {
//     invoiceUrls: urls,
//   },
// });

//     } else {
//       console.warn('No URLs found in DHL response');
//       setError('No PDF URL found from DHL.');
//     }


  

//     const approvalLink = orderResponse.data.links.find((link) => link.rel === 'approve');
//     if (approvalLink) {
//       window.location.href = approvalLink.href;
//     } else {
//       throw new Error('No approval link found in PayPal response.');
//     }

//   } catch (err) {
//     console.error('❌ Error:', err.response?.data || err.message);
//     setError(err.response?.data?.error || err.message || 'Failed to process order or payment. Please try again.');
//   } finally {
//     setLoading(false);
//   }
// };



  return (
    <>
      <div style={{ backgroundColor: '#fbeede', padding: '50px 0', minHeight: '100vh', marginTop: '4%' }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={12}>
              <h2 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '32px', marginBottom: '20px' }}>
                International Checkout
              </h2>
              {cartItems.length === 0 ? (
                <div style={{ textAlign: 'center', color: '#000', marginTop: '50px' }}>
                  <h3>Your cart is empty</h3>
                  <Button
                    onClick={() => navigate('/shop')}
                    style={{
                      backgroundColor: '#000',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '0',
                      padding: '10px 20px',
                    }}
                  >
                    Continue shopping
                  </Button>
                </div>
              ) : (
                <>
                  <h4 style={{ color: '#000', marginBottom: '20px' }}>Shipping Details</h4>
                  <Form>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Receiver Name *</Form.Label>
                          <Form.Control type="text" name="receiverName" value={shippingDetails.receiverName} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Address *</Form.Label>
                          <Form.Control type="text" name="receiverAddress" value={shippingDetails.receiverAddress} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>City *</Form.Label>
                          <Form.Control type="text" name="receiverCity" value={shippingDetails.receiverCity} onChange={handleInputChange} required />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Postal Code *</Form.Label>
                          <Form.Control type="text" name="receiverPostalCode" value={shippingDetails.receiverPostalCode} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>State/Region Code *</Form.Label>
                          <Form.Control type="text" name="receiverStateCode" value={shippingDetails.receiverStateCode} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone *</Form.Label>
                          <Form.Control type="text" name="receiverPhone" value={shippingDetails.receiverPhone} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Country *</Form.Label>
                          <Form.Select name="receiverCountryCode" value={shippingDetails.receiverCountryCode} onChange={handleInputChange} required>
                            <option value="">Select a country</option>
                            {countryOptions.map((country) => (
                              <option key={country.code} value={country.code}>
                                {country.name} ({country.code})
                              </option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>

                  <div style={{ marginTop: '20px' }}>
                    <h4 style={{ color: '#000', marginBottom: '20px' }}>Order Summary</h4>
                    {cartItems.map((item) => {
                      const normalizedItem = normalizeItem(item);
                      const convertedTotalPrice = Number(convertPrice(normalizedItem.totalPrice));
                      return (
                        <Row key={normalizedItem.id} style={{ marginBottom: '10px' }}>
                          <Col md={6}>
                            {normalizedItem.name} (x{normalizedItem.quantity})
                          </Col>
                          <Col md={6} style={{ textAlign: 'right' }}>
                            {currency} {(convertedTotalPrice * normalizedItem.quantity).toLocaleString('en', { minimumFractionDigits: 2 })}
                          </Col>
                        </Row>
                      );
                    })}
                    <hr />
                    <div style={{ textAlign: 'right', marginTop: '20px' }}>
                      <p style={{ color: '#000', fontSize: '16px' }}>
                        Subtotal: {currency} {Number(calculateSubtotal()).toLocaleString('en', { minimumFractionDigits: 2 })}
                      </p>
                      <p style={{ color: '#000', fontSize: '16px' }}>
                        Shipping Charge: {currency}{' '}
                        {loading ? 'Calculating...' : Number(getConvertedShippingCharge()).toLocaleString('en', { minimumFractionDigits: 2 })}
                      </p>
                      <p style={{ fontWeight: '600', color: '#000', fontSize: '18px' }}>
                        Total: {currency} {Number(calculateTotal()).toLocaleString('en', { minimumFractionDigits: 2 })}
                      </p>
                      {error && (
                        <p style={{ color: '#ff0000', fontSize: '12px', marginBottom: '10px' }}>
                          {error}
                        </p>
                      )}
                      <Button
                        onClick={handleDHLAndPayPal}
                        disabled={loading || shippingChargeUSD === '0.00'}
                        style={{
                          backgroundColor: '#ffcc00',
                          color: '#000',
                          border: 'none',
                          borderRadius: '0',
                          padding: '10px 20px',
                          fontWeight: '500',
                          width: '200px',
                        }}
                      >
                        {loading ? 'Processing...' : 'Pay Now'}
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default InternationalCheckout;
