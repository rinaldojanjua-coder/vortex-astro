import { motion } from "framer-motion";
import { ArrowRight, Star, TrendingUp, Clock, Trophy } from "lucide-react";

interface CaseStudy {
  name: string;
  business: string;
  beforeReviews: number;
  afterReviews: number;
  beforeStars?: number;
  afterStars?: number;
  timeframe: string;
  highlight: string;
  image: string;
  imagePosition?: string;
}

const studies: CaseStudy[] = [
  {
    name: "Gianni",
    business: "Polar Glow Detailing",
    beforeReviews: 2,
    afterReviews: 23,
    beforeStars: 3.3,
    afterStars: 4.9,
    timeframe: "3 weeks",
    highlight: "Top-ranked in Eagle River",
    image: "/canva_gianni_optimized_50.png",
  },
  {
    name: "David Wilcox",
    business: "Total Roof Care",
    beforeReviews: 16,
    afterReviews: 48,
    timeframe: "1 week",
    highlight: "3× reviews in 7 days",
    image: "/total-roof-care.jpg",
  },
  {
    name: "Dennis",
    business: "The Fence Guy",
    beforeReviews: 30,
    afterReviews: 75,
    beforeStars: 3.6,
    afterStars: 4.6,
    timeframe: "2 weeks",
    highlight: "+1.0 star rating jump",
    image: "/dennis_optimized_50.jpeg",
    imagePosition: "center 30%",
  },
  {
    name: "Julia",
    business: "AK Gutter Gals",
    beforeReviews: 15,
    afterReviews: 68,
    timeframe: "4 days",
    highlight: "28 reviews in first 4 days",
    image: "/ak-gutter-gals.jpg",
  },
  {
    name: "Tommy",
    business: "FWD Construction",
    beforeReviews: 67,
    afterReviews: 160,
    timeframe: "3 weeks",
    highlight: "93 new reviews",
    image: "/fwd-construction.jpg",
  },
  {
    name: "Zach",
    business: "Wrench on Wheels",
    beforeReviews: 12,
    afterReviews: 29,
    timeframe: "2 weeks",
    highlight: "More than doubled",
    image: "/wrench-on-wheels.jpg",
  },
];

function CaseCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="flex w-full sm:w-[300px] shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md sm:snap-start"
    >
      {/* Photo */}
      <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <img
          src={study.image}
          alt={study.business}
          className="h-full w-full object-cover"
          style={study.imagePosition ? { objectPosition: study.imagePosition } : undefined}
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        {/* Name */}
        <p className="text-sm font-bold text-slate-900">{study.name}</p>
        <p className="text-xs text-slate-500">{study.business}</p>

        {/* Before → After reviews */}
        <div className="mt-3 flex items-center gap-3">
          <span className="text-2xl font-extrabold text-slate-300">{study.beforeReviews}</span>
          <ArrowRight className="h-4 w-4 text-blue-500" />
          <span className="text-2xl font-extrabold text-blue-600">{study.afterReviews}</span>
          <span className="text-[10px] uppercase tracking-wide text-slate-400">reviews</span>
        </div>

        {/* Star change */}
        {study.beforeStars && study.afterStars && (
          <div className="mt-1.5 flex items-center gap-2 text-xs">
            <span className="text-slate-400">{study.beforeStars}★</span>
            <ArrowRight className="h-3 w-3 text-blue-400" />
            <span className="font-bold text-slate-800">{study.afterStars}★</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, s) => (
                <Star key={s} className={`h-3 w-3 ${s < Math.round(study.afterStars!) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}`} />
              ))}
            </div>
          </div>
        )}

        {/* Badges */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-[11px] font-semibold text-green-700">
            {study.highlight}
          </span>
          <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-medium text-blue-700">
            {study.timeframe}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  return (
    <section className="section-padding relative overflow-hidden bg-slate-50">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 dot-grid" style={{ opacity: 0.5 }} />
      <div
        className="orb-2 pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full blur-3xl"
        style={{ background: "rgba(147, 197, 253, 0.45)", animation: "orb-float-2 22s ease-in-out infinite" }}
      />

      <div className="relative">
        {/* Header */}
        <motion.div
          className="container-width mx-auto mb-6 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Real Results
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Results No Other Tool Can Match
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            These aren't cherry-picked numbers — every single Attu Reviews client sees results like this.
          </p>
        </motion.div>

        {/* Aggregate stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="container-width mx-auto mb-10 grid max-w-3xl grid-cols-3 gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm"
        >
          {[
            { icon: <TrendingUp className="h-5 w-5 text-blue-600" />, value: "3–4×", label: "Avg review increase" },
            { icon: <Clock className="h-5 w-5 text-blue-600" />, value: "1–3 weeks", label: "Time to results" },
            { icon: <Trophy className="h-5 w-5 text-blue-600" />, value: "100%", label: "Client satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                {stat.icon}
              </div>
              <span className="text-lg font-extrabold text-slate-900 sm:text-xl">{stat.value}</span>
              <span className="mt-0.5 text-[11px] text-slate-500">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Cards: vertical stack on mobile, horizontal scroll row on sm+ */}
        <div className="relative">
          {/* Fade edges (horizontal mode only) */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 hidden h-full bg-gradient-to-r from-slate-50 to-transparent sm:block sm:w-16" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full bg-gradient-to-l from-slate-50 to-transparent sm:block sm:w-16" />

          <div className="flex flex-col gap-5 px-6 pb-4 pt-1 sm:flex-row sm:overflow-x-auto sm:snap-x sm:snap-mandatory scrollbar-hide sm:px-12 lg:px-20">
            {studies.map((study, i) => (
              <CaseCard key={study.business} study={study} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="mb-4 text-lg font-semibold text-slate-800">
            Every Attu Reviews client sees results like this. You will too.
          </p>
          <a
            href="/pricing"
            className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Start Getting Reviews
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
