import { motion } from "framer-motion";
import { Clock, Sparkles, Zap } from "lucide-react";

const badges = [
  { icon: <Clock className="w-4 h-4" />, text: "15-minute setup" },
  { icon: <Sparkles className="w-4 h-4" />, text: "No learning curve" },
  { icon: <Zap className="w-4 h-4" />, text: "Hands-off automation" },
];

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
      {/* Subtle decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container-width relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Get More Reviews?
          </motion.h2>

          <motion.p
            className="text-lg text-white/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get started in just 15 minutes. I'll handle everything else.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3.5 rounded-xl font-bold text-base hover:bg-slate-100 transition-colors duration-200 shadow-lg shadow-black/10"
            >
              Yes, I Want More Reviews
            </a>
          </motion.div>

          <motion.p
            className="mt-6 text-sm text-white/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Anchorage-born, helping local businesses make more money.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            {badges.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full"
              >
                {badge.icon}
                {badge.text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
