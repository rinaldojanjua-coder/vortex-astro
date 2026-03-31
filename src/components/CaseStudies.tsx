import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

interface CaseStudy {
  name: string;
  business: string;
  before: number;
  after: number;
  timeframe: string;
  quote: string;
  image: string;
}

const studies: CaseStudy[] = [
  {
    name: "Julia",
    business: "AK Gutter Gals",
    before: 15,
    after: 68,
    timeframe: "4 days",
    quote:
      "Set-up took 20 minutes and we got 28 reviews in the first 4 days! We're now consistently ranked in the top 3!",
    image: "/ak-gutter-gals.jpg",
  },
  {
    name: "Tommy",
    business: "FWD Construction",
    before: 67,
    after: 153,
    timeframe: "few weeks",
    quote: "All handled automatically. I barely touch it!",
    image: "/fwd-construction.jpg",
  },
  {
    name: "Zach",
    business: "Wrench on Wheels",
    before: 12,
    after: 29,
    timeframe: "on autopilot",
    quote:
      "Set it up once and forgot about it. Reviews keep coming in.",
    image: "/wrench-on-wheels.jpg",
  },
];

export default function CaseStudies() {
  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Real Alaskan Businesses, Real Results
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studies.map((study, i) => (
            <motion.div
              key={study.business}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Business Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.business}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                {/* Before / After Numbers */}
                <div className="flex items-center justify-center gap-4 mb-5">
                  <div className="text-center">
                    <span className="block text-3xl font-extrabold text-slate-400">
                      {study.before}
                    </span>
                    <span className="text-xs text-slate-500 uppercase tracking-wide">
                      Before
                    </span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-primary shrink-0" />
                  <div className="text-center">
                    <span className="block text-3xl font-extrabold text-primary">
                      {study.after}
                    </span>
                    <span className="text-xs text-slate-500 uppercase tracking-wide">
                      After
                    </span>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center justify-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 text-amber fill-amber"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-slate-600 text-sm leading-relaxed italic mb-4">
                  "{study.quote}"
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold text-slate-900">
                    {study.name}
                  </span>
                  <span className="text-slate-400">/</span>
                  <span className="text-slate-500">{study.business}</span>
                </div>

                {/* Timeframe badge */}
                <div className="mt-3">
                  <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Results in {study.timeframe}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
