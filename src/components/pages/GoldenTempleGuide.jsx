import React from 'react';

const sectionStyle = {
    background: "linear-gradient(135deg, #fffbe6 0%, #f3e8ff 100%)",
    borderRadius: "1.5rem",
    padding: "2.5rem 2rem",
    marginBottom: "2.5rem",
    boxShadow: "0 4px 24px rgba(191,161,0,0.08)",
};

const GoldenTempleGuide = () => (
    <div className="container my-5 px-2 px-md-4">
        <div
            className="text-center mb-5 py-5"
            style={{
                background: "linear-gradient(120deg, #fffbe6 0%, #f3e8ff 100%)",
                borderRadius: "2rem",
                color: "#bfa100",
                boxShadow: "0 6px 32px rgba(191,161,0,0.10)",
            }}
        >
            <h1 className="fw-bold display-3 mb-3" style={{ letterSpacing: "2px" }}>
                Golden Temple, Amritsar Guide
            </h1>
            <span className="badge bg-warning text-dark fs-5 mb-3 px-4 py-2 shadow">Punjab, India</span>
            <p className="lead text-dark mb-4" style={{ fontSize: "1.4rem" }}>
                The spiritual heart of Sikhism, a beacon of peace, equality, and devotion.<br />
                <span className="fw-semibold">Harmandir Sahib – The Abode of God</span>
            </p>
            <img
                src="https://plus.unsplash.com/premium_photo-1697730324062-c012bc98eb13?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29sZGVuJTIwdGVtcGxlJTIwYW1yaXRzYXJ8ZW58MHx8MHx8fDA%3D"
                alt="Golden Temple"
                className="img-fluid rounded shadow-lg my-4"
                style={{ maxHeight: 400, objectFit: "cover", border: "6px solid #fff" }}
            />
        </div>

        {/* About the Golden Temple */}
        <section style={sectionStyle}>
            <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#bfa100" }}>About the Golden Temple</h2>
            <p style={{ fontSize: "1.15rem" }}>
                The Golden Temple, also known as <strong>Harmandir Sahib</strong>, is the holiest Gurdwara of Sikhism, located in Amritsar, Punjab.
                Renowned for its stunning golden façade, serene Sarovar (holy pool), and spiritual significance, the temple welcomes people of all faiths and backgrounds.
                Its doors are open 24/7, symbolizing universal brotherhood and equality.
            </p>
            <div className="row my-4">
                <div className="col-md-6">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Golden_Temple%2C_Amritsar%2C_Punjab%2C_India.jpg" alt="Golden Temple Lake" className="img-fluid rounded shadow" />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <ul style={{ fontSize: "1.08rem" }}>
                        <li><strong>Founded:</strong> 1581 by Guru Arjan Dev Ji</li>
                        <li><strong>Main Attraction:</strong> The gold-plated sanctum at the center of the Sarovar</li>
                        <li><strong>Open:</strong> 24 hours, every day</li>
                        <li><strong>Entry:</strong> Free</li>
                        <li><strong>Spiritual Experience:</strong> Continuous recitation of the Guru Granth Sahib</li>
                        <li><strong>Architecture:</strong> Blend of Hindu and Islamic styles, marble inlay, and gold leaf</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Highlights */}
        <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #fffbe6 0%, #ffe7ba 100%)" }}>
            <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#bfa100" }}>Highlights</h2>
            <div className="row">
                <div className="col-md-4 mb-3">
                    <img src="https://www.sikhnet.com/sites/default/files/news/2019/07/golden-temple-langar.jpg" alt="Langar" className="img-fluid rounded shadow mb-2" />
                    <h5 className="fw-semibold">Langar (Community Kitchen)</h5>
                    <p>
                        Experience the world's largest free kitchen, serving over 50,000 meals daily to visitors of all backgrounds.
                        Volunteers prepare and serve simple, nourishing vegetarian food as an act of seva (selfless service).
                    </p>
                </div>
                <div className="col-md-4 mb-3">
                    <img src="https://www.holidify.com/images/cmsuploads/compressed/Golden-Temple-Amritsar-Punjab-India_20180322165941.jpg" alt="Evening Ceremony" className="img-fluid rounded shadow mb-2" />
                    <h5 className="fw-semibold">Palki Sahib Ceremony</h5>
                    <p>
                        Witness the mesmerizing evening procession of the Guru Granth Sahib, accompanied by devotional music and chants.
                        The sacred scripture is carried in a golden palanquin to the Akal Takht every night.
                    </p>
                </div>
                <div className="col-md-4 mb-3">
                    <img src="https://www.trawell.in/admin/images/upload/872013917Amritsar_Main.jpg" alt="Golden Temple at Night" className="img-fluid rounded shadow mb-2" />
                    <h5 className="fw-semibold">Night View</h5>
                    <p>
                        The temple illuminated at night is a breathtaking sight, reflecting beautifully in the Sarovar.
                        The tranquil ambiance and shimmering gold create a magical experience.
                    </p>
                </div>
            </div>
        </section>

        {/* History & Spiritual Significance */}
        <section style={sectionStyle}>
            <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#bfa100" }}>History & Spiritual Significance</h2>
            <p>
                The foundation of the Golden Temple was laid by Guru Arjan Dev Ji in the late 16th century.
                The temple was designed to be open from all sides, symbolizing openness to all people and religions.
                The Adi Granth, the holy scripture of Sikhism, was installed here in 1604.
                Over centuries, the temple has withstood invasions and has been rebuilt, most notably with gold plating in the early 19th century by Maharaja Ranjit Singh.
            </p>
            <ul>
                <li><strong>Spiritual Center:</strong> Pilgrims from around the world visit for prayer, reflection, and community service.</li>
                <li><strong>Akal Takht:</strong> The highest seat of earthly authority of the Khalsa, located within the complex.</li>
                <li><strong>Festivals:</strong> Baisakhi, Gurpurab, and Diwali are celebrated with grandeur and devotion.</li>
            </ul>
        </section>

        {/* Visitor Information */}
        <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #f3e8ff 0%, #fffbe6 100%)" }}>
            <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#bfa100" }}>Visitor Information</h2>
            <ul style={{ fontSize: "1.08rem" }}>
                <li><strong>Location:</strong> Amritsar, Punjab</li>
                <li><strong>Best Time to Visit:</strong> November to March (pleasant weather)</li>
                <li><strong>Dress Code:</strong> Cover your head, remove shoes, and dress modestly</li>
                <li><strong>Photography:</strong> Allowed in outer areas, not inside the sanctum</li>
                <li><strong>Facilities:</strong> Cloakrooms, shoe stands, drinking water, and medical aid available</li>
                <li><strong>Accessibility:</strong> Wheelchair accessible, ramps provided</li>
            </ul>
            <img src="https://www.tourmyindia.com/blog//wp-content/uploads/2018/08/Best-Time-to-Visit-Amritsar.jpg" alt="Best Time" className="img-fluid rounded shadow my-3" />
        </section>

        {/* How to Reach */}
        <section style={sectionStyle}>
            <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#bfa100" }}>How to Reach</h2>
            <ul style={{ fontSize: "1.08rem" }}>
                <li><strong>By Air:</strong> Sri Guru Ram Dass Jee International Airport (11 km from city center)</li>
                <li><strong>By Train:</strong> Amritsar Junction is well connected to major cities</li>
                <li><strong>By Road:</strong> Regular buses from Delhi, Chandigarh, and other cities</li>
                <li><strong>Local Transport:</strong> Auto-rickshaws, cycle rickshaws, and taxis are easily available</li>
            </ul>
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Amritsar_Railway_Station_20180322170000.jpg" alt="Amritsar Railway" className="img-fluid rounded shadow my-3" />
        </section>

        {/* Nearby Attractions */}
        <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #ffe7ba 0%, #fffbe6 100%)" }}>
            <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#bfa100" }}>Nearby Attractions</h2>
            <ul style={{ fontSize: "1.08rem" }}>
                <li><strong>Jallianwala Bagh:</strong> Historic memorial garden, site of the 1919 massacre.</li>
                <li><strong>Partition Museum:</strong> Chronicles the stories of the Partition of India.</li>
                <li><strong>Durgiana Temple:</strong> Hindu temple with similar architecture to the Golden Temple.</li>
                <li><strong>Gobindgarh Fort:</strong> 18th-century fort with museums and cultural shows.</li>
                <li><strong>Wagah Border:</strong> Famous for the daily flag-lowering ceremony at the India-Pakistan border.</li>
            </ul>
            <img src="https://www.trawell.in/admin/images/upload/872013917JallianwalaBagh_Main.jpg" alt="Jallianwala Bagh" className="img-fluid rounded shadow my-3" />
        </section>

        {/* Tips for Visitors */}
        <section style={sectionStyle}>
            <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#bfa100" }}>Tips for Visitors</h2>
            <ul style={{ fontSize: "1.08rem" }}>
                <li>Arrive early morning or late evening for a peaceful experience and to witness the Palki Sahib ceremony.</li>
                <li>Respect the customs, maintain silence inside the sanctum, and avoid taking photos where not allowed.</li>
                <li>Try the langar meal for a unique community experience—everyone is welcome.</li>
                <li>Keep your belongings safe and beware of touts outside the temple complex.</li>
                <li>Carry a scarf or handkerchief to cover your head (head coverings are also provided at the entrance).</li>
                <li>Plan extra time to explore the museum and Akal Takht within the complex.</li>
            </ul>
        </section>

        {/* Useful Links */}
        <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #fffbe6 0%, #f3e8ff 100%)" }}>
            <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#bfa100" }}>Useful Links</h2>
            <ul style={{ fontSize: "1.08rem" }}>
                <li>
                    <a href="https://www.goldentempleamritsar.org/" target="_blank" rel="noopener noreferrer">
                        Official Golden Temple Website
                    </a>
                </li>
                <li>
                    <a href="https://en.wikipedia.org/wiki/Golden_Temple" target="_blank" rel="noopener noreferrer">
                        Wikipedia: Golden Temple
                    </a>
                </li>
                <li>
                    <a href="https://www.sikhiwiki.org/index.php/Golden_Temple" target="_blank" rel="noopener noreferrer">
                        SikhiWiki: Golden Temple
                    </a>
                </li>
                <li>
                    <a href="https://www.amritsar.nic.in/tourist-place/golden-temple/" target="_blank" rel="noopener noreferrer">
                        Amritsar District: Golden Temple
                    </a>
                </li>
            </ul>
        </section>


    </div>
);

export default GoldenTempleGuide;