type Props = {
  text: string;
};

export default function NeonCircleButton({ text }: Props) {
  return (
    <div className="relative w-44 h-44 group">
      {/* Lingkaran belakang dengan animasi */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 to-black border border-gray-700 translate-x-1 translate-y-2 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-2" />

      {/* Lingkaran depan (tombol utama) */}
      <button className="absolute inset-0 rounded-full bg-gradient-to-br from-lime-400 to-lime-500 flex flex-col items-center justify-center text-black font-medium transition-all duration-300 ease-out shadow-[0_0_40px_rgba(163,230,53,0.4)] hover:shadow-[0_0_60px_rgba(163,230,53,0.6)] group-hover:-translate-y-1 border-2 border-lime-300">
        <span className="text-xl mb-1 transition-transform group-hover:translate-x-1">
          →
        </span>
        <span className="text-xs uppercase tracking-widest">{text}</span>
      </button>
    </div>
  );
}
