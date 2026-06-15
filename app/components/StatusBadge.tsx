export default function StatusBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-8">
      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
      <span className="font-label text-label-sm text-accent uppercase tracking-widest">
        V1.0 Live on Stellar
      </span>
    </div>
  );
}
