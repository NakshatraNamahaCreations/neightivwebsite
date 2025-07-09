import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PaypalSuccess = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState('Verifying payment...');

  useEffect(() => {
    const finalizeShipment = async () => {
      try {
        const shipmentData = JSON.parse(localStorage.getItem('pendingShipment'));
        if (!shipmentData) throw new Error('No shipment data found');

        // Call DHL API now
        const dhlRes = await axios.post('https://api.neightivglobal.com/api/dhl/create-shipment', shipmentData);

        const { invoicePath, shipmentPdfPath } = dhlRes.data;
        const urls = [shipmentPdfPath, invoicePath].filter(Boolean);
        localStorage.removeItem('pendingShipment');

        navigate('/orderConfirmation', {
          state: { invoiceUrls: urls },
        });
      } catch (err) {
        console.error('❌ DHL creation failed:', err.message);
        setStatus('Failed to finalize shipment: ' + err.message);
      }
    };

    finalizeShipment();
  }, []);

  return <div style={{ padding: '2rem' }}>{status}</div>;
};

export default PaypalSuccess;
