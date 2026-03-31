import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Minus,
  Zap,
  Shield,
  TrendingUp,
  CreditCard,
  ChevronRight,
  Building2,
  Users,
  Crown,
  Rocket,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                 */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ------------------------------------------------------------------ */
/*  Data: Backlog Blast tiers                                         */
/* ------------------------------------------------------------------ */

interface BacklogTier {
  label: string;
  range: string;
  price: string;
  discount?: string;
  examples: string[];
}

const backlogTiers: BacklogTier[] = [
  {
    label: "Tier 1",
    range: "Under 50",
    price: "$10.00",
    examples: ["25 = $250", "50 = $500"],
  },
  {
    label: "Tier 2",
    range: "50 \u2013 250",
    price: "$7.00",
    discount: "30% off",
    examples: ["100 = $700", "250 = $1,750"],
  },
  {
    label: "Tier 3",
    range: "250 \u2013 500",
    price: "$5.00",
    discount: "50% off",
    examples: ["350 = $1,750", "500 = $2,500"],
  },
  {
    label: "Tier 4",
    range: "500 \u2013 1,000",
    price: "$3.50",
    discount: "65% off",
    examples: ["750 = $2,625", "1K = $3,500"],
  },
  {
    label: "Tier 5",
    range: "1,000 \u2013 5,000",
    price: "$2.50",
    discount: "75% off",
    examples: ["2.5K = $6,250", "5K = $12,500"],
  },
  {
    label: "Tier 6",
    range: "5,000+",
    price: "$1.75",
    discount: "82% off",
    examples: ["7.5K = $13,125", "10K = $17,500"],
  },
];

/* ------------------------------------------------------------------ */
/*  Data: Monthly plan tiers                                          */
/* ------------------------------------------------------------------ */

interface MonthlyTier {
  label: string;
  range: string;
  price: string;
  threeMonth: string;
  platforms: string;
  overage: string;
  features: boolean[];
  highlight?: boolean;
}

// Feature list labels (rows)
const featureLabels: string[] = [
  "SMS + Email review requests",
  "CRM integration",
  "Personalized messaging",
  "Review link optimization",
  "Email support",
  "Quarterly strategy call",
  "Multi-platform split",
  "Follow-up sequences",
  "Smart send-time optimization",
  "Priority support",
  "Analytics dashboard",
  "Negative review alerts",
  "Review response templates",
  "Monthly strategy calls",
  "Multi-location support",
  "Custom review funnels",
  "Competitor review monitoring",
  "Dedicated account manager",
  "Bi-weekly strategy calls",
  "White-glove onboarding",
  "Custom API integrations",
  "Priority feature requests",
  "Unlimited platforms",
];

