import React from "react";

const sectionStyle = {
    background: "linear-gradient(135deg, #f3e8ff 0%, #e0e7ef 100%)",
    borderRadius: "1.5rem",
    padding: "2.5rem 2rem",
    marginBottom: "2.5rem",
    boxShadow: "0 4px 24px rgba(80,80,120,0.08)",
};

const NycFoodGuide = () => {
    return (
        <div className="container my-5 px-2 px-md-4">
            <div
                className="text-center mb-5 py-5"
                style={{
                    background: "linear-gradient(120deg, #f3e8ff 0%, #e0e7ef 100%)",
                    borderRadius: "2rem",
                    color: "#1e293b",
                    boxShadow: "0 6px 32px rgba(80,80,120,0.10)",
                }}
            >
                <h1 className="display-3 fw-bold mb-3" style={{ letterSpacing: "2px" }}>
                    New York City Food Guide
                </h1>
                <span className="badge bg-danger text-light fs-5 mb-3 px-4 py-2 shadow">NYC, USA</span>
                <p className="lead text-dark mb-4" style={{ fontSize: "1.3rem" }}>
                    NYC is a culinary paradise, offering a diverse range of cuisines and dining experiences.<br />
                    <span className="fw-semibold">From street food to Michelin stars, the Big Apple has it all!</span>
                </p>
                <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
                    alt="NYC Food Scene"
                    className="img-fluid rounded shadow-lg my-4"
                    style={{ maxHeight: 400, objectFit: "cover", border: "6px solid #fff" }}
                />
            </div>

            {/* Top Restaurant Recommendations */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#d97706" }}>Top Restaurant Recommendations</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <img src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80" alt="Joe's Pizza" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="fw-semibold">Joe's Pizza</h5>
                                <p className="card-text">A classic New York slice, known for its thin crust and delicious toppings.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" alt="Le Bernardin" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="fw-semibold">Le Bernardin</h5>
                                <p className="card-text">A Michelin-starred seafood restaurant offering an exquisite dining experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <img src="https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=600&q=80" alt="Katz's Delicatessen" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="fw-semibold">Katz's Delicatessen</h5>
                                <p className="card-text">Famous for its pastrami sandwiches and a must-visit for any food lover.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mt-2">
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0">
                            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" alt="Shake Shack" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="fw-semibold">Shake Shack</h5>
                                <p className="card-text">A popular fast-casual chain known for its burgers, fries, and shakes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0">
                            <img src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80" alt="Momofuku Noodle Bar" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="fw-semibold">Momofuku Noodle Bar</h5>
                                <p className="card-text">A trendy spot for delicious ramen and innovative Asian dishes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Food Experiences */}
            <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #e0e7ef 0%, #f3e8ff 100%)" }}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#059669" }}>Food Experiences</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li>Food tours in neighborhoods like Chinatown, Little Italy, and Williamsburg.</li>
                    <li>Street food markets such as Smorgasburg and the Queens Night Market.</li>
                    <li>Cooking classes to learn how to make classic New York dishes.</li>
                    <li>Bagel and pizza tastings across the city.</li>
                    <li>Visit rooftop bars for skyline views and creative cocktails.</li>
                </ul>
            </section>

            {/* NYC Food Tips */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#a21caf" }}>NYC Food Tips</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li>Try a classic New York bagel with lox and cream cheese.</li>
                    <li>Don’t miss dollar-slice pizza shops for a quick bite.</li>
                    <li>Reservations are recommended for popular restaurants.</li>
                    <li>Explore food trucks for global flavors on the go.</li>
                    <li>Bring cash for small vendors and street food stalls.</li>
                </ul>
            </section>

            {/* Gallery */}
            <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #f3e8ff 0%, #e0e7ef 100%)" }}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#7c3aed" }}>Gallery</h2>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <img src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80" alt="NYC Pizza" className="img-fluid rounded shadow" />
                        <p className="text-center mt-2">Classic NYC Pizza</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <img src="https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=600&q=80" alt="NYC Deli" className="img-fluid rounded shadow" />
                        <p className="text-center mt-2">NYC Deli Sandwich</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <img src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80" alt="NYC Ramen" className="img-fluid rounded shadow" />
                        <p className="text-center mt-2">Ramen in NYC</p>
                    </div>
                </div>
            </section>

            {/* Useful Links */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#2563eb" }}>Useful Links</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li>
                        <a href="https://www.nycgo.com/restaurants/" target="_blank" rel="noopener noreferrer">
                            NYC Official Restaurant Guide
                        </a>
                    </li>
                    <li>
                        <a href="https://www.eater.com/maps/best-new-york-restaurants-38" target="_blank" rel="noopener noreferrer">
                            Eater: Essential NYC Restaurants
                        </a>
                    </li>
                    <li>
                        <a href="https://www.timeout.com/newyork/restaurants" target="_blank" rel="noopener noreferrer">
                            TimeOut: NYC Restaurants
                        </a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Cuisine_of_New_York_City" target="_blank" rel="noopener noreferrer">
                            Wikipedia: Cuisine of New York City
                        </a>
                    </li>
                </ul>
            </section>

           
        </div>
    );
};

export default NycFoodGuide;