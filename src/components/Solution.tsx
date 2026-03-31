import { CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const timeline = [
  {
    day: "Today",
    title: "Sign up and reactivate",
    description:
      "Onboard in minutes and book a setup call with our team. Connect to your existing CRM and start your reactivation campaign.",
  },
  {
    day: "Day 3",
    title: "Reviews start rolling in",
    description:
      "Your previous customers will start leaving you those hard earned reviews and we reply and repost to social media for you.",
  },
  {
    day: "Day 7",
    title: "Win jobs again",
    description:
      "Your business will rank higher on Google and be seen faster thanks to the new reviews.",
  },
];

export default function Solution() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
          {/* Left side */}
          <div className="w-full lg:w-1/2">
            <ScrollReveal>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Boost your business
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mb-10 text-lg leading-relaxed text-slate-600">
                What you could achieve in just 7 days by adding Vortex to your
                business.
              </p>
            </ScrollReveal>

            {/* Stat card */}
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-8">
                <span className="text-5xl font-extrabold text-blue-600 sm:text-6xl">
                  +600%
                </span>
                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  Increased reviews from 3 to 21 reviews in 2 weeks
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src="/lovable-uploads/ba0ddbd5-b17c-4b8c-ac66-d0cd1dc4b352.jpg"
                    alt="Seth from Midnight Sun Builders"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Seth</p>
                    <p className="text-xs text-slate-500">
                      Midnight Sun Builders
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right side - Timeline */}
          <div className="w-full lg:w-1/2">
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-3 top-2 h-[calc(100%-2rem)] w-px bg-blue-200" />

              <div className="flex flex-col gap-12">
                {timeline.map((item, i) => (
                  <ScrollReveal key={item.day} delay={i * 0.15} direction="right">
                    <div className="relative">
                      {/* Dot */}
                      <div className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-blue-600" />
                      </div>

                      <span className="mb-1 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                        {item.day}
                      </span>
                      <h3 className="mt-2 text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
