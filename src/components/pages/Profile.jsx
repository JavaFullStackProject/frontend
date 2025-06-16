import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = ({ user }) => {
    // Default user data if not provided
    const userData = user || {
        name: "rohit",
        email: "rohit@gmail.com",
        city: "Hyderabad, India",
        emailVerified: true,
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Hero Section */}
            <div className="position-relative container-fluid px-0 hero-section">
                {/* Video Background */}
                <video autoPlay loop muted playsInline className="hero-video">
                    <source src="https://cdn.pixabay.com/video/2021/09/11/88207-602915574_tiny.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-overlay h-100 d-flex align-items-center justify-content-center">
                    <div className="text-center text-white p-5 rounded">
                        <h1 className="display-4 fw-bold text-shadow-dark">Your Account</h1>
                        <p className="lead text-shadow-light">
                            Manage your personal information and email settings.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="container my-5">
                <div className="row">
                    {/* Personal Info */}
                    <div className="col-md-6 mb-4">
                        <div className="card h-100 shadow-sm card-hover">
                            <div className="card-body">
                                <h2 className="card-title mb-3">Personal Info</h2>
                                <div className="mb-3">
                                    <div className="fw-bold">Name</div>
                                    <div className="text-muted">{userData.name}</div>
                                </div>
                                <div className="mb-3">
                                    <div className="fw-bold">Home City</div>
                                    <div className="text-muted">{userData.city}</div>
                                </div>
                                <Link
                                    to="/app/account/profile/edit"
                                    className="btn btn-outline-primary btn-lg"
                                    aria-label="Edit Personal Info"
                                >
                                    Edit Personal Info
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Email Addresses */}
                    <div className="col-md-6 mb-4">
                        <div className="card h-100 shadow-sm card-hover">
                            <div className="card-body">
                                <h2 className="card-title mb-3">Email Addresses</h2>
                                <p className="text-muted mb-3">
                                    Set primary email address and manage Inbox Sync.
                                </p>
                                <div className="mb-3">
                                    <Link
                                        to="/app/account/profile/emails/7dd5ed79-d51e-4dff-bc13-9ca4fdc15d94"
                                        className="d-block text-decoration-none"
                                    >
                                        {userData.email}
                                    </Link>
                                    <div className="text-muted mt-1">
                                        <div>Primary Email Address</div>
                                        <div className="mt-1">
                                            Email Activation{" "}
                                            <span className="badge bg-info text-white ms-2">
                                                {userData.emailVerified ? "Activated" : "Not Activated"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    to="/app/account/profile/emails/add"
                                    className="btn btn-outline-primary btn-lg"
                                    aria-label="Add Email Address"
                                >
                                    Add Email Address
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Password Section */}
                    <div className="col-12 mt-4">
                        <div className="card shadow-sm card-hover">
                            <div className="card-body">
                                <h2 className="card-title mb-3">Password</h2>
                                <Link
                                    to="/app/account/password/change"
                                    className="btn btn-outline-primary btn-lg"
                                    aria-label="Change Password"
                                >
                                    Change Password
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Profile;