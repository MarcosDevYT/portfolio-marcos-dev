"use client";

import React from "react";
import { BackgroundBorderGradient } from "../ui/framerUI/background-gradient";

const BtnColorLink = ({ children }: { children: React.ReactNode }) => {
  return (
    <a
      href="/cv.pdf"
      download
      className="duration-250 transition-transform hover:scale-110"
    >
      <BackgroundBorderGradient className="rounded-[14px] px-10 py-2 md:px-12 md:text-xl text-base font-medium text-center bg-secondBg">
        {children}
      </BackgroundBorderGradient>
    </a>
  );
};

export default function CVAbout() {
  return (
    <section className="py-20 h-96 flex justify-center items-center px-8">
      <article className="max-w-[600px] mx-auto flex flex-col justify-center items-center gap-8">
        <h3 className="section__portfolio text-lg md:text-2xl font-bold text-center">
          Conoce más sobre mi experiencia y habilidades.
        </h3>
        <BtnColorLink>Descargar CV</BtnColorLink>
      </article>
    </section>
  );
}
