import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light px-3 d-flex justify-content-end">
        <Link to="/register" className="nav-link ">Register</Link>
        <Link to="/login" className="nav-link ms-5">Login</Link>
      </nav>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
