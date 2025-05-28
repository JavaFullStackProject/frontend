import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../Api";

const PlanTrip = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trip = { destination, startDate, endDate, budget };

    try {
      const token = localStorage.getItem("token");
      await Api.post("/trips", trip, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("🎉 Trip planned successfully!");
      navigate("/dashboard");
    } catch (err) {
      alert("❌ Error: " + (err.response?.data || err.message));
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 text-dark"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-6">
            <div
              className="bg-white bg-opacity-75 p-4 p-md-5 rounded-4 shadow-lg"
              style={{
                backdropFilter: "blur(6px)",
              }}
            >
              <h2 className="text-center text-primary fw-bold mb-4">
                Plan Your Trip
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold text-dark">
                    Destination
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-sm"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                    placeholder="e.g., Goa, Kashmir"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold text-dark">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className="form-control shadow-sm"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold text-dark">
                    End Date
                  </label>
                  <input
                    type="date"
                    className="form-control shadow-sm"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold text-dark">
                    Budget (₹)
                  </label>
                  <input
                    type="number"
                    className="form-control shadow-sm"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    required
                    placeholder="e.g., 25000"
                  />
                </div>

                <div className="d-grid mb-3">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg rounded-pill fw-semibold shadow-sm"
                  >
                    Plan Trip
                  </button>
                </div>

                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-outline-dark rounded-pill px-4 py-2 fw-semibold"
                    onClick={() => navigate("/dashboard")}
                    onMouseOver={(e) => e.currentTarget.classList.add("shadow")}
                    onMouseOut={(e) =>
                      e.currentTarget.classList.remove("shadow")
                    }
                  >
                    ⬅️ Back to Dashboard
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanTrip;
