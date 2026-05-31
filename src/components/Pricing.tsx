import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Minus, ArrowRight, Zap, ChevronDown } from "lucide-react";

/* ─── Backlog tiers ─────────────────────────────────────────────────── */
const backlogTiers = [
  { range: "Under 50 requests",     price: "$10.00", examples: "25 req = $250  ·  50 req = $500" },
  { range: "50 – 250 requests",     price: "$7.00",  discount: "30% off", examples: "100 req = $700  ·  250 req = $1,750" },
  { range: "250 – 500 requests",    price: "$5.00",  discount: "50% off", examples: "350 req = $1,750  ·  500 req = $2,500" },
  { range: "500 – 1,000 requests",  price: "$3.50",  discount: "65% off", examples: "750 req = $2,625  ·  1K req = $3,500" },
  { range: "1,000 – 5,000 requests",price: "$2.50",  discount: "75% off", examples: "2.5K req = $6,250  ·  5K req = $12,500" },
  { range: "5,000+ requests",       price: "$1.75",  discount: "82% off", examples: "7.5K req = $13,125  ·  10K req = $17,500" },
];

/* ─── Monthly plan cards ────────────────────────────────────────────── */
interface Plan {
  name: string;
  range: string;
  price: string;
  commitment: string;
  platforms: string;
  overage: string;
  popular?: boolean;
  features: string[];
  advanced: string[];
}

const plans: Plan[] = [
  {
    name: "Starter",
    range: "Under 50 requests / mo",
    price: "$297",
    commitment: "",
    platforms: "1 platform",
    overage: "$8.00 / req",
    features: [
      "SMS + Email review requests",
      "CRM integration",
      "Personalized messaging",
      "Review link optimization",
      "Email support",
      "Quarterly strategy call",
    ],
    advanced: [],
  },
  {
    name: "Growth",
    range: "50 – 150 requests / mo",
    price: "$597",
    commitment: "",
    platforms: "Up to 3 platforms",
    overage: "$5.50 / req",
    features: [
      "Everything in Starter",
      "Multi-platform split (up to 3)",
      "Follow-up sequences (non-responders)",
      "Smart send-time optimization",
      "Priority support",
    ],
    advanced: [],
  },
  {
    name: "Pro",
    range: "150 – 300 requests / mo",
    price: "$897",
    commitment: "",
    platforms: "Up to 5 platforms",
    overage: "$4.00 / req",
    features: [
      "Everything in Growth",
      "Expanded platform split (up to 5)",
      "Analytics dashboard & reporting",
      "AI review response drafting",
      "Review response templates",
      "Monthly strategy calls",
    ],
    advanced: [],
  },
  {
    name: "Scale",
    range: "300 – 500 requests / mo",
    price: "$1,197",
    commitment: "",
    platforms: "Multi-location",
    overage: "$2.75 / req",
    features: [
      "Everything in Pro",
      "Multi-location support",
      "Custom review funnels by service line",
    ],
    advanced: [],
  },
  {
    name: "Elite",
    range: "500 – 1,000 requests / mo",
    price: "$1,997",
    commitment: "",
    platforms: "Multi-location",
    overage: "$2.00 / req",
    features: [
      "Everything in Scale",
      "Competitor review monitoring",
      "Dedicated account manager",
      "Bi-weekly strategy calls",
    ],
    advanced: [],
  },
  {
    name: "Enterprise",
    range: "Any volume",
    price: "Custom",
    commitment: "Custom terms",
    platforms: "Unlimited platforms",
    overage: "Custom rate",
    features: [
      "Everything in Elite",
      "White-glove onboarding & migration",
      "Custom API integrations",
      "Priority feature requests",
      "Unlimited platforms",
      "Custom features on request",
    ],
    advanced: [],
  },
];

/* ─── Collapsible backlog row ────────────────────────────────────────── */
function BacklogRow({
  tier,
  index,
}: {
  tier: (typeof backlogTiers)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <p className="text-sm font-semibold text-slate-800">{tier.range}</p>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        {tier.discount && (
          <span className="rounded-full bg-blue-50 px-2.5 py-0.5 font-mono text-xs font-semibold text-blue-600">
            {tier.discount}
          </span>
        )}
        <span className="font-mono text-lg font-extrabold text-slate-900">
          {tier.price}
          <span className="ml-0.5 text-sm font-normal text-slate-400">/req</span>
        </span>
      </div>
    </motion.div>
  );
}

