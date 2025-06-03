import React from "react";
import { useNavigate, Link } from "react-router-dom";
import TopServiceNav from './TopServiceNav';


function Home() {
  const navigate = useNavigate();

  const handleStartPlanning = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/plantrip");
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      {/* Hero Section with Background Video */}
      <div
        className="position-relative container-fluid px-0"
        style={{ height: "90vh" }}
      > 
        {/* Video Background */}
        <video
          className="w-100 h-100 position-absolute top-0 start-0 object-fit-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://videos.pexels.com/video-files/2519660/2519660-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="position-relative text-white text-center d-flex align-items-center justify-content-center h-100 bg-dark bg-opacity-50">
          <div className="p-5 rounded">
            <h1 className="display-3 fw-bold">Welcome to Travel Planner</h1>
            <p className="lead">
              Plan, manage, and explore your adventures with ease.
            </p>
            <div className="mt-4">
              <Link to="/register" className="btn btn-light btn-lg me-3">
                Get Started
              </Link>
              <Link to="/login" className="btn btn-outline-light btn-lg">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Flights Hotels Visa icons */}

      <TopServiceNav />

      {/* Features Section */}
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.sORN-de06Odb8Mh3-stDHwHaED&pid=Api&P=0&h=180"
                className="card-img-top"
                alt="Plan Trip"
              />
              <div className="card-body">
                <h5 className="card-title">Create Your Trip</h5>
                <p className="card-text">
                  Plan each step of your journey with detailed itineraries and
                  maps.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://thetravellingfool.com/wp-content/uploads/2016/11/Holiday_20Flights-XL.jpg"
                className="card-img-top"
                alt="Manage Trips"
              />
              <div className="card-body">
                <h5 className="card-title">Manage Your Trips</h5>
                <p className="card-text">
                  View, update, and keep track of your travel plans in one
                  place.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1493558103817-58b2924bce98"
                className="card-img-top"
                alt="Organize Plans"
              />
              <div className="card-body">
                <h5 className="card-title">Stay Organized</h5>
                <p className="card-text">
                  All your bookings, notes, and ideas neatly stored and
                  accessible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-light text-center py-5">
        <h2 className="mb-4">Ready to Plan Your Next Trip?</h2>
        <button
          onClick={handleStartPlanning}
          className="btn btn-primary btn-lg"
        >
          Start Planning
        </button>
      </div>
    </div>
  );
}

export default Home;
