import { useEffect } from 'react';

const PangongTsoGuide = () => {
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
        height: '340px',
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
        color: '#0ea5e9',
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
        margin: '1.2rem 0',
        border: '3px solid #e5e7eb',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)'
    };

    // Gallery grid style
    const galleryGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.5rem',
        margin: '2rem 0'
    };

    return (
        <div
            className="min-vh-100 d-flex flex-column"
            style={{
                background: 'linear-gradient(120deg,rgb(255, 255, 255) 0%, #f0f9ff 100%)'
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
                                The Ultimate Travel Guide to Pangong Tso: Heaven on Earth
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
                            {/* Gallery Section */}
                            <div style={galleryGridStyle}>
                                <img
                                    src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTI9acvXq_ELoMnzU_YceR3ezdMbCcXekyI7eXJRUAxVgzpI595MN0kq1klQd0SgYd8NkdoePDCss1hM0glt-xleiHu03otHtS5e9mwOw"
                                    alt="Pangong Tso Lake"
                                    style={sectionImgStyle}
                                />
                                <img
                                    src="https://img1.wsimg.com/isteam/ip/bf84abf5-9acb-46e6-9192-7693cf0a5a3d/pangong-lake-1000x435.jpg"
                                    alt="Pangong Tso Winter"
                                    style={sectionImgStyle}
                                />
                                <img
                                    src="https://img.buzzfeed.com/buzzfeed-static/static/2016-11/22/5/asset/buzzfeed-prod-web10/sub-buzz-17770-1479809749-1.jpg?downsize=1600%3A%2A&output-quality=auto&output-format=auto"
                                    alt="3 Idiots Point"
                                    style={sectionImgStyle}
                                />
                                <img
                                    src="https://static.toiimg.com/photo/105293415.cms"
                                    alt="Pangong Tso Lake in Ladakh"
                                    style={sectionImgStyle}
                                />
                            </div>
                            <div className="mb-4">
                                <img
                                    src="https://altitudeadventureindia.com/wp-content/uploads/2020/03/Pangong-lake-Ladakh.jpg"
                                    alt="Pangong Tso Lake"
                                    className="img-fluid"
                                    style={coverImageStyle}
                                />
                            </div>
                            {/* Introduction */}
                            <div style={contentSectionStyle}>
                                <h2 id="introduction" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Introduction</h2>
                                <p style={sectionPStyle}>
                                    Pangong Tso, the breathtaking high-altitude lake straddling the India-China border, is one of Ladakh's most spectacular sights. Famous for its ever-changing blue waters that shift from azure to turquoise to emerald green, this 134 km long lake (about 60% in China) sits at an altitude of 4,350 meters (14,270 ft). Made internationally famous by the Bollywood movie "3 Idiots," Pangong Tso offers surreal landscapes that look straight out of a painting.
                                </p>
                                <img
                                    src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTI9acvXq_ELoMnzU_YceR3ezdMbCcXekyI7eXJRUAxVgzpI595MN0kq1klQd0SgYd8NkdoePDCss1hM0glt-xleiHu03otHtS5e9mwOw"
                                    alt="Pangong Tso Lake"
                                    style={sectionImgStyle}
                                />
                            </div>
                            {/* Highlights */}
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="places-to-visit" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Key Highlights of Pangong Tso</h2>
                                <ul style={sectionUlStyle}>
                                    <li style={sectionLiStyle}>
                                        <strong>The Lake Itself</strong> - The mesmerizing color-changing waters surrounded by barren mountains create a landscape unlike anywhere else on Earth.
                                        <img src="https://static.toiimg.com/photo/105293415.cms" alt="Pangong Tso Lake" style={sectionImgStyle} />
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Spangmik Village</strong> - The last civilian village on the Indian side, offering homestays and the best views of the lake.
                                        <img src="https://gohimalaya.wordpress.com/wp-content/uploads/2015/07/dsc02438.jpg" alt="Spangmik Village" style={sectionImgStyle} />
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>3 Idiots Point</strong> - The famous shooting location from the Bollywood movie, now a popular photo spot.
                                        <img src="https://img.buzzfeed.com/buzzfeed-static/static/2016-11/22/5/asset/buzzfeed-prod-web10/sub-buzz-17770-1479809749-1.jpg?downsize=1600%3A%2A&output-quality=auto&output-format=auto" alt="3 Idiots Point" style={sectionImgStyle} />
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Bird Watching</strong> - Spot migratory birds like Brahminy ducks and seagulls, especially during summer months.
                                        <img src="https://altitudeadventureindia.com/wp-content/uploads/2020/03/Pangong-lake-Ladakh.jpg" alt="Birds at Pangong" style={sectionImgStyle} />
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Camping by the Lake</strong> - Experience the magic of staying overnight in Swiss tents with the lake just steps away.
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_tFkxVo4hctRGLfDbQ7ywx-QRwSjOyQIpA&s" alt="Camping at Pangong" style={sectionImgStyle} />
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Stargazing</strong> - With minimal light pollution, the night sky at Pangong Tso is a celestial wonderland.
                                        <img src="https://farm6.staticflickr.com/5793/22369237045_ace211f544_z.jpg" alt="Stargazing at Pangong" style={sectionImgStyle} />
                                    </li>
                                </ul>
                            </div>
                            {/* Best Time to Visit */}
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="best-time-to-visit" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Best Time to Visit Pangong Tso</h2>
                                <p style={sectionPStyle}>
                                    The best time to visit Pangong Tso depends on what experience you're seeking:
                                </p>
                                <ul style={sectionUlStyle}>
                                    <li style={sectionLiStyle}>
                                        <strong>May to September:</strong> The most popular time when the lake is accessible and temperatures are moderate (daytime 10-20°C). The water shows its famous blue colors during these months.
                                        <img src="https://altitudeadventureindia.com/wp-content/uploads/2020/03/Pangong-lake-Ladakh.jpg" alt="Pangong Tso Summer" style={sectionImgStyle} />
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Winter (October-April):</strong> The lake freezes completely, creating a magical white landscape. However, access is extremely difficult due to heavy snowfall on the roads.
                                        <img src="https://img1.wsimg.com/isteam/ip/bf84abf5-9acb-46e6-9192-7693cf0a5a3d/pangong-lake-1000x435.jpg" alt="Pangong Tso Winter" style={sectionImgStyle} />
                                    </li>
                                </ul>
                                <p style={sectionPStyle}>
                                    Note that the lake is closed to tourists during certain periods due to weather conditions or military restrictions. Always check current status before planning your visit.
                                </p>
                            </div>
                            {/* How to Reach */}
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="how-to-reach" className="h4 fw-bold mb-3" style={sectionTitleStyle}>How to Reach Pangong Tso</h2>
                                <p style={sectionPStyle}>
                                    Reaching Pangong Tso requires careful planning due to its remote location and high altitude:
                                </p>
                                <ul style={sectionUlStyle}>
                                    <li style={sectionLiStyle}>
                                        <strong>From Leh:</strong> The most common route is from Leh (160 km, 5-6 hour drive). The journey goes via Chang La pass (5,360m), the third highest motorable road in the world.
                                        <img src="https://farm6.staticflickr.com/5793/22369237045_ace211f544_z.jpg" alt="Travel to Pangong" style={sectionImgStyle} />
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Permits:</strong> Indian citizens need Inner Line Permits (ILP) while foreigners require Protected Area Permits (PAP). These can be obtained in Leh through registered tour operators.
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Transport Options:</strong>
                                        <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem' }}>
                                            <li>Private taxis from Leh (₹6000-8000 round trip)</li>
                                            <li>Shared jeeps (more economical but less flexible)</li>
                                            <li>Motorcycle/bike rentals (for experienced riders only)</li>
                                        </ul>
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Important Notes:</strong>
                                        <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem' }}>
                                            <li>There are no fuel stations between Leh and Pangong Tso</li>
                                            <li>Mobile network is very limited beyond Tangtse village</li>
                                            <li>ATM facilities are unavailable near the lake</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            {/* Where to Stay */}
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="accommodation" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Where to Stay at Pangong Tso</h2>
                                <p style={sectionPStyle}>
                                    Accommodation options around Pangong Tso are basic but offer unforgettable experiences:
                                </p>
                                <ul style={sectionUlStyle}>
                                    <li style={sectionLiStyle}>
                                        <strong>Lakeside Camps:</strong> Swiss tents with basic amenities (₹2000-5000 per night). Most offer heating and attached toilets.
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_tFkxVo4hctRGLfDbQ7ywx-QRwSjOyQIpA&s" alt="Lakeside Camp" style={sectionImgStyle} />
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Homestays in Spangmik:</strong> Experience local hospitality in village homes (₹1000-2000 per night).
                                        <img src="https://gohimalaya.wordpress.com/wp-content/uploads/2015/07/dsc02438.jpg" alt="Spangmik Homestay" style={sectionImgStyle} />
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Guest Houses:</strong> Basic rooms in Tangtse village (about 35km before the lake).
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Important Notes:</strong>
                                        <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem' }}>
                                            <li>No luxury hotels available near the lake</li>
                                            <li>Electricity is limited (often generator-run for few hours)</li>
                                            <li>Heating is essential even in summer months</li>
                                            <li>Book well in advance during peak season (June-September)</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            {/* Things to Do */}
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="things-to-do" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Things to Do at Pangong Tso</h2>
                                <ul style={sectionUlStyle}>
                                    <li style={sectionLiStyle}>
                                        <strong>Photography:</strong> The ever-changing colors of the lake and dramatic landscapes make it a photographer's paradise.
                                        <img src="https://static.toiimg.com/photo/105293415.cms" alt="Photography at Pangong" style={sectionImgStyle} />
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Kayaking:</strong> During summer months, some camps offer kayaking on the lake's tranquil waters.
                                        <img src="https://altitudeadventureindia.com/wp-content/uploads/2020/03/Pangong-lake-Ladakh.jpg" alt="Kayaking Pangong" style={sectionImgStyle} />
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Meditation:</strong> The serene environment makes it perfect for meditation and yoga.
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Village Walks:</strong> Explore Spangmik village to understand local life in this harsh environment.
                                        <img src="https://gohimalaya.wordpress.com/wp-content/uploads/2015/07/dsc02438.jpg" alt="Village Walks Pangong" style={sectionImgStyle} />
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Sunrise/Sunset Views:</strong> The play of light on the lake and mountains creates magical moments.
                                        <img src="https://c0.wallpaperflare.com/preview/959/1004/41/pangong-tso-thumbnail.jpg" alt="Sunset at Pangong" style={sectionImgStyle} />
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Star Gazing:</strong> With minimal light pollution, the night sky is spectacular.
                                        <img src="https://farm6.staticflickr.com/5793/22369237045_ace211f544_z.jpg" alt="Stargazing at Pangong" style={sectionImgStyle} />
                                    </li>
                                </ul>
                            </div>
                            {/* Travel Tips */}
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="travel-tips" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Essential Travel Tips</h2>
                                <ul style={sectionUlStyle}>
                                    <li style={sectionLiStyle}>
                                        <strong>Acclimatize Properly:</strong> Spend at least 2 days in Leh (3,500m) before heading to Pangong Tso (4,350m) to avoid altitude sickness.
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Pack Warm Clothing:</strong> Temperatures can drop below freezing even in summer. Bring layers, warm jackets, gloves, and hats.
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Stay Hydrated:</strong> The dry air and altitude cause rapid dehydration. Drink 3-4 liters of water daily.
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Carry Essentials:</strong> Bring sunscreen (SPF 50+), lip balm, sunglasses, medications, power banks (limited electricity), and cash (no ATMs).
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Respect the Environment:</strong> The lake is ecologically sensitive. Avoid littering and follow all environmental guidelines.
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>No Swimming:</strong> The lake water is extremely cold and swimming is prohibited due to safety and environmental concerns.
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Limited Connectivity:</strong> Mobile networks are unreliable. Inform family about your plans in advance.
                                    </li>
                                    <li style={sectionLiStyle}>
                                        <strong>Travel Insurance:</strong> Highly recommended due to the remote location and high altitude.
                                    </li>
                                </ul>
                                <img
                                    src="https://altitudeadventureindia.com/wp-content/uploads/2020/03/Pangong-lake-Ladakh.jpg"
                                    alt="Pangong Tso Tips"
                                    style={sectionImgStyle}
                                />
                            </div>
                            {/* Conclusion */}
                            <hr className="my-4" />
                            <div style={contentSectionStyle}>
                                <h2 id="conclusion" className="h4 fw-bold mb-3" style={sectionTitleStyle}>Conclusion</h2>
                                <p style={sectionPStyle}>
                                    Pangong Tso is more than just a destination - it's an experience that stays with you forever. The surreal beauty of its changing colors, the stark majesty of the surrounding mountains, and the profound silence of this high-altitude desert create memories that last a lifetime. While reaching Pangong Tso requires effort and preparation, the reward is one of the most breathtaking landscapes on our planet. Whether you're a nature lover, photographer, adventurer, or simply seeking peace, Pangong Tso offers an unparalleled connection with nature's raw beauty.
                                </p>
                                <img
                                    src="https://c0.wallpaperflare.com/preview/959/1004/41/pangong-tso-thumbnail.jpg"
                                    alt="Pangong Tso Sunset"
                                    style={sectionImgStyle}
                                />
                                <p style={sectionPStyle}>
                                    As you plan your visit, remember that this fragile ecosystem deserves our utmost respect. Travel responsibly, leave no trace, and carry back only photographs and memories of this magical blue jewel in the Himalayas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PangongTsoGuide;