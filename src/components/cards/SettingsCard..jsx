import React from "react";
import { useNavigate } from "react-router-dom";

const SettingsCard = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid px-0">
      <div className="position-relative w-100" style={{ height: "100vh" }}>
        {/* Fullscreen Background Video */}
        <video
          className="w-100 h-100 position-absolute top-0 start-0 object-fit-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://videos.pexels.com/video-files/5155396/5155396-sd_640_360_30fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay with Content */}
        <div className="position-relative h-100 d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-50 text-white text-center px-3">
          <h1 className="display-4 fw-bold">Settings</h1>
          <p className="lead mb-4">Customize your experience.</p>
          <button
            className="btn btn-light btn-lg px-4 py-2 fw-semibold"
            onClick={() => navigate("/settings")}
          >
            Manage
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsCard;
