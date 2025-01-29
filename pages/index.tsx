import Head from "next/head";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HowToStart from "../components/HowToStart";
import DocumentationSection from "../components/DocumentationSection";
import CertificateSection from "../components/CertificateSection";
import MotivationSection from "../components/MotivationSection";

const Home = () => {
  // Add smooth scroll behavior for the entire page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blueCustom to-blue-900">
      <Head>
        <title>Khaerul Ilman | Portfolio</title>
        <meta
          name="description"
          content="Portfolio website of Khaerul Ilman - Backend Development Enthusiast"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main content wrapper */}
      <div className="relative">
        {/* Navbar */}
        <Navbar />

        {/* Content sections */}
        <main className="relative z-10">
          {/* Hero Section with seamless navbar integration */}
          <section id="home" className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blueCustom to-transparent h-32" />
            <HeroSection />
          </section>

          {/* Other sections */}
          <section id="features" className="relative z-10">
            <Features />
          </section>

          <section className="relative z-10">
            <HowToStart />
          </section>

          <section id="DocumentationSection" className="relative z-10">
            <DocumentationSection />
          </section>

          <section id="certificate" className="relative z-10">
            <CertificateSection />
          </section>

          <section className="relative z-10">
            <MotivationSection />
          </section>
        </main>

        {/* Footer */}
        <Footer />

        {/* Decorative background elements */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blueCustom/10 to-blue-900/10" />

          {/* Animated circles */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellowCustom/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-yellowCustom/5 rounded-full blur-2xl animate-pulse delay-1000" />
        </div>
      </div>
    </div>
  );
};

export default Home;
