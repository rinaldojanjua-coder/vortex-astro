const quickLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Automate", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-conditions" },
  { label: "Free Website Offer", href: "/freewebsite" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-width section-padding">
        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div>
            <span className="text-2xl font-extrabold tracking-tight">
              Attu Reviews
            </span>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-xs">
              Review automation built for Alaskan home service businesses. Get
              more 5-star reviews on autopilot.
            </p>
            <address className="mt-5 not-italic text-slate-400 text-sm leading-relaxed">
              12110 Business Blvd #6-328<br />
              Anchorage, AK 99577<br />
              <a href="tel:+19078545033" className="hover:text-white transition-colors duration-200">
                (907) 854-5033
              </a>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Credit */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-lg sm:text-xl font-semibold text-white">
            Designed in Anchorage, Alaska by{" "}
            <a
              href="https://webdesignanchorage.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/40 hover:decoration-blue-300 transition-colors"
            >
              Anchorage Web Design
            </a>
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>&copy; 2026 Attu Reviews. All rights reserved.</p>
          <p>Anchorage, Alaska</p>
        </div>
      </div>
    </footer>
  );
}
