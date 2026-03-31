const clients = [
  "AK Gutter Gals",
  "FWD Construction",
  "Wrench on Wheels",
  "Midnight Sun Builders",
];

export default function TrustedBy() {
  return (
    <section className="overflow-hidden bg-slate-900 py-12">
      <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-slate-400">
        Trusted by Anchorage's Top Home Service Businesses
      </p>

      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-900 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-900 to-transparent" />

        <div className="flex animate-marquee gap-16">
          {[...clients, ...clients, ...clients, ...clients].map(
            (name, idx) => (
              <span
                key={idx}
                className="shrink-0 text-xl font-semibold whitespace-nowrap text-slate-300"
              >
                {name}
              </span>
            )
          )}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
