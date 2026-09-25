"use client";

import { m } from "motion/react";

import { cn } from "@/lib/utils";

const rise = {
  hidden: { y: "100%" },
  visible: { y: "0%" },
};

/**
 * Conteúdo que sobe de trás de uma linha quando entra na tela, como os
 * numerais da hero surgindo por trás da figura. O contêiner é que é
 * observado: o filho começa deslocado e recortado, então não serviria.
 */
export function RiseInView({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <m.span
      className={cn("block overflow-hidden", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      <m.span
        className="block"
        variants={rise}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </m.span>
    </m.span>
  );
}
