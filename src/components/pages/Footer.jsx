import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light border-top py-5 mt-auto">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Logo and Brand */}
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
              <div
                style={{
                  width: 32,
                  height: 32,
                  backgroundColor: "#000",
                  borderRadius: "50%",
                  marginRight: 10,
                }}
              ></div>
              <h5 className="mb-0 fw-bold">TravelPlanner</h5>
            </div>
          </div>

          {/* Get Started */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Get started</h6>
            <ul className="list-unstyled">
              <li>Planning a trip to Portugal</li>
              <li>Planning a trip to Japan</li>
              <li>Planning a trip to Korea</li>
              <li>Planning a trip to Maldives</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Resources</h6>
            <ul className="list-unstyled">
              <li>Contact</li>
              <li>Blog</li>
              <li>Twitter</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-muted mt-4">
          © 2025 Travelplaner. A product of ExcelRTech LTD.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
