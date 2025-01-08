"use client";

import { dataFormation } from "@/data";
import React from "react";
import { BackgroundBorderGradient } from "../ui/framerUI/background-gradient";

export default function FormacionAbout() {
  return (
    <section className="bg-bg flex h-full w-full">
      <article className="py-16 px-8 md:px-20 w-full flex flex-wrap mx-auto justify-center gap-12">
        {dataFormation.map((item) => (
          <BackgroundBorderGradient
            key={item.title}
            className={`rounded-[14px] flex flex-col gap-8 p-5 pt-8 h-full text-start w-52 md:w-72 lg:w-96 bg-secondBg relative
                `}
          >
            {item.icon}
            <div>
              <h3 className="section__portfolio font-inter font-semibold text-xl md:text-2xl md:pb-2 mb-2">
                {item.title}
              </h3>
              <p className="font-noto text-xs md:text-base">{item.info}</p>
            </div>
          </BackgroundBorderGradient>
        ))}
      </article>
    </section>
  );
}
