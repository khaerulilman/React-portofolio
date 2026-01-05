export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center text-black font-extrabold">
            K
          </div>
          Khaerul Ilman
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wide text-gray-300">
          {["Home", "About", "Work", "Services", "Blog", "Contact"].map(
            (item) => (
              <li key={item} className="hover:text-white cursor-pointer">
                {item}
              </li>
            )
          )}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button className="bg-lime-400 text-black px-5 py-2 rounded-md font-medium hover:bg-lime-300 transition">
            Let's Talk →
          </button>
          <button className="md:hidden border border-white/30 px-3 py-2 rounded">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
