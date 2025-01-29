import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

// Shared animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Documentation Section
const DocumentationSection = () => {
  const documentationData = [
    {
      imgSrc: "assets/images/airesto.png",
      altText: "AI Restaurant Assistant",
      title: "AI-Powered Restaurant Platform",
      description:
        "A modern platform integrating Chat AI to enhance customer experience in food ordering, menu information, and other services. Built with Flowise AI, Node.js, Express.js, and Neon Database. ~ Course Project",
      links: {
        demo: "#",
        github: "#",
      },
      tech: ["React", "Node.js", "Flowise AI", "Neon DB"],
    },
    {
      imgSrc: "assets/images/pelayan.jpeg",
      altText: "Public Service Platform",
      title: "Community Service Portal",
      description:
        "A platform designed to accommodate and channel public aspirations regarding access to public facilities and infrastructure services. Developed with Laravel framework and SQLite database. ~ Course Project",
      links: {
        demo: "#",
        github: "#",
      },
      tech: ["Laravel", "SQLite", "Bootstrap", "PHP"],
    },
    {
      imgSrc: "assets/images/chatter.jpeg",
      altText: "Social Media Platform",
      title: "Chatter - Social Network",
      description:
        "A social media platform built with modern technologies including React.js, Node.js, and cloud services like Neon Database serverless and Image Kit for optimal performance.",
      links: {
        demo: "#",
        github: "#",
      },
      tech: ["React", "Node.js", "Neon DB", "ImageKit"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blueCustom to-blue-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          <span className="text-white">My</span>{" "}
          <span className="text-yellowCustom">New Projects</span>
        </motion.h2>

        <div className="space-y-32">
          {documentationData.map((project, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                {/* Project Image */}
                <motion.div
                  className="w-full lg:w-1/2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-yellowCustom/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    <img
                      src={project.imgSrc}
                      alt={project.altText}
                      className="rounded-xl shadow-2xl w-full object-cover h-[300px] md:h-[400px]"
                    />
                  </div>
                </motion.div>

                {/* Project Info */}
                <div
                  className={`w-full lg:w-1/2 ${
                    index % 2 === 0 ? "lg:text-left" : "lg:text-right"
                  }`}
                >
                  <motion.h3
                    variants={fadeInUp}
                    className="text-3xl font-bold text-yellowCustom mb-4"
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    variants={fadeInUp}
                    className="text-white/90 mb-6 text-lg leading-relaxed"
                  >
                    {project.description}
                  </motion.p>

                  {/* Tech Stack */}
                  <motion.div
                    variants={fadeInUp}
                    className={`flex flex-wrap gap-3 mb-8 ${
                      index % 2 === 0 ? "" : "justify-end"
                    }`}
                  >
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-blue-900/50 text-yellowCustom rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  {/* Project Links */}
                  <motion.div
                    variants={fadeInUp}
                    className={`flex gap-4 ${
                      index % 2 === 0 ? "" : "justify-end"
                    }`}
                  >
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.links.demo}
                      className="flex items-center gap-2 px-6 py-3 bg-yellowCustom text-blueCustom rounded-full font-semibold hover:bg-yellow-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.links.github}
                      className="flex items-center gap-2 px-6 py-3 bg-blue-900 text-white rounded-full font-semibold hover:bg-blue-800 transition-colors"
                    >
                      <Github size={18} />
                      Source Code
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;
