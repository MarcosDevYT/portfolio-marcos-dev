"use client";
import { animate } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Cover } from "./framerUI/cover";

export function CardPortfolio() {
  return (
    <Card>
      <Cover>
        <CardSkeletonContainer>
          <Skeleton />
        </CardSkeletonContainer>
        <CardDescription>
          <i className="ri-arrow-up-s-line text-xl md:text-[2vw]"></i>
          Mas de mis Trabajos
        </CardDescription>
      </Cover>
    </Card>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    // @ts-ignore
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);
  return (
    <div className="px-2 overflow-hidden max-w-full h-full relative flex flex-row items-center justify-center gap-1">
      <div className="flex flex-row justify-between items-center">
        <Container className="h-4 w-4 md:h-8 md:w-8 circle-1">
          <i className="ri-terminal-box-line text-lg md:text-[1.5vw]"></i>
        </Container>
        <Container className="h-8 w-8 md:h-12 md:w-12 circle-2">
          <i className="ri-javascript-line text-yellow-300 text-xl md:text-[2.1vw]"></i>
        </Container>
        <Container className="h-12 w-12 md:h-16 md:w-16 circle-3">
          <i className="ri-reactjs-line text-blue-400 text-2xl md:text-[2.8vw]"></i>
        </Container>
        <Container className="h-8 w-8 md:h-12 md:w-12 circle-4">
          <i className="ri-nextjs-fill text-slate-950 text-xl md:text-[2.1vw]"></i>
        </Container>
        <Container className="h-4 w-4 md:h-8 md:w-8 circle-5">
          <i className="ri-code-box-line text-lg md:text-[1.5vw]"></i>
        </Container>
      </div>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-full sm:w-[18rem] md:w-[20rem] lg:w-[24rem] h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[35rem] mx-auto rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "flex flex-col mt-20 md:mt-0 items-center justify-center text-lg lg:text-[1.2vw] font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "w-full h-[8rem] sm:h-[12rem] md:h-[20rem] lg:h-[25rem] rounded-xl z-20",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-1 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]",
        className
      )}
    >
      {children}
    </div>
  );
};
