export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black text-white border-t border-white/10 py-6">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Left text */}
        <p className="text-sm text-gray-400">
          Copyright © 2026{" "}
          <span className="text-lime-400 font-medium">Ilman</span>. All rights
          reserved.
        </p>

        {/* Scroll to top */}
        <button
          onClick={scrollTop}
          className="w-10 h-10 rounded-md bg-lime-400 text-black flex items-center justify-center hover:bg-lime-300 transition"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}
