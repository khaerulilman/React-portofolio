import { useState, useRef, useEffect } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Freelance / Remote",
    period: "2023 — Now",
    summary: "Building modern web apps using React, TypeScript, and Tailwind.",
    details:
      "Worked on dashboards, landing pages, and internal tools. Focused on performance, UX, and clean architecture.",
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "Startup XYZ",
    period: "2022 — 2023",
    summary: "Developed REST APIs and web platforms for early-stage products.",
    details:
      "Built backend using Node.js and PostgreSQL, integrated authentication, payments, and analytics.",
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "Digital Agency ABC",
    period: "2021 — 2022",
    summary: "Assisted in building client websites and CMS integrations.",
    details:
      "Worked with WordPress, Figma to HTML, and improved SEO & page performance.",
  },
  {
    id: 1,
    role: "Frontend Developer",
    company: "Freelance / Remote",
    period: "2023 — Now",
    summary: "Building modern web apps using React, TypeScript, and Tailwind.",
    details:
      "Worked on dashboards, landing pages, and internal tools. Focused on performance, UX, and clean architecture.",
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "Startup XYZ",
    period: "2022 — 2023",
    summary: "Developed REST APIs and web platforms for early-stage products.",
    details:
      "Built backend using Node.js and PostgreSQL, integrated authentication, payments, and analytics.",
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "Digital Agency ABC",
    period: "2021 — 2022",
    summary: "Assisted in building client websites and CMS integrations.",
    details:
      "Worked with WordPress, Figma to HTML, and improved SEO & page performance.",
  },
  {
    id: 1,
    role: "Frontend Developer",
    company: "Freelance / Remote",
    period: "2023 — Now",
    summary: "Building modern web apps using React, TypeScript, and Tailwind.",
    details:
      "Worked on dashboards, landing pages, and internal tools. Focused on performance, UX, and clean architecture.",
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "Startup XYZ",
    period: "2022 — 2023",
    summary: "Developed REST APIs and web platforms for early-stage products.",
    details:
      "Built backend using Node.js and PostgreSQL, integrated authentication, payments, and analytics.",
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "Digital Agency ABC",
    period: "2021 — 2022",
    summary: "Assisted in building client websites and CMS integrations.",
    details:
      "Worked with WordPress, Figma to HTML, and improved SEO & page performance.",
  },
];

export default function WorkExperience() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const prevVisibleCountRef = useRef(3);
  const sectionRefLocal = useRef<HTMLElement>(null);
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    prevVisibleCountRef.current = visibleCount;
  }, [visibleCount]);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const displayedExperiences = experiences.slice(0, visibleCount);
  const hasMore = visibleCount < experiences.length;
  const isAllShown = visibleCount === experiences.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, experiences.length));
  };

  const showLess = () => {
    setVisibleCount(3);
    prevVisibleCountRef.current = 3;
    sectionRefLocal.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      ref={(node) => {
        if (sectionRef) {
          sectionRef.current = node;
        }
        sectionRefLocal.current = node;
      }}
      className="w-full bg-[#171616] text-white py-32 flex justify-center"
    >
      <div className="max-w-6xl w-full px-6">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl font-bold">My Work Experience</h2>
        </div>

        {/* List */}
        <div className="divide-y divide-white/10">
          {displayedExperiences.map((exp, i) => {
            const isOpen = openId === exp.id;
            const isNewItem = i >= prevVisibleCountRef.current;

            return (
              <div
                key={`${exp.id}-${i}`}
                className={`py-10 transition-all duration-700 ${
                  isVisible || isNewItem
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isNewItem
                    ? `${100 + (i - prevVisibleCountRef.current) * 150}ms`
                    : isVisible
                    ? `${150 + i * 150}ms`
                    : "0ms",
                }}
              >
                <div className="grid md:grid-cols-[60px_1fr_2fr_60px] gap-6 items-center">
                  {/* Index */}
                  <div className="text-gray-500 text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Role */}
                  <div>
                    <p className="text-sm text-gray-400">{exp.company}</p>
                    <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  </div>

                  {/* Summary */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Toggle Button */}
                  <button
                    onClick={() => toggle(exp.id)}
                    className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center hover:bg-lime-400 hover:text-black transition-all duration-300"
                  >
                    <span
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </div>

                {/* Dropdown with smooth animation */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="mt-6 ml-[60px] text-gray-300 text-sm max-w-3xl">
                    <p className="mb-2">{exp.details}</p>
                    <p className="text-xs text-gray-500">{exp.period}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* More / Less Buttons */}
        <div className="flex justify-center gap-4 mt-20 flex-wrap">
          {hasMore && (
            <button onClick={loadMore} className="group relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-lime-400/0 via-lime-400/20 to-lime-400/0 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

              {/* Button */}
              <div className="relative flex items-center gap-3 px-10 py-4 bg-gradient-to-br from-lime-400/10 to-lime-400/5 border-2 border-lime-400/40 rounded-full backdrop-blur-md group-hover:border-lime-400/80 group-hover:bg-lime-400/15 group-hover:shadow-[0_0_30px_rgba(132,204,22,0.4)] transition-all duration-500">
                <span className="text-lime-400 font-bold uppercase tracking-wider text-sm group-hover:text-lime-300 transition-colors duration-300">
                  More Experience
                </span>
                <svg
                  className="w-5 h-5 text-lime-400 group-hover:text-lime-300 group-hover:scale-110 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5v14m-7-7h14"
                  />
                </svg>
              </div>
            </button>
          )}

          {isAllShown && (
            <button onClick={showLess} className="group relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-lime-400/0 via-lime-400/20 to-lime-400/0 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

              {/* Button */}
              <div className="relative flex items-center gap-3 px-10 py-4 bg-gradient-to-br from-lime-400/10 to-lime-400/5 border-2 border-lime-400/40 rounded-full backdrop-blur-md group-hover:border-lime-400/80 group-hover:bg-lime-400/15 group-hover:shadow-[0_0_30px_rgba(132,204,22,0.4)] transition-all duration-500">
                <span className="text-lime-400 font-bold uppercase tracking-wider text-sm group-hover:text-lime-300 transition-colors duration-300">
                  Show Less
                </span>
                <svg
                  className="w-5 h-5 text-lime-400 group-hover:text-lime-300 group-hover:scale-110 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
