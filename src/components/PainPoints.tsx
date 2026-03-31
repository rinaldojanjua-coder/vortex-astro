import { TrendingDown, Clock, Frown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    icon: TrendingDown,
    title: "No Reviews",
    description:
      "Potential customers are choosing competitors simply because they have more reviews than you.",
    accent: "text-red-500",
    accentBg: "bg-red-50",
    accentBorder: "border-red-100",
  },
  {
    icon: Clock,
    title: "No Time",
    description:
      "You're already wearing a dozen hats. Who has time to chase customers for reviews?",
    accent: "text-orange-500",
    accentBg: "bg-orange-50",
    accentBorder: "border-orange-100",
  },
  {
    icon: Frown,
    title: "No Visibility",
    description:
      "Without reviews, you're invisible on Google. Customers can't find you.",
    accent: "text-yellow-500",
    accentBg: "bg-yellow-50",
    accentBorder: "border-yellow-100",
  },
];

export default function PainPoints() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Your Business Deserves More Reviews
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="mb-14 text-center">
          <p className="text-lg text-slate-500">
            Sound familiar? You're not alone.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.15}>
              <div
                className={`rounded-2xl border ${card.accentBorder} bg-white p-8 shadow-sm transition hover:shadow-md`}
              >
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${card.accentBg}`}
                >
                  <card.icon className={`h-6 w-6 ${card.accent}`} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {card.title}
                </h3>
                <p className="leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
