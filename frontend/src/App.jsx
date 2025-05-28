import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";
import PlanTrip from "./components/PlanTrip";
import TripList from "./components/TripList";
import EditTrip from "./components/EditTrip";
import Home from "./components/pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/pages/Navbar";

function App() {
  return (
    <Router>
      {/* Navigation bar that appears on all pages */}
      <Navbar />

      {/* Route configuration */}
      <Routes>
        {/* Public Routes - accessible to all users */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        {/* Protected Routes - only accessible to authenticated users */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/plan-trip"
          element={
            <ProtectedRoute>
              <PlanTrip />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trips"
          element={
            <ProtectedRoute>
              <TripList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-trip/:id"
          element={
            <ProtectedRoute>
              <EditTrip />
            </ProtectedRoute>
          }
        />

        {/* Catch-all route for undefined paths - redirects to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
