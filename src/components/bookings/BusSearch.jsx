import React, { useState } from "react";
import Api from "../../Api";
import axios from "axios";

const BusSearch = () => {
  const API_KEY = "5ae2e3f221c38a28845f05b677f66b92b5e7167267752179825e0462";

  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await Api.get(`/bus/search`, {
        params: {
          city: city,
          date: date,
        },
      });
      setBuses(response.data || []);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to fetch buses. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 pt-4">
      <div className="card p-4 shadow-sm rounded-4">
        <h4 className="mb-4">🚌 Search Buses</h4>
        <form onSubmit={handleSearch}>
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            🔍 Search Buses
          </button>
        </form>
      </div>

      {loading ? (
        <p className="text-center mt-4">Loading buses...</p>
      ) : (
        <div className="row mt-4">
          {buses.length === 0 ? (
            <p className="text-center">No buses found.</p>
          ) : (
            buses.map((bus, index) => (
              <div className="col-md-4" key={index}>
                <div className="card mb-4 shadow-sm">
                  <img
                    src="https://img.freepik.com/free-photo/bus-travel-transportation-concept_53876-129396.jpg"
                    alt="Bus"
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {bus.destination || "Unknown Destination"}
                    </h5>
                    <p className="card-text">
                      Date: {bus.startDate} <br />
                      Budget: ₹{bus.budget}
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

export default BusSearch;
