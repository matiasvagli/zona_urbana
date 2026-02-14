import { Hero } from "@/components/sections/Hero";
import { AboutUs } from "@/components/sections/AboutUs";
import { Portfolio } from "@/components/sections/Portfolio";
import { SellYourSpace } from "@/components/sections/SellYourSpace";
import { ContactMap } from "@/components/sections/ContactMap";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-dark text-white selection:bg-brand-blue selection:text-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <Portfolio />
      <SellYourSpace />
      <ContactMap />
      <WhatsAppButton />

      <footer className="py-8 text-center text-neutral-500 text-sm border-t border-white/5">
        <p>
          © {new Date().getFullYear()} Zona Urbana. Todos los derechos reservados.
          <br />
          Desarrollado por Matias Vagliviello.
        </p>
      </footer>
    </main>
  );
}
