import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode, useId } from "react";

interface CircleImageProps {
  src: string;
  alt: string;
  size?: number; // size in px on desktop, e.g. 180, 240, 320
  accentColor?: string; // hex string e.g. #0B3D91
  className?: string;
  badgeContent?: ReactNode;
  variant?: 1 | 2 | 3 | 4;
}

// 4 distinct organic pebble/river-stone shapes normalized (0 to 1)
const PEBBLE_PATHS = [
  "M 0.3 0.02 C 0.7 0.0 0.96 0.15 0.98 0.5 C 1.0 0.82 0.78 0.98 0.42 0.97 C 0.12 0.95 -0.02 0.72 0.01 0.42 C 0.03 0.18 0.08 0.03 0.3 0.02 Z",
  "M 0.22 0.06 C 0.6 0.01 0.98 0.2 0.95 0.62 C 0.92 0.95 0.58 1.0 0.28 0.92 C 0.02 0.85 -0.04 0.5 0.04 0.25 C 0.1 0.08 0.12 0.07 0.22 0.06 Z",
  "M 0.4 0.01 C 0.8 0.03 0.99 0.3 0.94 0.72 C 0.88 0.99 0.48 0.96 0.18 0.88 C -0.02 0.78 -0.03 0.38 0.1 0.15 C 0.2 0.02 0.28 0.0 0.4 0.01 Z",
  "M 0.18 0.12 C 0.55 -0.02 0.92 0.08 0.97 0.48 C 1.02 0.82 0.8 0.99 0.48 0.97 C 0.15 0.94 -0.02 0.68 0.02 0.38 C 0.05 0.2 0.08 0.16 0.18 0.12 Z",
];

export function CircleImage({
  src,
  alt,
  size = 220,
  accentColor = "#0B3D91",
  className = "",
  badgeContent,
  variant,
}: CircleImageProps) {
  const shouldReduceMotion = useReducedMotion();
  const rawId = useId();
  const clipId = `pebble-clip-${rawId.replace(/:/g, "")}`;

  // Deterministically select variant if not explicitly passed
  let pathIndex = 0;
  if (variant && variant >= 1 && variant <= 4) {
    pathIndex = variant - 1;
  } else {
    let hash = 0;
    for (let i = 0; i < src.length; i++) {
      hash = (hash << 5) - hash + src.charCodeAt(i);
      hash |= 0;
    }
    pathIndex = Math.abs(hash) % 4;
  }

  const selectedPath = PEBBLE_PATHS[pathIndex];

  return (
    <div className={`relative inline-block ${className}`}>
      {/* SVG ClipPath Definition for scaled organic pebble shape */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d={selectedPath} />
          </clipPath>
        </defs>
      </svg>

      {/* Duotone Overlapping Accent Pebble */}
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{
          width: size,
          height: size,
          backgroundColor: accentColor,
          opacity: 0.35,
          mixBlendMode: "multiply",
          top: "7%",
          left: "7%",
          clipPath: `url(#${clipId})`,
          WebkitClipPath: `url(#${clipId})`,
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 6, 0],
                y: [0, -6, 0],
              }
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Clipped Pebble Image Container */}
      <motion.div
        className="relative z-10 overflow-hidden shadow-xl"
        style={{
          width: size,
          height: size,
          clipPath: `url(#${clipId})`,
          WebkitClipPath: `url(#${clipId})`,
        }}
        whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover filter contrast-[1.05]"
          loading="lazy"
        />
        {/* Subtle Gradient Vignette */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none"
          style={{
            clipPath: `url(#${clipId})`,
            WebkitClipPath: `url(#${clipId})`,
          }}
        />
      </motion.div>

      {/* Optional Badge Overlay */}
      {badgeContent && (
        <div className="absolute -bottom-2 -right-2 z-20 shadow-md">{badgeContent}</div>
      )}
    </div>
  );
}
