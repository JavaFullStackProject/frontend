import React from "react";

const teamMembers = [
  {
    name: "Rohit",
    url: "https://github.com/Rohit79955",
    avatar:
      "https://repository-images.githubusercontent.com/289382429/e9c6ec80-8902-11eb-9f55-5de819da8bf5",
  },
  {
    name: "Mahendhar",
    url: "https://github.com/kmahendhar",
    avatar: "https://avatars.githubusercontent.com/u/193203271?v=4",
  },
  {
    name: "Safwan",
    url: "https://github.com/safwannxyz",
    avatar: "https://avatars.githubusercontent.com/u/133428307?v=4",
  },
  {
    name: "Sainath Reddy",
    url: "https://github.com/Sainath-reddy-p",
    avatar: "https://avatars.githubusercontent.com/u/106702750?v=4",
  },
  {
    name: "Mubeen Shaik",
    url: "https://github.com/MUBEENSHAIK1",
    avatar:
      "https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Akhila Bandari",
    url: "https://github.com/akhilabandari-14",
    avatar: "https://avatars.githubusercontent.com/u/12890123?v=4",
  },
];

const cardStyle = {
  borderRadius: "1.5rem",
  background: "rgba(255,255,255,0.85)",
  boxShadow:
    "0 8px 32px 0 rgba(99,102,241,0.12), 0 1.5px 6px 0 rgba(60,60,100,0.06)",
  border: "1px solid rgba(99,102,241,0.08)",
  transition: "transform 0.25s, box-shadow 0.25s",
  backdropFilter: "blur(6px)",
};

const Contact = () => (
  <div
    className="container-fluid py-5"
    style={{
      minHeight: "100vh",
      // Multi-layered gradient + SVG pattern overlay for a modern look
      background: `
        linear-gradient(120deg,rgb(252, 247, 237) 50%,rgb(209, 219, 252) 100%),
        url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1.5' fill='%236366f1' fill-opacity='0.08'/%3E%3C/svg%3E")
      `,
      backgroundBlendMode: "overlay",
    }}
  >
    <div className="container mt-5 mb-5">
      <h2
        className="mb-2 fw-bold text-primary text-center"
        style={{ letterSpacing: 1, fontSize: "2.4rem" }}
      >
        Our Team Members
      </h2>
      <p
        className="text-secondary text-center mb-5"
        style={{
          fontSize: "1.25rem",
          maxWidth: 450,
          margin: "0 auto",
          fontStyle: "italic",
          opacity: 0.9,
          fontWeight: 500,
          textShadow: "0 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        Connect with us on GitHub!
      </p>
      <div className="row g-4 justify-content-center">
        {teamMembers.map((member) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex"
            key={member.url}
          >
            <div
              className="card h-100 w-100 border-0 shadow-lg"
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px) scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 16px 40px 0 rgba(99,102,241,0.18), 0 2px 8px 0 rgba(60,60,100,0.10)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = cardStyle.boxShadow;
              }}
            >
              <div className="card-body text-center d-flex flex-column align-items-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="mb-3 rounded-circle border border-3 border-primary shadow"
                  style={{
                    width: 96,
                    height: 96,
                    objectFit: "cover",
                    background: "#fff",
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://ui-avatars.com/api/?name=" +
                      encodeURIComponent(member.name) +
                      "&background=6366f1&color=fff&size=96";
                  }}
                />
                <h5
                  className="card-title mb-1 fw-semibold text-primary"
                  style={{ fontSize: "1.15rem" }}
                >
                  {member.name}
                </h5>
                {member.role && (
                  <div className="text-secondary mb-2 small">
                    {member.role}
                  </div>
                )}
                <a
                  href={member.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm rounded-pill px-3 fw-semibold"
                  style={{
                    letterSpacing: 0.5,
                    background: "linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)",
                    color: "#fff",
                    border: "none",
                    boxShadow: "0 2px 8px 0 rgba(99,102,241,0.10)",
                    transition: "background 0.2s, box-shadow 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(90deg, #60a5fa 0%, #6366f1 100%)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 16px 0 rgba(99,102,241,0.18)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 8px 0 rgba(99,102,241,0.10)";
                  }}
                >
                  <i className="bi bi-github me-1"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Contact;