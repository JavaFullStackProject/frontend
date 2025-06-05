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
import TravelGuidesCard from "./components/cards/TravelGuidesCard";
import UpcomingTripsCard from "./components/cards/UpcomingTripsCard";
import SettingsCard from "./components/cards/SettingsCard.";
import HotelSearch from "./components/bookings/HotelSearch";
import ActivitySearch from "./components/bookings/ActicitySearch";
import FlightSearch from "./components/bookings/FlightSearch";
import Footer from "./components/pages/Footer";
import VisaSearch from "./components/bookings/VisaSearch";
import BusSearch from "./components/bookings/BusSearch";
import CruiseSearch from "./components/bookings/CruiseSearch";
import FAQs from "./components/pages/FAQs";
import Profile from "./components/pages/Profile";


//for  cards

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
        <Route path="/travel-guides" element={<TravelGuidesCard />} />
        <Route path="upcoming-trips" element={<UpcomingTripsCard />} />
        <Route path="settings" element={<SettingsCard />} />
        <Route path="/hotel-search" element={<HotelSearch />} />
        <Route path="/activity-search" element={<ActivitySearch />} />
        <Route path="/flight-search" element={<FlightSearch />} />
        {/* <Route path="/FAQs" element={<FAQs />} */}
        <Route path="/account" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />

        {/* Updated bookingsss */}

        <Route path="visa-search" element={<VisaSearch />} />
        <Route path="bus-search" element={<BusSearch />} />
        <Route path="cruise-search" element={<CruiseSearch />} />
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
      <FAQs />
      <Footer />
    </Router>
  );
}

export default App;
