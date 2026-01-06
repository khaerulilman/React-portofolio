type Props = {
  active: "About" | "Education" | "Skills";
};

const contentMap = {
  About: {
    title: "About Me",
    text: "Built practical experience through internships and personal projects focused on backend development, APIs, and internal system design..",
    stats: ["1+ Years Project Experience", "4+ Projects"],
  },
  Education: {
    title: "Education",
    text: "Academic background in Informatics Engineering, focusing on software engineering and computer systems.",
    stats: ["UIN SGD Bandung", "Dicoding Certification"],
  },
  Skills: {
    title: "My Skills",
    text: "Tools and platforms I use to craft high quality digital experiences.",
    stats: ["HTML 85%", "Figma 90%", "WordPress 95%", "Bootstrap 97%"],
    logos: [
      "/images/logoapp/logo-html.png",
      "/images/logoapp/logo-js.png",
      "/images/logoapp/logo-nodejs.png",
      "/images/logoapp/logo-ts.png",
      "/images/logoapp/logo-react.png",
      "/images/logoapp/logo-nextjs.png",
      "/images/logoapp/logo-express.png",
      "/images/logoapp/logo-postgre.png",
      "/images/logoapp/logo-docker.png",
      "/images/logoapp/logo-postman.png",
    ],
  },
};

export default function TabContent({ active }: Props) {
  const data = contentMap[active];

  return (
    <div className="relative bg-white/5 rounded-2xl p-12 w-full max-w-5xl grid md:grid-cols-2 gap-12 items-center backdrop-blur">
      {/* Left Illustration */}
      <div className="flex justify-center ">
        <img
          src="/images/github-profile.png"
          className="w-64 rounded-full border border-lime-400 border-2"
          alt="illustration"
        />
      </div>

      {/* Right Content */}
      <div>
        <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
        <p className="text-gray-400 mb-6">{data.text}</p>

        {active === "Skills" && "logos" in data ? (
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            {data.logos.map((logo, index) => (
              <div key={index} className="relative group">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-lime-400/0 group-hover:bg-lime-400/30 rounded-full blur-xl transition-all duration-500" />

                {/* Logo container */}
                <div className="relative w-[80px] h-[80px] rounded-full border-2 border-white/10 group-hover:border-lime-400/50 bg-black flex items-center justify-center transition-all duration-300">
                  <img
                    src={logo}
                    alt={`skill-logo-${index}`}
                    className="w-[50px] h-[50px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {data.stats.map((s) => (
              <div
                key={s}
                className="relative group bg-black/40 rounded-xl p-4 text-center text-sm text-white border border-white/10 hover:border-lime-400/50 transition-all duration-300 cursor-pointer"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-lime-400/0 group-hover:bg-lime-400/10 rounded-xl transition-all duration-300" />

                {/* Text content */}
                <span className="relative z-10">{s}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
