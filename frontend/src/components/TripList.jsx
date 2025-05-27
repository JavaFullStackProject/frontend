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
      console.log("Fetched trips:", res.data);

    } catch (err) {
      alert("Failed to load trips");
    } finally {
      setLoading(false);
    }
  };

  const deleteTrip = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this trip?");
    if (!confirm) return;

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

  if (loading) return <p className="text-center mt-4">Loading trips...</p>;

  return (
    <div className="container mt-4">
      <h2>Your Trips</h2>
       <MapView trips={trips} /> 
      <div className="row g-4">
        {trips.map((trip) => (
          <div className="col-md-4" key={trip.id}>
            <div className="card h-100 shadow rounded-4">
              {/* Google Static Map API preview */}
              <img
                  src={`https://source.unsplash.com/400x200/?travel,${trip.destination}`}
                  alt={trip.destination}
                  className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{trip.destination}</h5>
                <p className="card-text">
                  <strong>Start:</strong> {trip.startDate}<br />
                  <strong>End:</strong> {trip.endDate}<br />
                  <strong>Budget:</strong> ₹{trip.budget}
                </p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => navigate(`/edit-trip/${trip.id}`)}
                  >
                    ✏ Edit
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
  );
}

export default TripList;
