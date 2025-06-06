import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1747546314703-6c4fc20c5a37?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1738214577108-ce8760dcf9ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

];

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const isLoggedIn = !!localStorage.getItem("token");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePlanTrip = () => {
    if (isLoggedIn) {
      navigate("/plan-trip");
    } else {
      alert("Please log in to plan a new trip.");
      navigate("/login");
    }
  };

  return (
    <div
      className="text-white d-flex align-items-center position-relative"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)),
          url('${images[currentImage]}')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
        transition: "background-image 1s ease-in-out",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Overlay for improved contrast */}
      <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>

      <div className="container position-relative z-1 py-5">
        <div className="row justify-content-center text-center">
          <div className="col-lg-10 col-xl-8">
            <h1 className="display-3 fw-bold mb-4 text-shadow-dark">
              Welcome back, Explorer!
            </h1>
            <p className="lead fs-4 mb-5 text-shadow-light">
              Discover your next unforgettable journey with Travel Connect
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <button
                onClick={handlePlanTrip}
                className="btn btn-light btn-lg px-4 py-3 rounded-pill fw-semibold shadow-sm"
              >
                Plan a New Trip
              </button>
              <button
                onClick={() => navigate("/trips")}
                className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill fw-semibold shadow-sm"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255,255,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                View My Trips
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <a
        href="#quick-actions"
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4 text-white"
        style={{ animation: "bounce 2s infinite" }}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </a>

      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;
