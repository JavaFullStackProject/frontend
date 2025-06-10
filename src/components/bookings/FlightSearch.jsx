import React, { useState } from "react";
import Api from "../../Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const FlightSearch = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/mockFlights.json");
      const data = await response.json();

      const filtered = data.filter(
        (flight) =>
          flight.from.toLowerCase() === from.toLowerCase() &&
          flight.to.toLowerCase() === to.toLowerCase()
      );

      if (filtered.length === 0) {
        setError("No flights found for the selected route.");
        setFlights([]);
      } else {
        const flightsWithExtras = filtered.map((flight) => ({
          ...flight,
          startDate: date || "2025-06-08",
          budget: (Math.random() * 3000 + 2000).toFixed(0),
        }));
        setFlights(flightsWithExtras);
      }
    } catch (err) {
      console.error(err);
      setError("❌ Failed to fetch flights. Please try again.");
      setFlights([]);
    } finally {
      setLoading(false);
    }
  };

  const handleBook = async (flight) => {
    const tripId = localStorage.getItem("selectedTripId");
    if (!tripId) {
      toast.warn(
        "⚠️ No trip selected. Please select a trip to save this booking."
      );
      return;
    }

    try {
      const bookingData = {
        type: "flight",
        reference: flight.from + "-" + flight.to,
        provider: flight.airline || "StaticAirline",
        name: "Flight from " + flight.from + " to " + flight.to,
        location: flight.from,
        details: `Flight on ${flight.date}, Duration: ${flight.duration}, Price: ${flight.price}`,
        startDate: flight.startDate,
        endDate: flight.startDate,
      };

      await Api.post(`/bookings?tripId=${tripId}`, bookingData);
      toast.success("✈️ Flight booking saved to itinerary!", {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
      });
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to save flight booking.", {
        position: "top-right",
        autoClose: 4000,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="container mt-5 pt-4">
      <div className="card p-4 shadow-lg rounded-4 bg-light bg-opacity-75">
        <h4 className="mb-4 text-primary text-center">
          ✈️ <strong>Search Flights</strong>
        </h4>
        <form onSubmit={handleSearch}>
          <div className="row g-3">
            <div className="col-12 col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Departure City"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                required
              />
            </div>
            <div className="col-12 col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Destination City"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                required
              />
            </div>
            <div className="col-12 col-md-4">
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary px-4">
              🔍 Search Flights
            </button>
          </div>
        </form>
      </div>

      {loading ? (
        <p className="text-center mt-4 text-info">Loading flights...</p>
      ) : error ? (
        <p className="text-center text-danger mt-4">{error}</p>
      ) : (
        <div className="row mt-4">
          {flights.map((flight, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div
                className="card h-100 mb-4 shadow-lg border-0 rounded-4 bg-white"
                style={{
                  transition: "transform 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  src={
                    flight.photo ||
                    "https://img.freepik.com/free-photo/aeroplane-flying-sunset_53876-13718.jpg"
                  }
                  alt={`${flight.from} to ${flight.to}`}
                  className="card-img-top rounded-top-4"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-dark">
                    {flight.from} → {flight.to}
                  </h5>
                  <p className="card-text text-muted">
                    <strong>Airline:</strong> {flight.airline || "N/A"} <br />
                    <strong>Date:</strong> {flight.startDate} <br />
                    <strong>Budget:</strong> ₹{flight.budget}
                  </p>
                  <button
                    className="btn btn-success w-100 rounded-pill"
                    onClick={() => handleBook(flight)}
                  >
                    ✅ Book Flight
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlightSearch;
