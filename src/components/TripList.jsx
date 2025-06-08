import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../Api";
import MapView from "./MapView";

function TripList() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await Api.get("/trips", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTrips(res.data);
      console.log(res.data);
    } catch (err) {
      alert("Failed to load trips");
    } finally {
      setLoading(false);
    }
  };

  const deleteTrip = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this trip?"
    );
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");
      await Api.delete(`/trips/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTrips((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      alert("Error deleting trip");
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

      <div className="container mt-5 p-5">
        <h2 className="text-lightblack mb-4">
          <strong>Your Trips</strong>
        </h2>

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
                  src={`https://source.unsplash.com/400x200/?travel,${trip.destination}`}
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
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => deleteTrip(trip.id)}
                    >
                      🗑 Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bootstrap hover effect */}
      <style>
        {`
          .card:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(0,0,0,0.3);
            transition: transform 0.3s, box-shadow 0.3s;
          }
        `}
      </style>
    </div>
  );
}

export default TripList;
