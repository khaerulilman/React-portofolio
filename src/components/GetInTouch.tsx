import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function GetInTouch() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.15,
    triggerOnce: false,
  });

  const socialLinks = ["Facebook", "Twitter", "Linkedin", "Webflow"];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black text-white py-32 flex justify-center overflow-hidden"
    >
      <div className="max-w-6xl w-full px-6">
        {/* Big Title - Slides from TOP */}
        <div
          className={`border border-white/10 rounded-2xl p-20 text-center mb-20 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-16"
          }`}
        >
          <h1 className="font-medium text-[40px] tracking-widest leading-none md:text-[180px]">
            GET IN <br /> TOUCH
          </h1>
        </div>

        {/* Bottom content - Slides from BOTTOM */}
        <div
          className={`grid md:grid-cols-2 gap-20 items-start transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
          style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
        >
          {/* Left */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
          >
            <p className="text-gray-400 mb-6 max-w-md">
              Hello, I'm khaerul ilman, Software Engineer & Back-end Dev
              Enthusiast.
            </p>

            <a
              href="mailto:davidmatias333@com"
              className="text-xl underline hover:text-lime-400 transition"
            >
              khaerulilman10@gmail.com
            </a>
          </div>

          {/* Right - Social buttons with stagger */}
          <div className="grid grid-cols-2 gap-6">
            {socialLinks.map((item, index) => (
              <div
                key={item}
                className={`border border-white/10 rounded-xl p-6 flex items-center justify-between hover:bg-white/5 hover:border-lime-400/30 transition-all duration-500 cursor-pointer ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${400 + index * 100}ms` : "0ms",
                }}
              >
                <span>{item}</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
