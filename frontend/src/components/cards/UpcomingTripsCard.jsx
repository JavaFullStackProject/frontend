import React from "react";
import { useNavigate } from "react-router-dom";

const UpcomingTripsCard = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid px-0">
      {" "}
      {/* Full width container */}
      <div className="row justify-content-center">
        {" "}
        {/* Center horizontally */}
        <div className="col-12">
          {" "}
          {/* Full width on all screens */}
          <div className="card border-0 shadow-lg overflow-hidden position-relative rounded-0">
            {/* Background Video */}
            <video
              className="w-100 h-100 position-absolute top-0 start-0 object-fit-cover"
              autoPlay
              muted
              loop
              playsInline
              style={{ minHeight: "100vh" }} // Full screen height
            >
              <source
                src="https://videos.pexels.com/video-files/2146396/2146396-uhd_2560_1440_30fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Overlay content */}
            <div
              className="position-relative text-white d-flex flex-column justify-content-center align-items-center text-center"
              style={{ minHeight: "100vh", backgroundColor: "rgba(0,0,0,0.4)" }}
            >
              <h1 className="fw-bold mb-3">Upcoming Trips</h1>
              <p className="lead mb-4">See what's coming up soon.</p>
              <button
                className="btn btn-light fw-semibold px-4 py-2 rounded-pill"
                onClick={() => navigate("/trips")}
              >
                View Trips
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTripsCard;
