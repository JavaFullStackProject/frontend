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
    <div className="container mt-4">
      <h2>Edit Trip</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Destination</label>
          <input
            className="form-control"
            name="destination"
            value={trip.destination}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Start Date</label>
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
          <label>End Date</label>
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
          <label>Budget</label>
          <input
            type="number"
            className="form-control"
            name="budget"
            value={trip.budget}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-primary">Update Trip</button>
      </form>
    </div>
  );
}

export default EditTrip;
