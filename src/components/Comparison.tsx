import { motion } from "framer-motion";
import { Check, X, Minus, Zap, Brain, MessageSquareHeart, BarChart3, ArrowRight } from "lucide-react";

/* ── Feature checklist data ────────────────────────────────── */
// true = has it, false = doesn't, "partial" = sort of
type Support = true | false | "partial";

interface Feature {
  name: string;
  vortex: Support;
  podium: Support;
  birdeye: Support;
  nicejob: Support;
  jobber: Support;
  ghl: Support;
  housecall: Support;
}

const features: Feature[] = [
  {
    name: "AI-personalized review requests",
    vortex: true, podium: false, birdeye: false, nicejob: false, jobber: false, ghl: false, housecall: false,
  },
  {
    name: "Personalized images with customer name",
    vortex: true, podium: false, birdeye: false, nicejob: false, jobber: false, ghl: false, housecall: false,
  },
  {
    name: "SMS review requests",
    vortex: true, podium: true, birdeye: true, nicejob: true, jobber: false, ghl: true, housecall: "partial",
  },
  {
    name: "Smart follow-up sequences",
    vortex: true, podium: "partial", birdeye: "partial", nicejob: "partial", jobber: false, ghl: false, housecall: false,
  },
  {
    name: "AI-timed send optimization",
    vortex: true, podium: false, birdeye: false, nicejob: false, jobber: false, ghl: false, housecall: false,
  },
  {
    name: "AI review responses",
    vortex: true, podium: false, birdeye: "partial", nicejob: false, jobber: false, ghl: false, housecall: false,
  },
  {
    name: "AI review response drafting",
    vortex: true, podium: false, birdeye: "partial", nicejob: false, jobber: false, ghl: false, housecall: false,
  },
  {
    name: "Multi-platform support (Google, Yelp, FB)",
    vortex: true, podium: true, birdeye: true, nicejob: true, jobber: false, ghl: "partial", housecall: false,
  },
  {
    name: "Social media reposting",
    vortex: true, podium: false, birdeye: "partial", nicejob: true, jobber: false, ghl: false, housecall: false,
  },
  {
    name: "Backlog blast (past customers)",
    vortex: true, podium: false, birdeye: false, nicejob: false, jobber: false, ghl: false, housecall: false,
  },
  {
    name: "Done-for-you setup",
    vortex: true, podium: false, birdeye: false, nicejob: false, jobber: false, ghl: false, housecall: false,
  },
  {
    name: "Works with your existing CRM",
    vortex: true, podium: "partial", birdeye: "partial", nicejob: "partial", jobber: true, ghl: true, housecall: true,
  },
  {
    name: "35–60% conversion rate",
    vortex: true, podium: false, birdeye: false, nicejob: false, jobber: false, ghl: false, housecall: false,
  },
  {
    name: "Results in days (not months)",
    vortex: true, podium: false, birdeye: false, nicejob: false, jobber: false, ghl: false, housecall: false,
  },
];

const columns = [
  { key: "vortex" as const, label: "Vortex", highlight: true },
  { key: "podium" as const, label: "Podium" },
  { key: "birdeye" as const, label: "Birdeye" },
  { key: "nicejob" as const, label: "NiceJob" },
  { key: "jobber" as const, label: "Jobber" },
  { key: "ghl" as const, label: "GHL" },
  { key: "housecall" as const, label: "Housecall" },
];

function StatusIcon({ value }: { value: Support }) {
  if (value === true) return <Check className="h-5 w-5 text-green-600" strokeWidth={3} />;
  if (value === "partial") return <Minus className="h-5 w-5 text-amber-500" strokeWidth={3} />;
  return <X className="h-5 w-5 text-red-500" strokeWidth={3} />;
}

