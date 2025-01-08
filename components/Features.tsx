import { motion } from "framer-motion";

// Shared animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Features = () => {
  const features = [
    {
      title: "Backend Development",
      description:
        "Specialized in building robust server-side applications using Node.js, Express, and PostgreSQL. Experienced in designing RESTful APIs, implementing authentication systems, and optimizing database performance for scalable applications.",
    },
    {
      title: "System Architecture",
      description:
        "Passionate about creating efficient microservices architectures. Skilled in designing database schemas, handling server deployment, and maintaining high-performance backend systems with proper documentation.",
    },
    {
      title: "API Integration",
      description:
        "Proficient in developing and integrating third-party APIs, implementing secure payment gateways, and managing real-time data synchronization. Experienced in creating comprehensive API documentation and maintaining API versioning.",
    },
  ];

  return (
    <div>
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-20 bg-yellowCustom"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-rounded font-bold mb-12 text-blueCustom text-center"
          >
            About Me
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-rounded font-bold mb-4 text-blueCustom">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-sans leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Features;
