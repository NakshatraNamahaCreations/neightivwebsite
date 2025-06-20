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
      console.error("Error creating shipment:", error);
      setResponse({ error: error.response?.data || error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20, marginTop: "20%" }}>
      <h2>DHL Shipment Form (SOAP API)</h2>
      <form onSubmit={handleSubmit}>
        <input name="receiverName" placeholder="Receiver Name" onChange={handleChange} required />
        <input name="receiverAddress" placeholder="Receiver Address" onChange={handleChange} required />
        <input name="receiverCity" placeholder="Receiver City" onChange={handleChange} required />
        <input name="receiverPostalCode" placeholder="Receiver Postal Code" onChange={handleChange} required />
        <input name="receiverStateCode" placeholder="Receiver State Code" onChange={handleChange} required />
        <input name="receiverPhone" placeholder="Receiver Phone" onChange={handleChange} required />
        <input name="weight" placeholder="Weight" onChange={handleChange} required />
        <input name="length" placeholder="Length" onChange={handleChange} required />
        <input name="width" placeholder="Width" onChange={handleChange} required />
        <input name="height" placeholder="Height" onChange={handleChange} required />
        <button type="submit" disabled={loading}>
          {loading ? "Creating Shipment..." : "Create Shipment"}
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
