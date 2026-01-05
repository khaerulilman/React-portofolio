import { useScrollAnimation } from "../hooks/useScrollAnimation";

const projects = [
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
];

export default function PortfolioGrid() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#141410] text-white py-32 flex justify-center"
    >
      <div className="max-w-6xl w-full px-6">
        {/* Header */}
        <div className="text-center mb-20">
          {/* Line + Small Title */}
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

          {/* Big Title */}
          <h2
            className={`text-3xl md:text-4xl font-bold text-white leading-snug transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
          >
            Look At My Portfolio And Give Me <br />
            Your Feedback
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((p, index) => (
            <div
              key={p.id}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: isVisible ? `${200 + index * 150}ms` : "0ms",
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
          ))}
        </div>
      </div>
    </section>
  );
}
