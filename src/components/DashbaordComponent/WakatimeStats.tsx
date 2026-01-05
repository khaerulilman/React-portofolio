const stats = [
  { label: "Total Coding Time", value: "423 hrs" },
  { label: "Top Language", value: "TypeScript (42%)" },
  { label: "Daily Average", value: "2.4 hrs/day" },
  { label: "Editor", value: "VS Code (91%)" },
];

interface WakatimeStatsProps {
  isVisible?: boolean;
}

export default function WakatimeStats({
  isVisible = true,
}: WakatimeStatsProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">WakaTime Stats</h3>
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((s, index) => (
          <div
            key={s.label}
            className={`bg-white/5 rounded-xl p-6 text-center border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-lime-400/30 hover:scale-105 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: isVisible ? `${400 + index * 100}ms` : "0ms",
            }}
          >
            <p className="text-gray-400 text-sm mb-2">{s.label}</p>
            <p className="text-2xl font-bold">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
