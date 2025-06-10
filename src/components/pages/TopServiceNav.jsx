import React from "react";
import { useNavigate } from "react-router-dom";
import { MdFlight, MdHotel, MdDirectionsBus, MdDirectionsBoat, MdMoreHoriz, MdAssignment } from "react-icons/md";

const navItems = [
  {
    label: "Flights",
    icon: <MdFlight size={28} color="#1976d2" />,
    route: "/flight-search",
    bg: "#e3f2fd",
    shadow: "0 4px 16px #1976d222",
  },
  {
    label: "Hotels",
    icon: <MdHotel size={28} color="#8e24aa" />,
    route: "/hotel-search",
    bg: "#ede7f6",
    shadow: "0 4px 16px #8e24aa22",
  },
  {
    label: "Visa",
    icon: <MdAssignment size={28} color="#fb8c00" />,
    route: "/visa-search",
    bg: "#fff3e0",
    shadow: "0 4px 16px #fb8c0022",
  },
  {
    label: "Bus",
    icon: <MdDirectionsBus size={28} color="#009688" />,
    route: "/bus-search",
    bg: "#e0f2f1",
    shadow: "0 4px 16px #00968822",
  },
  {
    label: "Cruise",
    icon: <MdDirectionsBoat size={28} color="#00bcd4" />,
    route: "/cruise-search",
    bg: "#e0f7fa",
    shadow: "0 4px 16px #00bcd422",
  },
  {
    label: "More",
    icon: <MdMoreHoriz size={28} color="#757575" />,
    route: "/activity-search",
    bg: "#f5f5f5",
    shadow: "0 4px 16px #75757522",
  },
];

const TopServiceNav = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex justify-content-center align-items-center gap-4 py-3 bg-white border-bottom"
      style={{
        boxShadow: "0 2px 16px rgba(0,123,255,0.04)",
        zIndex: 10,
        position: "relative",
      }}
    >
      {navItems.map((item) => (
        <div
          key={item.label}
          className="text-center px-3"
          style={{
            cursor: "pointer",
            transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
            borderRadius: 18,
            paddingTop: 8,
            paddingBottom: 8,
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minWidth: 90,
          }}
          onClick={() => navigate(item.route)}
          onMouseOver={e => {
            e.currentTarget.style.background = "#f8f9fa";
            e.currentTarget.style.transform = "translateY(-6px) scale(1.09)";
            e.currentTarget.style.boxShadow = item.shadow;
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: item.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8,
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              transition: "background 0.18s",
              border: "2px solid #fff",
            }}
          >
            {item.icon}
          </div>
          <div
            style={{
              fontWeight: 600,
              fontSize: 15,
              color: "#222",
              letterSpacing: "0.01em",
              textShadow: "0 1px 8px #fff8",
              textTransform: "capitalize",
            }}
          >
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopServiceNav;