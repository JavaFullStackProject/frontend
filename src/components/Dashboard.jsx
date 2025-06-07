import HeroSection from "./pages/HeroSection";
// import Navbar from "./pages/Navbar";
import QuickActions from "./pages/QuickActions";
import TopServiceNav from "./pages/TopServiceNav";

const Dashboard = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />

      {/* Flights Hotels Visa icons */}
      <TopServiceNav />

      {/* Quick Actions */}
      <div className="container my-5">
        <h2 className="fw-bold mb-4 text-center">Quick Actions</h2>
        <QuickActions />
      </div>
    </>
  );
};

export default Dashboard;
