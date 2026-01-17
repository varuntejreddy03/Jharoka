import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

// Note: user didn't ask for cva but it's standard for variants. 
// If cva is not installed, I'll use a simpler approach or install it. 
// I'll install cva first as it's cleaner. 
// Wait, I didn't install cva. 
// I can do it without cva using simple switch/map or clsx logic, 
// OR I can quickly install it. CVA is very standard.
// For now, to save time/tokens, I'll do it manually without CVA or install it transparently.
// Actually, I'll just install it, it's tiny.
// But wait, I want to minimize tool calls. 
// I'll implement a simple variant helper without CVA to avoid extra install.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {

    const baseStyles = "inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-jharoka-burgundy disabled:pointer-events-none disabled:opacity-50 tracking-wider uppercase";

    const variants = {
      primary: "bg-jharoka-burgundy text-white hover:bg-jharoka-burgundy/90 shadow-sm",
      secondary: "bg-transparent border border-jharoka-burgundy text-jharoka-burgundy hover:bg-jharoka-burgundy/5",
      outline: "border border-jharoka-text-secondary text-jharoka-text-secondary bg-transparent hover:text-jharoka-burgundy hover:border-jharoka-burgundy",
      ghost: "hover:bg-jharoka-burgundy/10 text-jharoka-burgundy",
      link: "text-jharoka-burgundy underline-offset-4 hover:underline",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4 py-2",
      lg: "h-12 px-8 text-lg",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
