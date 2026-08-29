"use client";

import { useGlassCardTracking } from "../hooks/useGlassCardTracking";

/**
 * Renders nothing; exists purely so the pointer-tracking effect can be a client
 * concern while the page itself stays a server component.
 */
export default function GlassCardEffects() {
  useGlassCardTracking();
  return null;
}
