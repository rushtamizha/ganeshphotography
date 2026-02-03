const items = [
  "Event photography",
  "Wedding Photography",
  "House warming Photography",
  "Engagement Photography",
  "Puberty Photography",
  "Corporate  Photography",
  "Maternity & Newborn Photography",
];

export default function Stripe() {
  return (
    <div className=" overflow-hidden bg-[#43bfd0] py-3">
      <div className="flex whitespace-nowrap">
        {/* First copy */}
        <div className="animate-marquee flex items-center gap-6 px-4 text-sm font-medium text-[#03141d]">
          {items.map((item, i) => (
            <span key={i}>
              {item} <span className="mx-3">✱</span>
            </span>
          ))}
        </div>

        {/* Second copy (for seamless loop) */}
        <div className="animate-marquee flex items-center gap-6 px-4 text-sm font-medium text-[#03141d]">
          {items.map((item, i) => (
            <span key={`dup-${i}`}>
              {item} <span className="mx-3">✱</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
