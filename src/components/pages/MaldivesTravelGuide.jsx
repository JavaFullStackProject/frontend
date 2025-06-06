import { useEffect } from 'react';

const MaldivesTravelGuide = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Inline style objects for unique styles
    const countryTagStyle = {
        fontWeight: 600,
        background: 'linear-gradient(90deg, #00bfae 60%, #1a3c4b 100%)',
        color: 'white',
        padding: '0.3rem 1.2rem',
        borderRadius: '1rem',
        fontSize: '1rem',
        letterSpacing: '0.05em',
        boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
    };

    const publishDateStyle = {
        fontSize: '1rem',
        fontWeight: 500,
        background: '#e0f7fa',
        color: '#1a3c4b',
        borderRadius: '1rem',
        padding: '0.3rem 1rem',
        marginLeft: '0.5rem'
    };

    const guideTitleStyle = {
        marginBottom: '1.5rem',
        fontSize: '2.2rem',
        fontWeight: 700,
        lineHeight: 1.2,
        color: '#1a3c4b',
        letterSpacing: '-0.5px'
    };

    const avatarImageStyle = {
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '9999px',
        border: '2px solid #e0f7fa',
        objectFit: 'cover'
    };

    const authorNameStyle = {
        marginLeft: '0.75rem',
        fontWeight: 600,
        fontSize: '1rem',
        color: '#1a3c4b'
    };

    const coverImageStyle = {
        width: '100%',
        height: 'auto',
        maxHeight: '350px',
        objectFit: 'cover',
        borderRadius: '1rem',
        border: '3px solid #e0f7fa',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)'
    };

    const contentSectionStyle = {
        marginBottom: '2.5rem'
    };

    const sectionTitleStyle = {
        fontSize: '1.35rem',
        fontWeight: 700,
        marginBottom: '1rem',
        color: '#00bfae',
        letterSpacing: '0.01em'
    };

    const sectionPStyle = {
        marginBottom: '1rem',
        lineHeight: 1.7,
        color: '#374151'
    };

    const sectionUlStyle = {
        listStyleType: 'disc',
        paddingLeft: '1.5rem',
        marginBottom: '1rem'
    };

    const sectionLiStyle = {
        marginBottom: '0.5rem'
    };

    const sectionImgStyle = {
        width: '100%',
        maxHeight: '350px',
        objectFit: 'cover',
        borderRadius: '12px',
        margin: '1.5rem 0'
    };

    return (
        <div
            className="min-vh-100 d-flex flex-column"
            style={{
                background: 'linear-gradient(120deg, #e0f7fa 0%, #f8fafc 100%)'
            }}
        >
            <div style={{ height: '56px' }}></div> {/* Spacer for fixed navbar */}
            <main className="container flex-grow-1 py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                        <div className="card shadow-lg border-0 p-4" style={{ borderRadius: '1.5rem', background: 'rgba(255,255,255,0.97)' }}>
                            <div className="d-flex align-items-center mb-4">
                                <span style={countryTagStyle} className="me-2">Maldives</span>
                                <span style={publishDateStyle}>2025</span>
                            </div>
                            <h1 className="mb-4 fw-bold" style={guideTitleStyle}>
                                Paradise Found: A Romantic Guide to the Maldives
                            </h1>
                            <div className="d-flex align-items-center mb-4">
                                <img
                                    src="https://tse1.mm.bing.net/th?id=OIP.SwIDVKwmelzQy2sz59hPmwHaJ3&pid=Api&P=0&h=180"
                                    alt="Wonderplan"
                                    style={avatarImageStyle}
                                    className="me-2"
                                />
                                <span style={authorNameStyle}>TravelPlanner</span>
                            </div>
                            <div className="mb-4">
                                <img
                                    src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    alt="Maldives Paradise"
                                    className="img-fluid"
                                    style={coverImageStyle}
                                />
                            </div>
                            <div style={contentSectionStyle}>
                                <h2 id="introduction" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Introduction</h2>
                                <p style={sectionPStyle}>
                                    The Maldives, a tropical paradise in the Indian Ocean, is renowned for its crystal-clear turquoise waters, powdery white sand beaches, and luxurious overwater villas. Whether you’re seeking a romantic escape, a honeymoon destination, or simply a serene getaway, the Maldives offers an idyllic setting for unforgettable memories.
                                </p>
                                <p style={sectionPStyle}>
                                    With more than 1,000 coral islands, each resort in the Maldives is its own private island, promising seclusion, tranquility, and breathtaking natural beauty. From snorkeling with vibrant marine life to indulging in world-class spa treatments, the Maldives is the ultimate destination for couples and travelers seeking romance and relaxation.
                                </p>
                            </div>
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="best-time" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Best Time to Visit</h2>
                                <p style={sectionPStyle}>
                                    The Maldives enjoys a tropical climate year-round, but the best time to visit is during the dry season from November to April. Expect sunny skies, calm seas, and perfect conditions for water activities. The wet season (May to October) brings occasional rain showers but also fewer crowds and lush, vibrant scenery.
                                </p>
                                <img
                                    src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/08/03155012/best-time-to-visit-the-maldives.jpg"
                                    alt="Best Time Maldives"
                                    className="img-fluid"
                                    style={sectionImgStyle}
                                />
                            </div>
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="romantic-experiences" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Romantic Experiences</h2>
                                <ul style={sectionUlStyle}>
                                    <li style={sectionLiStyle}>
                                        <strong>Overwater Villas:</strong> Stay in a luxurious villa perched above the lagoon, with direct access to the water and stunning sunset views.
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Private Beach Dinners:</strong> Enjoy a candlelit dinner on the beach, surrounded by the gentle sound of waves and a sky full of stars.
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Couples’ Spa Treatments:</strong> Indulge in relaxing massages and wellness rituals at world-class spas.
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Sunset Cruises:</strong> Sail into the horizon on a traditional dhoni boat, watching the sun dip below the Indian Ocean.
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Snorkeling & Diving:</strong> Discover vibrant coral reefs and swim alongside manta rays, turtles, and colorful fish.
                                    </li>
                                </ul>
                                <img
                                    src="https://www.baros.com/wp-content/uploads/2025/03/Baros-Maldives_Sandbank-Dinner.jpg"
                                    alt="Romantic Maldives"
                                    className="img-fluid"
                                    style={sectionImgStyle}
                                />
                            </div>
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="top-resorts" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Top Resorts</h2>
                                <p style={sectionPStyle}>
                                    The Maldives is home to some of the world’s most luxurious resorts, each offering unique experiences and amenities. Some top picks include:
                                </p>
                                <ul style={sectionUlStyle}>
                                    <li style={sectionLiStyle}><strong>Soneva Fushi</strong> – Eco-luxury villas, private beaches, and an open-air cinema.</li>
                                    <li style={sectionLiStyle}><strong>Gili Lankanfushi</strong> – Renowned for its overwater villas and exceptional service.</li>
                                    <li style={sectionLiStyle}><strong>Conrad Maldives Rangali Island</strong> – Home to the famous underwater restaurant, Ithaa.</li>
                                    <li style={sectionLiStyle}><strong>Baros Maldives</strong> – Intimate, adults-only retreat with stunning house reefs.</li>
                                </ul>
                                <img
                                    src="https://visitmaldives.s3.amazonaws.com/KYyJpXqR/c/kxosfq08-large.jpg"
                                    alt="Maldives Resort"
                                    className="img-fluid"
                                    style={sectionImgStyle}
                                />
                            </div>
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="travel-tips" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Travel Tips</h2>
                                <ul style={sectionUlStyle}>
                                    <li style={sectionLiStyle}>Book your resort and seaplane transfers well in advance, especially during peak season.</li>
                                    <li style={sectionLiStyle}>Pack light, breathable clothing, swimwear, and reef-safe sunscreen.</li>
                                    <li style={sectionLiStyle}>Respect local customs when visiting inhabited islands (modest dress is recommended).</li>
                                    <li style={sectionLiStyle}>Consider all-inclusive packages for a hassle-free experience.</li>
                                </ul>
                            </div>
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="conclusion" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Conclusion</h2>
                                <p style={sectionPStyle}>
                                    The Maldives is a dream destination for romance, adventure, and relaxation. With its pristine beaches, luxurious resorts, and unforgettable experiences, it’s the perfect place to celebrate love and create lifelong memories.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MaldivesTravelGuide;