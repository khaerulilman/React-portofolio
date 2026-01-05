import { useMemo } from "react";

const weeks = 26;
const days = 7;

const generateData = () =>
  Array.from({ length: weeks * days }, () => Math.floor(Math.random() * 5));

const colors = [
  "bg-gray-800",
  "bg-lime-900",
  "bg-lime-700",
  "bg-lime-500",
  "bg-lime-400",
];

interface ContributionGridProps {
  isVisible?: boolean;
}

export default function ContributionGrid({
  isVisible = true,
}: ContributionGridProps) {
  const data = useMemo(() => generateData(), []);

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">GitHub Contributions</h3>
      <div className="flex gap-1 overflow-hidden">
        {Array.from({ length: weeks }).map((_, w) => (
          <div key={w} className="flex flex-col gap-1">
            {Array.from({ length: days }).map((_, d) => {
              const value = data[w * days + d];
              // Create a wave effect from left to right
              const delay = w * 20 + d * 10;

              return (
                <div
                  key={d}
                  className={`w-3 h-3 rounded-sm transition-all duration-300 hover:scale-150 ${
                    colors[value]
                  } ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${delay}ms` : "0ms",
                  }}
                  title={`${value} contributions`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
