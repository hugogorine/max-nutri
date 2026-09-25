"use client";

import { useEffect } from "react";
import {
  m,
  type MotionStyle,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

/**
 * Expõe a posição do ponteiro (de -1 a 1) como variáveis CSS suavizadas.
 * As camadas da hero usam `translate` com pesos diferentes, o que cria
 * profundidade sem interferir nas animações de entrada (que usam `transform`).
 */
export function HeroParallax({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 50, damping: 18, mass: 0.8 });
  const smoothY = useSpring(y, { stiffness: 50, damping: 18, mass: 0.8 });

  useEffect(() => {
    if (reduceMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (event: PointerEvent) => {
      x.set((event.clientX / window.innerWidth) * 2 - 1);
      y.set((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduceMotion, x, y]);

  return (
    <m.div
      className={className}
      style={{ "--mx": smoothX, "--my": smoothY } as MotionStyle}
    >
      {children}
    </m.div>
  );
}
