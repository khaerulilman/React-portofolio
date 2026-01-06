import { useState, useRef, useEffect } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const certificates = [
  {
    title: "Fullstack Web Development",
    issuer: "Dicoding Indonesia",
    year: "2024",
    desc: "Completed an intensive program covering frontend, backend, REST API, and deployment.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "React & TypeScript Advanced",
    issuer: "Udemy",
    year: "2024",
    desc: "Advanced React patterns, performance optimization, and scalable architecture.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Coursera",
    year: "2023",
    desc: "Learned user research, wireframing, prototyping, and usability testing.",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    desc: "Cloud computing fundamentals, AWS services, and cloud architecture best practices.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop",
  },
];

type Cert = {
  title: string;
  issuer: string;
  year: string;
  desc: string;
  image: string;
};

export default function CertificatesSection() {
  const [activeCert, setActiveCert] = useState<Cert | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRefLocal = useRef<HTMLElement>(null);
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
    triggerOnce: false,
  });

  const itemsPerPage = 3;
  const canGoNext = currentIndex < certificates.length - itemsPerPage;
  const canGoPrev = currentIndex > 0;

  const nextSlide = () => {
    if (canGoNext) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (canGoPrev) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const visibleCertificates = certificates.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <>
      <section
        ref={(node) => {
          if (sectionRef) {
            sectionRef.current = node;
          }
          sectionRefLocal.current = node;
        }}
        className="w-full bg-[#141410] text-white py-32"
      >
        <div className="max-w-7xl mx-auto text-center mb-16 px-6">
          <div
            className={`flex items-center justify-center gap-4 mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <span className="h-[1px] w-10 bg-lime-400" />
            <p className="text-lime-400 text-xs tracking-widest uppercase">
              Certificates
            </p>
            <span className="h-[1px] w-10 bg-lime-400" />
          </div>

          <h2
            className={`text-3xl md:text-5xl font-semibold transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
          >
            Professional Certificates & Achievements
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          {/* Cards Grid - Always show exactly 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {visibleCertificates.map((c, i) => (
              <div
                key={`${currentIndex}-${i}`}
                className={`bg-white/5 border border-white/10 rounded-xl p-6 hover:border-lime-400/50 transition-all duration-700 flex flex-col justify-between ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: isVisible ? `${200 + i * 150}ms` : "0ms",
                }}
              >
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-xs text-lime-400">{c.year}</span>
                    <span className="text-xs text-gray-400">{c.issuer}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{c.desc}</p>
                </div>

                <button
                  onClick={() => setActiveCert(c)}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-lime-400 hover:text-lime-300 transition"
                >
                  Preview Certificate →
                </button>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              disabled={!canGoPrev}
              className={`group relative w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                canGoPrev
                  ? "border-lime-400/30 hover:border-lime-400 hover:bg-lime-400/10 cursor-pointer"
                  : "border-white/10 opacity-30 cursor-not-allowed"
              }`}
            >
              {canGoPrev && (
                <div className="absolute inset-0 bg-lime-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-300" />
              )}
              <svg
                className={`w-5 h-5 transition-all duration-300 ${
                  canGoPrev
                    ? "text-lime-400 group-hover:-translate-x-0.5"
                    : "text-gray-600"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {Array.from({
                length: certificates.length - itemsPerPage + 1,
              }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === i
                      ? "w-8 h-2 bg-lime-400"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              disabled={!canGoNext}
              className={`group relative w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                canGoNext
                  ? "border-lime-400/30 hover:border-lime-400 hover:bg-lime-400/10 cursor-pointer"
                  : "border-white/10 opacity-30 cursor-not-allowed"
              }`}
            >
              {canGoNext && (
                <div className="absolute inset-0 bg-lime-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-300" />
              )}
              <svg
                className={`w-5 h-5 transition-all duration-300 ${
                  canGoNext
                    ? "text-lime-400 group-hover:translate-x-0.5"
                    : "text-gray-600"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Floating Preview Modal */}
      {activeCert && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center p-4">
          <div className="relative bg-[#1a1a16] rounded-2xl p-6 max-w-xl w-full">
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-3 right-3 text-white/60 hover:text-white text-xl"
            >
              ✕
            </button>

            <img
              src={activeCert.image}
              alt={activeCert.title}
              className="w-full rounded-xl shadow-2xl mb-4"
            />

            <h3 className="text-xl font-semibold text-lime-400">
              {activeCert.title}
            </h3>
            <p className="text-md text-gray-200">
              {activeCert.issuer} — {activeCert.year}
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
