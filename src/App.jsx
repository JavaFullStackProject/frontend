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
import GoaTravelGuide from "./components/pages/GoaTravelGuide";
import PangongTsoGuide from "./components/pages/PangongTsoGuide";
import MunnarWayanadGuide from "./components/pages/MunnarWayanadGuide";
import MaldivesTravelGuide from "./components/pages/MaldivesTravelGuide";
import ScrollToTop from "./ScrollToTop";
import Itinerary from "./components/Itinerary";
import NotificationComponent from "./components/NotificationComponent";
import TirupatiBalajiGuide from "./components/pages/TirupatiBalajiGuide";
import GoldenTempleGuide from "./components/pages/GoldenTempleGuide";
import MeenakshiTempleGuide from "./components/pages/MeenakshiTempleGuide";
import HampiRuinsGuide from "./components/pages/HampiRuinsGuide";
import KhajurahoTemplesGuide from "./components/pages/KhajurahoTemplesGuide";
import VaishnoDeviGuide from "./components/pages/VaishnoDeviGuide";
import MauiGuide from "./components/pages/MauiGuide";
import NycFoodGuide from "./components/pages/NycFoodGuide";
import DarEsSalaamGuide from "./components/pages/DarEsSalaamGuide";
import LisbonMarketGuide from "./components/pages/LisbonMarketGuide";
import TaipeiGuide from "./components/pages/TaipeiGuide";
import LondonGuide from "./components/pages/LondonGuide";
import BelgiumGuide from "./components/pages/BelgiumGuide";
import Contact from "./components/pages/Contact";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import BlogPage from "./components/pages/BlogPage";

//for  cards

function App() {
  return (
    <>
      <NotificationComponent />
      <Router>
        <ScrollToTop />
        {/* Navigation bar that appears on all pages */}
        <Navbar />

        {/* Route configuration */}
        <Routes>
          {/* Public Routes - accessible to all users */}
          <Route path="/" element={<Home />} />
          <Route path="/goa-guide" element={<GoaTravelGuide />} />
          <Route path="/PangongTso-guide" element={<PangongTsoGuide />} />
          <Route path="/MunnarWayanad-guide" element={<MunnarWayanadGuide />} />
          <Route path="/maldives-guide" element={<MaldivesTravelGuide />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/travel-guides" element={<TravelGuidesCard />} />
          <Route path="/tirupati-balaji-guide" element={<TirupatiBalajiGuide />} />
          <Route path="/golden-temple-guide" element={<GoldenTempleGuide />} />
          <Route path="/meenakshi-temple-guide" element={<MeenakshiTempleGuide />} />
          <Route path="/hampi-ruins-guide" element={<HampiRuinsGuide />} />
          <Route path="/khajuraho-temples-guide" element={<KhajurahoTemplesGuide />} />
          <Route path="/vaishno-devi-guide" element={<VaishnoDeviGuide />} />
          <Route path="/maui-guide" element={<MauiGuide />} />
          <Route path="/nyc-food" element={<NycFoodGuide />} />
          <Route path="/dar-es-salaam" element={<DarEsSalaamGuide />} />
          <Route path="/lisbon-market" element={<LisbonMarketGuide />} />
          <Route path="/taipei-guide" element={<TaipeiGuide />} />
          <Route path="/london-guide" element={<LondonGuide />} />
          <Route path="/belgium-guide" element={<BelgiumGuide />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/blog" element={<BlogPage />} />

          {/* Cards for various sections */}
          <Route path="upcoming-trips" element={<UpcomingTripsCard />} />
          <Route path="settings" element={<SettingsCard />} />
          <Route path="/hotel-search" element={<HotelSearch />} />
          <Route path="/activity-search" element={<ActivitySearch />} />
          <Route path="/flight-search" element={<FlightSearch />} />
          {/* <Route path="/FAQs" element={<FAQs />} */}
          <Route path="/account" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/itinerary/:tripId" element={<Itinerary />} />

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
    </>
  );
}

export default App;
