"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export const HeroParallaxUI = ({
  portfolios,
}: {
  portfolios: {
    title: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = portfolios.slice(0, 5);
  const secondRow = portfolios.slice(5, 10);
  const thirdRow = portfolios.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.3, 0]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 0]),
    springConfig
  );

  return (
    <section
      ref={ref}
      className="h-[120vh] lg:h-[150vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export const Header = () => {
  return (
    <article className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-white">
        Creando portafolios <br /> que potencian tu presencia digital
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200">
        Desarrollo de sitios web de alta calidad utilizando las tecnologías y
        frameworks más actuales. Mi objetivo es ofrecerte soluciones que
        representen tu visión y profesionalismo.
      </p>
    </article>
  );
};

export const ProductCard = ({
  product,
}: {
  product: {
    title: string;
    thumbnail: string;
  };
}) => {
  return (
    <motion.div
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-72 w-[38rem] relative flex-shrink-0"
    >
      <Image
        src={product.thumbnail}
        height="600"
        width="600"
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt={product.title}
      />
    </motion.div>
  );
};
