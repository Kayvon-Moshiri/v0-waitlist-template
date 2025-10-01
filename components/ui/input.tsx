import * as React from "react"

import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

export const inputVariants = cva(
  "flex w-full rounded-full transition-[background-color,box-shadow] backdrop-blur-sm duration-200 ease-out bg-black/20 shadow-sm ring-1 ring-transparent focus-visible:bg-black/30 focus-visible:ring-1 focus-visible:ring-black/40 focus-visible:ring-offset-4 focus-visible:ring-offset-white/10 disabled:cursor-not-allowed died:opacity-50 md:text-base border-2 border-black/50 h-11 !text-base placeholder:text-black/60 focus:outline-none px-4",
)

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input"> & { asChild?: boolean }>(
  ({ className, type, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "input"
    return (
      <Comp type={type} className={cn(inputVariants(), className)} ref={ref} style={{ color: "#1a1a1a" }} {...props} />
    )
  },
)
Input.displayName = "Input"

export { Input }
