import Footer from "./pages/Footer";
import HeroSection from "./pages/HeroSection";
// import Navbar from "./pages/Navbar";
import QuickActions from "./pages/QuickActions";
import UpcomingTrips from "./pages/UpcomingTrips";

const Dashboard = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />

      <div className="container">
        <QuickActions />
        <UpcomingTrips />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
