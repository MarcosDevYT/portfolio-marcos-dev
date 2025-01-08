"use client";

import Image from "next/image";
import BtnColor from "../ui/btnColor";
import { BackgroundGradient } from "../ui/framerUI/backgroundGradient";
import TitleSections from "../ui/titleSections";

const AboutSection = () => {
  return (
    <section
      className="w-full max-h-full flex flex-col items-center text-center gap-8 py-28"
      id="sobre-mi"
    >
      <TitleSections title="Marcos Moruaa" subtitle="Sobre mi" />

      <article className=" w-[260px] md:w-11/12 lg:w-[1000px] flex flex-col justify-center gap-8 md:gap-16 md:mt-12 md:flex-row md:justify-between md:items-start">
        <div className="flex flex-col justify-center items-center md:w-4/12">
          <BackgroundGradient className="rounded-[22px]">
            <Image
              width={600}
              height={1000}
              src={"/imagen-mia.jpg"}
              alt="Imagen de Marcos Morua"
              className="rounded-[22px] object-cover h-72 w-48 xl:h-96 xl:w-56"
            />
          </BackgroundGradient>
          <h3 className="font-bold text-xl md:text-2xl mt-2">Marcos Morua</h3>
          <p className="font-medium text-lg flex items-center gap-1">
            <span className="w-2 h-2 md:w-3 md:h-3 mt-1 md:mt-0 bg-green-400 rounded-full border-2 border-green-500"></span>{" "}
            Online
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-4 md:w-8/12 md:items-start md:text-start">
          <h2 className="text-xl md:text-2xl font-bold lg:text-4xl">
            Tu Desarrollador Web de Confianza
          </h2>
          <p className="text-sm md:text-base lg:text-lg">
            Hola 👋, aquí Marcos un desarrollador web frontend de Argentina con
            más de 3 años de experiencia en programación. Actualmente, continuo
            mi formación como Desarrollador Full Stack en CoderHouse, respaldado
            por un título en Informática Profesional y Personal.
          </p>
          <p className="text-sm md:text-base mb-8 lg:text-lg">
            Mi objetivo es perfeccionar mis habilidades y aplicar soluciones
            modernas en la creación de sitios web innovadores, aprendiendo cada
            día más de este mundo del desarrollo web.
          </p>
          <BtnColor content="Mas sobre mi" href="/sobre-mi" />
        </div>
      </article>
    </section>
  );
};

export default AboutSection;
