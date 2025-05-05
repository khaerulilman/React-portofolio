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
        visible: { opacity: 1, transition: { duration: 1.2 } },
      }}
      className="py-40 bg-gradient-to-br from-blueCustom via-blue-600 to-yellowCustom relative overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.4,
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
          className="max-w-4xl mx-auto backdrop-blur-lg bg-white/10 p-12 rounded-2xl shadow-2xl border border-yellowCustom/20"
        >
          <blockquote className="text-3xl md:text-5xl font-serif italic bg-clip-text bg-gradient-to-r text-yellowCustom mb-10 leading-relaxed">
            "The Only Way to Do Great Work is to Love What You Do."
          </blockquote>
          <cite className="text-xl md:text-2xl font-semibold text-yellowCustom block mt-6 tracking-wide">
            - Steve Jobs
          </cite>
        </motion.div>

        {/* Enhanced decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-yellowCustom to-blueCustom rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 4,
            }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blueCustom to-yellowCustom rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2,
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blueCustom via-blue-500 to-yellowCustom rounded-full blur-[120px]"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default MotivationSection;
