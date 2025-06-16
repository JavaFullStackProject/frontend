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
      {/* Background Video with Gradient Overlay */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="position-absolute w-100 h-100"
        style={{ objectFit: "cover", zIndex: "-2" }}
      >
        <source
          src="https://cdn.pixabay.com/video/2024/03/13/204006-923133925_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(120deg, rgba(0,123,255,0.35) 0%, rgba(0,0,0,0.55) 100%)",
          zIndex: "-1",
        }}
      ></div>

      {/* Glassmorphism Card Form */}
      <div className="d-flex align-items-center justify-content-center min-vh-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6">
              <div
                className="card shadow-lg border-0 rounded-4 p-4"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(16px)",
                  color: "#fff",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  boxShadow: "0 8px 32px rgba(0,123,255,0.12)",
                }}
              >
                <div className="text-center mb-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/201/201623.png"
                    alt="Plan Trip"
                    width={56}
                    height={56}
                    style={{
                      background: "rgba(0,123,255,0.12)",
                      borderRadius: "50%",
                      padding: 10,
                      marginBottom: 8,
                    }}
                  />
                  <h2 className="fw-bold mb-1" style={{ color: "#fff" }}>
                    Plan Your Trip
                  </h2>
                  <div
                    className="text-info mb-2"
                    style={{ fontWeight: 500 }}
                  >
                    Dream. Plan. Go!
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold text-light">
                      Destination
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-pill px-4 py-2 shadow-sm"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      required
                      placeholder="e.g., Goa, Kashmir"
                      style={{ background: "rgba(255,255,255,0.7)" }}
                    />
                  </div>

                  <div className="row">
                    <div className="col-6 mb-3">
                      <label className="form-label fw-semibold text-light">
                        Start Date
                      </label>
                      <input
                        type="date"
                        className="form-control rounded-pill px-4 py-2 shadow-sm"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                        style={{ background: "rgba(255,255,255,0.7)" }}
                      />
                    </div>
                    <div className="col-6 mb-3">
                      <label className="form-label fw-semibold text-light">
                        End Date
                      </label>
                      <input
                        type="date"
                        className="form-control rounded-pill px-4 py-2 shadow-sm"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                        style={{ background: "rgba(255,255,255,0.7)" }}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold text-light">
                      Budget (₹)
                    </label>
                    <input
                      type="number"
                      className="form-control rounded-pill px-4 py-2 shadow-sm"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      required
                      placeholder="e.g., 25000"
                      style={{ background: "rgba(255,255,255,0.7)" }}
                    />
                  </div>

                  <div className="d-grid mb-3">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg rounded-pill fw-semibold shadow"
                      style={{
                        background:
                          "linear-gradient(90deg, #007bff 0%, #00c6ff 100%)",
                        border: "none",
                        letterSpacing: "0.03em",
                      }}
                    >
                      <span role="img" aria-label="plane">
                        ✈️
                      </span>{" "}
                      Plan Trip
                    </button>
                  </div>

                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-outline-light rounded-pill px-4 py-2 fw-semibold"
                      onClick={() => navigate("/dashboard")}
                      style={{
                        border: "2px solid #fff",
                        background: "rgba(255,255,255,0.08)",
                        transition: "background 0.2s",
                      }}
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
