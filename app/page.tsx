import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LifeAreas } from "@/components/life-areas";
import { Purpose } from "@/components/purpose";
import { Sessions } from "@/components/sessions";
import { Testimonial } from "@/components/testimonial";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Testimonial />
        <LifeAreas />
        <Purpose />
        <Sessions />
        <About />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
