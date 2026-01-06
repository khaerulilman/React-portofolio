import { useState, useRef, useEffect } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const allProjects = [
  {
    id: 1,
    category: "Product Design",
    title: "Brand Identity & Motion Design",
    image:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "UI/UX Design",
    title: "Mobile Application Development",
    image:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "UI/UX Design",
    title: "Mobile Application Development",
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "UI/UX Design",
    title: "Mobile Application Development",
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "Web Development",
    title: "E-Commerce Platform",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "Brand Design",
    title: "Corporate Identity System",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 7,
    category: "Product Design",
    title: "SaaS Dashboard Interface",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 8,
    category: "UI/UX Design",
    title: "Social Media App Redesign",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 9,
    category: "Mobile Design",
    title: "Fitness Tracking App",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 10,
    category: "Web Design",
    title: "Portfolio Website",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 11,
    category: "Brand Identity",
    title: "Restaurant Branding",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 12,
    category: "Product Design",
    title: "Smart Home Dashboard",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 13,
    category: "Web Design",
    title: "Portfolio Website",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 14,
    category: "Brand Identity",
    title: "Restaurant Branding",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 15,
    category: "Product Design",
    title: "Smart Home Dashboard",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=900&auto=format&fit=crop",
  },
];

export default function PortfolioGrid() {
  const [visibleCount, setVisibleCount] = useState(4);
  const prevVisibleCountRef = useRef(4);
  const sectionRefLocal = useRef<HTMLElement>(null);
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    prevVisibleCountRef.current = visibleCount;
  }, [visibleCount]);

  const displayedProjects = allProjects.slice(0, visibleCount);
  const hasMore = visibleCount < allProjects.length;
  const isAllShown = visibleCount === allProjects.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, allProjects.length));
  };

  const showLess = () => {
    setVisibleCount(4);
    prevVisibleCountRef.current = 4;
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
      className="w-full bg-[#141410] text-white py-32 flex justify-center"
    >
      <div className="max-w-6xl w-full px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className={`flex items-center justify-center gap-6 mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="h-[1px] w-24 bg-lime-400/50" />
            <p className="text-lime-400 text-sm uppercase tracking-widest font-medium">
              Complete Project
            </p>
            <div className="h-[1px] w-24 bg-lime-400/50" />
          </div>

          <h2
            className={`text-3xl md:text-4xl font-bold text-white leading-snug transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
          >
            Look At My Recent Projects
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {displayedProjects.map((p, index) => {
            const isNewProject = index >= prevVisibleCountRef.current;
            return (
              <div
                key={p.id}
                className={`group cursor-pointer transition-all duration-700 ${
                  isVisible || isNewProject
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: isNewProject
                    ? `${100 + (index - prevVisibleCountRef.current) * 150}ms`
                    : isVisible
                    ? `${200 + index * 150}ms`
                    : "0ms",
                }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-[340px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
                </div>

                <div className="mt-4 flex justify-between items-start">
                  <div>
                    <p className="text-xs text-lime-400 uppercase mb-1">
                      {p.category}
                    </p>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center rounded-md bg-white/10 group-hover:bg-lime-400 group-hover:text-black transition">
                    ↗
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* More Button */}
        <div className="flex justify-center gap-4 mt-20 flex-wrap">
          {hasMore && (
            <button onClick={loadMore} className="group relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-lime-400/0 via-lime-400/20 to-lime-400/0 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

              {/* Button */}
              <div className="relative flex items-center gap-3 px-10 py-4 bg-gradient-to-br from-lime-400/10 to-lime-400/5 border-2 border-lime-400/40 rounded-full backdrop-blur-md group-hover:border-lime-400/80 group-hover:bg-lime-400/15 group-hover:shadow-[0_0_30px_rgba(132,204,22,0.4)] transition-all duration-500">
                <span className="text-lime-400 font-bold uppercase tracking-wider text-sm group-hover:text-lime-300 transition-colors duration-300">
                  More Projects
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