/* ── Differentiator cards ──────────────────────────────────── */
const differentiators = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI Personalization",
    desc: "Every message is unique — customer name, job type, even a photo of their completed project. It feels like a personal text from the business owner, not a robot.",
  },
  {
    icon: <MessageSquareHeart className="h-6 w-6" />,
    title: "Smart Follow-Ups",
    desc: "Other tools send one email and hope. Vortex sends perfectly-timed, multi-channel follow-ups that adapt based on customer behavior — without being annoying.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "SMS-First Approach",
    desc: "Email open rates are 20%. SMS open rates are 98%. While competitors' requests drown in inboxes, Vortex messages get read in seconds.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Proven Results",
    desc: "3× to 10× review increases in 1–3 weeks. Gianni went from 2 to 23 reviews. David tripled his in 7 days. No other tool comes close.",
  },
];

export default function Comparison() {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 dot-grid" style={{ opacity: 0.35 }} />
      <div
        className="orb-2 pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{ background: "rgba(147, 197, 253, 0.35)", animation: "orb-float-2 22s ease-in-out infinite" }}
      />

      <div className="container-width relative">
        {/* Header */}
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Why Vortex Wins
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Stop Sending Generic Emails<br className="hidden sm:block" /> Into the Abyss
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Other tools blast the same boring template to every customer and pray someone clicks.
            Vortex uses AI to make every message personal — and that's why our clients see 3–10× more reviews.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-4 flex max-w-4xl flex-wrap items-center justify-end gap-4 text-xs text-slate-400"
        >
          <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-green-600" strokeWidth={3} /> Full support</span>
          <span className="flex items-center gap-1.5"><Minus className="h-4 w-4 text-amber-500" strokeWidth={3} /> Partial / basic</span>
          <span className="flex items-center gap-1.5"><X className="h-4 w-4 text-red-500" strokeWidth={3} /> Not available</span>
        </motion.div>

        {/* Feature checklist table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-5xl overflow-x-auto rounded-2xl border border-slate-200 shadow-sm"
        >
          <table className="w-full min-w-[700px] text-sm">
            {/* Header */}
            <thead>
              <tr className="bg-slate-900">
                <th className="px-4 py-3.5 text-left text-xs font-bold uppercase tracking-widest text-slate-300">
                  Feature
                </th>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className={`px-3 py-3.5 text-center text-xs font-bold uppercase tracking-widest ${
                      col.highlight ? "bg-blue-600 text-white" : "text-slate-400"
                    }`}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Rows */}
            <tbody>
              {features.map((feat, i) => (
                <tr
                  key={feat.name}
                  className={`border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}
                >
                  <td className="px-4 py-3 font-medium text-slate-800">
                    {feat.name}
                  </td>
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={`px-3 py-3 text-center ${col.highlight ? "bg-blue-50/50" : ""}`}
                    >
                      <span className="inline-flex items-center justify-center">
                        <StatusIcon value={feat[col.key]} />
                      </span>
                    </td>
                  ))}
                </tr>
              ))}

              {/* Score row */}
              <tr className="border-t-2 border-slate-200 bg-slate-50">
                <td className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Total ✓
                </td>
                {columns.map((col) => {
                  const count = features.filter((f) => f[col.key] === true).length;
                  return (
                    <td
                      key={col.key}
                      className={`px-3 py-3 text-center font-mono text-lg font-extrabold ${
                        col.highlight ? "bg-blue-50/50 text-blue-600" : "text-slate-400"
                      }`}
                    >
                      {count}/{features.length}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Why the difference — 4 differentiator cards */}
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-8 text-center text-2xl font-extrabold text-slate-900"
        >
          Why Vortex Gets 3–10× More Reviews
        </motion.h3>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
            >
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                {d.icon}
              </div>
              <h4 className="mb-2 text-base font-bold text-slate-900">{d.title}</h4>
              <p className="text-sm leading-relaxed text-slate-600">{d.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="mb-2 text-sm font-medium text-slate-500">
            Still sending generic emails? Your competitors aren't.
          </p>
          <a
            href="/pricing"
            className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Switch to Vortex
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
