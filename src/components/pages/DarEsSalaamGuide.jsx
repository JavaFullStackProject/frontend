import React from "react";

const sectionStyle = {
    background: "linear-gradient(135deg, #e0f2fe 0%, #f3e8ff 100%)",
    borderRadius: "1.5rem",
    padding: "2.5rem 2rem",
    marginBottom: "2.5rem",
    boxShadow: "0 4px 24px rgba(80,80,120,0.08)",
};

const DarEsSalaamGuide = () => {
    return (
        <div className="container my-5 px-2 px-md-4">
            <div
                className="text-center mb-5 py-5"
                style={{
                    background: "linear-gradient(120deg, #e0f2fe 0%, #f3e8ff 100%)",
                    borderRadius: "2rem",
                    color: "#0e7490",
                    boxShadow: "0 6px 32px rgba(80,80,120,0.10)",
                }}
            >
                <h1 className="display-3 fw-bold mb-3" style={{ letterSpacing: "2px" }}>
                    Dar es Salaam Travel Guide
                </h1>
                <span className="badge bg-info text-dark fs-5 mb-3 px-4 py-2 shadow">Tanzania’s Coastal Gem</span>
                <p className="lead text-dark mb-4" style={{ fontSize: "1.4rem" }}>
                    Welcome to the vibrant city of Dar es Salaam, Tanzania's largest city and a major economic hub.<br />
                    <span className="fw-semibold">A blend of Swahili culture, Indian Ocean beaches, and urban energy</span>
                </p>
                <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"
                    alt="Dar es Salaam Cityscape"
                    className="img-fluid rounded shadow-lg my-4"
                    style={{ maxHeight: 400, objectFit: "cover", border: "6px solid #fff" }}
                />
            </div>

            {/* Top Attractions */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#0ea5e9" }}>Top Attractions</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/National_Museum_Dar_es_Salaam.jpg" alt="National Museum" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="fw-semibold">National Museum</h5>
                                <p className="card-text">Explore Tanzania's history, archaeology, and culture through fascinating exhibits and artifacts.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Village_Museum_Dar_es_Salaam.jpg" alt="Village Museum" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="fw-semibold">Village Museum</h5>
                                <p className="card-text">Experience traditional Tanzanian life with authentic huts, crafts, and live cultural performances.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Slipway_Dar_es_Salaam.jpg" alt="Slipway" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="fw-semibold">Slipway</h5>
                                <p className="card-text">A lively waterfront with shops, restaurants, and stunning views of the Indian Ocean—perfect for sunset.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mt-2">
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Dar_es_Salaam_Marine_Reserve.jpg" alt="Marine Reserve" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="fw-semibold">Dar es Salaam Marine Reserve</h5>
                                <p className="card-text">Discover beautiful islands, coral reefs, and marine life—ideal for snorkeling, diving, and boat trips.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Kivukoni_Fish_Market_Dar_es_Salaam.jpg" alt="Kivukoni Fish Market" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="fw-semibold">Kivukoni Fish Market</h5>
                                <p className="card-text">Experience the bustling local market, fresh seafood auctions, and authentic Swahili flavors.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Culture & Cuisine */}
            <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #f3e8ff 0%, #e0f2fe 100%)" }}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#a21caf" }}>Culture & Cuisine</h2>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <h5 className="fw-semibold">Swahili Heritage</h5>
                        <p>
                            Dar es Salaam is a melting pot of cultures—Swahili, Arab, Indian, and European influences are reflected in its architecture, music, and daily life. Visit local art galleries, music venues, and markets for a taste of the city’s creative spirit.
                        </p>
                        <ul style={{ fontSize: "1.08rem" }}>
                            <li><strong>Languages:</strong> Swahili (Kiswahili), English</li>
                            <li><strong>Festivals:</strong> Sauti za Busara, Swahili Fashion Week, Mzalendo Halisi Music Festival</li>
                            <li><strong>Handicrafts:</strong> Tingatinga paintings, Maasai beadwork, wood carvings</li>
                        </ul>
                    </div>
                    <div className="col-md-6 mb-3">
                        <h5 className="fw-semibold">Must-Try Foods</h5>
                        <ul style={{ fontSize: "1.08rem" }}>
                            <li><strong>Ugali:</strong> Staple maize porridge, served with meat or vegetables</li>
                            <li><strong>Nyama Choma:</strong> Grilled meat, a local favorite</li>
                            <li><strong>Zanzibar Mix:</strong> Savory street food with potatoes, bhajias, and chutneys</li>
                            <li><strong>Samaki wa Kupaka:</strong> Grilled fish in coconut sauce</li>
                            <li><strong>Vitumbua:</strong> Coconut rice pancakes, perfect for breakfast</li>
                            <li><strong>Fresh tropical fruits:</strong> Mango, pineapple, passion fruit, and more</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Travel Tips */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#059669" }}>Travel Tips</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li><strong>Best Time to Visit:</strong> June to October for pleasant, dry weather</li>
                    <li><strong>Currency:</strong> Tanzanian Shilling (TZS)</li>
                    <li><strong>Transport:</strong> Daladalas (minibuses), taxis, and ride-hailing apps are widely available</li>
                    <li><strong>Safety:</strong> Be cautious with belongings in crowded areas and markets</li>
                    <li><strong>Health:</strong> Drink bottled water, use mosquito repellent, and check vaccination requirements</li>
                    <li><strong>Local Etiquette:</strong> Greetings are important; dress modestly, especially in markets and religious sites</li>
                </ul>
            </section>

            {/* Getting Around */}
            <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #e0f2fe 0%, #f3e8ff 100%)" }}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#0ea5e9" }}>Getting Around</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li><strong>Daladalas:</strong> Inexpensive minibuses covering most routes—expect crowds!</li>
                    <li><strong>Taxis:</strong> Widely available; agree on a fare before starting your journey</li>
                    <li><strong>Bajaji:</strong> Three-wheeled tuk-tuks for short trips</li>
                    <li><strong>Ride-hailing:</strong> Apps like Bolt and Uber operate in the city</li>
                    <li><strong>Ferries:</strong> For trips to nearby islands like Bongoyo and Mbudya</li>
                </ul>
            </section>

            {/* Beaches & Islands */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#d97706" }}>Beaches & Islands</h2>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Coco_Beach_Dar_es_Salaam.jpg" alt="Coco Beach" className="img-fluid rounded shadow mb-2" />
                        <h5 className="fw-semibold">Coco Beach (Oysterbay)</h5>
                        <p>Popular city beach for locals and visitors—enjoy street food, music, and ocean breezes.</p>
                    </div>
                    <div className="col-md-6 mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Bongoyo_Island_Dar_es_Salaam.jpg" alt="Bongoyo Island" className="img-fluid rounded shadow mb-2" />
                        <h5 className="fw-semibold">Bongoyo Island</h5>
                        <p>Take a short ferry ride to this idyllic island for snorkeling, swimming, and fresh seafood on the beach.</p>
                    </div>
                </div>
            </section>

            {/* Useful Links */}
            <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #f3e8ff 0%, #e0f2fe 100%)" }}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#2563eb" }}>Useful Links</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li>
                        <a href="https://www.tanzaniatourism.go.tz/en/destination/dar-es-salaam" target="_blank" rel="noopener noreferrer">
                            Tanzania Tourism: Dar es Salaam
                        </a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Dar_es_Salaam" target="_blank" rel="noopener noreferrer">
                            Wikipedia: Dar es Salaam
                        </a>
                    </li>
                    <li>
                        <a href="https://www.lonelyplanet.com/tanzania/dar-es-salaam" target="_blank" rel="noopener noreferrer">
                            Lonely Planet: Dar es Salaam
                        </a>
                    </li>
                </ul>
            </section>


        </div>
    );
};

export default DarEsSalaamGuide;