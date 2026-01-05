type Props = {
  active: "About" | "Experience" | "Education" | "Skills";
};

const contentMap = {
  About: {
    title: "About Me",
    text: "I am a creative brand and web designer focusing on meaningful digital experiences for global clients.",
    stats: ["10+ Years Experience", "120+ Projects", "30+ Clients"],
  },
  Experience: {
    title: "Experience",
    text: "Worked with startups, agencies, and enterprises across branding, UI/UX, and web development.",
    stats: ["Senior Designer @ ABC", "Lead UI @ XYZ", "Freelancer Worldwide"],
  },
  Education: {
    title: "Education",
    text: "Background in design, interaction, and computer science from international institutions.",
    stats: ["B.A Design", "UI/UX Certification", "Webflow Expert"],
  },
  Skills: {
    title: "My Skills",
    text: "Tools and platforms I use to craft high quality digital experiences.",
    stats: ["HTML 85%", "Figma 90%", "WordPress 95%", "Bootstrap 97%"],
  },
};

export default function TabContent({ active }: Props) {
  const data = contentMap[active];

  return (
    <div className="relative bg-white/5 rounded-2xl p-12 w-full max-w-5xl grid md:grid-cols-2 gap-12 items-center backdrop-blur">
      {/* Left Illustration */}
      <div className="flex justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
          className="w-64"
          alt="illustration"
        />
      </div>

      {/* Right Content */}
      <div>
        <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
        <p className="text-gray-400 mb-6">{data.text}</p>

        <div className="grid grid-cols-2 gap-4">
          {data.stats.map((s) => (
            <div
              key={s}
              className="bg-black/40 rounded-xl p-4 text-center text-sm text-white"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
