import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function ContactCTA() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#171616] text-white py-32 flex justify-center overflow-hidden"
    >
      <div className="max-w-6xl w-full px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* Left Content - Slides from left */}
        <div
          className={`transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
          }`}
        >
          <div
            className={`flex items-center gap-3 mb-4 transition-all duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
          >
            <div className="w-10 h-[1px] bg-lime-400" />
            <p className="text-lime-400 text-sm uppercase tracking-widest">
              Need a Project?
            </p>
          </div>

          <h2
            className={`text-4xl font-bold leading-tight mb-10 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            Let's Work Together. <br /> Fixed A Meeting
          </h2>

          <div className="space-y-6 text-sm text-gray-300">
            <div
              className={`flex items-center gap-4 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
            >
              <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center text-black font-bold">
                ✉
              </div>
              <div>
                <p className="text-gray-400">Email</p>
                <p className="font-medium">hello@yourmail.com</p>
              </div>
            </div>

            <div
              className={`flex items-center gap-4 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
            >
              <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center text-black font-bold">
                📍
              </div>
              <div>
                <p className="text-gray-400">Location</p>
                <p className="font-medium">Victoria Street, London, England</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Illustration - Slides from right */}
        <div
          className={`flex justify-center transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-12 scale-95"
          }`}
          style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            alt="Working Illustration"
            className="w-[320px]"
          />
        </div>
      </div>
    </section>
  );
}
