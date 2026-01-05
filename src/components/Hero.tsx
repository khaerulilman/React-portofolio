import { FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative h-[650px] bg-black text-white overflow-hidden">
      {/* Animated Background with Gradient Orbs */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Glowing orbs for depth */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-lime-500/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6">
        {/* Text */}
        <div className="absolute bottom-44 left-6 max-w-xl">
          <h1 className="text-[30px] md:text-[50px] font-extrabold leading-tight">
            I'm khaerul ilman{" "}
            <span className="block relative">
              {/* Base text (gray) */}
              <span className="text-white/40">Back-End Developer</span>
              {/* Animated overlay (lime) - fills from right to left */}
              <span
                className="absolute top-0 left-0 py-1 text-lime-400 animate-text-fill"
                style={{ clipPath: "inset(0 100% 0 0)" }}
                aria-hidden="true"
              >
                Back-End Developer
              </span>

              {/* Underline accent */}
              <span
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-lime-400 to-transparent animate-fade-in-up"
                style={{
                  width: "100%",
                  animationDelay: "0.8s",
                  opacity: 0,
                }}
              />
            </span>
          </h1>

          <div className="flex items-center gap-6 mt-8">
            <a
              href="https://linkedin.com/username-kamu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-lime-400/10 border border-lime-400/30 rounded-full px-6 py-3 hover:bg-lime-400/20 hover:border-lime-400 transition-all duration-300 backdrop-blur-sm group"
            >
              <FaLinkedin className="text-lime-400 text-lg group-hover:scale-110 transition-transform" />

              <span className="font-medium text-white">Let's Connect</span>
            </a>
          </div>
        </div>

        {/* Image with glow effect */}
        <div className="absolute bottom-0 right-24">
          {/* Glow behind image */}
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-lime-400/30 rounded-full blur-[120px]" />

          {/* Image */}
          <img
            src="/images/my-crop-photo-2.png"
            alt="Designer"
            className="relative h-[560px] md:h-[550px] w-auto object-contain filter drop-shadow-2xl hidden md:block"
          />

          {/* Accent elements */}
          <div
            className="absolute top-1/4 -right-10 w-32 h-32 border-2 border-lime-400/30 rounded-full animate-spin"
            style={{ animationDuration: "20s" }}
          />
          <div className="absolute bottom-1/4 -right-5 w-20 h-20 bg-lime-400/20 rounded-lg rotate-45 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
