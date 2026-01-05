import NeonCircleButton from "./Item/NeonCircleButton";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const posts = [
  {
    id: 1,
    date: "October 19, 2023",
    title: "Brand Design That Helps The Company Grow",
  },
  {
    id: 2,
    date: "October 19, 2023",
    title: "Fresh Design Ideas & Inspiration For 2023",
  },
  {
    id: 3,
    date: "October 19, 2023",
    title: "Fresh Design Ideas & Inspiration For 2023",
  },
];

export default function RecentPosts() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.15,
    triggerOnce: false,
  });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#141410] text-white py-32 flex justify-center overflow-hidden"
    >
      <div className="max-w-6xl w-full px-6 grid md:grid-cols-2 gap-20">
        {/* Left - Slides from left */}
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
              My Blogs
            </p>
          </div>

          <h2
            className={`text-4xl font-bold mb-12 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            Recent Posts
          </h2>

          <div
            className={`transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
          >
            <NeonCircleButton text="Click More Work" />
          </div>
        </div>

        {/* Right - Posts with stagger */}
        <div className="divide-y divide-white/10">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className={`py-10 flex items-center justify-between gap-6 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
              style={{
                transitionDelay: isVisible ? `${200 + index * 150}ms` : "0ms",
              }}
            >
              <div>
                <p className="text-xs text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-lg font-semibold max-w-md">{post.title}</h3>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all duration-300 cursor-pointer hover:scale-110">
                {/* Eye Icon */}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
