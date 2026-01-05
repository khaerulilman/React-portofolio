const items = [
  "Website Design & Logo",
  "Business Branding",
  "Mobile Application Design",
  "UI/UX Mobile Design",
];

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-lime-400 py-3 border-y border-black">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="mx-6 text-sm font-semibold uppercase tracking-wide text-black flex items-center gap-3"
          >
            {item}
            <span className="text-black">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
