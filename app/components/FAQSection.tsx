import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "What can I actually buy right now?",
    answer:
      "Prompts, and only prompts. Market V1 is a curated catalog of reviewed prompt templates. Agents, datasets, models and workflows are not available.",
  },
  {
    question: "Is this real money?",
    answer:
      "No. Market V1 runs on the Stellar test network. Purchases are made in test XLM, which has no monetary value and cannot be exchanged for currency.",
  },
  {
    question: "How do I get access?",
    answer:
      "The beta is invitation based. Request access from any button on this page and we will contact you when a place opens up.",
  },
  {
    question: "How do creators get paid?",
    answer:
      "Creators set their own listing price and are credited in test XLM when a purchase is confirmed. Payout timing and dispute handling are described in the refund and payout policy.",
  },
];

export default function FAQSection() {
  return (
    <section className="relative z-10 px-6 py-20 max-w-3xl mx-auto">
      <h2 className="font-heading text-headline-md font-bold text-primary mb-12 text-center">
        Frequently asked questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
