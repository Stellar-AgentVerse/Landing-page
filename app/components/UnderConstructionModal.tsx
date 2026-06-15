"use client";

import { useEffect, useRef } from "react";

interface Props {
  show: boolean;
  onClose: () => void;
}

export default function UnderConstructionModal({ show, onClose }: Props) {
  const underConstructionRef = useRef<HTMLDivElement>(null);

  // Close modal on Escape or click outside
  useEffect(() => {
    if (!show) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const onClickOutside = (e: MouseEvent) => {
      if (
        underConstructionRef.current &&
        !underConstructionRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    // delay outside-click to avoid the same click that opened it
    setTimeout(() => document.addEventListener("click", onClickOutside), 100);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClickOutside);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        ref={underConstructionRef}
        className="relative glass-card rounded-2xl p-12 md:p-16 max-w-lg mx-6 text-center"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors text-on-surface-variant hover:text-primary"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-accent text-4xl">
            construction
          </span>
        </div>

        <h3 className="font-heading text-headline-md font-bold text-primary mb-4">
          🚧 En construcción
        </h3>
        <p className="text-body-md text-on-surface-variant mb-6">
          Estamos preparando esta sección. Muy pronto vas a poder explorar todo
          lo que AgentVerse tiene para ofrecer.
        </p>
        <div className="w-16 h-1 bg-accent/30 rounded-full mx-auto mb-6" />
        <p className="text-label-sm text-on-surface-variant/60 font-label">
          Mientras tanto,
          <br />
          <span className="text-accent">agendá una demo</span> o seguinos en
          nuestras redes.
        </p>
      </div>
    </div>
  );
}
