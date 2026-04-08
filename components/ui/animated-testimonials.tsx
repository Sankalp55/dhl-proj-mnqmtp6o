import React from "react";

export type AnimatedTestimonialsItem = {
  quote?: string;
  name?: string;
  title?: string;
  src?: string;
};

export type AnimatedTestimonialsProps = {
  className?: string;
  testimonials?: AnimatedTestimonialsItem[];
};

/**
 * Minimal, build-safe placeholder.
 * Provides the named export expected by blocks/pages.
 */
export function AnimatedTestimonials({
  className,
  testimonials = [],
}: AnimatedTestimonialsProps) {
  return (
    <div className={className}>
      <div className="grid gap-4 sm:grid-cols-2">
        {testimonials.map((t, idx) => (
          <figure
            key={idx}
            className="rounded-xl border bg-background/60 p-5"
          >
            {t.quote ? (
              <blockquote className="text-sm text-muted-foreground">
                “{t.quote}”
              </blockquote>
            ) : null}
            <figcaption className="mt-3 text-sm font-medium">
              {t.name ?? ""}
              {t.title ? (
                <span className="font-normal text-muted-foreground">
                  {" "}— {t.title}
                </span>
              ) : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default AnimatedTestimonials;
