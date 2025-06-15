import React from 'react';
import { FaSearch, FaMapMarkedAlt, FaBookmark, FaLightbulb, FaHotel, FaSlidersH, FaCreditCard, FaConciergeBell } from 'react-icons/fa';

const HowitWorks = () => {
    const sectionStyle = {
        padding: "3rem",
        marginBottom: "3rem",
        backgroundColor: "#fff",
        borderRadius: "1rem",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        border: "1px solid rgba(0,0,0,0.03)"
    };

    const stepNumberStyle = {
        width: "3rem",
        height: "3rem",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #3498db, #2c3e50)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "600",
        marginRight: "1.5rem",
        flexShrink: 0,
        boxShadow: "0 4px 8px rgba(44,62,80,0.15)"
    };

    return (
        <div className="container py-5 " style={{ maxWidth: "1200px" }}>
            {/* Hero Section */}
            <div className="text-center mb-5 mt-5"> 
                <div className="mb-4">
                    <span className="badge bg-primary bg-opacity-10 text-primary px-4 py-2 mb-3 " style={{ borderRadius: "2rem", fontSize: "0.9rem" }}>
                        TRAVEL PLANNING PROCESS
                    </span>
                </div>
                <h1 className="fw-bold mb-4" style={{ fontSize: "2.5rem", color: "#2c3e50", lineHeight: "1.3" }}>
                    Your Journey <span style={{ color: "#3498db" }}>Starts Here</span>
                </h1>
                <p className="text-muted mx-auto lead" style={{ maxWidth: "700px", fontSize: "1.25rem" }}>
                    Discover how our platform makes travel planning effortless and enjoyable
                </p>
            </div>

            {/* Website Functionality Section */}
            <section style={sectionStyle}>
                <div className="text-center mb-5">
                    <h2 className="fw-bold mb-3" style={{ fontSize: "1.75rem", color: "#2c3e50" }}>
                        Explore & Plan Your Journey
                    </h2>
                    <div className="mx-auto" style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, #3498db, #2c3e50)", borderRadius: "2px" }}></div>
                </div>

                <div className="row align-items-center mb-5 g-5">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="d-flex align-items-start">
                            <div style={stepNumberStyle}>
                                <FaSearch style={{ fontSize: "1.2rem" }} />
                            </div>
                            <div>
                                <h3 className="h4 fw-semibold mb-3" style={{ color: "#2c3e50" }}>Discover Destinations</h3>
                                <p className="text-muted mb-3" style={{ fontSize: "1.05rem" }}>
                                    Browse our extensive collection of travel guides covering cultural insights, must-see attractions, and hidden gems across 50+ global destinations.
                                </p>
                                <ul className="text-muted ps-0" style={{ listStyle: "none" }}>
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="badge bg-primary bg-opacity-10 text-primary me-2" style={{ padding: "0.25rem 0.5rem", borderRadius: "0.25rem" }}>✓</span>
                                        <span>Detailed destination guides with interactive maps</span>
                                    </li>
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="badge bg-primary bg-opacity-10 text-primary me-2" style={{ padding: "0.25rem 0.5rem", borderRadius: "0.25rem" }}>✓</span>
                                        <span>Seasonal recommendations and local tips</span>
                                    </li>
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="badge bg-primary bg-opacity-10 text-primary me-2" style={{ padding: "0.25rem 0.5rem", borderRadius: "0.25rem" }}>✓</span>
                                        <span>Curated collections based on travel styles</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="position-relative" style={{ borderRadius: "0.75rem", overflow: "hidden" }}>
                            <img
                                src="https://plus.unsplash.com/premium_photo-1688410049290-d7394cc7d5df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXVyb3BlfGVufDB8MXwwfHx8MA%3D%3D"
                                alt="Discover Destinations"
                                className="img-fluid rounded"
                                style={{
                                    border: "1px solid rgba(0,0,0,0.05)",
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                                    transition: "transform 0.3s ease"
                                }}
                            />
                            <div className="position-absolute bottom-0 start-0 end-0 p-3" style={{
                                background: "linear-gradient(transparent, rgba(0,0,0,0.5))",
                                color: "white",
                                borderBottomLeftRadius: "0.75rem",
                                borderBottomRightRadius: "0.75rem"
                            }}>
                                <small>Explore our destination guides</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center mb-5 g-5">
                    <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
                        <div className="d-flex align-items-start">
                            <div style={stepNumberStyle}>
                                <FaMapMarkedAlt style={{ fontSize: "1.2rem" }} />
                            </div>
                            <div>
                                <h3 className="h4 fw-semibold mb-3" style={{ color: "#2c3e50" }}>Build Your Itinerary</h3>
                                <p className="text-muted mb-3" style={{ fontSize: "1.05rem" }}>
                                    Use our powerful planning tools to create a customized travel itinerary that matches your preferences and schedule.
                                </p>
                                <ul className="text-muted ps-0" style={{ listStyle: "none" }}>
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="badge bg-primary bg-opacity-10 text-primary me-2" style={{ padding: "0.25rem 0.5rem", borderRadius: "0.25rem" }}>✓</span>
                                        <span>Drag-and-drop itinerary builder</span>
                                    </li>
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="badge bg-primary bg-opacity-10 text-primary me-2" style={{ padding: "0.25rem 0.5rem", borderRadius: "0.25rem" }}>✓</span>
                                        <span>Smart scheduling with travel time estimates</span>
                                    </li>
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="badge bg-primary bg-opacity-10 text-primary me-2" style={{ padding: "0.25rem 0.5rem", borderRadius: "0.25rem" }}>✓</span>
                                        <span>Collaborative planning with travel companions</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="position-relative" style={{ borderRadius: "0.75rem", overflow: "hidden" }}>
                            <img
                                src="https://images.pexels.com/photos/5405598/pexels-photo-5405598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 "
                                alt="Build Itinerary"
                                className="img-fluid rounded"
                                style={{
                                    border: "1px solid rgba(0,0,0,0.05)",
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                                    transition: "transform 0.3s ease"
                                }}
                            />
                            <div className="position-absolute bottom-0 start-0 end-0 p-3" style={{
                                background: "linear-gradient(transparent, rgba(0,0,0,0.5))",
                                color: "white",
                                borderBottomLeftRadius: "0.75rem",
                                borderBottomRightRadius: "0.75rem"
                            }}>
                                <small>Our intuitive itinerary planner</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center g-5">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="d-flex align-items-start">
                            <div style={stepNumberStyle}>
                                <FaBookmark style={{ fontSize: "1.2rem" }} />
                            </div>
                            <div>
                                <h3 className="h4 fw-semibold mb-3" style={{ color: "#2c3e50" }}>Save & Organize</h3>
                                <p className="text-muted mb-3" style={{ fontSize: "1.05rem" }}>
                                    Keep all your travel ideas organized in one place and access them anytime from any device.
                                </p>
                                <ul className="text-muted ps-0" style={{ listStyle: "none" }}>
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="badge bg-primary bg-opacity-10 text-primary me-2" style={{ padding: "0.25rem 0.5rem", borderRadius: "0.25rem" }}>✓</span>
                                        <span>Create multiple trip boards</span>
                                    </li>
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="badge bg-primary bg-opacity-10 text-primary me-2" style={{ padding: "0.25rem 0.5rem", borderRadius: "0.25rem" }}>✓</span>
                                        <span>Save favorite activities and accommodations</span>
                                    </li>
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="badge bg-primary bg-opacity-10 text-primary me-2" style={{ padding: "0.25rem 0.5rem", borderRadius: "0.25rem" }}>✓</span>
                                        <span>Set reminders for booking deadlines</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="position-relative" style={{ borderRadius: "0.75rem", overflow: "hidden" }}>
                            <img
                                src="https://images.pexels.com/photos/7368202/pexels-photo-7368202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Save & Organize"
                                className="img-fluid rounded"
                                style={{
                                    border: "1px solid rgba(0,0,0,0.05)",
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                                    transition: "transform 0.3s ease"
                                }}
                            />
                            <div className="position-absolute bottom-0 start-0 end-0 p-3" style={{
                                background: "linear-gradient(transparent, rgba(0,0,0,0.5))",
                                color: "white",
                                borderBottomLeftRadius: "0.75rem",
                                borderBottomRightRadius: "0.75rem"
                            }}>
                                <small>Organize your travel ideas</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Process Section */}
            <section style={sectionStyle}>
                <div className="text-center mb-5">
                    <h2 className="fw-bold mb-3" style={{ fontSize: "1.75rem", color: "#2c3e50" }}>
                        Easy Booking Process
                    </h2>
                    <div className="mx-auto" style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, #3498db, #2c3e50)", borderRadius: "2px" }}></div>
                </div>

                <div className="row g-4">
                    {[
                        {
                            icon: <FaHotel style={{ fontSize: "1.5rem" }} />,
                            title: "Select Services",
                            desc: "Choose from our network of vetted hotels, tours, and transportation providers with transparent pricing and authentic reviews.",
                            img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                            items: [
                                "Filter by price, rating, and amenities",
                                "View verified traveler photos",
                                "Compare similar options side-by-side"
                            ]
                        },
                        {
                            icon: <FaSlidersH style={{ fontSize: "1.5rem" }} />,
                            title: "Customize Your Trip",
                            desc: "Tailor every aspect of your booking to match your preferences with our flexible customization options.",
                            img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                            items: [
                                "Add special requests and preferences",
                                "Select room types and bed configurations",
                                "Choose dietary requirements for meals"
                            ]
                        },
                        {
                            icon: <FaCreditCard style={{ fontSize: "1.5rem" }} />,
                            title: "Secure Payment",
                            desc: "Complete your booking with confidence using our secure payment system with multiple options.",
                            img: "https://images.unsplash.com/photo-1556742077-0a6b6a4a4ac4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            items: [
                                "Credit cards, PayPal, and bank transfers",
                                "SSL encryption for all transactions",
                                "Instant booking confirmation"
                            ]
                        },
                        {
                            icon: <FaConciergeBell style={{ fontSize: "1.5rem" }} />,
                            title: "Trip Management",
                            desc: "Access and manage all your bookings in one place with our comprehensive trip management tools.",
                            img: "https://images.unsplash.com/photo-1538362333531-6b503aaf6115?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            items: [
                                "Centralized booking dashboard",
                                "Modification and cancellation options",
                                "24/7 customer support"
                            ]
                        }
                    ].map((item, index) => (
                        <div className="col-md-6" key={index}>
                            <div className="h-100 p-0 overflow-hidden" style={{
                                borderRadius: "0.75rem",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease"
                            }}>
                                <div className="position-relative">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="img-fluid w-100"
                                        style={{ height: "200px", objectFit: "cover" }}
                                    />
                                    <div className="position-absolute top-0 start-0 m-3">
                                        <div className="bg-white p-2 rounded-circle shadow-sm">
                                            <div className="text-primary">
                                                {item.icon}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="h5 fw-semibold mb-3" style={{ color: "#2c3e50" }}>{item.title}</h3>
                                    <p className="text-muted mb-3">{item.desc}</p>
                                    <ul className="text-muted small ps-3">
                                        {item.items.map((listItem, i) => (
                                            <li className="mb-2" key={i}>{listItem}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Account Features Section */}
            <section style={sectionStyle}>
                <div className="text-center mb-5">
                    <h2 className="fw-bold mb-3" style={{ fontSize: "1.75rem", color: "#2c3e50" }}>
                        Your Travel Account
                    </h2>
                    <div className="mx-auto" style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, #3498db, #2c3e50)", borderRadius: "2px" }}></div>
                </div>

                <div className="row g-4">
                    {[
                        {
                            icon: <FaLightbulb style={{ fontSize: "1.75rem" }} />,
                            title: "Smart Recommendations",
                            desc: "Our AI analyzes your preferences to suggest destinations, activities, and deals you'll love.",
                            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                        },
                        {
                            icon: <FaMapMarkedAlt style={{ fontSize: "1.75rem" }} />,
                            title: "Trip Planning Tools",
                            desc: "Comprehensive tools to plan every detail of your trip with ease and precision.",
                            img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                        },
                        {
                            icon: <FaConciergeBell style={{ fontSize: "1.75rem" }} />,
                            title: "Dedicated Support",
                            desc: "Access to travel experts before, during, and after your trip for any assistance needed.",
                            img: "https://plus.unsplash.com/premium_photo-1726797757852-d718e284b86d?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }
                    ].map((item, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="h-100 p-0 overflow-hidden" style={{
                                borderRadius: "0.75rem",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                                transition: "transform 0.3s ease"
                            }}>
                                <div className="position-relative">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="img-fluid w-100"
                                        style={{ height: "180px", objectFit: "cover" }}
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-block mb-3">
                                        <div className="text-primary">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <h3 className="h5 fw-semibold mb-3" style={{ color: "#2c3e50" }}>{item.title}</h3>
                                    <p className="text-muted small">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-5 my-4">
                <div className="p-5 rounded-3" style={{
                    background: "linear-gradient(135deg, rgba(52,152,219,0.05) 0%, rgba(44,62,80,0.05) 100%)",
                    border: "1px solid rgba(52,152,219,0.1)"
                }}>
                    <h2 className="fw-bold mb-4" style={{ fontSize: "2rem", color: "#2c3e50" }}>
                        Ready to Begin Your Journey?
                    </h2>
                    <p className="text-muted mb-4 mx-auto lead" style={{ maxWidth: "600px", fontSize: "1.15rem" }}>
                        Join our community of travelers and experience stress-free trip planning
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                        <button className="btn btn-primary px-4 py-3 fw-semibold rounded-pill" style={{
                            minWidth: "200px",
                            boxShadow: "0 4px 12px rgba(52,152,219,0.3)"
                        }}>
                            Create Free Account
                        </button>
                        <button className="btn btn-outline-primary px-4 py-3 fw-semibold rounded-pill" style={{
                            minWidth: "200px",
                            borderWidth: "2px"
                        }}>
                            Explore Destinations
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowitWorks;