const logos = Array(5).fill("Logoipsum");

export default function LogoMarquee() {
  return (
    <section className="bg-black py-8 overflow-hidden">
      <div className="w-full flex items-center justify-around flex-wrap gap-8 px-6">
        {logos.map((logo, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-gray-400 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-6 h-6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            <span className="font-bold text-lg tracking-tight">{logo}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
