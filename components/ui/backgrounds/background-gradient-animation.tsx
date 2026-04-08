import React from "react";

export type BackgroundGradientAnimationProps = {
  className?: string;
  children?: React.ReactNode;
};

/**
 * Minimal, build-safe placeholder.
 * Provides the named export expected by blocks.
 */
export function BackgroundGradientAnimation({
  className,
  children,
}: BackgroundGradientAnimationProps) {
  return (
    <div className={"relative overflow-hidden " + (className ?? "")}>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/15 to-cyan-400/20" />
      {children}
    </div>
  );
}

export default BackgroundGradientAnimation;
