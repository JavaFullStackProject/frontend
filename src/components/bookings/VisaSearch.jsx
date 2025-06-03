import React, { useState } from "react";
import Api from "../../Api";
import axios from "axios";

const VisaSearch = () => {
  const API_KEY = "5ae2e3f221c38a28845f05b677f66b92b5e7167267752179825e0462";

  const [country, setCountry] = useState("");
  const [purpose, setPurpose] = useState("");
  const [visas, setVisas] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await Api.get(`/visa/search`, {
        params: {
          country: country,
          purpose: purpose,
        },
      });
      setVisas(response.data || []);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to fetch visa details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 pt-4">
      <div className="card p-4 shadow-sm rounded-4">
        <h4 className="mb-4">🛂 Search Visa Details</h4>
        <form onSubmit={handleSearch}>
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Destination Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Purpose (Tourism, Business, etc.)"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            🔍 Search Visa Details
          </button>
        </form>
      </div>

      {loading ? (
        <p className="text-center mt-4">Loading visa details...</p>
      ) : (
        <div className="row mt-4">
          {visas.length === 0 ? (
            <p className="text-center">No visa details found.</p>
          ) : (
            visas.map((visa, index) => (
              <div className="col-md-4" key={index}>
                <div className="card mb-4 shadow-sm">
                  <img
                    src="https://img.freepik.com/free-photo/passport_144627-43613.jpg"
                    alt="Visa"
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {visa.destination || "Visa Destination"}
                    </h5>
                    <p className="card-text">
                      Purpose: {visa.purpose} <br />
                      Validity: {visa.startDate} - {visa.endDate}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default VisaSearch;
