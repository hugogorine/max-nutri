import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { hero } from "@/content/copy";
import { site } from "@/content/site";

export const alt = `${site.specialty}: ${hero.titleLines.join(" ")}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const assets = join(process.cwd(), "src/assets");

/** Imagem de compartilhamento: a mesma composição da capa do site. */
export default async function OpenGraphImage() {
  const [light, lightItalic, figure] = await Promise.all([
    readFile(join(assets, "fonts/Newsreader-Display-Light.ttf")),
    readFile(join(assets, "fonts/Newsreader-Display-LightItalic.ttf")),
    readFile(join(assets, "og/gestante-og.png"), "base64"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#ebe5de",
          fontFamily: "Newsreader",
          color: "#31483a",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 64,
            right: -70,
            fontSize: 520,
            lineHeight: 0.8,
            letterSpacing: "-0.04em",
            display: "flex",
          }}
        >
          40
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse só aceita <img> */}
        <img
          src={`data:image/png;base64,${figure}`}
          width={289}
          height={640}
          alt=""
          style={{ position: "absolute", right: 170, bottom: -40 }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "72px 0 64px 80px",
            width: 700,
            height: "100%",
          }}
        >
          <div style={{ fontStyle: "italic", fontSize: 30 }}>
            {hero.label}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 28,
              fontSize: 76,
              lineHeight: 0.98,
              letterSpacing: "-0.02em",
            }}
          >
            {hero.titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              flexDirection: "column",
              fontSize: 26,
              color: "#5a5a53",
            }}
          >
            <span style={{ color: "#252522" }}>{site.name}</span>
            <span>
              {site.profession} | {site.registry}
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Newsreader", data: light, style: "normal", weight: 300 },
        { name: "Newsreader", data: lightItalic, style: "italic", weight: 300 },
      ],
    },
  );
}
