import { TrendingDown, Clock, EyeOff } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    icon: TrendingDown,
    title: "No Reviews",
    description: "Potential customers are choosing competitors simply because they have more reviews than you.",
  },
  {
    icon: Clock,
    title: "No Time",
    description: "You're already wearing a dozen hats. Who has time to chase customers for reviews?",
  },
  {
    icon: EyeOff,
    title: "No Visibility",
    description: "Without reviews, you're invisible on Google. Customers can't find you.",
  },
];

export default function PainPoints() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Subtle top border gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-3 text-center">
          <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Sound Familiar?
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.05} className="mb-14 text-center">
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Your Business Deserves More Reviews
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-slate-500">
            Most home service businesses in Alaska face the same three problems.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.12}>
              <div className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-md">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 transition group-hover:bg-blue-50">
                  <card.icon className="h-6 w-6 text-slate-500 transition group-hover:text-blue-600" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{card.title}</h3>
                <p className="leading-relaxed text-slate-600">{card.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
