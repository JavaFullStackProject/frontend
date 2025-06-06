import React, { useState } from "react";
import { Link } from "react-router-dom";

const footerLinks = [
  { to: "/goa-guide", label: "Planning a trip to Goa" },
  { to: "/PangongTso-guide", label: "Planning a trip to Pangong Tso" },
  { to: "/MunnarWayanad-guide", label: "Planning a trip to Munnar & Wayanad" },
  { to: "/maldives-guide", label: "Planning a trip to Maldives" },
];

const resourceLinks = [
  { to: "/contact", label: "Contact" },
  { to: "/blog", label: "Blog" },
  { href: "https://twitter.com", label: "Twitter", external: true },
  { to: "/privacy", label: "Privacy Policy" },
];

const Footer = () => {
  // Track hover state for each link
  const [hovered, setHovered] = useState({});

  const handleMouseEnter = (key) => setHovered((prev) => ({ ...prev, [key]: true }));
  const handleMouseLeave = (key) => setHovered((prev) => ({ ...prev, [key]: false }));

  return (
    <footer className="bg-light border-top py-5 mt-auto">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Logo and Brand */}
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.SwIDVKwmelzQy2sz59hPmwHaJ3&pid=Api&P=0&h=180"
                alt="TravelPlanner Logo"
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  marginRight: 10,
                  objectFit: "cover",
                }}
              />
              <h5 className="mb-0 fw-bold">TravelPlanner</h5>
            </div>
          </div>

          {/* Get Started */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Get started</h6>
            <ul className="list-unstyled">
              {footerLinks.map((link, idx) => (
                <li className="mb-2" key={link.to}>
                  <Link
                    to={link.to}
                    className="text-secondary"
                    style={{
                      transition: "text-decoration 0.2s",
                      textDecoration: hovered[link.to] ? "underline" : "none",
                    }}
                    onMouseEnter={() => handleMouseEnter(link.to)}
                    onMouseLeave={() => handleMouseLeave(link.to)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Resources</h6>
            <ul className="list-unstyled">
              {resourceLinks.map((link, idx) => (
                <li className="mb-2" key={link.to || link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary"
                      style={{
                        transition: "text-decoration 0.2s",
                        textDecoration: hovered[link.href] ? "underline" : "none",
                      }}
                      onMouseEnter={() => handleMouseEnter(link.href)}
                      onMouseLeave={() => handleMouseLeave(link.href)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      className="text-secondary"
                      style={{
                        transition: "text-decoration 0.2s",
                        textDecoration: hovered[link.to] ? "underline" : "none",
                      }}
                      onMouseEnter={() => handleMouseEnter(link.to)}
                      onMouseLeave={() => handleMouseLeave(link.to)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
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