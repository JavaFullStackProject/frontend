import React, { useState } from "react";
import axios from "axios";

const VisaSearch = () => {
  const [country, setCountry] = useState("");
  const [purpose, setPurpose] = useState("");
  const [visas, setVisas] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get("/mockVisa.json");
      const filtered = response.data.filter(
        (visa) =>
          visa.destination.toLowerCase().includes(country.toLowerCase()) &&
          visa.purpose.toLowerCase().includes(purpose.toLowerCase())
      );
      setVisas(filtered);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to fetch visa details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getVisaImage = (destination) => {
    const images = {
      "United States": "https://flagcdn.com/w640/us.png",
      "United Arab Emirates": "https://flagcdn.com/w640/ae.png",
      "United Kingdom": "https://flagcdn.com/w640/gb.png",
      Singapore: "https://flagcdn.com/w640/sg.png",
      Canada: "https://flagcdn.com/w640/ca.png",
      Germany: "https://flagcdn.com/w640/de.png",
      Japan: "https://flagcdn.com/w640/jp.png",
      Australia: "https://flagcdn.com/w640/au.png",
      Italy: "https://flagcdn.com/w640/it.png",
      Russia: "https://flagcdn.com/w640/ru.png",
    };
    return (
      images[destination] ||
      "https://img.freepik.com/free-photo/passport_144627-43613.jpg"
    );
  };

  const getCountryVideo = (destination) => {
    const videos = {
      Education:
        "https://videos.pexels.com/video-files/2002526/2002526-sd_640_360_30fps.mp4",
      Canada:
        "https://videos.pexels.com/video-files/3678380/3678380-sd_640_360_30fps.mp4",
      "United Arab Emirates":
        "https://videos.pexels.com/video-files/2249410/2249410-sd_640_360_30fps.mp4",
      Germany:
        "https://videos.pexels.com/video-files/32386626/13814880_2560_1440_100fps.mp4",
      Japan:
        "https://videos.pexels.com/video-files/4511381/4511381-sd_640_360_30fps.mp4",
      Australia:
        "https://videos.pexels.com/video-files/854212/854212-sd_640_360_24fps.mp4",
      Italy:
        "https://videos.pexels.com/video-files/2257019/2257019-sd_640_360_24fps.mp4",
      Russia:
        "https://videos.pexels.com/video-files/3753795/3753795-sd_640_360_24fps.mp4",
    };
    return videos[destination] || null;
  };

  const getDescription = (destination) => {
    const about = {
      "United States":
        "Explore the land of opportunities, tech, and culture. USA offers diverse landscapes and vibrant cities.",
      Canada:
        "Canada is known for its natural beauty, quality education, and peaceful lifestyle.",
      "United Arab Emirates":
        "UAE is famous for luxury tourism, futuristic skyscrapers, and cultural richness.",
      Germany:
        "Germany combines modern engineering, medieval cities, and a strong economy.",
      Japan:
        "From traditional temples to high-tech innovation, Japan fascinates all.",
      Australia:
        "Australia welcomes you with scenic coasts, rich wildlife, and laid-back culture.",
      Italy: "Italy is the heart of art, fashion, and centuries-old heritage.",
      Russia:
        "Russia features historical cities, vast landscapes, and winter magic.",
    };
    return about[destination] || "Learn more about this beautiful destination!";
  };

  return (
    <div className="container py-5 my-5 ">
      <div className="card shadow p-4 mb-5 bg-light rounded-4">
        <h4 className="mb-4">🛂 Search Visa Details</h4>
        <form onSubmit={handleSearch}>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  id="floatingCountry"
                  className="form-control"
                  placeholder="Destination Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
                <label htmlFor="floatingCountry">Destination Country</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  id="floatingPurpose"
                  className="form-control"
                  placeholder="Purpose (Tourism, Business...)"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  required
                />
                <label htmlFor="floatingPurpose">
                  Purpose (Tourism, Business...)
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-4 px-4 py-2"
            disabled={loading}
          >
            {loading ? "Searching..." : "🔍 Search Visa Details"}
          </button>
        </form>
      </div>

      {loading ? (
        <p className="text-center mt-4">Loading visa details...</p>
      ) : visas.length === 0 ? (
        <p className="text-center">No visa details found.</p>
      ) : (
        <div className="d-flex justify-content-center">
          {visas.map((visa, index) => (
            <div
              key={index}
              className="mb-4"
              style={{ maxWidth: "400px", width: "100%" }}
            >
              <div
                className="card bg-dark text-white rounded-4 shadow position-relative overflow-hidden"
                style={{
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(255,255,255,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                {getCountryVideo(visa.destination) && (
                  <video
                    src={getCountryVideo(visa.destination)}
                    autoPlay
                    loop
                    muted
                    className="position-absolute top-50 start-50 translate-middle w-100 h-100"
                    style={{ objectFit: "cover", opacity: 0.25, zIndex: 0 }}
                  />
                )}

                <div
                  className="card-body d-flex flex-column justify-content-center align-items-center text-center"
                  style={{
                    position: "relative",
                    zIndex: 1,
                    minHeight: "320px",
                  }}
                >
                  <img
                    src={getVisaImage(visa.destination)}
                    alt={`${visa.destination} flag`}
                    className="rounded-circle border border-light mb-3"
                    style={{ width: 70, height: 70, objectFit: "cover" }}
                  />
                  <h5 className="card-title">{visa.destination}</h5>
                  <p className="mb-1">
                    <strong>Purpose:</strong> {visa.purpose}
                  </p>
                  <p className="mb-2">
                    <strong>Validity:</strong> {visa.startDate} - {visa.endDate}
                  </p>
                  <p className="small fst-italic">
                    {getDescription(visa.destination)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VisaSearch;
