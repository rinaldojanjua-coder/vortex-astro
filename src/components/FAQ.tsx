import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long until I see results?",
    answer:
      "Most clients start seeing new reviews within the first 3-5 days after setup. The system works automatically, so reviews will continue to come in without any effort on your part.",
  },
  {
    question: "What if customers don't respond?",
    answer:
      "Our system includes intelligent follow-up reminders sent at optimal times. We also reach out to past customers who said they'd leave a review but never did. Most customers are happy to leave reviews--they just need a gentle nudge.",
  },
  {
    question: "Do I need to learn any new software?",
    answer:
      "Absolutely not. I handle the entire setup process with you in a 15-minute call. After that, everything runs automatically. You don't need to log in, check dashboards, or manage anything.",
  },
  {
    question: "What if I get a negative review?",
    answer:
      "In our entire history, we've never had a client receive a review below 4 stars. Our AI-personalized approach means customers feel valued — not spammed — so the reviews that come in are genuine and overwhelmingly positive. If a negative review does come in, we alert you immediately and our AI helps you craft a professional response.",
  },
  {
    question: "Does this work with my existing CRM?",
    answer:
      "Yes! We integrate with most popular CRMs including Jobber, Housecall Pro, ServiceTitan, and many more. If you don't have a CRM, we can work with your existing customer list.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with no cancellation fees. We believe in earning your business every month.",
  },
  {
    question: "Is there a contract or commitment?",
    answer:
      "No long-term contracts. We offer month-to-month plans, though you can save 20% with annual billing if you prefer.",
  },
  {
    question: "What's included in the setup?",
    answer:
      "Everything! I'll personally guide you through connecting your CRM, importing your customer list, and customizing your review request messages. The whole process takes about 15 minutes.",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span
          className={`text-base font-semibold transition-colors duration-200 ${
            isOpen ? "text-primary" : "text-slate-900 group-hover:text-primary"
          }`}
        >
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown
            className={`w-5 h-5 transition-colors duration-200 ${
              isOpen ? "text-primary" : "text-slate-400"
            }`}
          />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-600 text-sm leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-width">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to know about Attu Reviews
          </motion.p>
        </div>

        {/* Accordion */}
        <motion.div
          className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              item={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
