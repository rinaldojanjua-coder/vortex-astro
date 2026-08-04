import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const team = [
  {
    name: "Rinaldo Janjua",
    role: "Founder & CEO",
    image: "/team/rinaldo.webp",
    bio: "Born and raised in Alaska, Rinaldo steers the ship — making sure every client gets real, measurable results, not empty promises.",
  },
  {
    name: "Kael Bradley",
    role: "Client Success",
    image: "/team/kael.webp",
    bio: "Kael translates your goals into a system that runs itself, and is there whenever you need a hand. Your success is his job.",
  },
  {
    name: "Noora Janjua",
    role: "Lead Designer & Chief Animator",
    image: "/team/noora.webp",
    bio: "Noora crafts every detail of the experience — thoughtful, polished, and built from scratch. No templates, ever.",
  },
];

export default function Team() {
  return (
    <section className="section-padding relative overflow-hidden bg-slate-50">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 dot-grid" style={{ opacity: 0.4 }} />
      <div
        className="orb-2 pointer-events-none absolute -top-40 right-0 h-[400px] w-[400px] rounded-full blur-3xl"
        style={{ background: "rgba(147, 197, 253, 0.4)", animation: "orb-float-2 22s ease-in-out infinite" }}
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
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
            <MapPin className="h-3.5 w-3.5" />
            Anchorage, Alaska
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Meet the Team
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Real Alaskans building real results for local businesses — born and raised here, just like you.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition hover:border-blue-200 hover:shadow-md"
            >
              <div className="mb-5 h-28 w-28 overflow-hidden rounded-full ring-4 ring-blue-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
              <p className="mt-0.5 text-sm font-semibold text-blue-600">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
