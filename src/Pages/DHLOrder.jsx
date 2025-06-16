import React, { useState } from "react";
import axios from "axios";

const DHLOrder = () => {
  const [formData, setFormData] = useState({
    receiverName: "",
    receiverAddress: "",
    receiverCity: "",
    receiverPostalCode: "",
    receiverStateCode: "",
    receiverPhone: "",
    weight: "",
    length: "",
    width: "",
    height: "",
  });

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    try {
      const res = await axios.post("https://api.neightivglobal.com/api/dhl/create-shipment", formData);
      setResponse(res.data);
    } catch (error) {
      console.error(error);
      setResponse({ error: error.response?.data || error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h2>DHL Shipment Form (SOAP API)</h2>
      <form onSubmit={handleSubmit}>
        <h4>Receiver Details</h4>
        <input name="receiverName" placeholder="Name" onChange={handleChange} required />
        <input name="receiverAddress" placeholder="Address" onChange={handleChange} required />
        <input name="receiverCity" placeholder="City" onChange={handleChange} required />
        <input name="receiverStateCode" placeholder="State Code (e.g., 27)" onChange={handleChange} required />
        <input name="receiverPostalCode" placeholder="Postal Code" onChange={handleChange} required />
        <input name="receiverPhone" placeholder="Phone Number" onChange={handleChange} required />

        <h4>Package Info</h4>
        <input name="weight" placeholder="Weight (kg)" onChange={handleChange} required />
        <input name="length" placeholder="Length (cm)" onChange={handleChange} required />
        <input name="width" placeholder="Width (cm)" onChange={handleChange} required />
        <input name="height" placeholder="Height (cm)" onChange={handleChange} required />

        <button type="submit" disabled={loading} style={{ marginTop: 10 }}>
          {loading ? "Sending to DHL..." : "Create Shipment"}
        </button>
      </form>

      {response && (
        <div style={{ marginTop: 20 }}>
          <h3>Response:</h3>
          <pre style={{ background: "#f0f0f0", padding: 10 }}>
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default DHLOrder;
