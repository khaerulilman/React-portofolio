import Head from "next/head";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HowToStart from "../components/HowToStart";
import DocumentationSection from "../components/DocumentationSection";
import CertificateSection from "../components/CertificateSection";
import MotivationSection from "../components/MotivationSection";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>My Landing Page</title>
        <meta
          name="description"
          content="A simple landing page built with Next.js and Tailwind CSS"
        />
      </Head>
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="features">
        <Features />
      </section>
      <HowToStart />
      <DocumentationSection />
      <section id="certificate">
        <CertificateSection />
      </section>
      <MotivationSection />
      <Footer />
    </div>
  );
};

export default Home;
