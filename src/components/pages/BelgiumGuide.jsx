import React from "react";

const sectionStyle = {
    background: "linear-gradient(135deg, #e0e7ef 0%, #f3e8ff 100%)",
    borderRadius: "1.5rem",
    padding: "2.5rem 2rem",
    marginBottom: "2.5rem",
    boxShadow: "0 4px 24px rgba(80,80,120,0.08)",
};

const BelgiumGuide = () => {
    return (
        <div className="container my-5 px-2 px-md-4">
            <div
                className="text-center mb-5 py-5"
                style={{
                    background: "linear-gradient(120deg, #e0e7ef 0%, #f3e8ff 100%)",
                    borderRadius: "2rem",
                    color: "#2d2d2d",
                    boxShadow: "0 6px 32px rgba(80,80,120,0.10)",
                }}
            >
                <h1 className="display-3 fw-bold mb-3" style={{ letterSpacing: "2px" }}>
                    Belgium Travel Guide
                </h1>
                <span className="badge bg-primary text-light fs-5 mb-3 px-4 py-2 shadow">Heart of Europe</span>
                <p className="lead text-dark mb-4" style={{ fontSize: "1.4rem" }}>
                    Discover Belgium’s medieval towns, world-class chocolates, vibrant cities, and rich cultural tapestry.<br />
                    <span className="fw-semibold">A crossroads of history, art, and gastronomy</span>
                </p>
                <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"
                    alt="Belgium Cityscape"
                    className="img-fluid rounded shadow-lg my-4"
                    style={{ maxHeight: 400, objectFit: "cover", border: "6px solid #fff" }}
                />
            </div>

            {/* Top Attractions */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#2563eb" }}>Top Attractions</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Brussels_Grand_Place.jpg/800px-Brussels_Grand_Place.jpg" alt="Grand Place" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="fw-semibold">Grand Place, Brussels</h5>
                                <p className="card-text">A UNESCO World Heritage Site, this ornate central square dazzles with its guildhalls and Town Hall.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Atomium_Brussels.jpg/800px-Atomium_Brussels.jpg" alt="Atomium" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="fw-semibold">Atomium, Brussels</h5>
                                <p className="card-text">An iconic futuristic structure and museum, offering panoramic city views and unique exhibitions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Bruges_Canal.jpg/800px-Bruges_Canal.jpg" alt="Bruges Canals" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="fw-semibold">Canals of Bruges</h5>
                                <p className="card-text">Wander the fairy-tale medieval streets and cruise the romantic canals of Belgium’s Venice of the North.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mt-2">
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Antwerp_Zoo_entrance.jpg" alt="Antwerp Zoo" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="fw-semibold">Antwerp Zoo</h5>
                                <p className="card-text">One of the world’s oldest zoos, home to over 7,000 animals and beautiful 19th-century architecture.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Tyne_Cot_Cemetery_-_Flanders_Fields.jpg" alt="Flanders Fields" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="fw-semibold">Battlefields of Flanders</h5>
                                <p className="card-text">Visit poignant WWI memorials, cemeteries, and museums in Ypres and the surrounding countryside.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cultural Insights */}
            <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #f3e8ff 0%, #e0e7ef 100%)" }}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#a21caf" }}>Cultural Insights</h2>
                <p style={{ fontSize: "1.15rem" }}>
                    Belgium’s rich cultural heritage is shaped by its unique blend of Dutch-speaking Flanders, French-speaking Wallonia, and the cosmopolitan Brussels-Capital region.
                    The country is famous for its comic art (Tintin, The Smurfs), Art Nouveau architecture, and vibrant festivals like Tomorrowland and the Ghent Festival.
                </p>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li><strong>Languages:</strong> Dutch, French, and German (all official)</li>
                    <li><strong>Famous Art:</strong> Flemish Masters (Rubens, Van Eyck, Bruegel)</li>
                    <li><strong>Traditions:</strong> Carnival of Binche, Ommegang Pageant, Flower Carpet in Brussels</li>
                    <li><strong>Comics:</strong> Belgian Comic Strip Center, murals across Brussels</li>
                </ul>
            </section>

            {/* Gastronomy */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#d97706" }}>Belgian Gastronomy</h2>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Moules_frites.jpg" alt="Moules-frites" className="img-fluid rounded shadow mb-2" />
                        <h5 className="fw-semibold">Moules-frites</h5>
                        <p>Steamed mussels served with crispy fries, a Belgian classic.</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Belgian_Waffles_%282%29.jpg" alt="Belgian Waffles" className="img-fluid rounded shadow mb-2" />
                        <h5 className="fw-semibold">Belgian Waffles</h5>
                        <p>Light, fluffy, and topped with chocolate, cream, or fruit—perfect street food.</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Speculoos_cookies.jpg" alt="Speculoos Cookies" className="img-fluid rounded shadow mb-2" />
                        <h5 className="fw-semibold">Speculoos Cookies</h5>
                        <p>Spiced shortcrust biscuits, especially popular during the winter holidays.</p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6 mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Belgian_beer.jpg" alt="Belgian Beer" className="img-fluid rounded shadow mb-2" />
                        <h5 className="fw-semibold">Belgian Beer</h5>
                        <p>Sample Trappist ales, lambics, and hundreds of unique brews in historic cafés.</p>
                    </div>
                    <div className="col-md-6 mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Belgian_chocolate.jpg" alt="Belgian Chocolate" className="img-fluid rounded shadow mb-2" />
                        <h5 className="fw-semibold">Belgian Chocolate</h5>
                        <p>World-renowned pralines and chocolate shops in every city—don’t miss a tasting tour!</p>
                    </div>
                </div>
            </section>

            {/* Travel Tips */}
            <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #e0e7ef 0%, #f3e8ff 100%)" }}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#059669" }}>Travel Tips</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li><strong>Best Time to Visit:</strong> Spring (April–June) and Fall (September–October) for mild weather and fewer crowds.</li>
                    <li><strong>Transport:</strong> Public transport is efficient; consider a rail pass for easy city-hopping.</li>
                    <li><strong>Local Delicacies:</strong> Try moules-frites, waffles, speculoos, and sample local beers and chocolates.</li>
                    <li><strong>Currency:</strong> Euro (€)</li>
                    <li><strong>Safety:</strong> Belgium is generally safe, but watch for pickpockets in tourist areas.</li>
                    <li><strong>Etiquette:</strong> Greetings are polite; a handshake is common. Most Belgians speak English in cities.</li>
                </ul>
            </section>

            {/* Images Gallery */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#7c3aed" }}>Gallery</h2>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Brussels_Grand_Place.jpg/800px-Brussels_Grand_Place.jpg" alt="Grand Place" className="img-fluid rounded shadow" />
                        <p className="text-center mt-2">Grand Place, Brussels</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Atomium_Brussels.jpg/800px-Atomium_Brussels.jpg" alt="Atomium" className="img-fluid rounded shadow" />
                        <p className="text-center mt-2">Atomium, Brussels</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Bruges_Canal.jpg/800px-Bruges_Canal.jpg" alt="Bruges Canals" className="img-fluid rounded shadow" />
                        <p className="text-center mt-2">Canals of Bruges</p>
                    </div>
                </div>
            </section>

            {/* Useful Links */}
            <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #f3e8ff 0%, #e0e7ef 100%)" }}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#2563eb" }}>Useful Links</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li>
                        <a href="https://www.visitflanders.com/en" target="_blank" rel="noopener noreferrer">
                            Visit Flanders (Official Tourism)
                        </a>
                    </li>
                    <li>
                        <a href="https://visit.brussels/en" target="_blank" rel="noopener noreferrer">
                            Visit Brussels
                        </a>
                    </li>
                    <li>
                        <a href="https://www.visitwallonia.be/en" target="_blank" rel="noopener noreferrer">
                            Visit Wallonia
                        </a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Tourism_in_Belgium" target="_blank" rel="noopener noreferrer">
                            Wikipedia: Tourism in Belgium
                        </a>
                    </li>
                </ul>
            </section>

            <footer className="text-center text-muted mt-5">
                <hr />
                <small>
                    &copy; {new Date().getFullYear()} Belgium Travel Guide. All rights reserved.
                </small>
            </footer>
        </div>
    );
};

export default BelgiumGuide;