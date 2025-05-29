import React from "react";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();

  const cardStyle = (bgImage) => ({
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    height: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: "12px",
    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
  });

  return (
    <div
      id="quick-actions"
      className="row row-cols-1 row-cols-md-3 g-4 text-center mb-4 mt-4"
    >
      {/* Travel Guides */}
      <div className="col">
        <div
          style={cardStyle(
            "https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fHww"
          )}
        >
          <h5 className="fw-bold">Travel Guides</h5>
          <p className="mb-3">Find places, tips and ideas.</p>
          <button
            className="btn btn-light btn-sm"
            onClick={() => navigate("/travel-guides")}
          >
            Explore
          </button>
        </div>
      </div>

      {/* Upcoming Trips */}
      <div className="col">
        <div
          style={cardStyle(
            "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fHww"
          )}
        >
          <h5 className="fw-bold">Upcoming Trips</h5>
          <p className="mb-3">See what's coming up soon.</p>
          <button
            className="btn btn-light btn-sm"
            onClick={() => navigate("/upcoming-trips")}
          >
            View Trips
          </button>
        </div>
      </div>

      {/* Settings */}
      <div className="col">
        <div
          style={cardStyle(
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
          )}
        >
          <h5 className="fw-bold">Settings</h5>
          <p className="mb-3">Customize your experience.</p>
          <button
            className="btn btn-light btn-sm"
            onClick={() => navigate("/settings")}
          >
            Manage
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
