import { motion } from "framer-motion";
import { Link, Zap, Rocket, Check } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  features: string[];
}

const steps: Step[] = [
  {
    number: "01",
    title: "Connect",
    description:
      "I help you link your CRM and import your customers. Takes about 15 minutes with me guiding you.",
    features: [
      "Import existing customers",
      "Connect your CRM",
      "Personalized setup call",
    ],
  },
  {
    number: "02",
    title: "Launch",
    description:
      "Previous customers are contacted gradually. Reviews start rolling in automatically within days.",
    features: [
      "Smart sending schedule",
      "Personalized requests",
      "Mobile-optimized links",
    ],
  },
  {
    number: "03",
    title: "Automate",
    description:
      "I handle responses, reminders, reposts--you're done. Just watch your reviews grow.",
    features: [
      "AI review responses",
      "Automatic reminders",
      "Reputation monitoring",
    ],
  },
];

const stepIcons = [Link, Rocket, Zap];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-slate-900">
      <div className="container-width">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Simple. Hands-Off. Effective.
          </motion.h2>
          <motion.p
            className="text-lg text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get more reviews in three easy steps
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                {/* Large step number */}
                <span className="text-7xl font-extrabold text-primary/15 leading-none select-none">
                  {step.number}
                </span>

                <div className="mt-2">
                  <div className="w-11 h-11 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {step.description}
                  </p>

                  <ul className="space-y-2.5">
                    {step.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-semibold text-base hover:bg-primary-dark transition-colors duration-200"
          >
            Get Started in 15 Minutes
          </a>
        </motion.div>
      </div>
    </section>
  );
}
