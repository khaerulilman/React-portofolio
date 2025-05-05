import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const HowToStart = () => {
  const steps = [
    { id: 1, title: "JavaScript", icon: "🟨" },
    { id: 2, title: "Node.js", icon: "🌳" },
    { id: 3, title: "React", icon: "⚛️" },
    { id: 4, title: "Tailwind CSS", icon: "🌬️" },
    { id: 5, title: "JavaScript", icon: "🟨" },
    { id: 6, title: "Node.js", icon: "🌳" },
    { id: 7, title: "React", icon: "⚛️" },
    { id: 8, title: "Tailwind CSS", icon: "🌬️" },
    { id: 9, title: "JavaScript", icon: "🟨" },
    { id: 10, title: "Node.js", icon: "🌳" },
    { id: 11, title: "React", icon: "⚛️" },
    { id: 12, title: "Tailwind CSS", icon: "🌬️" },
    { id: 13, title: "JavaScript", icon: "🟨" },
    { id: 14, title: "Node.js", icon: "🌳" },
    { id: 15, title: "React", icon: "⚛️" },
    { id: 16, title: "Tailwind CSS", icon: "🌬️" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const itemsPerPage = 5;
  const autoScrollInterval = 3000; // 3 seconds

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
    let interval: NodeJS.Timeout | undefined;

    if (isAutoScrolling && !isHovered) {
      interval = setInterval(handleNext, autoScrollInterval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoScrolling, isHovered, handleNext, autoScrollInterval]);

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
    <div className="relative overflow-hidden bg-gradient-to-b from-yellowCustom to-yellow-100">
      <section className="py-20">
        <div className="container mx-auto text-center px-4">
          <motion.h2
            ref={ref}
            className="text-4xl md:text-5xl font-extrabold mb-12 text-white tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            My{" "}
            <span className="text-blueCustom inline-block relative">
              Skills
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blueCustom rounded-full"></span>
            </span>
          </motion.h2>

          <div
            className="relative max-w-6xl mx-auto bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
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
                className="absolute left-4 z-10 p-3 rounded-full bg-blueCustom hover:bg-bg-blueCustom transition-all transform hover:scale-110 shadow-lg hover:shadow-purple-400/50"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <div className="flex justify-center items-center space-x-16 overflow-hidden px-20">
                {steps
                  .slice(currentIndex, currentIndex + itemsPerPage)
                  .map((step, index) => (
                    <motion.div
                      key={step.id}
                      className="flex flex-col items-center space-y-4 w-36"
                      variants={itemVariants}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      layout
                    >
                      <motion.div
                        className="bg-white/90 text-bg-blueCustom w-20 h-20 flex items-center justify-center rounded-2xl text-3xl shadow-lg hover:shadow-xl transform transition-all border-2 border-purple-500/30 hover:border-purple-500"
                        variants={iconVariants}
                        initial="idle"
                        whileHover="hover"
                      >
                        {step.icon}
                      </motion.div>
                      <h3 className="text-lg font-bold text-gray-800 tracking-wide">
                        {step.title}
                      </h3>
                    </motion.div>
                  ))}
              </div>

              <button
                onClick={handleNext}
                className="absolute right-4 z-10 p-3 rounded-full bg-blueCustom hover:bg-blueCustom transition-all transform hover:scale-110 shadow-lg hover:shadow-purple-400/50"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </motion.div>

            <button
              onClick={toggleAutoScroll}
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-bg-blueCustom hover:bg-blueCustom p-3 rounded-full transition-all shadow-lg hover:shadow-purple-400/50"
            >
              {isAutoScrolling ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white" />
              )}
            </button>
          </div>

          <div className="flex justify-center mt-16 space-x-3">
            {Array.from({ length: Math.ceil(steps.length / itemsPerPage) }).map(
              (_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / itemsPerPage) === idx
                      ? "w-8 bg-blueCustom"
                      : "w-2 bg-blueCustom bg-blueCustom cursor-pointer"
                  }`}
                  onClick={() => setCurrentIndex(idx * itemsPerPage)}
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
