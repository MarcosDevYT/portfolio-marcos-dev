import { dataFormation } from "@/data";
import React from "react";

export default function FormacionAbout() {
  return (
    <section className="bg-bg flex h-full w-full">
      <article className="py-16 px-8 md:px-20 w-full md:max-w-[1000px] mx-auto flex flex-col justify-center items-center gap-12">
        {dataFormation.map((item) => (
          <div key={item.title} className="w-full md:w-9/12">
            <h3 className="font-inter font-semibold text-3xl md:text-center md:pb-2 mb-4">
              {item.title}
            </h3>
            <p className="font-noto text-sm md:text-base lg:text-lg font-medium md:text-center">
              {item.info}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
}
