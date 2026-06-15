"use client";

interface Props {
  onExplore: () => void;
  onCreate: () => void;
}

export default function CTAButtons({ onExplore, onCreate }: Props) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
      <button
        onClick={onExplore}
        className="bg-accent text-background font-bold px-12 py-4 rounded-full transition-transform active:scale-95 flex items-center justify-center gap-2 group"
      >
        Explore Marketplace
        <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
          arrow_forward
        </span>
      </button>
      <button
        onClick={onCreate}
        className="border border-outline text-primary font-bold px-12 py-4 rounded-full hover:bg-white/5 transition-all active:scale-95"
      >
        Become a Creator
      </button>
    </div>
  );
}
