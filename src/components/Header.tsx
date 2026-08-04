import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Automate", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-width">
        <nav className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 shrink-0">
            <img
              src="/attu-mark.svg"
              alt="Attu Reviews"
              className="h-12 w-auto"
            />
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
              Attu Reviews
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="/pricing"
            className="hidden lg:inline-flex bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors duration-200 shrink-0"
          >
            Start Getting Reviews
          </a>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 lg:hidden z-40"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 w-full bg-white shadow-2xl lg:hidden z-50"
            >
              <div className="flex items-center justify-between px-6 h-18">
                <div className="flex items-center gap-2">
                  <img
                    src="/attu-mark.svg"
                    alt="Attu Reviews"
                    className="h-10 w-auto"
                  />
                  <span className="text-xl font-extrabold tracking-tight text-slate-900">
                    Attu Reviews
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-slate-700"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col px-6 py-4 gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-slate-700 text-base font-medium py-3 px-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/pricing"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 bg-blue-600 text-white text-center px-5 py-3 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors"
                >
                  Start Getting Reviews
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
