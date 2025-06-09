import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

      toast.success("🎉 Trip planned successfully!", {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
      });

      navigate("/dashboard");
    } catch (err) {
      toast.error("❌ Error: " + (err.response?.data || err.message), {
        position: "top-right",
        autoClose: 4000,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="position-relative min-vh-100 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="position-absolute w-100 h-100"
        style={{ objectFit: "cover", zIndex: "-1" }}
      >
        <source
          src="https://cdn.pixabay.com/video/2024/03/13/204006-923133925_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Transparent Card Form */}
      <div className="d-flex align-items-center justify-content-center min-vh-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6">
              <div
                className="card shadow-lg border-0 rounded-4 p-4"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  color: "#fff",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                <h2 className="text-center text-light fw-bold mb-4">
                  Plan Your Trip
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold text-light">
                      Destination
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      required
                      placeholder="e.g., Goa, Kashmir"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold text-light">
                      Start Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold text-light">
                      End Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold text-light">
                      Budget (₹)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      required
                      placeholder="e.g., 25000"
                    />
                  </div>

                  <div className="d-grid mb-3">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg rounded-pill fw-semibold"
                    >
                      Plan Trip
                    </button>
                  </div>

                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-outline-light rounded-pill px-4 py-2 fw-semibold"
                      onClick={() => navigate("/dashboard")}
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
    </div>
  );
};

export default PlanTrip;
