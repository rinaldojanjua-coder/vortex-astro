import { useEffect, useRef, useState } from "react";

const clients = [
  "AK Gutter Gals",
  "FWD Construction",
  "Wrench on Wheels",
  "Midnight Sun Builders",
  "Polar Glow Detailing",
  "Total Roof Care",
  "The Fence Guy",
  "Northern Security",
  "Eagle River Automotive",
];

/* Constant scroll speed in px/s on every device. The keyframes translate the
   track by -50% of its own width, so the track must be width:max-content and
   the duration derived from its measured width — a fixed duration makes the
   marquee crawl on narrow screens (translateX % would otherwise resolve
   against the viewport-width box, not the content). */
const SPEED_PX_PER_S = 160;

export default function TrustedBy() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(24);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => {
      const half = el.scrollWidth / 2;
      if (half > 0) setDuration(half / SPEED_PX_PER_S);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section className="overflow-hidden bg-slate-900 py-12">
      <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-slate-400">
        Trusted by Alaska's Top Businesses
      </p>

      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-900 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-900 to-transparent" />

        <div
          ref={trackRef}
          className="flex w-max animate-marquee"
          style={{ animationDuration: `${duration}s` }}
        >
          {/* Two identical copies, each carrying its own trailing gap, so the
              -50% loop point is exactly one copy width — no seam jump. */}
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 gap-16 pr-16" aria-hidden={copy === 1}>
              {clients.map((name) => (
                <span
                  key={name}
                  className="shrink-0 text-xl font-semibold whitespace-nowrap text-slate-300"
                >
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 24s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
