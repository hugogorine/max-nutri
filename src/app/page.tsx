import { About } from "@/components/sections/about";
import { Audience } from "@/components/sections/audience";
import { Benefits } from "@/components/sections/benefits";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { Testimonials } from "@/components/sections/testimonials";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Journey />
        <Benefits />
        <Audience />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
