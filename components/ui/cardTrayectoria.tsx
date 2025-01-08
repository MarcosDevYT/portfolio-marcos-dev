"use client";

import { BackgroundBorderGradient } from "./framerUI/background-gradient";

interface CardTrayectoriaProps {
  date: string;
  title: string;
  description: string;
}

const CardTrayectoria: React.FC<CardTrayectoriaProps> = ({
  date,
  title,
  description,
}) => {
  return (
    <BackgroundBorderGradient
      className={`card-trayectoria rounded-[14px] flex flex-col gap-1 px-2 py-2 text-start w-52 md:w-72 lg:w-96 bg-white dark:bg-zinc-900 relative
      before:content[""] before:rounded-full before:absolute before:w-5 before:h-5 before:bg-mainColor before:-top-2 before:-left-[2.1rem] md:before:-left-[2.65rem]
      `}
    >
      <span className="font-semibold text-lg">{date}</span>
      <div className="flex flex-col">
        <h3 className="font-bold text-base">{title}</h3>
        <p className="font-medium text-sm">{description}</p>
      </div>
    </BackgroundBorderGradient>
  );
};

export default CardTrayectoria;
