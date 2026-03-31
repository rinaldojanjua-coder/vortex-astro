import { motion } from "framer-motion";
import { Star, ArrowRight, Play } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const stats = [
  { value: "100+", label: "Reviews Generated" },
  { value: "4.9", label: "Average Star Rating" },
  { value: "20 min", label: "Setup Time" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left content - 60% */}
          <div className="w-full lg:w-[60%]">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
            >
              <Star className="h-4 w-4 fill-blue-500 text-blue-500" />
              Trusted by Anchorage Home Service Businesses
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Review Automation For{" "}
              <span className="text-blue-600">Alaskan Businesses</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600"
            >
              Get more 5-star Google reviews on autopilot. 20-minute setup, then
              never think about it again. Built by Alaskans, for Alaskans.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700"
              >
                Start Getting Reviews
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                <Play className="h-4 w-4 fill-slate-500 text-slate-500" />
                See How It Works
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-8 border-t border-slate-100 pt-8"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-900">
                    {stat.value}
                  </span>
                  <span className="text-sm text-slate-500">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right content - 40% */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative w-full lg:w-[40%]"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl shadow-slate-900/10">
              <div className="relative aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/i0f9DzOSC2A"
                  title="Vortex Leads Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>

            {/* Floating testimonial card */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="absolute -bottom-6 -left-6 rounded-xl border border-slate-100 bg-white px-5 py-4 shadow-lg sm:-bottom-8 sm:-left-8"
            >
              <div className="mb-1 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-sm font-semibold text-slate-800">
                "15 to 43 reviews in under 4 days!"
              </p>
              <p className="text-xs text-slate-500">
                — Julia, AK Gutter Gals
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
