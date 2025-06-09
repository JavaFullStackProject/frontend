
// export default RecommendationEngine;
import React, { useEffect, useState } from "react";
import axios from "axios";

const RecommendationEngine = ({ destination, lat, lng }) => {
  const [places, setPlaces] = useState([]);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const res = await fetch("/recomendations.json");
        const data = await res.json();
        const formattedDestination =
          destination.charAt(0).toUpperCase() + destination.slice(1);
        setPlaces(data[formattedDestination] || []);
      } catch (err) {
        console.error("Failed to load recommendations", err);
      }
    };

    const fetchWeather = async () => {
      if (!lat || !lng) return;

      try {
        const apiKey = "73ad20fa1e5c308ed7189bf892022b66"; // replace this
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`;
        const res = await axios.get(url);

        console.log("Fetching weather for:", lat, lng);
        setWeather({
          temp: res.data.main.temp,
          desc: res.data.weather[0].description,
          icon: res.data.weather[0].icon,
        });
      } catch (err) {
        console.error("Weather fetch error:", err);
      }
    };

    if (destination) {
      fetchRecommendations();
      fetchWeather();
    }
  }, [destination, lat, lng]);

  return (
    <div className="mt-3">
      {/* 🌤 Weather Info */}
      {weather && (
        <div className="alert alert-info d-flex align-items-center gap-3">
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt="Weather"
            style={{ width: "50px" }}
          />
          <div>
            <strong>Weather in {destination}</strong><br />
            {weather.temp}°C, {weather.desc}
          </div>
        </div>
      )}

      {/* 📍 Recommendations */}
      <h3 className="mb-4">🌍 Recommended Places in <span style={{ textTransform: "capitalize" }}>{destination}</span></h3>
       {places.length === 0 ? (
        <p>No recommendations available for this destination.</p>
      ) : (
        <div className="d-flex flex-column gap-3">
          {places.map((place, index) => (
            <div
              key={index}
              style={{
                borderLeft: "4px solid #007bff",
                backgroundColor: "#f8f9fa",
                padding: "15px 20px",
                borderRadius: "6px",
              }}
            >
              <h4 style={{ marginBottom: "8px", color: "#343a40" }}>{place.name}</h4>
              <p style={{ margin: 0, color: "#555" }}>{place.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationEngine;
