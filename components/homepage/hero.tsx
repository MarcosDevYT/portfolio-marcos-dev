"use client";
import HeroLinks from "@/components/ui/heroLinks";
import Slider from "../ui/slider";
import TypeAnimation from "../ui/typeAnimation";

import Image from "next/image";
import BtnColorLink from "../ui/btnColorLink";

const Hero = () => {
  return (
    <section
      className="w-full min-h-screen max-h-full font-inter flex flex-col justify-center items-center relative overflow-hidden"
      id="inicio"
    >
      <div className="absolute h-screen w-screen flex flex-col justify-center items-center ">
        <div className="w-full h-full absolute z-1 bg-bgTransparent"></div>
        <Slider />
      </div>
      <article className="relative flex flex-col justify-center items-center w-9/12 md:max-w-[580px] lg:max-w-[780px]">
        <div className="flex flex-col gap-1 justify-center text-center items-center mb-5 md:text-start md:items-start">
          <p className="font-light text-lg md:text-xl flex items-center gap-1">
            <span className="w-2 h-2 md:w-3 md:h-3 pt-1 bg-green-400 rounded-full border-2 border-green-500"></span>{" "}
            Online
          </p>
          <h1 className="font-bold text-2xl md:text-[3.4rem] lg:text-[4.5rem] md:my-6 flex items-center">
            Hola, Aqui Marcos
            <i className="ri-code-s-slash-line hidden md:block md:text-[4rem] lg:text-[6rem] font-semibold ml-6 text-indigo-800"></i>
          </h1>
          <div className="flex gap-2 text-xl font-bold md:items-center md:gap-4 md:text-[3.2rem] lg:text-[4.5rem]">
            <i className="ri-terminal-box-line hidden md:block text-[4rem] lg:text-[6rem] font-medium text-indigo-800"></i>
            <h2>Soy</h2>
            <TypeAnimation />
          </div>
          <p className="text-sm md:text-base lg:text-lg mx-1 my-3 leading-3">
            Hola, soy Marcos, Desarrollador Web Frontend de Argentina, con 3
            años de experiencia. Con enfoque en el desarrollo de sitios web
            modernos y eficientes.
          </p>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center md:flex-row md:justify-between md:w-full">
          <figure className="hidden md:block w-20 h-20 p-[0.45rem] overflow-hidden rounded-b-full rounded-l-full bg-secondBg">
            <Image
              width={250}
              height={500}
              alt="Imagen de Marcos"
              src={"/marcos.png"}
              className="w-full h-full object-cover rounded-full"
            />
          </figure>
          <div className="flex gap-2">
            <HeroLinks />
          </div>

          <BtnColorLink content="Contáctame" href="contacto" />
        </div>
      </article>
    </section>
  );
};

export default Hero;
