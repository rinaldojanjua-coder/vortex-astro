import {
  Wrench,
  Bug,
  Leaf,
  Scissors,
  Droplets,
  PawPrint,
  Truck,
  Zap,
  Home,
  Paintbrush,
} from "lucide-react";

const services = [
  { name: "Plumbing", icon: Wrench },
  { name: "Pest Control", icon: Bug },
  { name: "Gutter Cleaning", icon: Leaf },
  { name: "Lawn Care", icon: Scissors },
  { name: "Pool Cleaning", icon: Droplets },
  { name: "Petcare", icon: PawPrint },
  { name: "Moving", icon: Truck },
  { name: "Electrical", icon: Zap },
  { name: "Roofing", icon: Home },
  { name: "Painting", icon: Paintbrush },
];

export default function ServicesSupported() {
  const duplicated = [...services, ...services, ...services, ...services];

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-10 text-center text-sm font-medium uppercase tracking-widest text-slate-400">
          Every home service supported
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent" />

        <div className="flex animate-marquee-services gap-12">
          {duplicated.map((service, idx) => (
            <div
              key={idx}
              className="flex shrink-0 items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-sm"
            >
              <service.icon className="h-5 w-5 text-blue-600" />
              <span className="whitespace-nowrap text-sm font-semibold text-slate-700">
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeServices {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-services {
          animation: marqueeServices 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
