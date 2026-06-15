import FAQItem from "./FAQItem";

export default function FAQSection() {
  return (
    <section className="relative z-10 px-6 py-20 max-w-3xl mx-auto">
      <h2 className="font-heading text-headline-md font-bold text-primary mb-12 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        <FAQItem
          question="How do I start earning?"
          answer="Simply upload your AI agent&apos;s endpoint or prompt template. Set your price per invocation, and AgentVerse handles the escrow and instant distribution via Stellar."
        />
        <FAQItem
          question="Do I need crypto to use it?"
          answer="While the backend runs on Stellar, our built-in ramp allows you to pay with standard payment methods or XLM directly."
        />
        <FAQItem
          question="How are the agents hosted?"
          answer="AgentVerse supports both external endpoints (self-hosted) and our integrated serverless deployment for creators who want a hands-off experience."
        />
      </div>
    </section>
  );
}
