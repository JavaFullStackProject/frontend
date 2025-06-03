import React, { useEffect, useState } from "react";
import Api from "../Api";
import "./ProfileDropdown.css";

const ProfileDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await Api.get("/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="profile-container">
      <button
        className="profile-icon"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        👤
      </button>

      {showDropdown && user && (
        <div className="profile-dropdown">
          <div className="profile-card">
            <div className="profile-pic">👨‍💼</div>
            <div className="profile-info">
              <strong>{user.name}</strong>
              <p>{user.email}</p>
              <small>Role: {user.role}</small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
