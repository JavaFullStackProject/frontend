import React from "react";

const sectionStyle = {
    background: "linear-gradient(135deg, #f3e8ff 0%, #e0e7ef 100%)",
    borderRadius: "1.5rem",
    padding: "2.5rem 2rem",
    marginBottom: "2.5rem",
    boxShadow: "0 4px 24px rgba(80,80,120,0.08)",
};

const LisbonMarketGuide = () => {
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
                    Lisbon Vintage Market Guide
                </h1>
                <span className="badge bg-primary text-light fs-5 mb-3 px-4 py-2 shadow">Lisbon, Portugal</span>
                <p className="lead text-dark mb-4" style={{ fontSize: "1.3rem" }}>
                    Discover the vibrant and eclectic vintage markets of Lisbon, where you can find unique treasures, antiques, and local crafts.<br />
                    <span className="fw-semibold">A paradise for collectors, bargain hunters, and lovers of history</span>
                </p>
                <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"
                    alt="Lisbon Market"
                    className="img-fluid rounded shadow-lg my-4"
                    style={{ maxHeight: 400, objectFit: "cover", border: "6px solid #fff" }}
                />
            </div>

            {/* Best Markets to Visit */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#7c3aed" }}>Best Markets to Visit</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Feira_da_Ladra_Lisboa.jpg" alt="Feira da Ladra" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="fw-semibold">Feira da Ladra</h5>
                                <p className="card-text">
                                    The most famous flea market in Lisbon, held every Tuesday and Saturday. Find antiques, vintage clothing, and handmade crafts in a lively open-air setting.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Mercado_de_Campo_de_Ourique_Lisboa.jpg" alt="Mercado de Campo de Ourique" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="fw-semibold">Mercado de Campo de Ourique</h5>
                                <p className="card-text">
                                    A lively market with a mix of food stalls and vintage shops. Perfect for a weekend stroll, delicious bites, and unique finds.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Mercado_da_Ribeira_Lisboa.jpg" alt="Mercado da Ribeira" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="fw-semibold">Mercado da Ribeira</h5>
                                <p className="card-text">
                                    Known for its food market, it also features vendors selling vintage items and local crafts. A must-visit for foodies and collectors alike.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tips for Visiting */}
            <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #e0e7ef 0%, #f3e8ff 100%)" }}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#059669" }}>Tips for Visiting</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li>Arrive early to get the best finds and avoid crowds.</li>
                    <li>Bargaining is common, so don't hesitate to negotiate prices.</li>
                    <li>Bring cash, as not all vendors accept cards.</li>
                    <li>Wear comfortable shoes—markets can be sprawling and busy.</li>
                    <li>Keep an eye on your belongings in crowded areas.</li>
                </ul>
            </section>

            {/* Best Time to Visit */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#d97706" }}>Best Time to Visit</h2>
                <p style={{ fontSize: "1.15rem" }}>
                    The best time to explore Lisbon's vintage markets is during the spring and fall when the weather is pleasant and the markets are less crowded. Many markets are held outdoors, so check the forecast before you go.
                </p>
            </section>

            {/* Gallery */}
            <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #f3e8ff 0%, #e0e7ef 100%)" }}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#a21caf" }}>Gallery</h2>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Feira_da_Ladra_Lisboa.jpg" alt="Feira da Ladra" className="img-fluid rounded shadow" />
                        <p className="text-center mt-2">Feira da Ladra</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Mercado_de_Campo_de_Ourique_Lisboa.jpg" alt="Mercado de Campo de Ourique" className="img-fluid rounded shadow" />
                        <p className="text-center mt-2">Mercado de Campo de Ourique</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Mercado_da_Ribeira_Lisboa.jpg" alt="Mercado da Ribeira" className="img-fluid rounded shadow" />
                        <p className="text-center mt-2">Mercado da Ribeira</p>
                    </div>
                </div>
            </section>

            {/* Conclusion */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#2563eb" }}>Conclusion</h2>
                <p style={{ fontSize: "1.15rem" }}>
                    Lisbon's vintage markets offer a unique shopping experience filled with history and culture. Whether you're a collector or just looking for a unique souvenir, these markets are a must-visit for anyone exploring the city.
                </p>
            </section>

            <footer className="text-center text-muted mt-5">
                <hr />
                <small>
                    &copy; {new Date().getFullYear()} Lisbon Vintage Market Guide. All rights reserved.
                </small>
            </footer>
        </div>
    );
};

export default LisbonMarketGuide;