"use client";

import { useEffect } from "react";

export function useGlassCardTracking() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".glass-card");
    const handler = (e: MouseEvent, card: HTMLElement) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => handler(e, card));
    });
    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", (e) =>
          handler(e as MouseEvent, card),
        );
      });
    };
  }, []);
}
