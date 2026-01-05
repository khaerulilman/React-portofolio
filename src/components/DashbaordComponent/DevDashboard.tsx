import ContributionGrid from "./ContributionGrid";
import WakatimeStats from "./WakatimeStats";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function DevDashboard() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#191616] text-white py-24 flex flex-col items-center"
    >
      <h2
        className={`text-3xl font-bold mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        Developer Activity
      </h2>

      <div className="w-full max-w-6xl flex flex-col gap-16">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}
        >
          <ContributionGrid isVisible={isVisible} />
        </div>
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
        >
          <WakatimeStats isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
}
