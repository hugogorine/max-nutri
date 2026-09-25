"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

type EditorialImageProps = {
  src: StaticImageData;
  alt: string;
  sizes: string;
  caption?: string;
  /** Classes do <figure> (posição, largura, sticky). */
  className?: string;
  /** Classes da moldura da imagem (proporção). */
  frameClassName?: string;
  /** Classes da <img> (enquadramento com object-position). */
  imageClassName?: string;
  captionClassName?: string;
};

/**
 * Imagem com zoom lento no hover e um estado de erro discreto: se o arquivo
 * não carregar, a moldura continua no lugar com uma mensagem, sem quebrar o layout.
 */
export function EditorialImage({
  src,
  alt,
  sizes,
  caption,
  className,
  frameClassName,
  imageClassName,
  captionClassName,
}: EditorialImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={cn("group", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-[2px] bg-paper-deep",
          frameClassName,
        )}
      >
        {failed ? (
          <div
            role="img"
            aria-label={alt}
            className="absolute inset-0 grid place-items-center p-6 text-center"
          >
            <span className="text-caption text-ink-soft">
              Não foi possível carregar esta imagem.
            </span>
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            placeholder="blur"
            onError={() => setFailed(true)}
            className={cn(
              "object-cover transition-transform duration-[1600ms] ease-out-expo group-hover:scale-[1.035]",
              imageClassName,
            )}
          />
        )}
      </div>
      {caption && (
        <figcaption
          className={cn("mt-3 text-caption text-ink-soft", captionClassName)}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
