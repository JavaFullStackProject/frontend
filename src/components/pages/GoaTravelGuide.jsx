import { useEffect } from 'react';

const GoaTravelGuide = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Inline style objects for unique styles
    const countryTagStyle = {
        fontWeight: 500,
        background: 'linear-gradient(90deg, #18181b 60%, #4b5563 100%)',
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
        background: '#f3f4f6',
        color: '#374151',
        borderRadius: '1rem',
        padding: '0.3rem 1rem',
        marginLeft: '0.5rem'
    };

    const guideTitleStyle = {
        marginBottom: '1.5rem',
        fontSize: '2.2rem',
        fontWeight: 700,
        lineHeight: 1.2,
        color: '#18181b',
        letterSpacing: '-0.5px'
    };

    const avatarImageStyle = {
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '9999px',
        border: '2px solid #e5e7eb'
    };

    const authorNameStyle = {
        marginLeft: '0.75rem',
        fontWeight: 600,
        fontSize: '1rem',
        color: '#374151'
    };

    const coverImageStyle = {
        width: '100%',
        height: '320px',
        objectFit: 'cover',
        borderRadius: '1rem',
        border: '3px solid #e5e7eb',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        margin: '1.5rem 0'
    };

    const contentSectionStyle = {
        marginBottom: '2.5rem'
    };

    const sectionTitleStyle = {
        fontSize: '1.35rem',
        fontWeight: 700,
        marginBottom: '1rem',
        color: '#2563eb',
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
        height: '320px',
        objectFit: 'cover',
        borderRadius: '1rem',
        border: '3px solid #e5e7eb',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        margin: '1.5rem 0'
    };

    return (
        <div
            className="min-vh-100 d-flex flex-column"
            style={{
                background: 'linear-gradient(120deg, #f3f4f6 0%, #e0f2fe 100%)'
            }}
        >
            <div style={{ height: '56px' }}></div> {/* Spacer for fixed navbar */}
            <main className="container flex-grow-1 py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                        <div className="card shadow-lg border-0 p-4" style={{ borderRadius: '1.5rem', background: 'rgba(255,255,255,0.97)' }}>
                            <div className="d-flex align-items-center mb-4">
                                <span style={countryTagStyle} className="me-2">India</span>
                                <span style={publishDateStyle}>2024</span>
                            </div>
                            <h1 className="mb-4 fw-bold" style={guideTitleStyle}>
                                Goa Travel Guide: Beaches, Culture & Nightlife in India's Tropical Paradise
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
                                    src="https://media-cdn.tripadvisor.com/media/photo-s/0d/77/e0/11/sunset-at-palolem-beach.jpg"
                                    alt="Goa Sunset Beach"
                                    className="img-fluid"
                                    style={coverImageStyle}
                                />
                            </div>
                            <div style={contentSectionStyle}>
                                <h2 id="introduction" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Introduction</h2>
                                <p style={sectionPStyle}>
                                    Goa, India's smallest state, is a tropical paradise known for its stunning beaches, Portuguese heritage, vibrant nightlife, and delicious seafood. Whether you're looking for relaxation, adventure, or cultural experiences, Goa offers something for every traveler.
                                </p>
                            </div>
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="places-to-visit" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Must-Visit Places in Goa</h2>
                                <ul style={sectionUlStyle}>
                                    <li style={sectionLiStyle}>
                                        <strong>Palolem Beach</strong> – A crescent-shaped beach with calm waters, perfect for swimming and kayaking.
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Anjuna Flea Market</strong> – Every Wednesday, shop for souvenirs, clothes, and handicrafts.
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Old Goa Churches</strong> – UNESCO World Heritage Sites like Basilica of Bom Jesus and Se Cathedral.
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Dudhsagar Waterfalls</strong> – Majestic four-tiered waterfall in the Western Ghats.
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Fort Aguada</strong> – 17th-century Portuguese fort with panoramic views.
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Baga Beach</strong> – Famous for water sports and nightlife.
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Spice Plantations</strong> – Take a tour and learn about Goa's spice cultivation.
                                    </li>
                                </ul>
                                <img
                                    src="https://captureatrip-cms-storage.s3.ap-south-1.amazonaws.com/Places_to_visit_in_Goa_at_night_52695d91ec.jpg"
                                    alt="Goa Beaches"
                                    style={sectionImgStyle}
                                />
                            </div>
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="best-time" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Best Time to Visit</h2>
                                <ul style={sectionUlStyle}>
                                    <li style={sectionLiStyle}>
                                        <strong>November to February</strong> – Peak season with pleasant weather (20-32°C). Perfect for beach activities and Christmas/New Year celebrations.
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>March to May</strong> – Hot but less crowded. Great for budget travelers.
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>June to September</strong> – Monsoon season. Lush greenery but many beach shacks close.
                                    </li>
                                </ul>
                                <img
                                    src="https://media-cdn.tripadvisor.com/media/photo-s/0d/77/e0/11/sunset-at-palolem-beach.jpg"
                                    alt="Goa Sunset"
                                    style={sectionImgStyle}
                                />
                            </div>
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="transportation" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Getting Around Goa</h2>
                                <ul style={sectionUlStyle}>
                                    <li style={sectionLiStyle}>
                                        <strong>Rent a Scooter/Bike</strong> – Most popular way to explore (₹300-500/day).
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Local Buses</strong> – Cheap but slow. Kadamba buses connect major areas.
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Taxis</strong> – No meters; negotiate fares in advance.
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Self-Drive Cars</strong> – Available for rent (₹1000-2000/day).
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>App-Based Rides</strong> – GoaMiles is the local ride-hailing app.
                                    </li>
                                </ul>
                                <img
                                    src="https://swimup.in/blog/wp-content/uploads/2024/09/Bike-on-rent-1.webp"
                                    alt="Transport in Goa"
                                    style={sectionImgStyle}
                                />
                            </div>
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="food" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Goan Cuisine</h2>
                                <p style={sectionPStyle}>
                                    Goan food is a delicious blend of Indian and Portuguese influences:
                                </p>
                                <ul style={sectionUlStyle}>
                                    <li style={sectionLiStyle}>
                                        <strong>Must-Try Dishes:</strong> Fish curry rice, pork vindaloo, chicken xacuti, bebinca (dessert)
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Street Food:</strong> Goan sausages, prawn balchão, crab xec xec
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Drinks:</strong> Feni (local cashew or coconut liquor), kokum juice
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Best Places to Eat:</strong> Martin's Corner, Fisherman's Wharf, Vinayak Family Restaurant
                                    </li>
                                </ul>
                                <img
                                    src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20200203111138/Seafood-at-Palolem-Beach-1024x683.jpg"
                                    alt="Goan Food"
                                    style={sectionImgStyle}
                                />
                            </div>
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="accommodation" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Where to Stay</h2>
                                <ul style={sectionUlStyle}>
                                    <li style={sectionLiStyle}>
                                        <strong>North Goa</strong> (Baga, Calangute, Anjuna) – Best for nightlife and water sports
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>South Goa</strong> (Palolem, Colva) – Quieter, more luxurious resorts
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Panjim</strong> – For heritage stays and city exploration
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Budget Options:</strong> Hostels start at ₹500/bed
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Mid-Range:</strong> Beach huts and guesthouses (₹2000-5000/night)
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Luxury:</strong> 5-star resorts like Taj Exotica (₹15,000+/night)
                                    </li>
                                </ul>
                                <img
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/16/90/f8/exterior.jpg?w=1200&h=-1&s=1"
                                    alt="Goa Accommodation"
                                    style={sectionImgStyle}
                                />
                            </div>
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="activities" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Top Activities</h2>
                                <ul style={sectionUlStyle}>
                                    <li style={sectionLiStyle}>
                                        <strong>Water Sports:</strong> Parasailing, jet skiing, banana boat rides
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Dolphin Spotting:</strong> Boat trips from Sinquerim or Palolem
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Yoga Retreats:</strong> Especially popular in Arambol
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Casino Cruises:</strong> Try your luck on floating casinos
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Scuba Diving:</strong> Best at Grande Island
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Sunset Cruises:</strong> On the Mandovi River
                                    </li>
                                </ul>
                                <img
                                    src="https://media1.thrillophilia.com/filestore/rgcvvryg9trpxihcfcnn8z4p93ty_1586165333_shutterstock_266214125.jpg?w=753&h=450&dpr=2.0"
                                    alt="Goa Activities"
                                    style={sectionImgStyle}
                                />
                            </div>
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="tips" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Essential Travel Tips</h2>
                                <ul style={sectionUlStyle}>
                                    <li style={sectionLiStyle}>Bargain at markets and with taxi drivers</li>
                                    <li style={sectionLiStyle}>Respect local customs - cover up when visiting churches</li>
                                    <li style={sectionLiStyle}>Carry cash as many beach shacks don't accept cards</li>
                                    <li style={sectionLiStyle}>Avoid swimming where red flags are posted</li>
                                    <li style={sectionLiStyle}>Try to learn basic Konkani phrases</li>
                                    <li style={sectionLiStyle}>Carry sunscreen and stay hydrated</li>
                                    <li style={sectionLiStyle}>Be cautious of overcharging during peak season</li>
                                </ul>
                                <img
                                    src="https://static.toiimg.com/photo/52315719.cms"
                                    alt="Goa Tips"
                                    style={sectionImgStyle}
                                />
                            </div>
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="conclusion" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Conclusion</h2>
                                <p style={sectionPStyle}>
                                    Goa offers the perfect blend of relaxation and adventure. From its golden beaches and water sports to historic churches and spice plantations, there's something for every traveler. The vibrant nightlife, delicious seafood, and warm hospitality make Goa one of India's most beloved destinations.
                                </p>
                                <p style={sectionPStyle}>
                                    Whether you're planning a romantic getaway, a solo adventure, or a fun trip with friends, Goa promises memories that will last a lifetime. Just remember to respect the local culture while enjoying all that this tropical paradise has to offer!
                                </p>
                                <img
                                    src="https://media-cdn.tripadvisor.com/media/photo-s/0d/77/e0/11/sunset-at-palolem-beach.jpg"
                                    alt="Goa Sunset"
                                    style={sectionImgStyle}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default GoaTravelGuide;