const monthlyTiers: MonthlyTier[] = [
  {
    label: "Tier 1",
    range: "Under 50/mo",
    price: "$297",
    threeMonth: "$891",
    platforms: "Google only",
    overage: "$8.00",
    features: [
      true, true, true, true, true, true,
      false, false, false, false,
      false, false, false, false,
      false, false,
      false, false, false,
      false, false, false, false,
    ],
  },
  {
    label: "Tier 2",
    range: "50 \u2013 150/mo",
    price: "$597",
    threeMonth: "$1,791",
    platforms: "Up to 3",
    overage: "$5.50",
    highlight: true,
    features: [
      true, true, true, true, true, true,
      true, true, true, true,
      false, false, false, false,
      false, false,
      false, false, false,
      false, false, false, false,
    ],
  },
  {
    label: "Tier 3",
    range: "150 \u2013 300/mo",
    price: "$897",
    threeMonth: "$2,691",
    platforms: "Up to 5",
    overage: "$4.00",
    features: [
      true, true, true, true, true, true,
      true, true, true, true,
      true, true, true, true,
      false, false,
      false, false, false,
      false, false, false, false,
    ],
  },
  {
    label: "Tier 4",
    range: "300 \u2013 500/mo",
    price: "$1,197",
    threeMonth: "$3,591",
    platforms: "Multi-location",
    overage: "$2.75",
    features: [
      true, true, true, true, true, true,
      true, true, true, true,
      true, true, true, true,
      true, true,
      false, false, false,
      false, false, false, false,
    ],
  },
  {
    label: "Tier 5",
    range: "500 \u2013 1,000/mo",
    price: "$1,997",
    threeMonth: "$5,991",
    platforms: "Multi-location",
    overage: "$2.00",
    features: [
      true, true, true, true, true, true,
      true, true, true, true,
      true, true, true, true,
      true, true,
      true, true, true,
      false, false, false, false,
    ],
  },
  {
    label: "Enterprise",
    range: "1,000+/mo",
    price: "Custom",
    threeMonth: "Custom",
    platforms: "Unlimited",
    overage: "Custom",
    features: [
      true, true, true, true, true, true,
      true, true, true, true,
      true, true, true, true,
      true, true,
      true, true, true,
      true, true, true, true,
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Tiny reusable pieces                                              */
/* ------------------------------------------------------------------ */

function SectionHeading({
  tag,
  title,
  subtitle,
}: {
  tag: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={0}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mb-12 text-center"
    >
      <span className="mb-3 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
        {tag}
      </span>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-slate-900">
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {/* ====================================================== */}
        {/*  SECTION 1 — Two Ways In                               */}
        {/* ====================================================== */}

        <SectionHeading
          tag="Client Paths"
          title="Two Ways to Get Started"
          subtitle="Whether you're ready to commit or want proof first, we have the right path for you."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2"
        >
          {/* Path A */}
          <motion.div
            variants={fadeUp}
            custom={1}
            className="group relative rounded-2xl border border-slate-700/60 bg-slate-800/60 backdrop-blur-sm transition-all hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5"
          >
            <div className="h-1 rounded-t-2xl bg-gradient-to-r from-blue-500 to-blue-400" />
            <div className="p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                  <Rocket className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Path A &mdash; Direct Start
                  </h3>
                  <p className="text-sm font-medium text-blue-400">
                    CRM-Ready Clients
                  </p>
                </div>
              </div>
              <p className="mb-6 text-sm text-slate-400">
                Lower volume, ready to commit. Get live fast.
              </p>
              <ol className="space-y-3 text-sm text-slate-300">
                {[
                  "Sign 3-month plan",
                  "CRM integration \u2014 live in 1 week",
                  "Reviews flowing in days",
                  "Upsell to custom system at 3\u20136 months",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 font-mono text-xs font-bold text-blue-400">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>

          {/* Path B */}
          <motion.div
            variants={fadeUp}
            custom={2}
            className="group relative rounded-2xl border border-slate-700/60 bg-slate-800/60 backdrop-blur-sm transition-all hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/5"
          >
            <div className="h-1 rounded-t-2xl bg-gradient-to-r from-purple-500 to-purple-400" />
            <div className="p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                  <Shield className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Path B &mdash; Test First
                  </h3>
                  <p className="text-sm font-medium text-purple-400">
                    High-Volume / Cautious Clients
                  </p>
                </div>
              </div>
              <p className="mb-6 text-sm text-slate-400">
                Large operations, want proof before committing.
              </p>
              <ol className="space-y-3 text-sm text-slate-300">
                {[
                  "Backlog blast (500+ contacts)",
                  "Results in 5\u201310 days",
                  "Sign 3-month plan (credit applied)",
                  "Full CRM integration \u2014 upsell",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500/10 font-mono text-xs font-bold text-purple-400">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </motion.div>

        {/* ====================================================== */}
        {/*  SECTION 2 — Backlog Blast                             */}
        {/* ====================================================== */}

        <div className="mt-28">
          <SectionHeading
            tag="One-Time Pricing"
            title="Backlog Blast"
            subtitle="Unlock your existing customer list. Volume discounts built in."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {backlogTiers.map((tier, i) => (
              <motion.div
                key={tier.label}
                variants={fadeUp}
                custom={i}
                className="group rounded-xl border border-slate-700/60 bg-slate-800/50 p-6 transition-all hover:border-purple-500/30 hover:bg-slate-800/80"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-purple-400">
                    {tier.label}
                  </span>
                  {tier.discount && (
                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-xs font-bold text-emerald-400">
                      {tier.discount}
                    </span>
                  )}
                </div>
                <p className="mb-1 text-sm font-medium text-slate-400">
                  {tier.range} requests
                </p>
                <p className="mb-4 font-mono text-2xl font-extrabold text-white">
                  {tier.price}
                  <span className="text-sm font-normal text-slate-500">
                    /req
                  </span>
                </p>
                <div className="space-y-1.5 border-t border-slate-700/50 pt-4">
                  {tier.examples.map((ex) => (
                    <p
                      key={ex}
                      className="font-mono text-xs text-slate-400"
                    >
                      {ex}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Info bar */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mt-6 flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-xl border border-purple-500/20 bg-purple-500/5 px-6 py-4 text-center text-sm text-purple-300"
          >
            <span className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span className="font-mono font-semibold">$250</span> minimum per
              backlog project
            </span>
            <span className="hidden text-purple-500/40 sm:inline">|</span>
            <span className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Backlog cost credits toward first month(s) of monthly plan
            </span>
          </motion.div>
        </div>

        {/* ====================================================== */}
        {/*  SECTION 3 — Monthly Plans                             */}
        {/* ====================================================== */}

        <div className="mt-28">
          <SectionHeading
            tag="Monthly Plans"
            title="Ongoing Review Automation"
            subtitle="3-month minimum commitment. Scale up or down as you grow."
          />

          {/* Horizontal-scrolling comparison table */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mx-auto max-w-6xl"
          >
            <div className="-mx-4 overflow-x-auto px-4 pb-4">
              <table className="w-full min-w-[900px] border-collapse text-left text-sm">
                {/* Header */}
                <thead>
                  <tr>
                    <th className="sticky left-0 z-10 bg-slate-900 pb-4 pr-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Feature
                    </th>
                    {monthlyTiers.map((tier) => (
                      <th
                        key={tier.label}
                        className={`pb-4 text-center ${
                          tier.highlight ? "relative" : ""
                        }`}
                      >
                        {tier.highlight && (
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-blue-500 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                            Most Popular
                          </span>
                        )}
                        <div
                          className={`rounded-t-lg px-3 py-3 ${
                            tier.label === "Enterprise"
                              ? "bg-amber-500/10"
                              : tier.highlight
                                ? "bg-blue-500/10"
                                : "bg-slate-800/80"
                          }`}
                        >
                          <span
                            className={`block font-mono text-xs font-bold uppercase tracking-wider ${
                              tier.label === "Enterprise"
                                ? "text-amber-400"
                                : tier.highlight
                                  ? "text-blue-400"
                                  : "text-slate-400"
                            }`}
                          >
                            {tier.label}
                          </span>
                          <span className="mt-1 block text-xs text-slate-500">
                            {tier.range}
                          </span>
                          <span className="mt-2 block font-mono text-xl font-extrabold text-white">
                            {tier.price}
                            {tier.price !== "Custom" && (
                              <span className="text-xs font-normal text-slate-500">
                                /mo
                              </span>
                            )}
                          </span>
                          <span className="mt-0.5 block font-mono text-[11px] text-slate-500">
                            3-mo = {tier.threeMonth}
                          </span>
                          <span
                            className={`mt-1 block text-[11px] font-medium ${
                              tier.label === "Enterprise"
                                ? "text-amber-400/70"
                                : "text-blue-400/70"
                            }`}
                          >
                            {tier.platforms}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Feature rows */}
                <tbody>
                  {featureLabels.map((feature, fi) => (
                    <tr
                      key={feature}
                      className={`border-b border-slate-800 ${
                        fi % 2 === 0 ? "bg-slate-800/20" : ""
                      }`}
                    >
                      <td className="sticky left-0 z-10 bg-slate-900 py-2.5 pr-4 text-xs text-slate-400">
                        {feature}
                      </td>
                      {monthlyTiers.map((tier) => (
                        <td key={tier.label} className="py-2.5 text-center">
                          {tier.features[fi] ? (
                            <Check className="mx-auto h-4 w-4 text-emerald-400" />
                          ) : (
                            <Minus className="mx-auto h-4 w-4 text-slate-600" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}

                  {/* Overage row */}
                  <tr className="border-t-2 border-slate-700">
                    <td className="sticky left-0 z-10 bg-slate-900 py-3 pr-4 text-xs font-semibold uppercase tracking-wider text-amber-400">
                      Overage / req
                    </td>
                    {monthlyTiers.map((tier) => (
                      <td
                        key={tier.label}
                        className="py-3 text-center font-mono text-sm font-bold text-amber-400"
                      >
                        {tier.overage}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* ====================================================== */}
        {/*  SECTION 4 — Backlog-to-Monthly Credit                 */}
        {/* ====================================================== */}

        <div className="mt-28">
          <SectionHeading
            tag="Credit System"
            title="Backlog \u2192 Monthly Credit"
            subtitle="Path B clients who convert get their backlog investment credited toward monthly plans."
          />

          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-4xl rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 sm:p-10"
          >
            <div className="mb-8 flex items-center gap-3 text-emerald-400">
              <CreditCard className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                How the credit works
              </span>
            </div>

            <p className="mb-8 text-slate-300">
              Your entire backlog investment is applied as a rolling credit to
              your first month(s) of the monthly plan. You only pay the
              difference until the credit runs out.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Example 1 — Mid-Size */}
              <div className="rounded-xl border border-slate-700/50 bg-slate-800/60 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-blue-400" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-400">
                    Mid-Size Example
                  </span>
                </div>
                <p className="mb-4 font-mono text-sm text-slate-400">
                  120 req @ $7.00 ={" "}
                  <span className="font-bold text-emerald-400">$840</span>{" "}
                  credit
                </p>
                <div className="space-y-2 border-t border-slate-700/50 pt-4 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Month 1</span>
                    <span className="font-mono">
                      $597 &minus; $597 ={" "}
                      <span className="font-bold text-emerald-400">$0</span>
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Month 2</span>
                    <span className="font-mono">
                      $597 &minus; $243 ={" "}
                      <span className="font-bold text-white">$354</span>
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Month 3</span>
                    <span className="font-mono text-white">$597</span>
                  </div>
                  <div className="mt-2 flex justify-between border-t border-slate-700/50 pt-2 text-sm font-bold text-white">
                    <span>3-Month Total</span>
                    <span className="font-mono">$1,791</span>
                  </div>
                </div>
              </div>

              {/* Example 2 — Large */}
              <div className="rounded-xl border border-slate-700/50 bg-slate-800/60 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Crown className="h-4 w-4 text-purple-400" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-400">
                    Large Example
                  </span>
                </div>
                <p className="mb-4 font-mono text-sm text-slate-400">
                  450 req @ $3.50 ={" "}
                  <span className="font-bold text-emerald-400">$1,575</span>{" "}
                  credit
                </p>
                <div className="space-y-2 border-t border-slate-700/50 pt-4 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Month 1</span>
                    <span className="font-mono">
                      $1,197 &minus; $1,197 ={" "}
                      <span className="font-bold text-emerald-400">$0</span>
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Month 2</span>
                    <span className="font-mono">
                      $1,197 &minus; $378 ={" "}
                      <span className="font-bold text-white">$819</span>
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Month 3</span>
                    <span className="font-mono text-white">$1,197</span>
                  </div>
                  <div className="mt-2 flex justify-between border-t border-slate-700/50 pt-2 text-sm font-bold text-white">
                    <span>3-Month Total</span>
                    <span className="font-mono">$3,591</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ====================================================== */}
        {/*  CTA                                                   */}
        {/* ====================================================== */}

        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-600/30"
          >
            Schedule a Free Demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-4 text-sm text-slate-500">
            No obligation. See exactly how it works for your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
