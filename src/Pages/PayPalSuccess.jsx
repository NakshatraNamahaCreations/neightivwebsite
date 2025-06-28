// import React, { useEffect } from 'react';
// import { Container, Button } from 'react-bootstrap';
// import { useNavigate, useLocation } from 'react-router-dom';
// import Footer from '../Components/Footer';

// const PayPalSuccess = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const query = new URLSearchParams(location.search);
//   const status = query.get('status');

//   useEffect(() => {
//     if (status !== 'success') {
//       navigate('/cart');
//     }
//   }, [status, navigate]);

//   return (
//     <>
//       <div style={{ backgroundColor: '#fbeede', padding: '50px 0', minHeight: '100vh', marginTop: '4%' }}>
//         <Container>
//           <h2 style={{ fontFamily: 'Lora, serif', color: '#000', fontWeight: '500', fontSize: '32px', textAlign: 'center' }}>
//             Payment Successful!
//           </h2>
//           <p style={{ color: '#000', fontSize: '18px', textAlign: 'center', marginTop: '20px' }}>
//             Thank you for your purchase. You'll receive an order confirmation soon.
//           </p>
//           <div style={{ textAlign: 'center', marginTop: '30px' }}>
//             <Button
//               onClick={() => navigate('/shop')}
//               style={{
//                 backgroundColor: '#000',
//                 border: 'none',
//                 borderRadius: '0',
//                 padding: '10px 20px',
//                 fontWeight: '500',
//               }}
//             >
//               Continue Shopping
//             </Button>
//           </div>
//         </Container>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default PayPalSuccess;



import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const PayPalSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const invoiceUrlsRaw = queryParams.get('invoiceUrls');
    const invoiceUrls = invoiceUrlsRaw ? JSON.parse(decodeURIComponent(invoiceUrlsRaw)) : [];

    navigate('/orderConfirmation', {
      state: { invoiceUrls },
    });
  }, [navigate, location]);

  return (
    <div style={{ padding: '100px', textAlign: 'center' }}>
      Redirecting to confirmation page...
    </div>
  );
};

export default PayPalSuccess;
