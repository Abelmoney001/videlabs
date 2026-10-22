"use client";

import { useEffect, useRef } from "react";

// Geometry follows the Videlabs mark: a slim almond pupil tilted about -31deg,
// wrapped in spectrum bands, with the two-piece white lens at its centre.
const TILT = -31;
const PUPIL_A = 300; // half-length
const PUPIL_K = 150; // bezier control height; the visible half-height is ~0.75 of this
const LENS_TRAVEL = 22; // how far the lens may drift toward the pointer, in SVG units

function almond(a: number, k: number) {
  const c = a * 0.42;
  return `M ${-a} 0 C ${-c} ${-k} ${c} ${-k} ${a} 0 C ${c} ${k} ${-c} ${k} ${-a} 0 Z`;
}

// Bands start bold next to the iris, like the mark, then thin out into contour lines.
const BAND_WIDTHS = [26, 18, 12, 6, 4, 3, 2, 1.5, 1.25];
const contours = BAND_WIDTHS.map((width, i) => {
  const step = i + 1;
  return {
    d: almond(PUPIL_A + 30 + step * 62, PUPIL_K + 40 + step * 64),
    width,
    delay: 250 + step * 90,
  };
});

// Lens traced from the mark, in a 100-unit box; the two halves are not mirror images.
const LENS_LEFT = "51.5,15 27,31.5 3,74 40,93.5 49.5,74.5 31,60.5";
const LENS_RIGHT = "57.5,13.5 92.5,46.5 77,72 44.5,94.5 66.5,50 48.5,32.5";

export default function HeroEye({ className = "" }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const lensRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const lens = lensRef.current;
    if (!svg || !lens) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    if (reduced.matches || !finePointer.matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = svg.getBoundingClientRect();
        const dx = e.clientX - (box.left + box.width / 2);
        const dy = e.clientY - (box.top + box.height / 2);
        const dist = Math.hypot(dx, dy) || 1;
        const pull = Math.min(dist / (box.width * 0.6), 1) * LENS_TRAVEL;
        lens.style.setProperty("--lens-x", `${(dx / dist) * pull}px`);
        lens.style.setProperty("--lens-y", `${(dy / dist) * pull * 0.7}px`);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="-500 -500 1000 1000"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="eye-spectrum" gradientUnits="userSpaceOnUse" x1="-260" y1="-460" x2="260" y2="460">
          <stop offset="0" stopColor="#8813e5" />
          <stop offset="0.16" stopColor="#4c15de" />
          <stop offset="0.3" stopColor="#1064dd" />
          <stop offset="0.42" stopColor="#00c9a5" />
          <stop offset="0.5" stopColor="#17fa65" />
          <stop offset="0.58" stopColor="#00fcbb" />
          <stop offset="0.7" stopColor="#feb12e" />
          <stop offset="0.82" stopColor="#fe476d" />
          <stop offset="1" stopColor="#e31cd4" />
        </linearGradient>
        <linearGradient id="eye-iris" gradientUnits="userSpaceOnUse" x1="0" y1="-140" x2="0" y2="140">
          <stop offset="0" stopColor="#00dc4e" />
          <stop offset="1" stopColor="#00fcbb" />
        </linearGradient>
        <radialGradient id="eye-fade-gradient" cx="0" cy="0" r="500" gradientUnits="userSpaceOnUse">
          <stop offset="0.5" stopColor="#fff" />
          <stop offset="1" stopColor="#000" />
        </radialGradient>
        <mask id="eye-fade">
          <rect x="-500" y="-500" width="1000" height="1000" fill="url(#eye-fade-gradient)" />
        </mask>
      </defs>

      <g mask="url(#eye-fade)">
        <g transform={`rotate(${TILT})`}>
          <g className="eye-lid">
            {contours.map((c) => (
              <path
                key={c.d}
                d={c.d}
                pathLength={1}
                fill="none"
                stroke="url(#eye-spectrum)"
                strokeWidth={c.width}
                strokeLinejoin="round"
                className="eye-contour"
                style={{ animationDelay: `${c.delay}ms` }}
              />
            ))}
            <path
              d={almond(PUPIL_A + 20, PUPIL_K + 22)}
              fill="none"
              stroke="url(#eye-iris)"
              strokeWidth={36}
              strokeLinejoin="round"
            />
            <path d={almond(PUPIL_A, PUPIL_K)} fill="#000935" />
          </g>
        </g>
      </g>

      <g ref={lensRef} className="eye-lens">
        <g className="eye-lens-shape" transform="scale(2.2) translate(-47.75 -54)">
          <polygon points={LENS_LEFT} fill="#fff" stroke="#fff" strokeWidth={2.5} strokeLinejoin="round" />
          <polygon points={LENS_RIGHT} fill="#fff" stroke="#fff" strokeWidth={2.5} strokeLinejoin="round" />
        </g>
      </g>
    </svg>
  );
}
