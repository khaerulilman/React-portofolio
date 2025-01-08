import { motion } from "framer-motion";

const documentationData = [
  {
    imgSrc: "assets/images/airesto.png",
    altText: "Project 1",
    title: "Project 1",
    description:
      "Platform modern yang mengintegrasikan Chat AI untuk meningkatkan pengalaman pelanggan dalam memesan makanan, mendapatkan informasi menu, dan layanan lainnya. Dibangun menggunakan Flowise AI, Node.js dan Express.js , Neon Database. ~ Proyek Mata kuliah",
  },
  {
    imgSrc: "assets/images/pelayan.jpeg",
    altText: "Project 2",
    title: "Project 2",
    description:
      "Website yang menjadi wadah untuk menampung dan mengakomodir aspirasi masyarakat terhadap akses pelayanan sarana dan prasarana publik. Dibuat dengan Framework Laravel dan database Sqlite ~ Proyek Mata kuliah",
  },
  {
    imgSrc: "assets/images/chatter.jpeg",
    altText: "Project 3",
    title: "Project 3",
    description:
      "Website Social Media (Chatter) yang dengan teknologi seperti React js, Node js dan platform penyedia server online seperti neon database serverless dan Image kit ",
  },
];

const DocumentationSection: React.FC = () => {
  const imageHoverVariant = {
    hover: { scale: 1.05, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)" },
  };

  return (
    <section className="py-20 bg-blueCustom">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-white text-center">
          My <span className="text-yellowCustom">Project</span>
        </h2>

        <div className="space-y-16">
          {documentationData.map((doc, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-12`}
            >
              {/* Image Container */}
              <motion.div
                className="w-full md:w-1/2"
                whileHover="hover"
                variants={imageHoverVariant}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={doc.imgSrc}
                  alt={doc.altText}
                  className="rounded-lg shadow-xl transition-all duration-300"
                />
              </motion.div>

              {/* Content Container */}
              <div
                className={`w-full md:w-1/2 text-center ${
                  index % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}
              >
                <h3 className="text-2xl font-semibold text-yellowCustom mb-4">
                  {doc.title}
                </h3>
                <p className="text-white mb-4 leading-relaxed">
                  {doc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;
