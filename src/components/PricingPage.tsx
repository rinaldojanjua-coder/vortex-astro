import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Zap, Sparkles, Phone, Mail, MessageSquare, BarChart3, Brain, Users, Shield, Code, Globe, MapPin, Share2, ChevronDown } from "lucide-react";

/* ─── Features included in EVERY plan ──────────────────────── */
const coreFeatures = [
  { icon: <MessageSquare className="h-5 w-5" />, name: "SMS + Email review requests" },
  { icon: <Brain className="h-5 w-5" />, name: "AI-personalized messaging" },
  { icon: <Zap className="h-5 w-5" />, name: "Smart send-time optimization" },
  { icon: <Mail className="h-5 w-5" />, name: "Smart follow-ups" },
  { icon: <Users className="h-5 w-5" />, name: "CRM integration (Jobber, Housecall Pro, ServiceTitan, etc.)" },
  { icon: <BarChart3 className="h-5 w-5" />, name: "Analytics tracking" },
  { icon: <Shield className="h-5 w-5" />, name: "AI review response drafting" },
  { icon: <Phone className="h-5 w-5" />, name: "Monthly strategy call" },
];

/* ─── Add-ons ──────────────────────────────────────────────── */
const addons = [
  {
    icon: <Globe className="h-6 w-6" />,
    name: "Multi-Platform",
    price: "$147",
    period: "/mo",
    description: "Split reviews across up to 5 platforms (Google, Yelp, Facebook, etc.)",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    name: "Multi-Location",
    price: "$147",
    period: "/mo per location",
    description: "Add extra locations to your account. Same request limits apply across all locations.",
  },
  {
    icon: <Share2 className="h-6 w-6" />,
    name: "Social Posting Package",
    price: "$97",
    period: "/mo",
    description: "Website embed review widget + automated review posting to social media",
  },
];

/* ─── Custom / Enterprise features ─────────────────────────── */
const customFeatures = [
  "Everything in all standard plans",
  "Custom code & software development",
  "Custom API integrations",
  "White-glove onboarding & migration",
  "Priority feature requests",
  "Unlimited review platforms",
  "Custom review funnels by service line",
  "Unlimited locations",
  "Competitor review monitoring",
  "Dedicated account manager",
  "Bi-weekly strategy calls",
  "Custom reporting & dashboards",
  "Custom automation workflows",
  "Custom features built on request",
  "Bespoke integrations with any system",
];

/* ─── Backlog blast tiers ──────────────────────────────────── */
const backlogTiers = [
  { range: "Under 50 requests",      price: "$10.00" },
  { range: "50 – 250 requests",      price: "$7.00",  discount: "30% off" },
  { range: "250 – 500 requests",     price: "$5.00",  discount: "50% off" },
  { range: "500 – 1,000 requests",   price: "$3.50",  discount: "65% off" },
  { range: "1,000 – 5,000 requests", price: "$2.50",  discount: "75% off" },
  { range: "5,000+ requests",        price: "$1.75",  discount: "82% off" },
];

/* ─── Sliding-scale price calculator ───────────────────────────
   Base: up to 20 requests = $277
   20 → 500:   +$20 per 10 requests
   500 → 1,000: +$10 per 10 requests
   (anchors: 50=$337, 150=$537, 300=$837,
    500=$1,237, 1000=$1,737)
──────────────────────────────────────────────────────────────── */
function priceFor(requests: number): number {
  let price = 277;
  const capped = Math.min(requests, 500);
  price += ((capped - 20) / 10) * 20;
  if (requests > 500) {
    price += ((requests - 500) / 10) * 10;
  }
  return price;
}

const MIN_REQ = 20;
const MAX_REQ = 1000;

