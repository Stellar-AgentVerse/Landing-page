import Icon from "./Icon";

interface Props {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: Props) {
  return (
    <details className="group glass-card rounded-xl overflow-hidden">
      <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-white/5 transition-colors [&::-webkit-details-marker]:hidden list-none">
        <span className="font-bold text-primary">{question}</span>
        <Icon
          name="chevron-down"
          className="w-5 h-5 shrink-0 transition-transform group-open:rotate-180"
        />
      </summary>
      <div className="px-6 pb-6 text-on-surface-variant">{answer}</div>
    </details>
  );
}
