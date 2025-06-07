import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../Api";

const Itinerary = () => {
  const { tripId } = useParams();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await Api.get(`/bookings?tripId=${tripId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBookings(res.data);
    } catch (err) {
      alert("❌ Failed to load itinerary.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <h3>🧳 Trip Itinerary</h3>
      {loading ? (
        <p>Loading itinerary...</p>
      ) : bookings.length === 0 ? (
        <p>No bookings added yet.</p>
      ) : (
        <div className="row g-4">
          {bookings.map((b) => (
            <div className="col-md-6" key={b.id}>
              <div className="card shadow-sm rounded-4 p-3 border-start border-4 border-primary">
                <h5 className="card-title">
                   {b.type === "bus" ? "🚌 Bus Booking" : b.type === "hotel" ? "🏨 Hotel Booking" : "✈️ Flight Booking"}
                </h5>

                <p className="mb-1">
                  <strong>Name:</strong> {b.details || "—"}
                </p>
                <p className="mb-1">
                  <strong>Location:</strong> {b.location || "—"}
                </p>
                <p className="mb-1">
                  <strong>Provider:</strong> {b.provider || "—"}
                </p>
                <p className="mb-1">
                  <strong>Booking Ref:</strong> {b.reference || "—"}
                </p>
                <p className="mb-1">
                  <strong>From:</strong> {b.startDate} &nbsp; <strong>To:</strong> {b.endDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Itinerary;