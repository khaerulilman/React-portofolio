import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProfileTabs from "./components/ProfileTabs";
import DevDashboard from "./components/DashbaordComponent/DevDashboard";
import PortfolioGrid from "./components/PortfolioGrid";
import WorkExperience from "./components/WorkExperience";
import RecentPosts from "./components/RecentPosts";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import LineStyle from "./components/LineStyle";
import CertificatesSection from "./components/CertificatesSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LineStyle />
      <ProfileTabs />
      <LineStyle />
      <DevDashboard />
      <LineStyle />
      <PortfolioGrid />
      <LineStyle />
      <WorkExperience />
      <LineStyle />
      <CertificatesSection />
      <LineStyle />
      <RecentPosts />
      <LineStyle />
      <GetInTouch />

      <Footer />
    </>
  );
}

export default App;
