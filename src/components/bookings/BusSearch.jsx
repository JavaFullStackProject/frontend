import React, { useState } from "react";
import Api from "../../Api";

const BusSearch = () => {
  const [city, setCity] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/mockBuses.json");
      const data = await response.json();

      const filtered = data.filter(
        (bus) =>
          bus.from.toLowerCase() === city.toLowerCase() &&
          bus.to.toLowerCase() === destination.toLowerCase()
      );

      if (filtered.length === 0) {
        setError("No buses found for the selected city and destination.");
        setBuses([]);
      } else {
        const busesWithExtras = filtered.map((bus) => ({
          ...bus,
          startDate: date || "2025-06-04",
          budget: (Math.random() * 1000 + 500).toFixed(0),
        }));
        setBuses(busesWithExtras);
      }
    } catch (err) {
      console.error(err);
      setError("❌ Failed to fetch buses. Please try again.");
      setBuses([]);
    } finally {
      setLoading(false);
    }
  };

  const handleBook = async (bus) => {
    const tripId = localStorage.getItem("selectedTripId");
    if (!tripId) {
      alert("No trip selected. Please select a trip to save this booking.");
      return;
    }

    try {
      const bookingData = {
        type: "bus",
        reference: bus.from + "-" + bus.to,
        provider: "StaticBusProvider",
        name: "Bus from " + bus.from + " to " + bus.to,
        location: bus.from,
        details: `Bus from ${bus.from} to ${bus.to}`,
        startDate: bus.startDate,
        endDate: bus.startDate,
      };

      await Api.post(`/bookings?tripId=${tripId}`, bookingData);
      alert("✅ Bus booking saved to itinerary!");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to save bus booking.");
    }
  };

  return (
    <div className="container mt-5 pt-4">
      <div className="card p-4 shadow-sm rounded-4">
        <h4 className="mb-4">🚌 Search Buses</h4>
        <form onSubmit={handleSearch}>
          <div className="row g-3">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Departure City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Destination City"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-4 px-4">
            🔍 Search Buses
          </button>
        </form>
      </div>

      {loading ? (
        <p className="text-center mt-4">Loading buses...</p>
      ) : error ? (
        <p className="text-center text-danger mt-4">{error}</p>
      ) : (
        <div className="row mt-4">
          {buses.map((bus, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card mb-4 shadow-sm border-0 rounded-4"
                style={{ transition: "transform 0.3s" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  src={
                    bus.image ||
                    "https://img.freepik.com/free-photo/bus-travel-transportation-concept_53876-129396.jpg"
                  }
                  alt={`${bus.from} to ${bus.to}`}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">
                    {bus.from} → {bus.to}
                  </h5>
                  <p className="card-text">
                    Date: {bus.startDate} <br />
                    Budget: ₹{bus.budget}
                  </p>
                  <button
                    className="btn btn-success w-100"
                    onClick={() => handleBook(bus)}
                  >
                    ✅ Book Bus
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

export default BusSearch;
