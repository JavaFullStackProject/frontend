import React from "react";

const sectionStyle = {
    background: "linear-gradient(135deg, #fef6e4 0%, #f3e8ff 100%)",
    borderRadius: "1.5rem",
    padding: "2.5rem 2rem",
    marginBottom: "2.5rem",
    boxShadow: "0 4px 24px rgba(180,83,9,0.08)",
};

const KhajurahoTemplesGuide = () => {
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
                    Khajuraho Temples Guide
                </h1>
                <span className="badge bg-warning text-dark fs-5 mb-3 px-4 py-2 shadow">Madhya Pradesh, India</span>
                <p className="lead text-dark mb-4" style={{ fontSize: "1.4rem" }}>
                    The Khajuraho Temples, a <strong>UNESCO World Heritage Site</strong>, are celebrated for their stunning architecture and intricate sculptures.<br />
                    <span className="fw-semibold">A masterpiece of Indian art, spirituality, and history</span>
                </p>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Kandariya_Mahadeva_Temple%2C_Khajuraho.jpg"
                    alt="Kandariya Mahadeva Temple"
                    className="img-fluid rounded shadow-lg my-4"
                    style={{ maxHeight: 400, objectFit: "cover", border: "6px solid #fff" }}
                />
            </div>

            {/* Architecture */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#b45309" }}>Architecture</h2>
                <p style={{ fontSize: "1.15rem" }}>
                    The temples are renowned for their <strong>nagara-style architecture</strong>, characterized by tall spires (shikharas) and intricate carvings depicting mythology, nature, music, dance, and aspects of daily life—including the famous erotic sculptures.
                    The <strong>Kandariya Mahadeva Temple</strong> (dedicated to Lord Shiva) and <strong>Lakshmana Temple</strong> (noted for its exquisite sculptures) are among the most celebrated.
                </p>
                <div className="row my-4">
                    <div className="col-md-6 mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Lakshmana_Temple_Khajuraho.jpg" alt="Lakshmana Temple" className="img-fluid rounded shadow" />
                        <p className="text-center mt-2">Lakshmana Temple</p>
                    </div>
                    <div className="col-md-6 mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Khajuraho_Temple_Sculptures.jpg" alt="Khajuraho Sculptures" className="img-fluid rounded shadow" />
                        <p className="text-center mt-2">Intricate Temple Sculptures</p>
                    </div>
                </div>
            </section>

            {/* History */}
            <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #f3e8ff 0%, #fef6e4 100%)" }}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#a21caf" }}>History</h2>
                <p style={{ fontSize: "1.15rem" }}>
                    Built between <strong>950 and 1050 AD</strong> by the Chandela dynasty, the Khajuraho group of temples reflects a period of great prosperity and artistic achievement.
                    Originally dedicated to Hindu deities, the site later saw the construction of Jain temples, highlighting religious harmony.
                    After the decline of the Chandelas, the temples were forgotten and reclaimed by the jungle until their rediscovery in the 19th century.
                </p>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li><strong>Dynasty:</strong> Chandela</li>
                    <li><strong>Rediscovered:</strong> 1838 by British surveyor T.S. Burt</li>
                    <li><strong>Number of Temples:</strong> 22 surviving (out of 85 originally)</li>
                </ul>
            </section>

            {/* Significance */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#059669" }}>Significance</h2>
                <p style={{ fontSize: "1.15rem" }}>
                    The Khajuraho Temples are a symbol of India's rich history, diversity, and artistic genius.
                    Their sculptures celebrate life, spirituality, and human expression, offering insights into the beliefs and social life of ancient India.
                    Today, Khajuraho attracts millions of tourists and scholars, standing as a testament to the spiritual and artistic achievements of Indian civilization.
                </p>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li><strong>UNESCO World Heritage Site</strong> since 1986</li>
                    <li>Blend of Hindu and Jain temples</li>
                    <li>Famous for both spiritual and artistic value</li>
                </ul>
            </section>

            {/* Visiting Tips */}
            <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #fef6e4 0%, #f3e8ff 100%)" }}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#d97706" }}>Visiting Tips</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li><strong>Best time to visit:</strong> October to March (pleasant weather)</li>
                    <li>Plan to spend at least a full day exploring the temples</li>
                    <li>Guided tours are available for a deeper understanding of history and architecture</li>
                    <li>Respect the sanctity of the temples and follow local customs</li>
                    <li>Photography is allowed, but be mindful of signs and restrictions</li>
                    <li>Don’t miss the <strong>Khajuraho Dance Festival</strong> (February/March), showcasing classical Indian dance</li>
                </ul>
            </section>

            {/* How to Reach */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#0ea5e9" }}>How to Reach</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li><strong>By Air:</strong> Khajuraho Airport (5 km from town, flights from Delhi, Varanasi, etc.)</li>
                    <li><strong>By Train:</strong> Khajuraho Railway Station (connected to major cities)</li>
                    <li><strong>By Road:</strong> Well-connected by buses and taxis from Jhansi, Satna, and other cities</li>
                </ul>
            </section>

            {/* Nearby Attractions */}
            <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #f3e8ff 0%, #fef6e4 100%)" }}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#2563eb" }}>Nearby Attractions</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li><strong>Panna National Park:</strong> Wildlife safaris and scenic beauty, 25 km from Khajuraho</li>
                    <li><strong>Raneh Falls:</strong> Spectacular canyon and waterfalls, 20 km away</li>
                    <li><strong>Jain Temples:</strong> Located in the eastern group, known for their serenity and artistry</li>
                    <li><strong>Dulhadev Temple:</strong> Noted for its elegant sculptures and peaceful setting</li>
                </ul>
            </section>

            {/* Useful Links */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#a21caf" }}>Useful Links</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li>
                        <a href="https://whc.unesco.org/en/list/240/" target="_blank" rel="noopener noreferrer">
                            UNESCO: Khajuraho Group of Monuments
                        </a>
                    </li>
                    <li>
                        <a href="https://www.mptourism.com/destination-khajuraho.html" target="_blank" rel="noopener noreferrer">
                            Madhya Pradesh Tourism: Khajuraho
                        </a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Khajuraho_Group_of_Monuments" target="_blank" rel="noopener noreferrer">
                            Wikipedia: Khajuraho Group of Monuments
                        </a>
                    </li>
                </ul>
            </section>


        </div>
    );
};

export default KhajurahoTemplesGuide;