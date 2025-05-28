// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Logout = () => {
//     const navigate = useNavigate();
//     useEffect(() => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   }, [navigate]);

//   return null;
// }

// export default Logout;

// src/components/Logout.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../Api";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        await Api.post("/auth/logout"); // If you have a logout endpoint
      } catch (err) {
        console.error("Logout error:", err);
      } finally {
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    logoutUser();
  }, [navigate]);

  return null;
};

export default Logout;
