import { useState } from "react";
import TabContent from "./TabContent";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const tabs = ["About", "Experience", "Education", "Skills"] as const;
type Tab = (typeof tabs)[number];

export default function ProfileTabs() {
  const [active, setActive] = useState<Tab>("Skills");
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.2,
    triggerOnce: false,
  });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#141410] text-white py-24 flex flex-col items-center"
    >
      <div
        className={`relative text-2xl font-semibold max-w-2xl text-center leading-relaxed mb-10 transition-all duration-700 cursor-pointer ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background text (gray) */}
        <div className="text-gray-300">
          I am M. Khaerul Ilman, a Software Engineer with a strong interest in
          backend development and full-stack engineering. I focus on building
          reliable, scalable, and well-structured web applications that solve
          real-world problems.
        </div>

        {/* Foreground text (lime) with animated fill */}
        <div
          className="absolute inset-0 text-lime-400 overflow-hidden transition-all duration-1000 ease-out"
          style={{
            clipPath: isHovered ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
          }}
        >
          I am M. Khaerul Ilman, a Software Engineer with a strong interest in
          backend development and full-stack engineering. I focus on building
          reliable, scalable, and well-structured web applications that solve
          real-world problems.
        </div>
      </div>

      {/* Tabs */}
      <div
        className={`flex gap-3 mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
      >
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-5 py-2 rounded-md text-sm transition-all duration-300
              ${
                active === tab
                  ? "bg-lime-400 text-black"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            style={{
              transitionDelay: isVisible ? `${250 + index * 50}ms` : "0ms",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div
        className={`w-full flex justify-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
      >
        <TabContent active={active} />
      </div>
    </section>
  );
}
