import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";
import PlanTrip from "./components/PlanTrip";
import TripList from "./components/TripList";
import EditTrip from "./components/EditTrip";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light px-3 d-flex justify-content-end">
        <Link to="/register" className="nav-link ">Register</Link>
        <Link to="/login" className="nav-link ms-5">Login</Link>
        <Link to="/dashboard" className="nav-link ms-5">Dashboard</Link>
        <Link to="/logout" className="nav-link ms-5">Logout</Link>
        <Link to="/plan-trip" className="nav-link ms-5">Plan Trip</Link>
        <Link to="/trips" className="nav-link ms-5">My Trips</Link>

      </nav>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/plan-trip" element={
          <ProtectedRoute>
            <PlanTrip />
          </ProtectedRoute>
        } />
        <Route path="/trips" element={
          <ProtectedRoute>
            <TripList />
          </ProtectedRoute>
        } />
        <Route path="/edit-trip/:id" element={
          <ProtectedRoute>
            <EditTrip />
          </ProtectedRoute>
        } />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
