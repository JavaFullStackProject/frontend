import Footer from "./pages/Footer";
import HeroSection from "./pages/HeroSection";
// import Navbar from "./pages/Navbar";
import QuickActions from "./pages/QuickActions";

const Dashboard = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />

      <div className="container">
        <QuickActions />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
