"use client";

import * as React from "react";
import { Switch as SwitchPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer relative inline-flex h-7 w-12 shrink-0 items-center rounded-full border border-ink/55 bg-paper-deep transition-colors duration-300 outline-none after:absolute after:-inset-2 data-checked:border-forest data-checked:bg-forest data-disabled:cursor-not-allowed data-disabled:opacity-60",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pointer-events-none block size-5 translate-x-[3px] rounded-full bg-paper shadow-[0_1px_3px_rgb(37_37_34/0.3)] transition-transform duration-300 ease-out-expo data-checked:translate-x-[23px]"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
