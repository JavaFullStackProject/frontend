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
    <footer
      className="border-top py-5 mt-auto"
      style={{
        background: "linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)",
        borderRadius: "24px 24px 0 0",
        boxShadow: "0 -2px 24px 0 rgba(60,60,100,0.08)",
      }}
    >
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Logo and Brand */}
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.SwIDVKwmelzQy2sz59hPmwHaJ3&pid=Api&P=0&h=180"
                alt="TravelPlanner Logo"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  marginRight: 14,
                  objectFit: "cover",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              />
              <h4 className="mb-0 fw-bold" style={{ letterSpacing: 1 }}>
                TravelPlanner
              </h4>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-4 mt-4 flex-wrap">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
                style={{ transition: "transform 0.2s" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                  alt="Google Play"
                  style={{
                    height: "48px",
                    borderRadius: 8,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
                  }}
                />
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
                style={{ transition: "transform 0.2s" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  style={{
                    height: "48px",
                    borderRadius: 8,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
                  }}
                />
              </a>
            </div>
          </div>

          {/* Get Started */}
          <div className="col-md-4 mb-4">
            <h6
              className="fw-bold mb-3 text-primary"
              style={{ letterSpacing: 1 }}
            >
              Get started
            </h6>
            <ul className="list-unstyled">
              {footerLinks.map((link) => (
                <li className="mb-2" key={link.to}>
                  <Link
                    to={link.to}
                    className="text-secondary"
                    style={{
                      transition: "color 0.2s, text-decoration 0.2s",
                      textDecoration: hovered[link.to] ? "underline" : "none",
                      color: hovered[link.to] ? "#6366f1" : "#6c757d",
                      fontWeight: hovered[link.to] ? 600 : 400,
                      cursor: "pointer",
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
            <h6
              className="fw-bold mb-3 text-primary"
              style={{ letterSpacing: 1 }}
            >
              Resources
            </h6>
            <ul className="list-unstyled">
              {resourceLinks.map((link, idx) => (
                <li className="mb-2" key={idx}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-secondary"
                      style={{
                        textDecoration: hovered[link.label]
                          ? "underline"
                          : "none",
                        color: hovered[link.label] ? "#6366f1" : "#6c757d",
                        fontWeight: hovered[link.label] ? 600 : 400,
                        transition: "color 0.2s, text-decoration 0.2s",
                        cursor: "pointer",
                      }}
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={() => handleMouseLeave(link.label)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      className="text-secondary"
                      style={{
                        textDecoration: hovered[link.to] ? "underline" : "none",
                        color: hovered[link.to] ? "#6366f1" : "#6c757d",
                        fontWeight: hovered[link.to] ? 600 : 400,
                        transition: "color 0.2s, text-decoration 0.2s",
                        cursor: "pointer",
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

        <div
          className="d-flex justify-content-between align-items-center flex-wrap mt-4 py-3 px-2"
          style={{ background: "rgba(255,255,255,0.7)", borderRadius: 16 }}
        >
          {/* Social */}
          <div>
            <h6 className="mb-2" style={{ fontWeight: 600 }}>
              Follow us
            </h6>
            <a
              href="#"
              className="me-2"
              style={{ color: "#4267B2", transition: "transform 0.2s" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <i className="bi bi-facebook fs-4"></i>
            </a>
            <a
              href="#"
              className="me-2"
              style={{ color: "#1DA1F2", transition: "transform 0.2s" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <i className="bi bi-twitter fs-4"></i>
            </a>
            <a
              href="#"
              style={{ color: "#C13584", transition: "transform 0.2s" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <i className="bi bi-instagram fs-4"></i>
            </a>
          </div>

          {/* Payment */}
          <div className="text-center">
            <h6 className="mb-2" style={{ fontWeight: 600 }}>
              We Accept
            </h6>
            <img
              src="https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png"
              alt="Visa"
              style={{
                maxHeight: "36px",
                margin: "0 8px",
                filter: "grayscale(30%)",
              }}
            />
            <img
              src="https://www.mastercard.co.in/content/dam/public/mastercardcom/in/en/logos/mc-logo-52.svg"
              alt="Mastercard"
              style={{
                maxHeight: "36px",
                margin: "0 8px",
                filter: "grayscale(30%)",
              }}
            />
            <img
              src="https://www.aexp-static.com/cdaas/one/statics/axp-static-assets/1.8.0/package/dist/img/logos/dls-logo-stack.svg"
              alt="Amex"
              style={{
                maxHeight: "36px",
                margin: "0 8px",
                filter: "grayscale(30%)",
              }}
            />
          </div>

          {/* Membership */}
          <div className="text-end">
            <h6 className="mb-2" style={{ fontWeight: 600 }}>
              Member of
            </h6>
            <img
              src="https://www.iata.org/contentassets/3e83770142a040d688e269bb2f709b7b/iata-logo-header.svg?height=127&rmode=crop&v=20240116100112"
              alt="IATA"
              style={{
                maxHeight: "36px",
                margin: "0 8px",
                filter: "grayscale(30%)",
              }}
            />
            <img
              src="https://images.squarespace-cdn.com/content/v1/5f24290fd0d0910ecab2b02e/1596245893901-GZ6ICWAPMR8QOY8MXDM3/0PATA-Logo-transparency_BLACK.png?format=1500w"
              alt="PATA"
              style={{
                maxHeight: "36px",
                margin: "0 8px",
                filter: "grayscale(30%)",
              }}
            />
          </div>
        </div>

        {/* Bottom Text */}
        <div
          className="text-center text-muted mt-4"
          style={{ fontSize: "1rem", letterSpacing: 0.5 }}
        >
          © 2025{" "}
          <span style={{ color: "#6366f1", fontWeight: 600 }}>
            TravelPlanner
          </span>
          . A product of{" "}
          <span style={{ color: "#6366f1", fontWeight: 600 }}>
            ExcelRTech LTD
          </span>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
