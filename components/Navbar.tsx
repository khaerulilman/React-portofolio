import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setActiveSection(sectionId); // Update active section
    setIsMenuOpen(false); // Close mobile menu
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
      {/* Background overlay for mobile menu */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)} // Close menu when clicking outside
          />
        )}
      </AnimatePresence>

      {/* Navbar */}
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
              <span className="text-white text-xl font-bold font-poppins">
                Portofolio
              </span>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                // Close icon (X)
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
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
              )}
            </button>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center justify-center space-x-6 mt-4 md:mt-0">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.1 }}
                onClick={() => scrollToSection(item.section)}
                className={`text-white transition-colors text-sm font-medium font-inter
                  ${
                    activeSection === item.section
                      ? "text-yellowCustom glow"
                      : "hover:text-yellowCustom"
                  }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Mobile Menu - Animated Slide Down */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-blueCustom shadow-lg"
            >
              <div className="flex flex-col space-y-4 p-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => scrollToSection(item.section)}
                    className={`text-white transition-colors text-lg font-medium font-inter
                      ${
                        activeSection === item.section
                          ? "text-yellowCustom glow"
                          : "hover:text-yellowCustom"
                      }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Add margin to the top of your content */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
