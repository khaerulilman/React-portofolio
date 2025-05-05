import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Bot,
  Database,
  ChevronLeft,
  ChevronRight,
  Braces,
  Server,
} from "lucide-react";

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  // Add more features
  const features = [
    {
      title: "Backend Development",
      description:
        "Specialized in building robust server-side applications using Node.js, Express, and PostgreSQL. Experienced in designing RESTful APIs, implementing authentication systems, and optimizing database performance for scalable applications.",
      icon: <Code2 className="w-10 h-10" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Database and API Integration",
      description:
        "Proficient in developing and integrating third-party APIs, implementing secure payment gateways, and managing real-time data synchronization. Experienced in creating comprehensive API documentation and maintaining API versioning.",
      icon: <Database className="w-10 h-10" />,
      color: "from-green-400 to-green-600",
    },
    {
      title: "System Architecture",
      description:
        "Expert in designing scalable system architectures that balance performance, security, and maintainability. Experienced in microservices, serverless computing, and cloud infrastructure optimization for high-traffic applications.",
      icon: <Server className="w-10 h-10" />,
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "AI Integration",
      description:
        "Skilled in integrating artificial intelligence solutions into applications. Experience with implementing machine learning models, natural language processing, and creating intelligent automation systems.",
      icon: <Bot className="w-10 h-10" />,
      color: "from-red-400 to-red-600",
    },
    {
      title: "Code Optimization",
      description:
        "Professional at refactoring and optimizing code for performance, readability, and maintainability. Expertise in debugging complex issues and implementing best practices for clean, efficient code.",
      icon: <Braces className="w-10 h-10" />,
      color: "from-yellow-400 to-yellow-600",
    },
  ];

  // Calculate how many items to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getItemsToShow = () => {
    if (width < 640) return 1; // Mobile: show 1
    if (width < 1024) return 2; // Tablet: show 2
    return 3; // Desktop: show 3
  };

  const itemsToShow = getItemsToShow();
  const maxIndex = Math.max(0, features.length - itemsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="py-20 bg-yellowCustom">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="ext-4xl md:text-5xl font-extrabold text-5xl text-blueCustom mb-4"
          >
            <span className="text-white">About</span>{" "}
            <span className="text-blueCustom">Me</span>
          </motion.h2>
          <motion.div
            variants={{
              hidden: { width: "0%" },
              visible: { width: "100px" },
            }}
            className="h-1 bg-blueCustom mx-auto rounded-full"
          />
        </motion.div>

        <div className="relative">
          {/* Carousel container */}
          <div className="overflow-hidden px-4">
            <motion.div
              ref={carousel}
              className="flex gap-8"
              animate={{ x: -currentIndex * (100 / itemsToShow) + "%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  style={{
                    width: `calc(${100 / itemsToShow}% - ${
                      ((itemsToShow - 1) * 32) / itemsToShow
                    }px)`,
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="relative group h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      <motion.div
                        variants={iconVariants}
                        whileHover="hover"
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} p-3 mb-6 text-white flex items-center justify-center`}
                      >
                        {feature.icon}
                      </motion.div>

                      <h3 className="text-2xl font-bold mb-4 text-blueCustom">
                        {feature.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed flex-grow">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation buttons */}
          {features.length > itemsToShow && (
            <div className="flex justify-center items-center mt-8 gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`p-3 rounded-full bg-blueCustom text-white ${
                  currentIndex === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-700"
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              {/* Indicator dots */}
              <div className="flex space-x-2">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <motion.button
                    key={idx}
                    className={`w-3 h-3 rounded-full ${
                      currentIndex === idx ? "bg-blueCustom" : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentIndex(idx)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className={`p-3 rounded-full bg-blueCustom text-white ${
                  currentIndex >= maxIndex
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-700"
                }`}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
