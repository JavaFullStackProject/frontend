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

      {/* Testimonial Section */}
      <div className="bg-white py-5 border-top border-bottom">
        <div className="container">
          <h3 className="text-center mb-5 fw-bold">What Our Users Say</h3>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="h-100 p-4 border rounded shadow-sm">
                <p className="mb-3 fst-italic">
                  “Travel Planner made my trip so much easier! The itinerary feature is a game changer.”
                </p>
                <div className="d-flex align-items-center">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah" width="48" height="48" className="rounded-circle me-3" />
                  <div>
                    <strong>Sarah L.</strong>
                    <div className="text-muted small">London, UK</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="h-100 p-4 border rounded shadow-sm">
                <p className="mb-3 fst-italic">
                  “I love how organized everything is. I never lose track of my bookings anymore!”
                </p>
                <div className="d-flex align-items-center">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="David" width="48" height="48" className="rounded-circle me-3" />
                  <div>
                    <strong>David K.</strong>
                    <div className="text-muted small">Toronto, Canada</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="h-100 p-4 border rounded shadow-sm">
                <p className="mb-3 fst-italic">
                  “The best travel planner I've used. Super easy and intuitive!”
                </p>
                <div className="d-flex align-items-center">
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Priya" width="48" height="48" className="rounded-circle me-3" />
                  <div>
                    <strong>Priya S.</strong>
                    <div className="text-muted small">Mumbai, India</div>
                  </div>
                </div>
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

      {/* Popular Destinations */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-5">Popular Destinations</h2>
        <div className="row g-4">
          <div className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <img
                src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSW-cVQPTWj9kh01Q2Sde4OLOW5De_ACTN6OaHvXkTVeISVJy0XMT2PgK4JisUC_5ltodCg83TBkn3EhfWVaMt3H0Aw3TQBhyFXg9dbcA"
                className="card-img-top"
                alt="Seoul"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h6 className="card-title mb-1">Seoul</h6>
                <div className="text-muted small">South Korea</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <img
                src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQWkMiUQjh0UuCnrGrTaVq2ar0Uvm3s1x5HH50QKH-ugDWfO9fweSM_RQOFEio12g_pD5Ouj9I9fGfnMFLNOAuf5k7h90na0rCCxy4ADA"
                className="card-img-top"
                alt="Paris"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h6 className="card-title mb-1">Paris</h6>
                <div className="text-muted small">France</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <img
                src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRVRNa4ib1pGTX0ogXaQhdydrMnY9Q8Lb3S-8LZbzw_5NxxnNslSRKH6HaQVjQJtuiqAyn24rSwqgcZjl-4TfsdDN5Yf5gQtcBEqzdQ6MU"
                className="card-img-top"
                alt="New York"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h6 className="card-title mb-1">New York</h6>
                <div className="text-muted small">USA</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <img
                src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQh1ZkX76E1ZmoPMXoM2M_c_sbvFpu1NOxg9pWP_CNjcrE50TK73f8PI-B29xAlQx4mE9zNe-oGwzT5lHfZiYXsP1KrfCQYQd84Vk4ifA"
                className="card-img-top"
                alt="Tokyo"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h6 className="card-title mb-1">Tokyo</h6>
                <div className="text-muted small">Japan</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners / Trusted By */}
      <div className="container my-5">
        <h4 className="text-center fw-bold mb-4">Trusted By</h4>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
          <img src="https://logos-world.net/wp-content/uploads/2020/10/Airbnb-Logo.png" alt="Airbnb" style={{ height: 50 }} /> <br /> <br />
          <img src="https://www.cdnlogo.com/logos/b/94/booking-com.svg" alt="Booking.com" style={{ height: 32 }} /> <br />
          <img src="https://cdn.worldvectorlogo.com/logos/expedia.svg" alt="Expedia" style={{ height: 32 }} /> <br /> <br />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/TripAdvisor_Logo.svg/1200px-TripAdvisor_Logo.svg.png" alt="Tripadvisor" style={{ height: 32 }} /> <br /> <br />
        </div>
      </div>



      {/* Newsletter Signup */}
      <div className="bg-primary bg-opacity-10 py-5">
        <div className="container">
          <h4 className="text-center fw-bold mb-4">Get Travel Tips &amp; Updates</h4>
          <form className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <input type="email" className="form-control form-control-lg mb-2" placeholder="Enter your email" />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary btn-lg mb-2">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Why Choose Us / Benefits */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-5">Why Choose Travel Planner?</h2>
        <div className="row text-center justify-content-center g-4">
          <div className="col-md-3 mb-4">
            <div className="h-100 p-4 border-0 rounded shadow-lg bg-white position-relative benefit-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Personalized"
                width={56}
                height={56}
                className="mb-3"
                style={{ background: "#e0f2fe", borderRadius: "50%", padding: "10px" }}
              />
              <h5 className="mt-2 mb-2 fw-semibold">Personalized Recommendations</h5>
              <p className="text-muted small">
                Get suggestions tailored to your interests, style, and budget for every trip.
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="h-100 p-4 border-0 rounded shadow-lg bg-white position-relative benefit-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
                alt="Secure"
                width={56}
                height={56}
                className="mb-3"
                style={{ background: "#dcfce7", borderRadius: "50%", padding: "10px" }}
              />
              <h5 className="mt-2 mb-2 fw-semibold">Secure &amp; Reliable</h5>
              <p className="text-muted small">
                Your data and bookings are protected with industry-leading security.
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="h-100 p-4 border-0 rounded shadow-lg bg-white position-relative benefit-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
                alt="Support"
                width={56}
                height={56}
                className="mb-3"
                style={{ background: "#fef9c3", borderRadius: "50%", padding: "10px" }}
              />
              <h5 className="mt-2 mb-2 fw-semibold">24/7 Support</h5>
              <p className="text-muted small">
                Our expert team is here to help you anytime, anywhere in the world.
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="h-100 p-4 border-0 rounded shadow-lg bg-white position-relative benefit-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/854/854894.png"
                alt="Community"
                width={56}
                height={56}
                className="mb-3"
                style={{ background: "#e0f2fe", borderRadius: "50%", padding: "10px" }}
              />
              <h5 className="mt-2 mb-2 fw-semibold">Global Community</h5>
              <p className="text-muted small">
                Join thousands of travelers sharing tips, reviews, and inspiration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
