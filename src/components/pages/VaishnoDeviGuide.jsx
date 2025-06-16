import React from "react";

const sectionStyle = {
    background: "linear-gradient(135deg, #f3e8ff 0%, #e0e7ef 100%)",
    borderRadius: "1.5rem",
    padding: "2.5rem 2rem",
    marginBottom: "2.5rem",
    boxShadow: "0 4px 24px rgba(80,80,120,0.08)",
};

const VaishnoDeviGuide = () => {
    return (
        <div className="container my-5 px-2 px-md-4">
            <div
                className="text-center mb-5 py-5"
                style={{
                    background: "linear-gradient(120deg, #f3e8ff 0%, #e0e7ef 100%)",
                    borderRadius: "2rem",
                    color: "#7c3aed",
                    boxShadow: "0 6px 32px rgba(80,80,120,0.10)",
                }}
            >
                <h1 className="display-3 fw-bold mb-3" style={{ letterSpacing: "2px" }}>
                    Vaishno Devi Shrine Guide
                </h1>
                <span className="badge bg-primary text-light fs-5 mb-3 px-4 py-2 shadow">Jammu & Kashmir, India</span>
                <p className="lead text-dark mb-4" style={{ fontSize: "1.3rem" }}>
                    The Vaishno Devi Shrine is one of the most revered Hindu pilgrimage sites, nestled in the Trikuta Mountains.<br />
                    <span className="fw-semibold">A sacred journey of faith, devotion, and natural beauty.</span>
                </p>
                <img
                    src="https://www.newsonair.gov.in/wp-content/uploads/2025/05/cats-403.jpg"
                    alt="Vaishno Devi Shrine"
                    className="img-fluid rounded shadow-lg my-4"
                    style={{ maxHeight: 400, objectFit: "cover", border: "6px solid #fff" }}
                />
            </div>

            {/* Getting There */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#2563eb" }}>Getting There</h2>
                <p style={{ fontSize: "1.15rem" }}>
                    The trek to the shrine is approximately 13 kilometers from the base camp at Katra. Pilgrims can either walk or hire ponies and palanquins for the journey. Helicopter services are also available for a quicker ascent.
                </p>
            </section>

            {/* Best Time to Visit */}
            <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #e0e7ef 0%, #f3e8ff 100%)" }}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#059669" }}>Best Time to Visit</h2>
                <p style={{ fontSize: "1.15rem" }}>
                    The best time to visit Vaishno Devi is from April to November, when the weather is pleasant and suitable for trekking. Winters can be cold and snowy, making the trek more challenging.
                </p>
            </section>

            {/* Visitor Tips */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#d97706" }}>Visitor Tips</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li>Start your trek early in the morning to avoid crowds.</li>
                    <li>Wear comfortable shoes and carry water and snacks.</li>
                    <li>Be prepared for weather changes; carry a raincoat if visiting during monsoon.</li>
                    <li>Keep your ID and yatra slip handy for security checks.</li>
                    <li>Photography is restricted inside the shrine—respect local customs.</li>
                </ul>
            </section>

            {/* Accommodation */}
            <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #f3e8ff 0%, #e0e7ef 100%)" }}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#a21caf" }}>Accommodation</h2>
                <p style={{ fontSize: "1.15rem" }}>
                    There are various accommodation options available in Katra, ranging from budget hotels to luxury resorts. Shrine Board guest houses and dormitories are also available for pilgrims.
                </p>
            </section>

            {/* Useful Links */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#2563eb" }}>Useful Links</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li>
                        <a href="https://www.maavaishnodevi.org/" target="_blank" rel="noopener noreferrer">
                            Official Vaishno Devi Shrine Board
                        </a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Vaishno_Devi" target="_blank" rel="noopener noreferrer">
                            Wikipedia: Vaishno Devi
                        </a>
                    </li>
                    <li>
                        <a href="https://www.jammutourism.gov.in/" target="_blank" rel="noopener noreferrer">
                            Jammu Tourism
                        </a>
                    </li>
                </ul>
            </section>

            <footer className="text-center text-muted mt-5">
                <hr />
                <small>
                    &copy; {new Date().getFullYear()} Vaishno Devi Shrine Guide. All rights reserved.
                </small>
            </footer>
        </div>
    );
};

export default VaishnoDeviGuide;