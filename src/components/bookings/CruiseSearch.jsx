import React, { useState } from "react";
import axios from "axios";

const CruiseSearch = () => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [cruises, setCruises] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get(
        "https://dreams-travel-agency.p.rapidapi.com/voyages",
        {
          headers: {
            "X-RapidAPI-Key":
              "fb1e45cfa7msh0ff00830e9844a3p15a702jsn3651d2b7f20b",
            "X-RapidAPI-Host": "dreams-travel-agency.p.rapidapi.com",
          },
        }
      );

      const data = Array.isArray(response.data) ? response.data : [];

      const filteredCruises = data.filter((voyage) => {
        const matchDestination = destination
          ? voyage.destination
              ?.toLowerCase()
              .includes(destination.toLowerCase())
          : true;

        const matchDate = date
          ? voyage.depart?.includes(date.split("-").reverse().join("/"))
          : true;

        return matchDestination && matchDate;
      });

      setCruises(filteredCruises);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to fetch cruises. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleBook = async (cruise) => {
    const tripId = localStorage.getItem("selectedTripId");
    const token = localStorage.getItem("token");

    if (!tripId || !token) {
      alert("Please select a trip from the Trip List first.");
      return;
    }

    const newCruise = {
      name: cruise.nom,
      destination: cruise.destination,
      departureDate: cruise.depart,
      duration: cruise.duree,
      price: cruise.prix?.[0],
      discount: cruise.remise,
      photo: cruise.photo || "",
    };

    try {
      await axios.post(
        `http://localhost:8080/api/trips/${tripId}/cruises`,
        newCruise,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("✅ Cruise booked successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Booking failed. Please try again.");
    }
  };

  return (
    <div className="container py-5">
      <div className="card p-4 shadow rounded-4 mb-5 my-5">
        <h4 className="mb-4 text-primary">🚢 Search Cruises</h4>
        <form onSubmit={handleSearch}>
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary px-4 py-2">
              🔍 Search Cruises
            </button>
          </div>
        </form>
      </div>

      {loading ? (
        <p className="text-center">Loading cruises...</p>
      ) : cruises.length === 0 ? (
        <p className="text-center">No cruises found.</p>
      ) : (
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {cruises.map((cruise, index) => (
            <div
              key={index}
              className="card shadow-sm rounded-4"
              style={{ width: "22rem", transition: "transform 0.3s" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <img
                src={
                  cruise.photo ||
                  "https://img.freepik.com/free-photo/cruise-ship-ocean_23-2149053831.jpg"
                }
                className="card-img-top rounded-top-4"
                alt="Cruise"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title text-primary">{cruise.nom}</h5>
                <p className="card-text">
                  <strong>Destination:</strong> {cruise.destination || "N/A"}{" "}
                  <br />
                  <strong>Departure:</strong> {cruise.depart || "TBD"} <br />
                  <strong>Duration:</strong> {cruise.duree || "?"} days <br />
                  <strong>From:</strong> ₹{cruise.prix?.[0] || "N/A"}{" "}
                  <span className="text-success">({cruise.remise}% off)</span>
                </p>
                <button
                  className="btn btn-success px-3"
                  onClick={() => handleBook(cruise)}
                >
                  📦 Book Cruise
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CruiseSearch;
