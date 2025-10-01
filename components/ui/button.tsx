import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-colors-and-shadows duration-300 ease-out focus-visible:outline-none focus-visible:border-border/15 focus-visible:ring-1 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-white/20 focus-visible:shadow-button-hover disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-6 [&_svg]:shrink-0 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "border border-white/50 hover:border-white/70 bg-white/10 focus-visible:bg-white/20 hover:bg-white/20 backdrop-blur-sm text-white ring-1 ring-offset-white/10 ring-white/10 ring-offset-2 hover:ring-white/15 hover:ring-offset-4 hover:ring-offset-white/20 shadow-button hover:shadow-button-hover",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        iconButton:
          "border border-white/50 hover:border-white/70 bg-white/80 disabled:bg-white/40 hover:bg-white/90 backdrop-blur-sm disabled:text-black/50 text-black ring-1 ring-offset-transparent ring-transparent ring-offset-2 hover:ring-white/15 hover:ring-offset-4 hover:ring-offset-white/20 shadow-button hover:shadow-button-hover",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        default: "h-9 px-4 py-2",
        lg: "h-10 px-8",
        icon: "size-9",
        "icon-lg": "size-10",
        "icon-xl": "size-11",
      },
      shine: {
        true: "relative overflow-hidden after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent after:animate-shine after:pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shine: false,
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, shine, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className, shine }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
