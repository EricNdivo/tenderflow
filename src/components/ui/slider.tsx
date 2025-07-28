import * as React from "react"
import { cn } from "../../lib/utils"

const Slider = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    type="range"
    className={cn(
      "flex h-2 w-full cursor-pointer appearance-none items-center rounded-full bg-secondary outline-none",
      className
    )}
    ref={ref}
    {...props}
  />
))
Slider.displayName = "Slider"

export { Slider }
