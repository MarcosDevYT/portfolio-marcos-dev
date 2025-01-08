"use client";

import { footerLinks, footerNavPages } from "@/data";
import Link from "next/link";
import { TransitionLink } from "./transitionLinks";

const Footer = () => {
  return (
    <footer className="pt-10 px-8 pb-5 w-full flex flex-col bg-bg">
      <section className="flex flex-col w-full gap-12 items-center mb-12 md:flex-row md:flex-wrap md:justify-between">
        <article className="text-center flex flex-col items-center">
          <a href={"/"} className={`text-4xl font-bold font-inter`}>
            Marcos
            <p className="text-2xl text-mainColor font-semibold">
              Frontend Developer
            </p>
          </a>
        </article>

        <article className="social__container ">
          {footerLinks.map((item) => (
            <Link
              href={item.src}
              key={item.id}
              target="_blank"
              rel="noopender noreferrer"
              className={`link-relative`}
            >
              {item.icon}
              {item.span}
            </Link>
          ))}
        </article>

        <article className="flex flex-row gap-12 ">
          <div className="flex flex-col gap-4 items-center md:flex-row">
            {footerNavPages.map((item) => (
              <TransitionLink
                href={item.link}
                key={item.id}
                className="text-lg transition-colors duration-500 cursor-pointer font-medium hover:text-mainColor"
              >
                {item.title}
              </TransitionLink>
            ))}
          </div>
        </article>
      </section>
      <section className="text-center">
        <p className="text-sm text-gray-500">
          !Hecho por &copy;{" "}
          <Link
            href="https://www.freelancer.com.ar/u/MarcosPines"
            target="_blank"
            rel="noopender noreferrer"
            className="text-mainColor"
          >
            Marcos Morua
          </Link>
          !
        </p>
      </section>
    </footer>
  );
};

export default Footer;
