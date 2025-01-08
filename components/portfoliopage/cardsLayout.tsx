"use client";

import { useState, useRef } from "react";
import { portfolioCards, portfolioFilter } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { BackgroundBorderGradient } from "../ui/framerUI/background-gradient";

type FilterType = "todos" | "filtro1" | "filtro2"; // Reemplaza con tus filtros reales

const CardsLayout = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("todos");
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleFilterChange = (filter: FilterType) => {
    if (isAnimating || selectedFilter === filter) return;

    setIsAnimating(true);
    const container = containerRef.current;

    if (container) {
      // Aplicar estilos para el contenedor padre
      container.style.perspective = "3000px";
      container.style.perspectiveOrigin = "50% 50%";
      container.style.height = `100%`;
      container.style.width = `99vw`;
      container.style.overflow = "hidden";
      container.style.transition = "height 400ms, width 400ms";
    }

    // Obtener todas las tarjetas
    const cards = container!.querySelectorAll<HTMLElement>(".portfolio-card");
    const cardsToHide: HTMLElement[] = [];
    const cardsToShow: HTMLElement[] = [];

    // Clasificar tarjetas según el filtro
    cards.forEach((card) => {
      const category = card.dataset.categoria;
      if (category && category !== filter && filter !== "todos") {
        cardsToHide.push(card);
      } else {
        cardsToShow.push(card);
      }
    });

    // Animar tarjetas a desaparecer
    cardsToHide.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "scale(0.01)";
      card.style.transition = "transform 400ms, opacity 400ms linear";
    });

    // Mostrar tarjetas al mismo tiempo
    cardsToShow.forEach((card) => {
      card.style.display = "";
      card.style.opacity = "0";
      card.style.transform = "scale(0.01)";
      card.style.transition = "transform 400ms, opacity 400ms";
    });

    // Mover las tarjetas visibles al mismo tiempo que las que desaparecen
    setTimeout(() => {
      // Cambiar el filtro seleccionado
      setSelectedFilter(filter);

      // Ocultar tarjetas que no coincidan con el filtro
      cardsToHide.forEach((card) => {
        card.style.display = "none";
      });

      // Revertir los estilos de las tarjetas visibles para que se muestren con animación
      cardsToShow.forEach((card) => {
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
      });

      // Restablecer los estilos del contenedor padre
      if (container) {
        container.style.removeProperty("propertyName"); // Elimina una propiedad específica
        // O si quieres restablecer todos los estilos:
        container.style.cssText = ""; // Elimina todos los estilos en línea
      }

      setIsAnimating(false);
    }, 400); // Coincide con la duración de la animación
  };

  return (
    <section className="w-full flex flex-col justify-center items-center p-10 py-16">
      <h2 className="section__portfolio text-5xl font-bold font-inter">
        Portafolios
      </h2>
      <aside className="w-full flex flex-wrap items-center justify-center gap-2 py-16">
        {portfolioFilter.map((item) => (
          <BackgroundBorderGradient key={item.id}>
            <button
              className={`cursor-pointer rounded-[12px] px-6 py-2 text-xl font-medium text-center bg-zinc-900 ${
                selectedFilter === item.filtro ? "active" : ""
              }`}
              onClick={() => handleFilterChange(item.filtro as FilterType)}
            >
              {item.title}
            </button>
          </BackgroundBorderGradient>
        ))}
      </aside>
      <article
        ref={containerRef}
        className="grid grid-cols-[repeat(1,_240px)] sm:grid-cols-[repeat(2,_280px)] lg:grid-cols-[repeat(2,_380px)] xl:grid-cols-[repeat(3,_380px)] place-content-center gap-y-12 gap-x-10"
      >
        {portfolioCards.map((item) => (
          <div
            key={item.id}
            data-categoria={item.filtro}
            className="portfolio-card flex flex-col gap-2 bg-secondBg rounded-xl"
          >
            <figure className="w-full h-56 lg:h-72 bg-[#D4D4DA] rounded-t-xl">
              <Image
                width={750}
                height={450}
                alt={item.title}
                src={item.src}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-110 hover:"
              />
            </figure>
            <article className="w-full h-28 lg:h-24 p-2 pb-3 flex flex-col justify-around">
              <div className="flex flex-wrap gap-1">
                {item.categorias.map((categoria, index) => (
                  <span
                    key={index}
                    className="text-xs text-neutral-600 font-bold px-3 py-1 border-2 bg-[#151519] border-neutral-800 rounded-full"
                  >
                    {categoria}
                  </span>
                ))}
              </div>
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-base font-semibold inline-flex gap-2 items-center lg:text-xl"
              >
                <h4 className="font-medium ">{item.title}</h4>
                <i className="ri-external-link-line font-normal"></i>
              </Link>
            </article>
          </div>
        ))}
      </article>
    </section>
  );
};

export default CardsLayout;
