import React from "react";

const sectionStyle = {
    background: "linear-gradient(135deg, #e0e7ef 0%, #f3e8ff 100%)",
    borderRadius: "1.5rem",
    padding: "2.5rem 2rem",
    marginBottom: "2.5rem",
    boxShadow: "0 4px 24px rgba(80,80,120,0.08)",
};

const LondonGuide = () => {
    return (
        <div className="container my-5 px-2 px-md-4">
            <div
                className="text-center mb-5 py-5"
                style={{
                    background: "linear-gradient(120deg, #e0e7ef 0%, #f3e8ff 100%)",
                    borderRadius: "2rem",
                    color: "#1e293b",
                    boxShadow: "0 6px 32px rgba(80,80,120,0.10)",
                }}
            >
                <h1 className="display-3 fw-bold mb-3" style={{ letterSpacing: "2px" }}>
                    London Travel Guide
                </h1>
                <span className="badge bg-primary text-light fs-5 mb-3 px-4 py-2 shadow">United Kingdom</span>
                <p className="lead text-dark mb-4" style={{ fontSize: "1.3rem" }}>
                    Explore the vibrant heart of England—where history, culture, and modern life blend seamlessly.<br />
                    <span className="fw-semibold">From royal palaces to bustling markets, London has it all!</span>
                </p>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/London_Big_Ben_and_Parliament.jpg/1200px-London_Big_Ben_and_Parliament.jpg"
                    alt="London"
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
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/British_Museum_from_NE_2.JPG" alt="British Museum" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="fw-semibold">British Museum</h5>
                                <p className="card-text">World-class collection of art and antiquities from around the globe. Free entry.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Tower_of_London_viewed_from_the_River_Thames.jpg" alt="Tower of London" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="fw-semibold">Tower of London</h5>
                                <p className="card-text">Historic fortress, home to the Crown Jewels and centuries of royal intrigue.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/London_Eye_Twilight_April_2006.jpg" alt="London Eye" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="fw-semibold">London Eye</h5>
                                <p className="card-text">Iconic riverside observation wheel with panoramic city views.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mt-2">
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Buckingham_Palace%2C_London_-_April_2009.jpg" alt="Buckingham Palace" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="fw-semibold">Buckingham Palace</h5>
                                <p className="card-text">The official residence of the monarch—don’t miss the Changing of the Guard.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Westminster_Abbey_West_Door.jpg" alt="Westminster Abbey" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="fw-semibold">Westminster Abbey</h5>
                                <p className="card-text">Gothic masterpiece and site of royal coronations, weddings, and burials.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Travel Tips */}
            <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #f3e8ff 0%, #e0e7ef 100%)" }}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#059669" }}>Travel Tips</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li>Get an <strong>Oyster card</strong> for easy and affordable travel on public transport.</li>
                    <li>Visit in spring (April–June) or fall (September–October) for pleasant weather and fewer crowds.</li>
                    <li>Many museums are free—plan ahead to make the most of your visit.</li>
                    <li>London is walkable, but bring comfortable shoes for exploring neighborhoods.</li>
                    <li>Book tickets for popular attractions in advance to avoid long lines.</li>
                </ul>
            </section>

            {/* Local Cuisine */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#d97706" }}>Local Cuisine</h2>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Fish_and_chips_blackpool.jpg" alt="Fish and Chips" className="img-fluid rounded shadow mb-2" />
                        <h5 className="fw-semibold">Fish and Chips</h5>
                        <p>Classic British comfort food—crispy battered fish with chunky fries and mushy peas.</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Full_English_Breakfast%2C_Glasgow.jpg" alt="Full English Breakfast" className="img-fluid rounded shadow mb-2" />
                        <h5 className="fw-semibold">Full English Breakfast</h5>
                        <p>Hearty plate of eggs, bacon, sausage, beans, mushrooms, and toast—perfect start to your day.</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Afternoon_tea_at_Brown%27s_Hotel%2C_London.jpg" alt="Afternoon Tea" className="img-fluid rounded shadow mb-2" />
                        <h5 className="fw-semibold">Afternoon Tea</h5>
                        <p>Enjoy scones, finger sandwiches, and pastries with a pot of tea in a classic London tearoom.</p>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #e0e7ef 0%, #f3e8ff 100%)" }}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#a21caf" }}>Gallery</h2>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/British_Museum_from_NE_2.JPG" alt="British Museum" className="img-fluid rounded shadow" />
                        <p className="text-center mt-2">British Museum</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Tower_of_London_viewed_from_the_River_Thames.jpg" alt="Tower of London" className="img-fluid rounded shadow" />
                        <p className="text-center mt-2">Tower of London</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/London_Eye_Twilight_April_2006.jpg" alt="London Eye" className="img-fluid rounded shadow" />
                        <p className="text-center mt-2">London Eye</p>
                    </div>
                </div>
            </section>

            {/* Useful Links */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#2563eb" }}>Useful Links</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li>
                        <a href="https://visitlondon.com/" target="_blank" rel="noopener noreferrer">
                            Visit London (Official Tourism)
                        </a>
                    </li>
                    <li>
                        <a href="https://tfl.gov.uk/" target="_blank" rel="noopener noreferrer">
                            Transport for London (TFL)
                        </a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/London" target="_blank" rel="noopener noreferrer">
                            Wikipedia: London
                        </a>
                    </li>
                </ul>
            </section>


        </div>
    );
};

export default LondonGuide;