import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const navItems = [
    { name: "Home", section: "home" },
    { name: "About Me", section: "features" },
    { name: "My Project", section: "DocumentationSection" },
    { name: "Certificate", section: "certificate" },
  ];

  // Handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setActiveSection(sectionId); // Update active section when clicked
    setIsMenuOpen(false); // Close mobile menu when item is clicked
  };

  // Track active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item.section)
      );
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background overlay */}
      <div className="fixed top-0 left-0 w-full h-16 bg-blueCustom z-40" />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full bg-blueCustom shadow-lg z-50"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-yellowCustom rounded-lg flex items-center justify-center">
                <span className="text-blueCustom font-bold text-xl">My</span>
              </div>
              <span className="text-white text-xl font-bold">Portofolio</span>
            </motion.div>

            {/* Mobile Menu Button - Visible on mobile */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Items - Centered for desktop, shown in hamburger menu for mobile */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex items-center justify-center space-x-6 mt-4 md:mt-0 md:block`}
          >
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.1 }}
                onClick={() => scrollToSection(item.section)}
                className={`text-white transition-colors text-sm font-medium
                  ${
                    activeSection === item.section
                      ? "text-yellowCustom"
                      : "hover:text-yellowCustom"
                  }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full screen and center aligned when menu is open */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-blueCustom bg-opacity-90 z-40 flex justify-center items-center md:hidden">
          <div className="space-y-6">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.1 }}
                onClick={() => {
                  scrollToSection(item.section);
                  setIsMenuOpen(false); // Close the menu when an item is clicked
                }}
                className={`text-white transition-colors text-lg font-medium
                  ${
                    activeSection === item.section
                      ? "text-yellowCustom"
                      : "hover:text-yellowCustom"
                  }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Add margin to the top of your content to account for fixed navbar */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
