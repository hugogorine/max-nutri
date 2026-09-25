import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Mesmo desenho do favicon, em PNG para a tela inicial do iOS. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#31483A",
        }}
      >
        <svg width="132" height="132" viewBox="0 0 64 64">
          <path
            d="M38.5 13.5a18.5 18.5 0 1 0 0 37"
            fill="none"
            stroke="#F8F5EF"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="35" cy="33" r="6.5" fill="#C98F87" />
        </svg>
      </div>
    ),
    size,
  );
}
