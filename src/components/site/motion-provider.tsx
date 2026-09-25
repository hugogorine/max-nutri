"use client";

import { LazyMotion, MotionConfig } from "motion/react";

const loadFeatures = () =>
  import("@/components/site/motion-features").then((mod) => mod.default);

/**
 * Os recursos de animação (componentes `m.*`) chegam depois da primeira
 * renderização, sem pesar no carregamento inicial. Respeita a preferência
 * do sistema por menos movimento.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
