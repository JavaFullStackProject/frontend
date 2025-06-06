import { useEffect } from 'react';

const MunnarWayanadGuide = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Styles
    const countryTagStyle = {
        fontWeight: 500,
        background: 'linear-gradient(90deg, #166534 60%, #4b5563 100%)',
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
        color: '#166534',
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
        color: '#166534',
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
        maxHeight: '320px',
        objectFit: 'cover',
        borderRadius: '1rem',
        margin: '1.5rem 0',
        border: '3px solid #e5e7eb',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)'
    };

    return (
        <div
            className="min-vh-100 d-flex flex-column"
            style={{
                background: 'linear-gradient(120deg, #f3f4f6 0%, #d1fae5 100%)'
            }}
        >
            <div style={{ height: '56px' }}></div> {/* Spacer for fixed navbar */}
            <main className="container flex-grow-1 py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                        <div className="card shadow-lg border-0 p-4" style={{ borderRadius: '1.5rem', background: 'rgba(255,255,255,0.97)' }}>
                            <div className="d-flex align-items-center mb-4">
                                <span style={countryTagStyle} className="me-2">India</span>
                                <span style={publishDateStyle}>2025</span>
                            </div>
                            <h1 className="mb-4 fw-bold" style={guideTitleStyle}>
                                Munnar & Wayanad Travel Guide: Kerala's Green Escapes
                            </h1>
                            <div className="d-flex align-items-center mb-4">
                                <img
                                    src="https://tse1.mm.bing.net/th?id=OIP.SwIDVKwmelzQy2sz59hPmwHaJ3&pid=Api&P=0&h=180"
                                    alt="TravelPlanner"
                                    style={avatarImageStyle}
                                    className="me-2"
                                />
                                <span style={authorNameStyle}>TravelPlanner</span>
                            </div>
                            <div className="mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"
                                    alt="Munnar Tea Plantations"
                                    className="img-fluid"
                                    style={coverImageStyle}
                                />
                            </div>

                            {/* Introduction */}
                            <div style={contentSectionStyle}>
                                <h2 id="introduction" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Introduction</h2>
                                <p style={sectionPStyle}>
                                    Munnar and Wayanad are two of Kerala’s most beloved hill stations, famous for their lush tea gardens, misty mountains, wildlife, and cool climate. Whether you’re seeking adventure, relaxation, or a romantic getaway, these green escapes offer a perfect retreat from city life.
                                </p>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Munnar_hillstation_kerala.jpg/960px-Munnar_hillstation_kerala.jpg"
                                    alt="Munnar Hills"
                                    style={sectionImgStyle}
                                />
                            </div>

                            {/* Highlights */}
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="highlights" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Highlights of Munnar & Wayanad</h2>
                                <ul style={sectionUlStyle}>
                                    <li style={sectionLiStyle}><strong>Munnar:</strong> Endless tea plantations, Eravikulam National Park, Mattupetty Dam, Top Station, and Attukal Waterfalls.</li>
                                    <li style={sectionLiStyle}><strong>Wayanad:</strong> Edakkal Caves, Banasura Sagar Dam, Chembra Peak, Soochipara Falls, and Wayanad Wildlife Sanctuary.</li>
                                    <li style={sectionLiStyle}><strong>Both:</strong> Trekking, wildlife spotting, spice gardens, and breathtaking viewpoints.</li>
                                </ul>
                                <img
                                    src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSDdlx5XkTcWnmDzsPUY7zaO4A1FESaLmMrh60-_Lkfdj8mkkeYjFBkXxgzXUuJpfolJAbHbVy0dpBr-r4KXLuEys2-KKJYVu2WvOv6SA"
                                    alt="Wayanad View"
                                    style={sectionImgStyle}
                                />
                            </div>

                            {/* Best Time to Visit */}
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="best-time" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Best Time to Visit</h2>
                                <ul style={sectionUlStyle}>
                                    <li style={sectionLiStyle}><strong>October to March:</strong> Pleasant weather, ideal for sightseeing and outdoor activities.</li>
                                    <li style={sectionLiStyle}><strong>April to June:</strong> Warmer but still enjoyable, especially in the mornings and evenings.</li>
                                    <li style={sectionLiStyle}><strong>July to September:</strong> Monsoon brings lush greenery and mist, but expect heavy rains.</li>
                                </ul>
                                <img
                                    src="https://gogeoholidays.wordpress.com/wp-content/uploads/2015/07/munnar-monsoon.jpg?w=736&h=443"
                                    alt="Munnar Monsoon"
                                    style={sectionImgStyle}
                                />
                            </div>

                            {/* How to Reach */}
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="how-to-reach" className="h4 fw-bold mb-3" style={sectionTitleStyle}>How to Reach</h2>
                                <ul style={sectionUlStyle}>
                                    <li style={sectionLiStyle}><strong>Munnar:</strong> Nearest airport is Cochin International (110 km). Aluva is the nearest railway station (110 km). Buses and taxis are available from Kochi, Aluva, and Ernakulam.</li>
                                    <li style={sectionLiStyle}><strong>Wayanad:</strong> Nearest airport is Calicut International (100 km). Kozhikode is the nearest railway station (110 km). Buses and taxis connect from Kozhikode, Mysore, and Bangalore.</li>
                                </ul>
                                <img
                                    src="https://media-cdn.tripadvisor.com/media/photo-s/01/66/5e/78/munnar-toursit-home-in.jpg"
                                    alt="Wayanad Greenery"
                                    style={sectionImgStyle}
                                />
                            </div>

                            {/* Where to Stay */}
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="accommodation" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Where to Stay</h2>
                                <ul style={sectionUlStyle}>
                                    <li style={sectionLiStyle}><strong>Munnar:</strong> Tea County, Parakkat Nature Hotels, and budget-friendly homestays.</li>
                                    <li style={sectionLiStyle}><strong>Wayanad:</strong> Vythiri Resort, Wayanad Wild, and eco-lodges in the forest.</li>
                                    <li style={sectionLiStyle}><strong>Tip:</strong> Book in advance during peak season (Nov–Jan).</li>
                                </ul>
                                <img
                                    src="https://www.ragamayamunnar.com/images/aranyaleela-exterior-view-slider.jpg"
                                    alt="Munnar Resort"
                                    style={sectionImgStyle}
                                />
                            </div>

                            {/* Food & Local Cuisine */}
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="food" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Food & Local Cuisine</h2>
                                <ul style={sectionUlStyle}>
                                    <li style={sectionLiStyle}><strong>Must-try:</strong> Kerala Sadya, appam with stew, Malabar parotta, fish curry, and bamboo rice dishes.</li>
                                    <li style={sectionLiStyle}><strong>Tea:</strong> Don’t miss fresh tea at a local plantation café in Munnar.</li>
                                    <li style={sectionLiStyle}><strong>Spices:</strong> Try dishes flavored with cardamom, pepper, and cinnamon from local spice gardens.</li>
                                </ul>
                                <img
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/e4/3a/07/caption.jpg?w=600&h=400&s=1"
                                    alt="Munnar Food"
                                    style={sectionImgStyle}
                                />
                            </div>

                            {/* Top Activities */}
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="activities" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Top Activities</h2>
                                <ul style={sectionUlStyle}>
                                    <li style={sectionLiStyle}><strong>Trekking:</strong> Anamudi Peak, Chembra Peak, and Meesapulimala are popular trails.</li>
                                    <li style={sectionLiStyle}><strong>Wildlife Safari:</strong> Eravikulam National Park (Nilgiri tahr), Wayanad Wildlife Sanctuary (elephants, deer).</li>
                                    <li style={sectionLiStyle}><strong>Boating:</strong> Mattupetty Dam (Munnar) and Banasura Sagar Dam (Wayanad).</li>
                                    <li style={sectionLiStyle}><strong>Waterfalls:</strong> Visit Attukal, Lakkam, Soochipara, and Meenmutty Falls.</li>
                                    <li style={sectionLiStyle}><strong>Spice Plantation Tours:</strong> Learn about Kerala’s famous spices.</li>
                                </ul>
                                <img
                                    src="https://lh5.googleusercontent.com/proxy/eYyTGHEcumA4zOmL9CtuzJPIMO2LPxbw61okhS4623rr7FjiLRfrqD0zB3pAtJrXrJKifuir24D93nRx-eiwezRDSQ4kkcwWURifvryBMcKd22eoCw4"
                                    alt="Munnar Activities"
                                    style={sectionImgStyle}
                                />
                            </div>

                            {/* Travel Tips */}
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="tips" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Travel Tips</h2>
                                <ul style={sectionUlStyle}>
                                    <li style={sectionLiStyle}>Pack warm clothes, especially for evenings and early mornings.</li>
                                    <li style={sectionLiStyle}>Carry rain gear if visiting during monsoon.</li>
                                    <li style={sectionLiStyle}>Book safaris and treks in advance during peak season.</li>
                                    <li style={sectionLiStyle}>Respect local customs and wildlife; don’t litter in forests or plantations.</li>
                                </ul>
                                <img
                                    src="https://gogeoholidays.wordpress.com/wp-content/uploads/2015/07/munnar-monsoon.jpg?w=736&h=443"
                                    alt="Munnar Travel Tips"
                                    style={sectionImgStyle}
                                />
                            </div>

                            {/* Conclusion */}
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="conclusion" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Conclusion</h2>
                                <p style={sectionPStyle}>
                                    Munnar and Wayanad are jewels of Kerala, offering a blend of natural beauty, adventure, and tranquility. Whether you’re sipping tea on a misty morning or trekking through lush forests, these hill stations promise an unforgettable escape into nature.
                                </p>
                                <img
                                    src="https://www.ksu.in/wp-content/uploads/2023/06/Munnar-Vs-Wayanad.jpg"
                                    alt="Munnar and Wayanad"
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

export default MunnarWayanadGuide;