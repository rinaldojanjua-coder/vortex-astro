import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function AboutMe() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-3">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Meet the Founder
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Born and raised in Alaska, I've spent the past year helping
              Anchorage business owners get more customers and more profit
              organically through reviews--without the headache of chasing down
              past clients. I handle it all.
            </p>

            <p className="text-sm font-semibold text-slate-900 mb-1">
              Founder /{" "}
              <span className="text-gradient">Attu Reviews</span>
            </p>

            <div className="inline-flex items-center gap-1.5 mt-4 text-sm text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
              <MapPin className="w-4 h-4 text-primary" />
              Anchorage, AK
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/anchorage-skyline.jpg"
                alt="Anchorage, Alaska skyline"
                className="w-full h-80 lg:h-96 object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-primary/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
