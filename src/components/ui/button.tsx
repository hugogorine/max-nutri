import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

/**
 * Botões retangulares, com cantos quase retos e um preenchimento que
 * atravessa o botão no hover. Mínimo de 44px de altura para toque.
 */
const buttonVariants = cva(
  "group/button relative isolate inline-flex shrink-0 items-center justify-center gap-3 overflow-hidden rounded-[2px] font-medium tracking-[0.01em] whitespace-nowrap transition-colors duration-500 ease-out-expo select-none before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:transition-transform before:duration-500 before:ease-out-expo hover:before:scale-x-100 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        solid: "bg-forest text-paper before:bg-forest-deep",
        outline:
          "border border-forest text-forest before:bg-forest hover:text-paper",
        inverse: "bg-paper text-forest before:bg-sage-wash",
      },
      size: {
        md: "min-h-11 px-5 text-small",
        lg: "min-h-14 px-7 text-[1rem]",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
