"use client";
import React from "react";
import { PinContainer } from "../ui/framerUI/3d-pin";
import Image from "next/image";

interface CardAnimationProps {
  title: string;
  link: string;
  description: string;
  src: string;
}

const CardAnimation: React.FC<CardAnimationProps> = ({
  title,
  link,
  description,
  src,
}) => {
  return (
    <div className="h-[40rem] xl:w-[24rem] flex items-center justify-center ">
      <PinContainer title={link} href={link}>
        <div className="flex flex-col basis-full text-slate-100/50 w-[13rem] h-[23rem] md:w-[18rem] md:h-[25rem]">
          <div className="h-full w-full rounded-t-xl">
            <Image
              className="max-w-full h-[102%] rounded-t-xl object-cover"
              src={src}
              alt={link}
              width={550}
              height={550}
              priority
            />
          </div>
          <div className="p-4 w-full h-full flex flex-col justify-around">
            <h3 className="text-start font-bold  text-xl text-slate-100">
              {title}
            </h3>
            <div className="text-start text-base font-normal">
              <span className="text-slate-200 ">{description}</span>
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

export default CardAnimation;