function VolumeSlider() {
  const [requests, setRequests] = useState(150);
  const price = priceFor(requests);
  const pct = ((requests - MIN_REQ) / (MAX_REQ - MIN_REQ)) * 100;
  const atMax = requests >= MAX_REQ;

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute inset-0 dot-grid" style={{ opacity: 0.3 }} />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl font-extrabold text-slate-900">Pay Only For What You Need</h2>
          <p className="mt-2 text-sm text-slate-500">
            Slide to your volume. Same full feature set at every level — you only pay for the requests you actually send.
          </p>
        </motion.div>

        {/* Calculator card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg sm:p-10"
        >
          {/* Volume — large, prominent */}
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Up to</p>
            <div className="mt-1 flex items-end justify-center gap-2">
              <span className="font-mono text-5xl font-extrabold text-slate-900 sm:text-6xl">
                {requests.toLocaleString("en-US")}
              </span>
              <span className="mb-2 text-base font-medium text-slate-500">review requests / mo</span>
            </div>
          </div>

          {/* Price — small */}
          <div className="mt-4 flex items-baseline justify-center gap-1">
            <span className="font-mono text-2xl font-bold text-blue-600">
              ${price.toLocaleString("en-US")}
            </span>
            <span className="text-sm text-slate-400">/mo</span>
          </div>

          {/* Slider */}
          <input
            type="range"
            min={MIN_REQ}
            max={MAX_REQ}
            step={10}
            value={requests}
            onChange={(e) => setRequests(Number(e.target.value))}
            aria-label="Monthly review request volume"
            className="volume-slider mt-10 w-full"
            style={{
              background: `linear-gradient(to right, #2563eb 0%, #2563eb ${pct}%, #e2e8f0 ${pct}%, #e2e8f0 100%)`,
            }}
          />
          <div className="mt-3 flex justify-between text-xs font-medium text-slate-400">
            <span>Up to 20</span>
            <span>Up to 1,000</span>
          </div>

          {/* CTA */}
          <a
            href="/contact"
            className="group mt-9 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Above-max note */}
          <p className="mt-4 text-center text-xs text-slate-400">
            {atMax ? (
              <>
                Need more than 1,000 / mo?{" "}
                <a href="#custom" className="font-semibold text-blue-600 hover:underline">
                  See Custom plans →
                </a>
              </>
            ) : (
              <>Adjusts in steps of 10. Every plan includes all features above.</>
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function BacklogBlastSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8 text-center shadow-sm sm:p-10"
        >
          <Sparkles className="mx-auto mb-4 h-8 w-8 text-blue-500" />
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Want proof before committing?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            Start with a one-time Backlog Blast — we reach out to your past customers with personalized
            review requests to prove the system works. See real results before picking a monthly plan.
          </p>

          {/* Dropdown toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="group mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            See Backlog Blast Pricing
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          <p className="mt-3 text-xs text-slate-400">
            One-time cost based on volume. No subscription required.
          </p>

          {/* Collapsible pricing tiers */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mx-auto mt-8 max-w-lg space-y-2.5 text-left">
                  {backlogTiers.map((tier) => (
                    <div
                      key={tier.range}
                      className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3"
                    >
                      <span className="text-sm font-medium text-slate-700">{tier.range}</span>
                      <div className="flex items-center gap-2">
                        {tier.discount && (
                          <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-blue-600">
                            {tier.discount}
                          </span>
                        )}
                        <span className="font-mono text-sm font-bold text-slate-900">
                          {tier.price}<span className="text-xs font-normal text-slate-400">/req</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="group mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Start with a Backlog Blast
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default function PricingPage() {
  return (
    <div className="pt-24">

      {/* ═══════════════════════════════════════════════════════
          SECTION 1 — Page header
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white pb-4">
        <div className="pointer-events-none absolute inset-0 dot-grid" style={{ opacity: 0.35 }} />
        <div
          className="orb-1 pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ background: "rgba(147, 197, 253, 0.4)", animation: "orb-float-1 18s ease-in-out infinite" }}
        />

        <div className="relative mx-auto max-w-5xl px-4 pt-16 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="mb-3 inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
              Automate Your Reviews
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Simple, Volume-Based Pricing
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
              Every plan includes the full suite of features below. Slide to the exact volume you need — you only pay for what you use.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2 — Features included in every plan
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-10 text-center"
          >
            <h2 className="text-2xl font-extrabold text-slate-900">Included in Every Plan</h2>
            <p className="mt-2 text-sm text-slate-500">No feature gates. No hidden upsells. You get the full system from day one.</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {coreFeatures.map((feat, i) => (
              <motion.div
                key={feat.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  {feat.icon}
                </div>
                <span className="text-sm font-medium text-slate-800">{feat.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Custom plan teaser — directly below features */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl rounded-xl border border-slate-800 bg-slate-900 px-6 py-4 text-center"
          >
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium text-slate-300">
                  Need custom code, integrations, or something unique?
                </span>
              </div>
              <a
                href="#custom"
                className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-blue-700"
              >
                See Custom Plans
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3 — Sliding-scale volume calculator
      ═══════════════════════════════════════════════════════ */}
      <VolumeSlider />

      {/* ═══════════════════════════════════════════════════════
          SECTION 4 — Add-ons (below volume slider)
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-10 text-center"
          >
            <h2 className="text-2xl font-extrabold text-slate-900">Optional Add-Ons</h2>
            <p className="mt-2 text-sm text-slate-500">Enhance your plan with these extras. Add or remove anytime.</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {addons.map((addon, i) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  {addon.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900">{addon.name}</h3>
                <div className="mt-2 flex items-end gap-0.5">
                  <span className="font-mono text-2xl font-extrabold text-blue-600">{addon.price}</span>
                  <span className="mb-0.5 text-sm text-slate-400">{addon.period}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 5 — Backlog Blast with dropdown pricing
      ═══════════════════════════════════════════════════════ */}
      <BacklogBlastSection />

      {/* ═══════════════════════════════════════════════════════
          SECTION 6 — Custom / Enterprise (prominent, dark)
      ═══════════════════════════════════════════════════════ */}
      <section id="custom" className="relative overflow-hidden bg-slate-900 py-20">
        <div className="pointer-events-none absolute inset-0 dot-grid-dark" style={{ opacity: 1 }} />
        <div
          className="orb-2 pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full blur-3xl"
          style={{ background: "rgba(30, 58, 138, 0.3)", animation: "orb-float-2 22s ease-in-out infinite" }}
        />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <span className="mb-3 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
              Custom Plan
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Need Something More?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              Any volume, any requirements. We write custom code, build bespoke integrations, and create
              a plan around exactly what your business needs.
            </p>
          </motion.div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {customFeatures.map((feat, i) => (
              <motion.div
                key={feat}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex items-start gap-3 rounded-xl border border-slate-700/50 bg-slate-800/60 px-4 py-3.5"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                <span className="text-sm text-slate-300">{feat}</span>
              </motion.div>
            ))}
          </div>

          {/* Custom code callout */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mx-auto mt-8 max-w-2xl rounded-xl border border-blue-500/20 bg-blue-500/10 px-6 py-5"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/20">
                <Code className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">We build custom software</h4>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  Need a custom integration, a unique automation workflow, or something that doesn't exist yet?
                  Our development team writes custom code to make it happen. If you can describe it, we can build it.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <a
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-blue-600 px-9 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Let's Build Your Custom Plan
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-4 text-sm text-slate-500">
              No obligation. We'll scope it out together on a quick call.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
