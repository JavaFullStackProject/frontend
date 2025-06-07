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
  const [hovered, setHovered] = useState({});

  const handleMouseEnter = (linkTo) => {
    setHovered((prev) => ({
      ...prev,
      [linkTo]: true,
    }));
  };

  const handleMouseLeave = (linkTo) => {
    setHovered((prev) => ({
      ...prev,
      [linkTo]: false,
    }));
  };

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
            <div className="d-flex justify-content-center align-items-center gap-4 mt-4 flex-wrap">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                  alt="Google Play"
                  style={{ height: "50px" }}
                />
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  style={{ height: "50px" }}
                />
              </a>
            </div>
          </div>

          {/* Get Started */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Get started</h6>
            <ul className="list-unstyled">
              {footerLinks.map((link) => (
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
                <li className="mb-2" key={idx}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-secondary"
                      style={{ textDecoration: "none" }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      className="text-secondary"
                      style={{ textDecoration: "none" }}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center flex-wrap mt-4">
          {/* Social */}
          <div>
            <h6>Follow us</h6>
            <a href="#">
              <i className="bi bi-facebook fs-4 me-3"></i>
            </a>
            <a href="#">
              <i className="bi bi-twitter fs-4 me-3"></i>
            </a>
            <a href="#">
              <i className="bi bi-instagram fs-4 me-3"></i>
            </a>
          </div>

          {/* Payment */}
          <div className="text-center">
            <h6>We Accept</h6>
            <img
              src="https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png"
              alt="Visa"
              style={{ maxHeight: "40px" }}
            />
            <img
              src="https://www.mastercard.co.in/content/dam/public/mastercardcom/in/en/logos/mc-logo-52.svg"
              alt="Mastercard"
              style={{ maxHeight: "40px" }}
            />
            <img
              src="https://www.aexp-static.com/cdaas/one/statics/axp-static-assets/1.8.0/package/dist/img/logos/dls-logo-stack.svg"
              alt="Amex"
              style={{ maxHeight: "40px" }}
            />
          </div>

          {/* Membership */}
          <div className="text-end">
            <h6>Member of</h6>
            <img
              src="https://www.iata.org/contentassets/3e83770142a040d688e269bb2f709b7b/iata-logo-header.svg?height=127&rmode=crop&v=20240116100112"
              alt="IATA"
              style={{ maxHeight: "40px" }}
            />
            <img
              src="https://images.squarespace-cdn.com/content/v1/5f24290fd0d0910ecab2b02e/1596245893901-GZ6ICWAPMR8QOY8MXDM3/0PATA-Logo-transparency_BLACK.png?format=1500w"
              alt="PATA"
              style={{ maxHeight: "40px" }}
            />
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
