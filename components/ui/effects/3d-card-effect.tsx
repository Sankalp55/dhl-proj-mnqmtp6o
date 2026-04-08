import React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Minimal, build-safe 3D card effect API.
 * Many templates import these as named exports.
 */
export function CardContainer({ className, ...props }: DivProps) {
  return (
    <div
      className={
        "relative [perspective:1000px] " + (className ?? "")
      }
      {...props}
    />
  );
}

export function CardBody({ className, ...props }: DivProps) {
  return (
    <div
      className={
        "relative rounded-xl border bg-background/60 p-6 shadow-sm backdrop-blur " +
        (className ?? "")
      }
      {...props}
    />
  );
}

export function CardItem({ className, ...props }: DivProps) {
  return <div className={className} {...props} />;
}

export default CardContainer;
