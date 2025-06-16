import React, { useEffect } from "react";

const sectionStyle = {
    background: "linear-gradient(135deg, #fef6e4 0%, #f3e8ff 100%)",
    borderRadius: "1.5rem",
    padding: "2.5rem 2rem",
    marginBottom: "2.5rem",
    boxShadow: "0 4px 24px rgba(180,83,9,0.08)",
};

const TirupatiBalajiGuide = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                    Tirupati Balaji Temple Travel Guide
                </h1>
                <span className="badge bg-warning text-dark fs-5 mb-3 px-4 py-2 shadow">Andhra Pradesh, India</span>
                <p className="lead text-dark mb-4" style={{ fontSize: "1.3rem" }}>
                    Tirupati Balaji Temple, also known as Sri Venkateswara Swamy Temple, is one of the richest and most visited temples in the world.<br />
                    <span className="fw-semibold">A spiritual journey to the heart of devotion and Dravidian architecture.</span>
                </p>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8QHC-LNJwtDHB2JoxDZPIoRNOfVZ71G0Eyg&s"
                    alt="Tirupati Balaji Temple"
                    className="img-fluid rounded shadow-lg my-4"
                    style={{ maxHeight: 400, objectFit: "cover", border: "6px solid #fff" }}
                />
            </div>

            {/* About Tirupati Balaji */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#b45309" }}>About Tirupati Balaji</h2>
                <p>
                    Tirupati Balaji Temple, also known as Sri Venkateswara Swamy Temple, is one of the richest and most visited temples in the world. Located in Andhra Pradesh, it is renowned for its Dravidian architecture and spiritual significance.
                </p>
            </section>

            {/* Best Time to Visit */}
            <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #f3e8ff 0%, #fef6e4 100%)" }}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#b45309" }}>Best Time to Visit</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li><strong>October to February:</strong> Pleasant weather, ideal for pilgrimage and sightseeing.</li>
                    <li><strong>Festivals:</strong> Brahmotsavam (September/October) is the grandest festival here.</li>
                </ul>
            </section>

            {/* Tips for Visitors */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#b45309" }}>Tips for Visitors</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li>Book your darshan tickets online in advance.</li>
                    <li>Dress modestly and follow temple customs.</li>
                    <li>Try the famous Tirupati Laddu prasadam.</li>
                    <li>Be prepared for long queues during peak season.</li>
                </ul>
            </section>

            {/* Nearby Attractions */}
            <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #f3e8ff 0%, #fef6e4 100%)" }}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#b45309" }}>Nearby Attractions</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li>Akasa Ganga</li>
                    <li>Silathoranam</li>
                    <li>Sri Padmavathi Ammavari Temple</li>
                </ul>
            </section>

            {/* Useful Links */}
            <section style={sectionStyle}>
                <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#2563eb" }}>Useful Links</h2>
                <ul style={{ fontSize: "1.08rem" }}>
                    <li>
                        <a href="https://tirumala.org/" target="_blank" rel="noopener noreferrer">
                            Official Tirumala Tirupati Devasthanams
                        </a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Venkateswara_Temple,_Tirumala" target="_blank" rel="noopener noreferrer">
                            Wikipedia: Tirupati Balaji Temple
                        </a>
                    </li>
                    <li>
                        <a href="https://www.aptdc.in/" target="_blank" rel="noopener noreferrer">
                            Andhra Pradesh Tourism
                        </a>
                    </li>
                </ul>
            </section>

            <footer className="text-center text-muted mt-5">
                <hr />
                <small>
                    &copy; {new Date().getFullYear()} Tirupati Balaji Temple Travel Guide. All rights reserved.
                </small>
            </footer>
        </div>
    );
};

export default TirupatiBalajiGuide;