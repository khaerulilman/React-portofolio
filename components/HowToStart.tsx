import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const itemsPerPage = 5;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const hoverVariant = {
    hover: { scale: 1.2, rotate: 15, transition: { duration: 0.3 } },
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + itemsPerPage, steps.length - itemsPerPage)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const visibleSteps = steps.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div>
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto text-center text-white px-4">
          <motion.h2
            ref={ref}
            className="text-3xl font-bold mb-12"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInVariant}
          >
            My <span className="text-yellow-400">Skills</span>
          </motion.h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`absolute left-0 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors ${
                  currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <div className="flex justify-center items-start space-x-6 overflow-hidden px-12">
                {visibleSteps.map((step) => (
                  <motion.div
                    key={step.id}
                    className="flex flex-col items-center space-y-4 w-40"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeInVariant}
                  >
                    <motion.div
                      className="bg-white text-blue-600 w-16 h-16 flex items-center justify-center rounded-full text-2xl shadow-lg"
                      whileHover="hover"
                      variants={hoverVariant}
                    >
                      {step.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-white/80 text-sm">{step.description}</p>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={currentIndex >= steps.length - itemsPerPage}
                className={`absolute right-0 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors ${
                  currentIndex >= steps.length - itemsPerPage
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToStart;
