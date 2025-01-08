import AboutSection from "@/components/homepage/about";
import ContactSection from "@/components/homepage/contact";
import EducationSection from "@/components/homepage/education";
import Hero from "@/components/homepage/hero";
import PortfolioSection from "@/components/homepage/portfolio";
import StackSection from "@/components/homepage/stack";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PortfolioSection />
        <AboutSection />
        <EducationSection />
        <StackSection />
        <ContactSection />
      </main>
    </>
  );
}
