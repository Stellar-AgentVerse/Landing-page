export default function RevenueCard() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full" />
      <div className="relative glass-card p-8 rounded-2xl border-accent/20">
        <div className="flex justify-between items-center mb-8">
          <span className="font-label text-label-sm text-accent uppercase tracking-widest">
            Live Revenue Stream
          </span>
          <span className="text-on-surface-variant font-label text-label-sm">
            TRANS ID: 8829...0x11
          </span>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/5">
            <span className="text-on-surface-variant">
              Market Analyst Agent
            </span>
            <span className="font-bold text-accent">+0.005 XLM</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/5">
            <span className="text-on-surface-variant">
              GPT-4 Turbo Prompt
            </span>
            <span className="font-bold text-accent">+0.002 XLM</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10 scale-105 shadow-2xl">
            <span className="text-on-surface-variant">
              Legal Document Parser
            </span>
            <span className="font-bold text-accent">+0.015 XLM</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/5">
            <span className="text-on-surface-variant">
              Sentiment Dataset #12
            </span>
            <span className="font-bold text-accent">+0.008 XLM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
