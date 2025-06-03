
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

      <div className="container">
        <QuickActions />
      </div>
     
    </>
  );
};

export default Dashboard;
