// Motivation Section
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotivationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
      }}
      className="py-32 bg-gradient-to-b from-transparent to-blue-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.3 } },
          }}
        >
          <blockquote className="text-2xl md:text-4xl font-serif italic text-blueCustom mb-8">
            "The Only Way to Do Great Work is to Love What You Do."
          </blockquote>
          <cite className="text-xl md:text-2xl font-semibold text-black block">
            - Steve Jobs
          </cite>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-200 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2,
            }}
            className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-200 rounded-full blur-3xl"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default MotivationSection;
