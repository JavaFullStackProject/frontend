import HeroSection from "./pages/HeroSection";
// import Navbar from "./pages/Navbar";
import QuickActions from "./pages/QuickActions";
import TopServiceNav from "./pages/TopServiceNav";

const Dashboard = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />

      {/* Flights Hotels Visa icons */}
      <TopServiceNav />

      {/* Quick Actions */}
      <div className="container my-5">
        <h2 className="fw-bold mb-4 text-center">Quick Actions</h2>
        <QuickActions />
      </div>

      {/* Upcoming Trips */}
      <div className="container my-5">
        <h3 className="fw-bold mb-4">Upcoming Trips</h3>
        <div className="row g-3">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Paris, France</h5>
                <p className="card-text mb-1">June 20 - June 27, 2025</p>
                <span className="badge bg-primary">Flight Booked</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Tokyo, Japan</h5>
                <p className="card-text mb-1">August 10 - August 20, 2025</p>
                <span className="badge bg-success">Hotel Confirmed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Stats */}
      <div className="container my-5">
        <h3 className="fw-bold mb-4">Your Travel Stats</h3>
        <div className="row text-center">
          <div className="col-md-3 mb-3">
            <div className="p-3 border rounded bg-light">
              <div className="fw-bold fs-3">5</div>
              <div>Total Trips</div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="p-3 border rounded bg-light">
              <div className="fw-bold fs-3">8</div>
              <div>Countries Visited</div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="p-3 border rounded bg-light">
              <div className="fw-bold fs-3">24,000</div>
              <div>Miles Traveled</div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="p-3 border rounded bg-light">
              <div className="fw-bold fs-3">3</div>
              <div>Badges Earned</div>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Widget */}
      <div className="container my-5">
        <h3 className="fw-bold mb-4">Weather</h3>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card shadow-sm p-4 text-center bg-light">
              <div className="d-flex align-items-center justify-content-center mb-3">
                <img src="https://cdn-icons-png.flaticon.com/512/869/869869.png" alt="Weather Icon" width="60" height="60" className="me-3" />
                <div>
                  <div className="fw-bold fs-4">Paris</div>
                  <div className="text-muted">24°C, Sunny</div>
                </div>
              </div>
              <div className="mb-2">
                <span className="badge bg-primary me-2">Humidity: 45%</span>
                <span className="badge bg-info text-dark">Wind: 10 km/h</span>
              </div>
              <div className="text-muted small">Updated 5 mins ago</div>
            </div>
          </div>
        </div>
      </div>

      {/* Support / Help Center */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="card h-100 border-0 shadow-sm text-center bg-light p-4">
              <div className="mb-3">
                <i className="bi bi-life-preserver fs-1 text-primary"></i>
              </div>
              <h3 className="fw-bold mb-2">Need Help?</h3>
              <p className="text-muted mb-3">
                Our support team is available <span className="fw-semibold text-success">24/7</span> to assist you with any questions or issues.
              </p>
              <div className="d-flex flex-wrap gap-2 justify-content-center mb-3">
                <a href="/support" className="btn btn-primary flex-fill px-4">
                  <i className="bi bi-chat-dots me-2"></i>Support Center
                </a>
                <a href="/faq" className="btn btn-outline-secondary flex-fill px-4">
                  <i className="bi bi-question-circle me-2"></i>FAQ
                </a>
                <a href="mailto:support@travelplanner.com" className="btn btn-outline-info flex-fill px-4">
                  <i className="bi bi-envelope-at me-2"></i>Email Us
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Dashboard;
