import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaCalendarAlt, FaMapMarkerAlt, FaHeart, FaRegHeart, FaShare, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";

const BlogPage = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [savedPosts, setSavedPosts] = useState([]);
    const [likedPosts, setLikedPosts] = useState([]);

    // Sample blog data
    const blogPosts = [
        {
            id: 1,
            title: "10 Hidden Beaches in Goa You Must Visit",
            excerpt: "Discover the secret shores of Goa away from the crowded tourist spots.",
            category: "goa",
            date: "2025-05-15",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            author: "Sarah Johnson",
            likes: 124,
        },
        {
            id: 2,
            title: "The Ultimate Guide to Pangong Tso Camping",
            excerpt: "Everything you need to know for an unforgettable lakeside camping experience.",
            category: "pangong",
            date: "2025-04-28",
            readTime: "8 min read",
            image: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            author: "Rajesh Kumar",
            likes: 89,
        },
        {
            id: 3,
            title: "Munnar vs Wayanad: Which Hill Station is Right for You?",
            excerpt: "A detailed comparison to help you choose your perfect mountain getaway.",
            category: "munnar-wayanad",
            date: "2025-06-02",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            author: "Priya Menon",
            likes: 156,
        },
        {
            id: 4,
            title: "Maldives on a Budget: Luxury Without Breaking the Bank",
            excerpt: "Smart tips to experience Maldivian paradise without the premium price tag.",
            category: "maldives",
            date: "2025-05-22",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            author: "David Chen",
            likes: 210,
        },
        {
            id: 5,
            title: "Monsoon Magic in Goa: Why It's the Best Time to Visit",
            excerpt: "Experience Goa's lush green transformation during the rainy season.",
            category: "goa",
            date: "2025-06-10",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            author: "Maria Fernandes",
            likes: 78,
        },
        {
            id: 6,
            title: "Pangong Tso Photography Guide: Capturing the Blue Wonder",
            excerpt: "Professional tips for photographing one of the world's most stunning lakes.",
            category: "pangong",
            date: "2025-05-30",
            readTime: "9 min read",
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            author: "Arjun Patel",
            likes: 142,
        },
        {
            id: 7,
            title: "10 Hidden Beaches in Goa You Must Visit",
            excerpt: "Discover the secret shores of Goa away from the crowded tourist spots.",
            category: "goa",
            date: "2025-05-15",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            author: "Sarah Johnson",
            likes: 124,
        },
        {
            id: 8,
            title: "Goa Nightlife Guide: Best Clubs and Beach Parties",
            excerpt: "Your ultimate guide to experiencing Goa's vibrant nightlife scene.",
            category: "goa",
            date: "2025-04-22",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            author: "Rahul Verma",
            likes: 98,
        },
        {
            id: 9,
            title: "Goa's Best Seafood Shacks: Local's Picks",
            excerpt: "Where to find the freshest seafood at beachfront shacks in North and South Goa.",
            category: "goa",
            date: "2025-06-10",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1502301101255-0b51e5d596cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            author: "Maria Fernandes",
            likes: 87,
        },

        // Pangong Tso articles
        {
            id: 10,
            title: "The Ultimate Guide to Pangong Tso Camping",
            excerpt: "Everything you need to know for an unforgettable lakeside camping experience.",
            category: "pangong",
            date: "2025-04-28",
            readTime: "8 min read",
            image: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            author: "Rajesh Kumar",
            likes: 89,
        },
        {
            id: 11,
            title: "Pangong Tso in Winter: A Frozen Wonderland",
            excerpt: "What to expect when visiting the lake during freezing winter months.",
            category: "pangong",
            date: "2025-01-15",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            author: "Priya Sharma",
            likes: 112,
        },
        {
            id: 6,
            title: "Road Trip to Pangong Tso from Leh",
            excerpt: "Complete itinerary for the breathtaking journey through Ladakh's mountains.",
            category: "pangong",
            date: "2025-05-30",
            readTime: "9 min read",
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            author: "Arjun Patel",
            likes: 142,
        },

        // Munnar & Wayanad articles
        {
            id: 7,
            title: "Munnar vs Wayanad: Which Hill Station is Right for You?",
            excerpt: "A detailed comparison to help you choose your perfect mountain getaway.",
            category: "munnar-wayanad",
            date: "2025-06-02",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            author: "Priya Menon",
            likes: 156,
        },
        {
            id: 8,
            title: "Tea Plantation Stays in Munnar",
            excerpt: "Best heritage bungalows and homestays amidst rolling tea gardens.",
            category: "munnar-wayanad",
            date: "2025-03-18",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            author: "Thomas Mathew",
            likes: 92,
        },
        {
            id: 9,
            title: "Wayanad's Hidden Waterfalls and Trekking Trails",
            excerpt: "Off-the-beaten-path natural wonders in Kerala's green paradise.",
            category: "munnar-wayanad",
            date: "2025-04-05",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            author: "Anoop Raj",
            likes: 104,
        },



        {
            id: 11,
            title: "Best Overwater Bungalows in Maldives for Honeymooners",
            excerpt: "Romantic stays with direct lagoon access and private pools.",
            category: "maldives",
            date: "2025-02-14",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            author: "Sophia Lee",
            likes: 187,
        },
        {
            id: 12,
            title: "Maldives Snorkeling Guide: Best House Reefs",
            excerpt: "Where to see the most vibrant coral and marine life right from your resort.",
            category: "maldives",
            date: "2025-06-15",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            author: "Carlos Mendez",
            likes: 132,
        },

        // Additional popular destinations
        {
            id: 13,
            title: "Kerala Backwaters: Complete Houseboat Guide",
            excerpt: "How to choose the perfect houseboat for your Alleppey adventure.",
            category: "kerala",
            date: "2025-04-10",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            author: "Ananya Nair",
            likes: 145,
        },
        {
            id: 14,
            title: "Rajasthan Forts and Palaces Tour Itinerary",
            excerpt: "7-day royal journey through Jaipur, Udaipur and Jodhpur.",
            category: "rajasthan",
            date: "2025-03-05",
            readTime: "8 min read",
            image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            author: "Vikram Singh",
            likes: 178,
        },
        {
            id: 15,
            title: "Best Time to Visit Shimla and Manali",
            excerpt: "Seasonal guide to enjoying the Himalayan hill stations.",
            category: "himachal",
            date: "2025-01-20",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            author: "Neha Kapoor",
            likes: 121,
        }
    ];
    // Sample categories for filtering
    const categories = [
        { id: "all", name: "All Articles" },
        { id: "goa", name: "Goa" },
        { id: "pangong", name: "Pangong Tso" },
        { id: "munnar-wayanad", name: "Munnar & Wayanad" },
        { id: "maldives", name: "Maldives" },
        { id: "kerala", name: "Kerala" },
        { id: "rajasthan", name: "Rajasthan" },
        { id: "himachal", name: "Himachal" },
        { id: "munnar-wayanad", name: "Munnar & Wayanad" },
        { id: "maldives", name: "Maldives" },
        { id: "kerala", name: "Kerala" },
        { id: "rajasthan", name: "Rajasthan" },
        { id: "himachal", name: "Himachal" }
    ];

    const toggleSavePost = (postId) => {
        if (savedPosts.includes(postId)) {
            setSavedPosts(savedPosts.filter(id => id !== postId));
        } else {
            setSavedPosts([...savedPosts, postId]);
        }
    };

    const toggleLikePost = (postId) => {
        if (likedPosts.includes(postId)) {
            setLikedPosts(likedPosts.filter(id => id !== postId));
            // In a real app, you would also decrement the like count in your database
        } else {
            setLikedPosts([...likedPosts, postId]);
            // In a real app, you would also increment the like count in your database
        }
    };

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === "all" || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="container py-5">
            {/* Hero Section */}
            <div className="row align-items-center mb-5 mt-5"   >
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold mb-3">TravelPlanner Blog</h1>
                    <p className="lead text-muted">
                        Discover expert travel tips, destination guides, and insider knowledge to make your next trip unforgettable.
                    </p>
                </div>
                <div className="col-lg-6">
                    <div
                        className="p-4 rounded-4 shadow-sm"
                        style={{
                            background: "linear-gradient(135deg, #e0e7ff 0%, #f3f4f6 100%)",
                            border: "1px solid rgba(99, 102, 241, 0.2)"
                        }}
                    >
                        <h5 className="mb-3 text-primary">Subscribe to our Newsletter</h5>
                        <div className="d-flex">
                            <input
                                type="email"
                                className="form-control me-2"
                                placeholder="Your email address"
                            />
                            <button className="btn btn-primary">Subscribe</button>
                        </div>
                        <small className="text-muted mt-2 d-block">
                            Get weekly travel inspiration right to your inbox.
                        </small>
                    </div>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="row mb-4">
                <div className="col-md-8 mb-3 mb-md-0">
                    <div className="input-group">
                        <span className="input-group-text bg-white border-end-0">
                            <FaSearch className="text-muted" />
                        </span>
                        <input
                            type="text"
                            className="form-control border-start-0"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-4">
                    <select
                        className="form-select"
                        value={activeCategory}
                        onChange={(e) => setActiveCategory(e.target.value)}
                    >
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Category Chips - Mobile */}
            <div className="d-flex flex-wrap mb-4 d-lg-none">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={`btn btn-sm me-2 mb-2 ${activeCategory === category.id ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setActiveCategory(category.id)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Main Content */}
            <div className="row">
                {/* Blog Posts */}
                <div className="col-lg-8">
                    {filteredPosts.length > 0 ? (
                        <div className="row">
                            {filteredPosts.map((post) => (
                                <div key={post.id} className="col-md-6 mb-4">
                                    <div className="card h-100 shadow-sm border-0 overflow-hidden">
                                        <div className="position-relative">
                                            <img
                                                src={post.image}
                                                className="card-img-top"
                                                alt={post.title}
                                                style={{ height: "200px", objectFit: "cover" }}
                                            />
                                            <div className="position-absolute top-0 end-0 p-2">
                                                <button
                                                    className="btn btn-light btn-sm rounded-circle shadow-sm"
                                                    onClick={() => toggleSavePost(post.id)}
                                                    aria-label={savedPosts.includes(post.id) ? "Unsave post" : "Save post"}
                                                >
                                                    {savedPosts.includes(post.id) ? (
                                                        <FaBookmark className="text-primary" />
                                                    ) : (
                                                        <FaRegBookmark className="text-muted" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="d-flex align-items-center mb-2">
                                                <span className="badge bg-primary bg-opacity-10 text-primary me-2">
                                                    {categories.find(c => c.id === post.category)?.name}
                                                </span>
                                                <small className="text-muted">
                                                    <BiTimeFive className="me-1" />
                                                    {post.readTime}
                                                </small>
                                            </div>
                                            <h5 className="card-title mb-3">
                                                <Link to={`/blog/${post.id}`} className="text-dark text-decoration-none">
                                                    {post.title}
                                                </Link>
                                            </h5>
                                            <p className="card-text text-muted mb-3">{post.excerpt}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <small className="text-muted">
                                                    <FaCalendarAlt className="me-1" />
                                                    {formatDate(post.date)}
                                                </small>
                                                <div className="d-flex">
                                                    <button
                                                        className="btn btn-link text-decoration-none p-0 me-2"
                                                        onClick={() => toggleLikePost(post.id)}
                                                        aria-label="Like post"
                                                    >
                                                        {likedPosts.includes(post.id) ? (
                                                            <FaHeart className="text-danger" />
                                                        ) : (
                                                            <FaRegHeart className="text-muted" />
                                                        )}
                                                        <span className="ms-1">{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                                                    </button>
                                                    <button className="btn btn-link text-decoration-none p-0">
                                                        <FaShare className="text-muted" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-5">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4076/4076478.png"
                                alt="No results"
                                style={{ width: "120px", opacity: 0.7 }}
                                className="mb-3"
                            />
                            <h5 className="text-muted">No articles found</h5>
                            <p className="text-muted">Try adjusting your search or filter criteria</p>
                            <button
                                className="btn btn-outline-primary"
                                onClick={() => {
                                    setSearchQuery("");
                                    setActiveCategory("all");
                                }}
                            >
                                Reset filters
                            </button>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="col-lg-4">
                    <div className="sticky-top" style={{ top: "20px" }}>
                        {/* Popular Destinations */}
                        <div className="card mb-4 border-0 shadow-sm">
                            <div className="card-body">
                                <h6 className="card-title fw-bold mb-3 text-primary">
                                    <FaMapMarkerAlt className="me-2" />
                                    Popular Destinations
                                </h6>
                                <div className="list-group list-group-flush">
                                    <Link
                                        to="/goa-guide"
                                        className="list-group-item list-group-item-action border-0 py-2 d-flex align-items-center"
                                    >
                                        <img
                                            src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=60&fit=crop"
                                            alt="Goa"
                                            className="rounded me-3"
                                            style={{ width: "40px", height: "40px", objectFit: "cover" }}
                                        />
                                        <div>
                                            <div className="fw-medium">Goa, India</div>
                                            <small className="text-muted">Beaches • Nightlife • Culture</small>
                                        </div>
                                    </Link>
                                    <Link
                                        to="/PangongTso-guide"
                                        className="list-group-item list-group-item-action border-0 py-2 d-flex align-items-center"
                                    >
                                        <img
                                            src="https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=60&fit=crop"
                                            alt="Pangong Tso"
                                            className="rounded me-3"
                                            style={{ width: "40px", height: "40px", objectFit: "cover" }}
                                        />
                                        <div>
                                            <div className="fw-medium">Pangong Tso, Ladakh</div>
                                            <small className="text-muted">Lakes • Camping • Adventure</small>
                                        </div>
                                    </Link>
                                    <Link
                                        to="/MunnarWayanad-guide"
                                        className="list-group-item list-group-item-action border-0 py-2 d-flex align-items-center"
                                    >
                                        <img
                                            src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=60&fit=crop"
                                            alt="Munnar"
                                            className="rounded me-3"
                                            style={{ width: "40px", height: "40px", objectFit: "cover" }}
                                        />
                                        <div>
                                            <div className="fw-medium">Munnar & Wayanad</div>
                                            <small className="text-muted">Tea Gardens • Wildlife • Trekking</small>
                                        </div>
                                    </Link>
                                    <Link
                                        to="/maldives-guide"
                                        className="list-group-item list-group-item-action border-0 py-2 d-flex align-items-center"
                                    >
                                        <img
                                            src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=60&fit=crop"
                                            alt="Maldives"
                                            className="rounded me-3"
                                            style={{ width: "40px", height: "40px", objectFit: "cover" }}
                                        />
                                        <div>
                                            <div className="fw-medium">Maldives</div>
                                            <small className="text-muted">Resorts • Diving • Luxury</small>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Popular Articles */}
                        <div className="card mb-4 border-0 shadow-sm">
                            <div className="card-body">
                                <h6 className="card-title fw-bold mb-3 text-primary">
                                    Most Popular
                                </h6>
                                <div className="list-group list-group-flush">
                                    {blogPosts
                                        .sort((a, b) => b.likes - a.likes)
                                        .slice(0, 3)
                                        .map((post) => (
                                            <Link
                                                key={post.id}
                                                to={`/blog/${post.id}`}
                                                className="list-group-item list-group-item-action border-0 py-2"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src={post.image}
                                                        alt={post.title}
                                                        className="rounded me-3"
                                                        style={{ width: "60px", height: "40px", objectFit: "cover" }}
                                                    />
                                                    <div>
                                                        <div className="fw-medium text-truncate" style={{ maxWidth: "180px" }}>
                                                            {post.title}
                                                        </div>
                                                        <small className="text-muted">
                                                            {post.likes} likes • {post.readTime}
                                                        </small>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="card border-0 shadow-sm">
                            <div className="card-body">
                                <h6 className="card-title fw-bold mb-3 text-primary">
                                    Get Travel Tips
                                </h6>
                                <p className="small text-muted mb-3">
                                    Join 10,000+ travelers who receive our weekly tips on hidden gems and travel hacks.
                                </p>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control form-control-sm"
                                        placeholder="Your email address"
                                    />
                                </div>
                                <button className="btn btn-sm btn-primary w-100">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;