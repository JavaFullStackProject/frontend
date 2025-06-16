import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../Api";
import MapView from "./MapView";
import BudgetTracker from "./BudgetTracker";
import RecommendationEngine from "./RecommendationEngine";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TripList() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTripId, setSelectedTripId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTrips();
  }, []);

  useEffect(() => {
    const modal = document.getElementById("budgetModal");

    const handleShow = () => setIsModalOpen(true);
    const handleHide = () => setIsModalOpen(false);

    if (modal) {
      modal.addEventListener("shown.bs.modal", handleShow);
      modal.addEventListener("hidden.bs.modal", handleHide);
    }

    return () => {
      if (modal) {
        modal.removeEventListener("shown.bs.modal", handleShow);
        modal.removeEventListener("hidden.bs.modal", handleHide);
      }
    };
  }, []);

  const fetchTrips = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await Api.get("/trips", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTrips(res.data);
    } catch (err) {
      alert("Failed to load trips");
    } finally {
      setLoading(false);
    }
  };

  const deleteTrip = async (id) => {
    if (!window.confirm("Are you sure you want to delete this trip?")) return;

    try {
      const token = localStorage.getItem("token");
      await Api.delete(`/trips/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setTrips((prev) => prev.filter((t) => t.id !== id));

      toast.success("🗑️ Trip deleted successfully", {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (err) {
      toast.error("❌ Error deleting trip", {
        position: "top-right",
        autoClose: 4000,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  if (loading)
    return <p className="text-center mt-4 text-light">Loading trips...</p>;

  return (
    <div className="position-relative">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="position-fixed top-0 start-0 w-100 h-100 object-fit-cover"
        style={{ zIndex: -1 }}
      >
        <source
          src="https://cdn.pixabay.com/video/2023/07/27/173522-849651812_tiny.mp4"
          type="video/mp4"
        />
      </video>

      {/* Blur wrapper */}
      <div
        className={`container mt-5 p-5 ${isModalOpen ? "blurred" : ""}`}
        id="main-content"
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-lightblack m-0">
            <strong>Your Trips</strong>
          </h2>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/plan-trip")}
          >
            ➕ Plan New Trip
          </button>
        </div>

        <div className="mb-5" style={{ height: "400px" }}>
          <MapView trips={trips} />
        </div>

        <div className="row g-4">
          {trips.map((trip) => (
            <div className="col-sm-6 col-lg-4" key={trip.id}>
              <div
                className="card h-100 shadow-lg rounded-4 bg-transparent border-0"
                style={{ backdropFilter: "blur(10px)" }}
              >
                <img
                  src={`https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg`}
                  alt={trip.destination}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "150px" }}
                />
                <div className="card-body bg-light bg-opacity-50">
                  <h5 className="card-title">{trip.destination}</h5>
                  <p className="card-text">
                    <strong>Start:</strong> {trip.startDate}
                    <br />
                    <strong>End:</strong> {trip.endDate}
                    <br />
                    <strong>Budget:</strong> ₹{trip.budget}
                  </p>
                  <div className="d-flex justify-content-between flex-wrap gap-2">
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => {
                        localStorage.setItem("selectedTripId", trip.id);
                        navigate(`/edit-trip/${trip.id}`);
                      }}
                    >
                      ✏ Edit
                    </button>
                    <button
                      className="btn btn-sm btn-outline-success"
                      onClick={() => {
                        localStorage.setItem("selectedTripId", trip.id);
                        alert(
                          `Trip "${trip.destination}" selected for booking.`
                        );
                      }}
                    >
                      📌 Select
                    </button>
                    <button
                      className="btn btn-sm btn-outline-success"
                      onClick={() => navigate(`/itinerary/${trip.id}`)}
                    >
                      📋 View Itinerary
                    </button>
                    <button
                      className="btn btn-sm btn-outline-warning"
                      data-bs-toggle="modal"
                      data-bs-target="#budgetModal"
                      onClick={() => setSelectedTripId(trip.id)}
                    >
                      💰 Budget
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => deleteTrip(trip.id)}
                    >
                      🗑 Delete
                    </button>
                  </div>
                  <RecommendationEngine
                    destination={trip.destination}
                    lat={trip.lat}
                    lng={trip.lng}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bootstrap Modal for Budget Tracker */}
      <div
        className="modal fade"
        id="budgetModal"
        tabIndex="-1"
        aria-labelledby="budgetModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="budgetModalLabel">
                💰 Budget Tracker
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {selectedTripId && <BudgetTracker tripId={selectedTripId} />}
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style>
        {`
          .card:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(0,0,0,0.3);
            transition: transform 0.3s, box-shadow 0.3s;
          }
          .blurred {
            filter: blur(5px);
            pointer-events: none;
            user-select: none;
            transition: filter 0.3s ease-in-out;
          }
        `}
      </style>
    </div>
  );
}

export default TripList;
