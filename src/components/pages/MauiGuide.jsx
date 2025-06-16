import React from "react";

const sectionStyle = {
    background: "linear-gradient(135deg, #f0fdfa 0%, #f3e8ff 100%)",
    borderRadius: "1.5rem",
    padding: "2.5rem 2rem",
    marginBottom: "2.5rem",
    boxShadow: "0 4px 24px rgba(16,185,129,0.08)",
};

const MauiGuide = () => {
    return (
        <div className="container my-5 px-2 px-md-4">
            <div
                className="text-center mb-5 py-5"
                style={{
                    background: "linear-gradient(120deg, #f0fdfa 0%, #f3e8ff 100%)",
                    borderRadius: "2rem",
                    color: "#047857",
                    boxShadow: "0 6px 32px rgba(16,185,129,0.10)",
                }}
            >
                <h1 className="display-3 fw-bold mb-3" style={{ letterSpacing: "2px" }}>
                    Maui Travel Guide
                </h1>
                <span className="badge bg-success text-light fs-5 mb-3 px-4 py-2 shadow">Hawaii, USA</span>
                <p className="lead text-dark mb-4" style={{ fontSize: "1.3rem" }}>
                    Discover the magic of Maui—lush rainforests, volcanic landscapes, and world-famous beaches.<br />
                    <span className="fw-semibold">Adventure, relaxation, and aloha spirit await!</span>
                </p>
                <img
                    src="https://itin-dev.wanderlogstatic.com/freeImageSmall/yitfaNaah1Cxyrnht6TDK7dxn2U1EtMW"
                    alt="Maui"
                    className="img-fluid rounded shadow-lg my-4"
                    style={{ maxHeight: 400, objectFit: "cover", border: "6px solid #fff" }}
                />
            </div>

            {/* Top Attractions */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#0e7490" }}>Top Attractions</h2>
                <ul style={{ fontSize: "1.15rem" }}>
                    <li>Haleakalā National Park</li>
                    <li>Road to Hana</li>
                    <li>Molokini Crater</li>
                    <li>Wailea Beach</li>
                    <li>Hanauma Bay</li>
                </ul>
            </section>

            {/* Travel Tips */}
            <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #f3e8ff 0%, #f0fdfa 100%)" }}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#059669" }}>Travel Tips</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li><strong>Best time to visit:</strong> April to June and September to November for fewer crowds and pleasant weather.</li>
                    <li>Rent a car to explore the island at your own pace.</li>
                    <li>Don't forget to try local cuisine, including poke and shave ice!</li>
                </ul>
            </section>

            {/* Useful Information */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#a21caf" }}>Useful Information</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li><strong>Currency:</strong> US Dollar (USD)</li>
                    <li><strong>Language:</strong> English</li>
                    <li><strong>Time Zone:</strong> Hawaii-Aleutian Standard Time (HAST)</li>
                </ul>
            </section>

            <footer className="text-center text-muted mt-5">
                <hr />
                <small>
                    &copy; {new Date().getFullYear()} Maui Travel Guide. All rights reserved.
                </small>
            </footer>
        </div>
    );
};

export default MauiGuide;