/* ─── Plan card ──────────────────────────────────────────────────────── */
function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={`relative flex flex-col rounded-2xl border shadow-sm transition hover:shadow-md ${
        plan.name === "Enterprise"
          ? "border-slate-700 bg-slate-900 ring-1 ring-slate-600/30"
          : plan.popular
          ? "border-blue-400 bg-white ring-1 ring-blue-400/30"
          : "border-slate-200 bg-white"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-blue-600 px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-white shadow">
            Most Popular
          </span>
        </div>
      )}

      <div className={`rounded-t-2xl p-6 ${
        plan.name === "Enterprise" ? "bg-slate-900" : plan.popular ? "bg-blue-50" : "bg-slate-50"
      }`}>
        <h3 className={`text-base font-bold ${plan.name === "Enterprise" ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
        <p className={`mt-0.5 text-xs ${plan.name === "Enterprise" ? "text-slate-400" : "text-slate-500"}`}>{plan.range}</p>
        <div className="mt-4 flex items-end gap-1">
          <span className={`font-mono text-3xl font-extrabold ${plan.name === "Enterprise" ? "text-white" : "text-slate-900"}`}>
            {plan.price}
          </span>
          {plan.price !== "Custom" && <span className="mb-1 text-sm text-slate-500">/mo</span>}
        </div>
        {plan.commitment && (
          <p className={`mt-1 font-mono text-xs ${plan.name === "Enterprise" ? "text-slate-500" : "text-slate-400"}`}>{plan.commitment}</p>
        )}
        <div className="mt-3 flex items-center gap-1.5">
          <Zap className={`h-3.5 w-3.5 ${plan.name === "Enterprise" ? "text-blue-400" : "text-blue-500"}`} />
          <span className={`text-xs font-medium ${plan.name === "Enterprise" ? "text-blue-400" : "text-blue-600"}`}>{plan.platforms}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <ul className="space-y-2.5 text-sm">
          {plan.features.map((f) => (
            <li key={f} className={`flex items-start gap-2.5 ${plan.name === "Enterprise" ? "text-slate-300" : "text-slate-700"}`}>
              <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.name === "Enterprise" ? "text-blue-400" : "text-blue-500"}`} />
              {f}
            </li>
          ))}
        </ul>

        <a
          href="/contact"
          className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
            plan.name === "Enterprise"
              ? "bg-blue-600 text-white shadow-md shadow-blue-600/20 hover:bg-blue-700"
              : plan.popular
              ? "bg-blue-600 text-white shadow-md shadow-blue-600/20 hover:bg-blue-700"
              : "border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
          }`}
        >
          {plan.name === "Enterprise" ? "Contact Us" : "Get Started"}
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────── */
export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-slate-50">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 dot-grid" style={{ opacity: 0.5 }} />
      <div
        className="orb-1 pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{ background: "rgba(147, 197, 253, 0.45)", animation: "orb-float-1 18s ease-in-out infinite" }}
      />
      <div
        className="orb-3 pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full blur-3xl"
        style={{ background: "rgba(203, 213, 225, 0.5)", animation: "orb-float-3 26s ease-in-out infinite" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

        {/* ── Section header ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Simple, Volume-Based Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Pay based on how many review requests you send. Two ways to start — jump straight in, or test with your existing customer backlog first.
          </p>
        </motion.div>

        {/* ── Two paths ──────────────────────────── */}
        <div className="mx-auto mb-20 grid max-w-4xl gap-5 sm:grid-cols-2">
          {[
            {
              letter: "A",
              title: "Direct Start",
              sub: "CRM-ready clients",
              desc: "Lower volume, ready to commit. Get live in under a week and start seeing reviews within days.",
              steps: ["Pick your plan", "CRM connected in 1 week", "Reviews in days", "Upgrade as you grow"],
            },
            {
              letter: "B",
              title: "Test First",
              sub: "High-volume or cautious",
              desc: "Send a one-time backlog blast to prove the system works, then roll into a monthly plan.",
              steps: ["One-time backlog blast", "Results in 5–10 days", "Convert to monthly", "Full CRM integration"],
            },
          ].map((path, i) => (
            <motion.div
              key={path.letter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-blue-200 hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 font-mono text-sm font-bold text-white">
                  {path.letter}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{path.title}</p>
                  <p className="text-xs text-slate-500">{path.sub}</p>
                </div>
              </div>
              <p className="mb-5 text-sm leading-relaxed text-slate-600">{path.desc}</p>
              <ol className="space-y-2">
                {path.steps.map((step, si) => (
                  <li key={si} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 font-mono text-[10px] font-bold text-blue-600">
                      {si + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </motion.div>
          ))}
        </div>

        {/* ── Backlog blast ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex items-end justify-between"
        >
          <div>
            <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
              One-Time
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-slate-900">Backlog Blast Pricing</h3>
            <p className="mt-1 text-sm text-slate-500">
              Contact your existing customers. Big volume discounts built in.
            </p>
          </div>
        </motion.div>

        {/* Backlog explainer */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-6 rounded-2xl border border-blue-100 bg-blue-50/60 p-6"
        >
          <h4 className="text-sm font-bold text-slate-900">What's a Backlog Blast?</h4>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Most businesses have years of happy customers who never left a review. A Backlog Blast is a one-time campaign
            that reaches out to your entire customer history with a personalized review request — proving the system works
            before you commit to a monthly plan. Think of it as a fast way to turn past customers into 5-star social proof.
          </p>
        </motion.div>

        <div className="mb-20 space-y-3">
          {backlogTiers.map((tier, i) => (
            <BacklogRow key={tier.range} tier={tier} index={i} />
          ))}
        </div>

        {/* ── Monthly plans ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Monthly Plans
          </span>
          <h3 className="mt-2 text-2xl font-extrabold text-slate-900">Ongoing Review Automation</h3>
          <p className="mt-1 text-sm text-slate-500">
            Follow-ups are always included and don't count toward your request limit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Additional features note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mx-auto mt-6 max-w-xl rounded-xl border border-slate-200 bg-white px-6 py-4 text-center text-sm text-slate-600 shadow-sm"
        >
          Need a feature you don't see listed? <strong>We can add custom features upon request.</strong>{" "}
          <a href="/contact" className="font-semibold text-blue-600 hover:underline">
            Let's talk →
          </a>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-full bg-blue-600 px-9 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/35"
          >
            Schedule a Free Demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-4 text-sm text-slate-400">
            No obligation. See exactly how it works for your business.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
