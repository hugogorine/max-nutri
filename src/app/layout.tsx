import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";

import { ConsentProvider } from "@/components/consent/consent-provider";
import { CookieBanner } from "@/components/consent/cookie-banner";
import { JsonLd } from "@/components/site/json-ld";
import { MotionProvider } from "@/components/site/motion-provider";
import { site } from "@/content/site";
import "./globals.css";

/**
 * Newsreader no tamanho óptico de display (opsz 72), pesos 300 a 500,
 * subconjunto latino. Fixar o eixo óptico reduz as fontes de ~270 KB
 * para ~117 KB sem perder o desenho fino dos títulos.
 */
const newsreader = localFont({
  src: [
    {
      path: "../assets/fonts/Newsreader-Display.woff2",
      weight: "300 500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Newsreader-Display-Italic.woff2",
      weight: "300 500",
      style: "italic",
    },
  ],
  variable: "--font-newsreader",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const title = `Nutricionista para Gestantes | ${site.name}`;
const description =
  "Acompanhamento nutricional individual para gestantes, do primeiro trimestre ao pós-parto. Um plano alimentar que se ajusta a cada fase e à sua rotina.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#f8f5ef",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${newsreader.variable} ${hanken.variable}`}
    >
      <body className="bg-paper text-ink">
        <a
          href="#conteudo"
          className="fixed top-3 left-3 z-[100] -translate-y-20 rounded-sm bg-forest px-4 py-3 text-small font-medium text-paper transition-transform focus-visible:translate-y-0"
        >
          Pular para o conteúdo
        </a>
        <ConsentProvider>
          <MotionProvider>{children}</MotionProvider>
          <CookieBanner />
        </ConsentProvider>
        <JsonLd />
      </body>
    </html>
  );
}
