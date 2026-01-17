import * as React from "react";
import { cn } from "@/lib/utils";

const Section = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & { fluid?: boolean; background?: "default" | "cream" | "burgundy" | "pattern" }
>(({ className, children, fluid = false, background = "default", ...props }, ref) => {
  const backgrounds = {
    default: "bg-transparent",
    cream: "bg-jharoka-cream",
    burgundy: "bg-jharoka-burgundy-900 text-jharoka-cream",
    pattern: "bg-jharoka-burgundy-900 text-jharoka-cream bg-[url('/pattern-bg.png')] bg-opacity-10 bg-blend-overlay", // specific pattern placeholder
  };

  return (
    <section
      ref={ref}
      className={cn("py-16 md:py-24 lg:py-32", backgrounds[background], className)}
      {...props}
    >
      <div className={cn("mx-auto px-4 md:px-6", fluid ? "w-full" : "container")}>
        {children}
      </div>
    </section>
  );
});
Section.displayName = "Section";

export { Section };
