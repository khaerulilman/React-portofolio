export default function LineStyle() {
  return (
    <div className="relative w-full h-[5px] overflow-hidden">
      {/* Animated gradient line */}
      <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-transparent via-lime-400 to-transparent animate-pulse" />
    </div>
  );
}
