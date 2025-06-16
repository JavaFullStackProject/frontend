import React from "react";

const sectionStyle = {
    background: "linear-gradient(135deg, #fef6e4 0%, #f3e8ff 100%)",
    borderRadius: "1.5rem",
    padding: "2.5rem 2rem",
    marginBottom: "2.5rem",
    boxShadow: "0 4px 24px rgba(180,83,9,0.08)",
};

const MeenakshiTempleGuide = () => {
    return (
        <div className="container my-5 px-2 px-md-4">
            <div
                className="text-center mb-5 py-5"
                style={{
                    background: "linear-gradient(120deg, #fef6e4 0%, #f3e8ff 100%)",
                    borderRadius: "2rem",
                    color: "#b45309",
                    boxShadow: "0 6px 32px rgba(180,83,9,0.10)",
                }}
            >
                <h1 className="display-3 fw-bold mb-3" style={{ letterSpacing: "2px" }}>
                    Meenakshi Temple Travel Guide
                </h1>
                <span className="badge bg-warning text-dark fs-5 mb-3 px-4 py-2 shadow">Madurai, Tamil Nadu</span>
                <p className="lead text-dark mb-4" style={{ fontSize: "1.3rem" }}>
                    The Meenakshi Temple, also known as Meenakshi Amman Temple, is one of the most iconic and sacred Hindu temples in India.<br />
                    <span className="fw-semibold">A spiritual and architectural marvel, attracting millions of devotees and tourists every year.</span>
                </p>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlwjPEnZZEP5DaglAd1g7Xkx8_OfDNxTI0w&s"
                    alt="Meenakshi Temple"
                    className="img-fluid rounded shadow-lg my-4"
                    style={{ maxHeight: 400, objectFit: "cover", border: "6px solid #fff" }}
                />
            </div>

            {/* About Meenakshi Temple */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#b45309" }}>About Meenakshi Temple</h2>
                <p style={{ fontSize: "1.15rem" }}>
                    Meenakshi Temple is dedicated to Goddess Meenakshi (a form of Parvati) and Lord Sundareswarar (Shiva). The temple complex is renowned for its towering gopurams (gateway towers), intricate carvings, and vibrant sculptures. It is a center of Tamil culture, art, and spirituality.
                </p>
            </section>

            {/* Best Time to Visit */}
            <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #f3e8ff 0%, #fef6e4 100%)" }}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#b45309" }}>Best Time to Visit</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li><strong>October to March:</strong> Pleasant weather, ideal for temple visits and sightseeing.</li>
                    <li><strong>Festivals:</strong> The Chithirai Festival (April/May) is the grandest celebration at the temple.</li>
                </ul>
            </section>

            {/* Key Features */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#b45309" }}>Key Features</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li>14 majestic gopurams adorned with thousands of colorful sculptures</li>
                    <li>Hall of Thousand Pillars (Aayiram Kaal Mandapam)</li>
                    <li>Golden Lotus Tank (Potramarai Kulam)</li>
                    <li>Daily rituals, music, and vibrant temple life</li>
                </ul>
            </section>

            {/* Tips for Visitors */}
            <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #f3e8ff 0%, #fef6e4 100%)" }}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#d97706" }}>Tips for Visitors</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li>Dress modestly and remove footwear before entering the temple premises.</li>
                    <li>Photography is restricted in certain areas—please follow temple guidelines.</li>
                    <li>Be prepared for large crowds, especially during festivals and weekends.</li>
                    <li>Explore the local markets and try traditional South Indian cuisine nearby.</li>
                </ul>
            </section>

            {/* Useful Links */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#2563eb" }}>Useful Links</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li>
                        <a href="https://www.maduraimeenakshi.org/" target="_blank" rel="noopener noreferrer">
                            Official Meenakshi Temple Website
                        </a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Meenakshi_Temple" target="_blank" rel="noopener noreferrer">
                            Wikipedia: Meenakshi Temple
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tamilnadutourism.tn.gov.in/destinations/madurai" target="_blank" rel="noopener noreferrer">
                            Tamil Nadu Tourism: Madurai
                        </a>
                    </li>
                </ul>
            </section>

            <footer className="text-center text-muted mt-5">
                <hr />
                <small>
                    &copy; {new Date().getFullYear()} Meenakshi Temple Guide. All rights reserved.
                </small>
            </footer>
        </div>
    );
};

export default MeenakshiTempleGuide;