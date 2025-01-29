import { motion } from "framer-motion";

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

const CertificateSection = () => {
  const certificates = [
    {
      title: "Certificate",
      description: "Working on. In progress...",
    },
  ];

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerChildren}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-rounded font-bold mb-12 text-blueCustom text-center"
        >
          My <span className="text-yellowCustom">Certificate</span>
        </motion.h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-8 max-w-md">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
              >
                <img
                  alt={cert.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-rounded font-semibold text-blueCustom">
                  {cert.title}
                </h3>
                <p className="text-gray-600 mt-2 font-sans">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CertificateSection;
