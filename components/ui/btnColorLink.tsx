"use client";

import { BackgroundBorderGradient } from "./framerUI/background-gradient";

interface BtnColorProps {
  content: string;
  href: string;
  downloaded?: boolean;
}

const BtnColorLink: React.FC<BtnColorProps> = ({ content, href }) => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={() => scrollToSection(href)}
      className="duration-250 transition-transform hover:scale-110"
    >
      <BackgroundBorderGradient className="rounded-[14px] px-8 py-2 text-xl font-medium text-center bg-white dark:bg-zinc-900">
        {content}
      </BackgroundBorderGradient>
    </button>
  );
};

export default BtnColorLink;
