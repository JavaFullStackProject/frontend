
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from "../Api";

function EditTrip() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [trip, setTrip] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    budget: "",
  });

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await Api.get(`/trips/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTrip(res.data);
      } catch (err) {
        alert("Failed to load trip: " + (err.response?.data || err.message));
      }
    };

    fetchTrip();
  }, [id]);

  const handleChange = (e) => {
    setTrip({ ...trip, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await Api.put(`/trips/${id}`, trip, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Trip updated successfully!");
      navigate("/trips");
    } catch (err) {
      alert("Error updating trip: " + (err.response?.data || err.message));
    }
  };

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
          src="https://cdn.pixabay.com/video/2021/02/18/65560-515098344_large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Form Container */}
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div
          className="card p-4 shadow-lg bg-light bg-opacity-50"
          style={{
            maxWidth: "400px",
            width: "100%",
            backdropFilter: "blur(10px)",
          }}
        >
          <h2 className="text-center mb-4">Edit Trip</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Destination</label>
              <input
                className="form-control"
                name="destination"
                value={trip.destination}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Start Date</label>
              <input
                type="date"
                className="form-control"
                name="startDate"
                value={trip.startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">End Date</label>
              <input
                type="date"
                className="form-control"
                name="endDate"
                value={trip.endDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Budget</label>
              <input
                type="number"
                className="form-control"
                name="budget"
                value={trip.budget}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-grid">
              <button className="btn btn-outline-light" type="submit">
                Update Trip
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditTrip;
