"use client";

import { useEffect, type RefObject } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Haelt den Tastatur-Fokus innerhalb eines geoeffneten Overlays (Modal/Lightbox).
 * - fokussiert beim Oeffnen das erste fokussierbare Element im Container
 * - faengt Tab / Shift+Tab am Rand ab und springt zum jeweils anderen Ende
 * - stellt beim Schliessen den vorher fokussierten Ausloeser wieder her
 *
 * Der Container sollte tabIndex={-1} tragen, damit er als Fallback fokussierbar ist.
 */
export function useFocusTrap(
  active: boolean,
  containerRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    if (!active) return;
    const container = containerRef.current;
    if (!container) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    const getFocusables = (root: HTMLElement) =>
      Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null || el === document.activeElement,
      );

    // Fokus in den Container holen
    (getFocusables(container)[0] ?? container).focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      const root = containerRef.current;
      if (!root) return;
      const els = getFocusables(root);
      if (els.length === 0) {
        e.preventDefault();
        return;
      }
      const firstEl = els[0];
      const lastEl = els[els.length - 1];
      const activeEl = document.activeElement as HTMLElement | null;

      if (e.shiftKey) {
        if (activeEl === firstEl || !root.contains(activeEl)) {
          e.preventDefault();
          lastEl.focus();
        }
      } else if (activeEl === lastEl || !root.contains(activeEl)) {
        e.preventDefault();
        firstEl.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown, true);
    return () => {
      document.removeEventListener("keydown", onKeyDown, true);
      previouslyFocused?.focus?.();
    };
  }, [active, containerRef]);
}
