import React, { useState } from "react";
import axios from "axios";
import Api from "../../Api";
import { useNavigate } from "react-router-dom";

const HotelSearch = () => {
  const [city, setCity] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const API_KEY = "5ae2e3f221c38a28845f05b677f66b92b5e7167267752179825e0462";

  const handleSearch = async (e) => {
    e.preventDefault();
    if (new Date(checkin) >= new Date(checkout)) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    setLoading(true);
    try {
      const geoRes = await axios.get(
        `https://api.opentripmap.com/0.1/en/places/geoname?name=${city}&apikey=${API_KEY}`
      );
      const { lat, lon } = geoRes.data;

      const res = await axios.get(
        `https://api.opentripmap.com/0.1/en/places/radius?radius=5000&lon=${lon}&lat=${lat}&kinds=accomodations&limit=10&apikey=${API_KEY}`
      );

      setHotels(res.data.features || []);
    } catch (err) {
      alert("❌ Failed to fetch hotel data.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleBook = async (hotel) => {
    const tripId = localStorage.getItem("selectedTripId");

    if (!tripId) {
      alert("No trip selected. Please select a trip to save this booking.");
      return;
    }

    try {
      const bookingData = {
        type: "hotel",
        reference: hotel.id,
        provider: "OpenTripMap",
        details: hotel.properties.name || "Unnamed Hotel",
        startDate: checkin,
        endDate: checkout,
        location: city,
      };

      await Api.post(`/bookings?tripId=${tripId}`, bookingData);
      alert("✅ Hotel booking saved!");
      navigate("/dashboard");
    } catch (err) {
      alert("❌ Failed to book hotel.");
      console.error(err);
    }
  };

  return (
    <div className="container py-5 ">
      <div className="card p-4 shadow-lg rounded-4 bg-white bg-opacity-75 my-5">
        <h4 className="mb-4 text-center">🏨 Search Hotels</h4>
        <form onSubmit={handleSearch}>
          <div className="row g-3 justify-content-center">
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className="col-md-3">
              <input
                type="date"
                className="form-control"
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
                required
              />
            </div>
            <div className="col-md-3">
              <input
                type="date"
                className="form-control"
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary px-5">
              🔍 Search Hotels
            </button>
          </div>
        </form>
      </div>

      {loading ? (
        <p className="text-center mt-4 fs-5 text-primary">Loading hotels...</p>
      ) : (
        hotels.length > 0 && (
          <div className="row justify-content-center mt-5">
            {hotels.map((hotel) => (
              <div
                className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch"
                key={hotel.id}
              >
                <div
                  className="card shadow border-0 rounded-4 w-100"
                  style={{ transition: "transform 0.3s" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <img
                    src="https://www.kayak.co.in/rimg/dimg/dynamic/76/2023/08/eef8369398e2d8ac1191ee20223f219f.webp"
                    className="card-img-top"
                    alt="Hotel"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      {hotel.properties.name || "Unnamed Hotel"}
                    </h5>
                    <p className="card-text">
                      {hotel.properties.kinds?.split(",")[0] || "Accommodation"}
                    </p>
                    <button
                      className="btn btn-success w-100"
                      onClick={() => handleBook(hotel)}
                    >
                      ✅ Book Hotel
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default HotelSearch;
