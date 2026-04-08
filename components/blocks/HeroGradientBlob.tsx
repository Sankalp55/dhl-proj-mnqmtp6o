import React from "react";

// Keep this component self-contained to avoid build-time export/import mismatches
// with UI components that may not exist or may be default-exported.

export type HeroGradientBlobProps = {
  className?: string;
  title?: string;
  subtitle?: string;
};

export function HeroGradientBlob({
  className,
  title = "Build faster",
  subtitle = "A clean hero section with a gradient blob background.",
}: HeroGradientBlobProps) {
  return (
    <section className={"relative overflow-hidden " + (className ?? "")}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/40 via-fuchsia-500/30 to-cyan-400/30 blur-3xl" />
        <div className="absolute -bottom-32 right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-emerald-400/25 via-sky-400/25 to-purple-500/25 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export default HeroGradientBlob;
