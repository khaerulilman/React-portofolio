type Props = {
  text: string;
};

export default function NeonCircleButton({ text }: Props) {
  return (
    <div className="relative w-44 h-44">
      {/* Shadow layer */}
      <div className="absolute inset-0 rounded-full bg-black/60 translate-x-1 translate-y-2" />

      {/* Main button */}
      <button className="absolute inset-0 rounded-full bg-lime-400 flex flex-col items-center justify-center text-black font-medium hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(163,230,53,0.4)]">
        <span className="text-xl mb-1">→</span>
        <span className="text-xs uppercase tracking-widest">{text}</span>
      </button>
    </div>
  );
}
