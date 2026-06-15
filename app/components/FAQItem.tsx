interface Props {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: Props) {
  return (
    <details className="group glass-card rounded-xl overflow-hidden">
      <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-white/5 transition-colors [&::-webkit-details-marker]:hidden list-none">
        <span className="font-bold text-primary">{question}</span>
        <span className="material-symbols-outlined transition-transform group-open:rotate-180">
          expand_more
        </span>
      </summary>
      <div className="px-6 pb-6 text-on-surface-variant">{answer}</div>
    </details>
  );
}
