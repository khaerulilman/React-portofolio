import { motion } from "framer-motion";
import { Code2, Bot, Database } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Backend Development",
      description:
        "Specialized in building robust server-side applications using Node.js, Express, and PostgreSQL. Experienced in designing RESTful APIs, implementing authentication systems, and optimizing database performance for scalable applications.",
      icon: <Code2 className="w-10 h-10" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "AI Generative Tools",
      description:
        "Passionate about leveraging cutting-edge AI technologies to create innovative solutions. Experienced in integrating AI-powered features to enhance application capabilities.",
      icon: <Bot className="w-10 h-10" />,
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "Database and API Integration",
      description:
        "Proficient in developing and integrating third-party APIs, implementing secure payment gateways, and managing real-time data synchronization. Experienced in creating comprehensive API documentation and maintaining API versioning.",
      icon: <Database className="w-10 h-10" />,
      color: "from-green-400 to-green-600",
    },
  ];

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
    <section className="py-20 bg-gradient-to-br from-yellowCustom to-yellow-400 relative overflow-hidden">
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
            className="text-5xl font-bold text-blueCustom mb-4"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={{
              hidden: { width: "0%" },
              visible: { width: "100px" },
            }}
            className="h-1 bg-blueCustom mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
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

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
