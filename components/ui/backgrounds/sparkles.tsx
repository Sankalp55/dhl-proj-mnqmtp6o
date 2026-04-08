import React from "react";

export type SparklesCoreProps = {
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
};

/**
 * Minimal, build-safe placeholder implementation.
 * Some templates expect a named export `SparklesCore`.
 */
export function SparklesCore({
  className,
  background = "transparent",
}: SparklesCoreProps) {
  return (
    <div
      className={className}
      style={{
        background,
      }}
      aria-hidden="true"
    />
  );
}

export default SparklesCore;
