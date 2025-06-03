import React, { useState } from "react";
import axios from "axios";

const ActivitySearch = () => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("sightseeing");
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "5ae2e3f221c38a28845f05b677f66b92b5e7167267752179825e0462";

  const kindsMap = {
    sightseeing: "interesting_places",
    adventure: "sport,amusements",
    food: "foods",
    culture: "cultural",
    shopping: "shops",
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Step 1: Get coordinates
      const geoRes = await axios.get(
        `https://api.opentripmap.com/0.1/en/places/geoname?name=${destination}&apikey=${API_KEY}`
      );
      console.log("🌐 Geoname URL:", geoRes);
      const { lat, lon } = geoRes.data;

      // Step 2: Fetch activities near location
      const res = await axios.get(
        `https://api.opentripmap.com/0.1/en/places/radius?radius=5000&lon=${lon}&lat=${lat}&kinds=${kindsMap[type]}&limit=10&apikey=${API_KEY}`
      );

      setActivities(res.data.features || []);
    } catch (err) {
      console.error("Error fetching activities:", err);
      alert("❌ Failed to fetch activities. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 pt-4">
      <div className="card p-4 shadow-sm rounded-4">
        <h4>🎡 Search Activities</h4>
        <form onSubmit={handleSearch}>
          <div className="row g-3">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Destination"
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
            <div className="col-md-4">
              <select
                className="form-select"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="sightseeing">Sightseeing</option>
                <option value="adventure">Adventure</option>
                <option value="food">Food</option>
                <option value="culture">Culture</option>
                <option value="shopping">Shopping</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            🔍 Search Activities
          </button>
        </form>
      </div>

      {loading ? (
        <p className="text-center mt-4">Loading activities...</p>
      ) : (
        <div className="row mt-4">
          {activities.length === 0 ? (
            <p className="text-center">No activities found.</p>
          ) : (
            activities.map((activity) => (
              <div className="col-md-4" key={activity.id}>
                <div className="card mb-4 shadow-sm">
                  <img
                    src={`https://source.unsplash.com/400x200/?${type},${destination}`}
                    alt={type}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {activity.properties.name || "Unnamed Activity"}
                    </h5>
                    <p className="card-text">
                      {activity.properties.kinds?.split(",")[0] || "Experience"}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ActivitySearch;
