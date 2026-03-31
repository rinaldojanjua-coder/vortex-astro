import { motion } from "framer-motion";
import { Users, Plug, MapPin, Bot, Bell, RefreshCw } from "lucide-react";
import type { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  image?: string;
  large?: boolean;
}

const features: Feature[] = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Personalized Review Requests",
    description:
      "Images personalized with your customers name to get their attention and increase your review conversion rate.",
    image: "/images/personalized-review.jpg",
    large: true,
  },
  {
    icon: <Plug className="w-6 h-6" />,
    title: "Seamlessly Integrates with Your Current Tools",
    description:
      "Our platform is compatible with your favorite CRMs and can integrate into a wide range of platforms. Connect once and never worry again!",
    image: "/images/crm-integrations.jpg",
    large: true,
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Rank First On Google",
    description:
      "Stop Being Invisible and Start Getting Chosen on Google.",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "AI Review Responses",
    description:
      "We will take the burden off you, by responding to your positive reviews for you.",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Easy Follow-ups",
    description:
      "If they haven't left a review we can send gentle reminders to get the reviews you deserve.",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Review Reactivation",
    description:
      "Turn those happy customers that 'said' they'd leave a review into real reviews.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function Features() {
  return (
    <section className="section-padding bg-slate-50">
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
            Getting reviews has never been easier
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Vortex does the hard work for you and with easy-to-use features,
            your reputation grows on auto pilot.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className={`group bg-white rounded-2xl border border-slate-200 overflow-hidden transition-shadow duration-300 hover:shadow-lg ${
                feature.large ? "md:col-span-1" : ""
              }`}
            >
              {feature.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
