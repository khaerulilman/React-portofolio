import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-blueCustom to-blue-900 relative overflow-hidden pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-poppins">
                Hello
                <span className="text-yellowCustom">
                  {" "}
                  I&apos;m Khaerul Ilman
                </span>
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-lg font-inter">
                I&apos;m an enthusiast in backend development
              </p>
              <div className="text-lg md:text-xl opacity-90 max-w-lg font-inter">
                <p>
                  Mochammad Khaerul Ilman adalah mahasiswa Teknik Informatika di
                  UIN Sunan Gunung Djati Bandung, angkatan 2022. Saya telah
                  tertarik dengan dunia IT sejak masih di bangku SMA. Saya
                  senang mempelajari hal-hal baru, khususnya di bidang
                  teknologi.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {/* GitHub Button */}
                <motion.a
                  href="https://github.com/khaerulilman"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center p-2 bg-yellowCustom rounded-full shadow-md hover:bg-gray-700 transition-all duration-300"
                >
                  <img
                    src="assets/images/github-logo.png"
                    alt="GitHub Logo"
                    className="w-8 h-8"
                  />
                </motion.a>

                {/* LinkedIn Button */}
                <motion.a
                  href="https://www.linkedin.com/in/khaerul-ilman-091500245/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center p-2 bg-yellowCustom rounded-full shadow-md hover:bg-gray-700 transition-all duration-300"
                >
                  <img
                    src="assets/images/linkedin-logo.png"
                    alt="LinkedIn Logo"
                    className="w-8 h-8"
                  />
                </motion.a>
              </div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center items-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Decorative circle behind image */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute inset-0 bg-yellowCustom rounded-full opacity-20 transform -translate-x-4 translate-y-4"
                />

                {/* Profile image container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-full h-full rounded-full overflow-hidden border-4 border-yellowCustom"
                >
                  <img
                    src="assets/images/my-foto.jpeg"
                    alt="Khaerul Ilman"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Floating decoration elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-yellowCustom rounded-full opacity-60"
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-8 h-8 bg-yellowCustom rounded-full opacity-60"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-0 right-0 w-48 h-48 bg-yellowCustom opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 left-0 w-64 h-64 bg-yellowCustom opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"
        />

        <svg
          id="wave"
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          viewBox="0 0 1440 100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="#DDC757" offset="0%"></stop>
              <stop stopColor="#D46945" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,10L72,0L144,70L216,20L288,40L360,70L432,90L504,90L576,90L648,20L720,40L792,80L864,90L936,30L1008,20L1080,70L1152,40L1224,20L1296,50L1368,60L1440,20L1512,70L1584,30L1656,60L1728,50L1728,100L1656,100L1584,100L1512,100L1440,100L1368,100L1296,100L1224,100L1152,100L1080,100L1008,100L936,100L864,100L792,100L720,100L648,100L576,100L504,100L432,100L360,100L288,100L216,100L144,100L72,100L0,100Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default HeroSection;
