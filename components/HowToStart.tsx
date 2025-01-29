import React, { useState, useEffect, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const HowToStart = () => {
  const steps = [
    { id: 1, title: "JavaScript", description: "Learn JavaScript", icon: "🟨" },
    { id: 2, title: "Node.js", description: "Master Node.js", icon: "🌳" },
    { id: 3, title: "React", description: "Understand React", icon: "⚛️" },
    {
      id: 4,
      title: "Tailwind CSS",
      description: "Work with Tailwind",
      icon: "🌬️",
    },
    { id: 5, title: "Laravel", description: "Build with Laravel", icon: "🚀" },
    { id: 6, title: "MySQL", description: "Database with MySQL", icon: "🐬" },
    {
      id: 7,
      title: "PostgreSQL",
      description: "Explore PostgreSQL",
      icon: "🐘",
    },
    {
      id: 8,
      title: "Neon Database",
      description: "Use Neon Database",
      icon: "🌈",
    },
    { id: 9, title: "Firebase", description: "Integrate Firebase", icon: "🔥" },
    {
      id: 10,
      title: "Next.js",
      description: "Develop with Next.js",
      icon: "⚡",
    },
    {
      id: 11,
      title: "Flowise AI",
      description: "Harness Flowise AI",
      icon: "🧠",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const itemsPerPage = 5;
  const autoScrollInterval = 3000; // 3 seconds

  const controls = useAnimation();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      return nextIndex >= steps.length - itemsPerPage ? 0 : nextIndex;
    });
  }, [steps.length, itemsPerPage]);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev - 1;
      return nextIndex < 0 ? steps.length - itemsPerPage - 1 : nextIndex;
    });
  };

  // Auto-scroll effect
  useEffect(() => {
    let interval: number | NodeJS.Timeout;
    if (isAutoScrolling && !isHovered) {
      interval = setInterval(handleNext, autoScrollInterval);
    }
    return () => clearInterval(interval);
  }, [isAutoScrolling, isHovered, handleNext]);

  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const iconVariants = {
    idle: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        rotate: {
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    },
  };

  return (
    <div className="relative overflow-hidden">
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto text-center text-white px-4">
          <motion.h2
            ref={ref}
            className="text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            My{" "}
            <span className="text-yellow-400 inline-block animate-pulse">
              Skills
            </span>
          </motion.h2>

          <div
            className="relative max-w-6xl mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="flex justify-between items-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <button
                onClick={handlePrev}
                className="absolute left-0 z-10 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all transform hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <div className="flex justify-center items-start space-x-8 overflow-hidden px-16">
                {steps
                  .slice(currentIndex, currentIndex + itemsPerPage)
                  .map((step, index) => (
                    <motion.div
                      key={step.id}
                      className="flex flex-col items-center space-y-4 w-44"
                      variants={itemVariants}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      layout
                    >
                      <motion.div
                        className="bg-white text-blue-600 w-20 h-20 flex items-center justify-center rounded-full text-3xl shadow-lg hover:shadow-xl transform transition-all"
                        variants={iconVariants}
                        initial="idle"
                        whileHover="hover"
                      >
                        {step.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-300">
                        {step.title}
                      </h3>
                      <p className="text-white/80 text-sm font-light">
                        {step.description}
                      </p>
                    </motion.div>
                  ))}
              </div>

              <button
                onClick={handleNext}
                className="absolute right-0 z-10 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all transform hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </motion.div>

            {/* Auto-scroll toggle button */}
            <button
              onClick={toggleAutoScroll}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all"
            >
              {isAutoScrolling ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white" />
              )}
            </button>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center mt-16 space-x-2">
            {Array.from({ length: Math.ceil(steps.length / itemsPerPage) }).map(
              (_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / itemsPerPage) === idx
                      ? "w-8 bg-yellow-400"
                      : "w-2 bg-white/30"
                  }`}
                />
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToStart;
