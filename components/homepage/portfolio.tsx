import CardAnimation from "../ui/cardAnimation";
import { CardPortfolio } from "../ui/cardPortfolio";

const PortfolioSection = () => {
  return (
    <section
      className="w-full min-h-screen max-h-full relative flex flex-col items-center text-center py-20"
      id="portfolio"
    >
      <h2
        className="section__title text-2xl md:text-4xl lg:text-[3vw] w-max font-bold leading-10 font-inter"
        data-heading="Portafolios"
      >
        Mis Trabajos
      </h2>
      <article className="flex flex-col justify-center items-center mx-auto xl:flex-row xl:justify-between">
        <CardAnimation
          title="Rocket Commerce"
          link="https://marcospines-eccomerce.netlify.app/"
          description="E-commerce profesional con funciones completas de compra, incluyendo proceso de pago, administración..."
          src="/eccomerce.png"
        />
        <CardPortfolio />
        <CardAnimation
          title="Portfolio Marcos"
          link="https://marcospines-dev.netlify.app/"
          description="Portafolio personal con un tema dark/light, que incorpora múltiples funcionalidades avanzadas."
          src="/portfolio.png"
        />
      </article>
    </section>
  );
};

export default PortfolioSection;
