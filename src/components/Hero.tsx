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
  { value: "500+", label: "Reviews Generated" },
  { value: "4.9★", label: "Average Rating" },
  { value: "20 min", label: "Setup Time" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="orb-1 absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ background: "rgba(147, 197, 253, 0.5)", animation: "orb-float-1 18s ease-in-out infinite" }}
        />
        <div
          className="orb-2 absolute top-1/2 -right-40 h-[400px] w-[400px] rounded-full blur-3xl"
          style={{ background: "rgba(191, 219, 254, 0.4)", animation: "orb-float-2 22s ease-in-out infinite" }}
        />
        <div
          className="orb-3 absolute -bottom-20 left-1/3 h-[300px] w-[300px] rounded-full blur-3xl"
          style={{ background: "rgba(203, 213, 225, 0.5)", animation: "orb-float-3 26s ease-in-out infinite" }}
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 dot-grid"
          style={{ opacity: 0.5 }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">

          {/* Left — text content */}
          <div className="w-full lg:w-[58%]">
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Review Automation For{" "}
              <span className="text-gradient">Alaskan Businesses</span>
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
              className="mb-10 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                Start Getting Reviews
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0"
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
              className="flex flex-wrap gap-8 border-t border-slate-200 pt-8"
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

          {/* Right — Portrait YouTube Short */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative w-full max-w-[260px] mx-auto lg:mx-0 lg:w-[42%] lg:max-w-[300px]"
          >
            {/* Phone frame wrapper for portrait video */}
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-blue-100/60 blur-2xl" />

              {/* Phone shell */}
              <div className="relative rounded-[2rem] border-4 border-slate-800 bg-slate-900 p-1.5 shadow-2xl shadow-slate-900/40">
                {/* Notch */}
                <div className="absolute left-1/2 top-2 -translate-x-1/2 h-5 w-24 rounded-full bg-slate-800 z-10" />

                {/* Portrait video — 9:16 */}
                <div className="overflow-hidden rounded-[1.5rem] aspect-[9/16] w-full bg-slate-900">
                  <iframe
                    src="https://www.youtube.com/embed/i0f9DzOSC2A?rel=0&modestbranding=1"
                    title="Attu Reviews Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>

            {/* Floating testimonial card */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="absolute -bottom-8 -left-10 w-52 rounded-2xl border border-slate-100 bg-white px-4 py-3.5 shadow-xl shadow-slate-200/60"
            >
              <div className="mb-1.5 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm font-semibold leading-snug text-slate-800">
                "15 to 43 reviews in 4 days!"
              </p>
              <p className="mt-1 text-xs text-slate-500">— Julia, AK Gutter Gals</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
