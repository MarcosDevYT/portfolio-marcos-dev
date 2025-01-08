"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

// Tipo para los elementos de navegación
type NavItem = {
  link: string;
  icon?: JSX.Element;
};

// Props del componente
type FloatingNavProps = {
  navItems: NavItem[];
  className?: string;
};

export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction > 0) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }
    }
  });

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 70; // Ajusta según la altura de tu header
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    function navHighlighter() {
      sections.forEach((current) => {
        if (current instanceof HTMLElement) {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 50;
          const sectionID = current.getAttribute("id");
          const navLink = document.querySelector(
            `.nav__link span[data-id="#${sectionID}"]`
          );

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (navLink) navLink.classList.add("active");
          } else {
            if (navLink) navLink.classList.remove("active");
          }
        }
      });
    }

    window.addEventListener("scroll", navHighlighter);

    return () => {
      window.removeEventListener("scroll", navHighlighter);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 100,
        }}
        animate={{
          y: visible ? 0 : 100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit gap-2 fixed bottom-4 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black z-40 px-3 py-1 items-center justify-center space-x-2 md:gap-3 md:space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <div
            key={idx}
            className={`transition duration-150 rounded-full cursor-pointer nav__link`}
            onClick={() => scrollToSection(navItem.link)}
          >
            <span
              data-id={`#${navItem.link}`}
              className="block px-2 py-2 rounded-full"
            >
              {navItem.icon}
            </span>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
