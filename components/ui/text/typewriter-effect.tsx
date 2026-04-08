import React from "react";

export type TypewriterEffectProps = {
  className?: string;
  words?: Array<{ text: string; className?: string }>;
  text?: string;
};

/**
 * Minimal, build-safe placeholder.
 * Renders provided words/text without animation.
 */
export function TypewriterEffect({ className, words, text }: TypewriterEffectProps) {
  const content =
    text ??
    (words && words.length
      ? words.map((w) => w.text).join(" ")
      : "");

  return <span className={className}>{content}</span>;
}

export default TypewriterEffect;
