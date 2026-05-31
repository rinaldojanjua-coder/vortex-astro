import { motion } from "framer-motion";
import { Users, Plug, MapPin, Bot, Bell, RefreshCw } from "lucide-react";
import type { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  image?: string;
}

const features: Feature[] = [
  {
    icon: <Users className="w-5 h-5" />,
    title: "Personalized Review Requests",
    description: "Images personalized with your customer's name to get their attention and increase review conversion rates.",
    image: "/images/personalized-review.jpg",
  },
  {
    icon: <Plug className="w-5 h-5" />,
    title: "Seamless CRM Integration",
    description: "Compatible with Jobber, Housecall Pro, ServiceTitan, and more. Connect once and never worry again.",
    image: "/images/crm-integrations.jpg",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Rank First on Google",
    description: "More reviews = higher local ranking. Stop being invisible and start getting chosen.",
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: "AI Review Responses",
    description: "We respond to your positive reviews for you — saving you time while showing customers you care.",
  },
  {
    icon: <Bell className="w-5 h-5" />,
    title: "Smart Follow-Ups",
    description: "Gentle, perfectly-timed reminders nudge customers who haven't left a review yet.",
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: "Review Reactivation",
    description: "Turn customers who 'said' they'd leave a review into real, published 5-star reviews.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function Features() {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 dot-grid" style={{ opacity: 0.45 }} />
      <div
        className="orb-3 pointer-events-none absolute top-1/2 right-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "rgba(219, 234, 254, 0.7)", animation: "orb-float-3 26s ease-in-out infinite" }}
      />

      <div className="container-width relative">
        {/* Header */}
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Features
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Getting reviews has never been easier
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Vortex does the hard work for you — your reputation grows on autopilot.
          </p>
        </motion.div>

        {/* Image feature cards — 2-col */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {features.filter((f) => f.image).map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-blue-200 hover:shadow-md"
            >
              <div className="w-full overflow-hidden bg-slate-100">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-100">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-base font-bold text-slate-900">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Icon-only feature cards — 4-col */}
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.filter((f) => !f.image).map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i + 2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-100">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-base font-bold text-slate-900">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
