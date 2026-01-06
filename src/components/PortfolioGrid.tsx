import { useState, useRef, useEffect } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const getTechLogoUrl = (tech: string): string => {
  const logoMap: { [key: string]: string } = {
    React:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    TypeScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    Figma:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    Framer:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framer/framer-original.svg",
    "React Native":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "Node.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    Firebase:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
    Flutter:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
    "REST API":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/restapi/restapi-original.svg",
    Swift:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
    iOS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg",
    Xcode:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg",
    MongoDB:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    Stripe:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/stripe/stripe-original.svg",
    "Adobe XD":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg",
    Illustrator:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg",
    InDesign:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/indesign/indesign-original.svg",
    Recharts: "https://recharts.org/images/logo.png",
    Tailwind:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    Redux:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    Nodejs:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    PostgreSQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    GraphQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
    "Next.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    Vercel:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    "Logo Design":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    "Brand Guide":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    Canva:
      "https://www.canva.com/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%2FTEMP%2F8f846bd0d9f54f6a8a8b5c5c5c5c5c5c&w=256&q=75",
    "Vue.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
    IoT: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
    WebSocket:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  };
  return logoMap[tech] || "/images/logoapp/not-found.png";
};

const allProjects = [
  {
    id: 1,
    category: "Product Design",
    title: "Brand Identity & Motion Design",
    image:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=900&auto=format&fit=crop",
    techStack: ["React", "TypeScript", "Figma", "Framer"],
  },
  {
    id: 2,
    category: "UI/UX Design",
    title: "Mobile Application Development",
    image:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=900&auto=format&fit=crop",
    techStack: ["React Native", "Node.js", "Firebase", "TypeScript"],
  },
  {
    id: 3,
    category: "UI/UX Design",
    title: "Mobile Application Development",
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=900&auto=format&fit=crop",
    techStack: ["Flutter", "Dart", "Firebase", "REST API"],
  },
  {
    id: 4,
    category: "UI/UX Design",
    title: "Mobile Application Development",
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=900&auto=format&fit=crop",
    techStack: ["Swift", "iOS", "Xcode", "Firebase"],
  },
  {
    id: 5,
    category: "Web Development",
    title: "E-Commerce Platform",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: 6,
    category: "Brand Design",
    title: "Corporate Identity System",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=900&auto=format&fit=crop",
    techStack: ["Figma", "Adobe XD", "Illustrator", "InDesign"],
  },
  {
    id: 7,
    category: "Product Design",
    title: "SaaS Dashboard Interface",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=900&auto=format&fit=crop",
    techStack: ["React", "TypeScript", "Recharts", "Tailwind"],
  },
  {
    id: 8,
    category: "UI/UX Design",
    title: "Social Media App Redesign",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=900&auto=format&fit=crop",
    techStack: ["React", "Redux", "Nodejs", "PostgreSQL"],
  },
  {
    id: 9,
    category: "Mobile Design",
    title: "Fitness Tracking App",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=900&auto=format&fit=crop",
    techStack: ["React Native", "TypeScript", "Firebase", "GraphQL"],
  },
  {
    id: 10,
    category: "Web Design",
    title: "Portfolio Website",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=900&auto=format&fit=crop",
    techStack: ["Next.js", "React", "Tailwind", "Vercel"],
  },
  {
    id: 11,
    category: "Brand Identity",
    title: "Restaurant Branding",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=900&auto=format&fit=crop",
    techStack: ["Figma", "Logo Design", "Brand Guide", "Canva"],
  },
  {
    id: 12,
    category: "Product Design",
    title: "Smart Home Dashboard",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=900&auto=format&fit=crop",
    techStack: ["Vue.js", "Node.js", "IoT", "WebSocket"],
  },
  {
    id: 13,
    category: "Web Design",
    title: "Portfolio Website",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=900&auto=format&fit=crop",
    techStack: ["Next.js", "React", "Tailwind", "Vercel"],
  },
  {
    id: 14,
    category: "Brand Identity",
    title: "Restaurant Branding",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=900&auto=format&fit=crop",
    techStack: ["Figma", "Logo Design", "Brand Guide", "Canva"],
  },
  {
    id: 15,
    category: "Product Design",
    title: "Smart Home Dashboard",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=900&auto=format&fit=crop",
    techStack: ["Vue.js", "Node.js", "IoT", "WebSocket"],
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
                <div className="flex gap-3 mt-4 flex-wrap">
                  {p.techStack.slice(0, 4).map((tech, idx) => (
                    <div
                      key={idx}
                      className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden hover:bg-white/20 transition group/logo"
                      title={tech}
                    >
                      <img
                        src={getTechLogoUrl(tech)}
                        alt={tech}
                        className="w-6 h-6 object-contain"
                        onError={(e) => {
                          const target = e.currentTarget;

                          // cegah infinite loop
                          if (!target.dataset.fallback) {
                            target.dataset.fallback = "true";
                            target.src = "/fallback-tech.svg";
                          }
                        }}
                      />
                    </div>
                  ))}
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
