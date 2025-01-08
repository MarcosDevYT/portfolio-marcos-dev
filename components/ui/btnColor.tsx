"use client";

import { BackgroundBorderGradient } from "./framerUI/background-gradient";
import { TransitionLink } from "../layout/transitionLinks";

interface BtnColorProps {
  content: string;
  href: string;
}

const BtnColor: React.FC<BtnColorProps> = ({ content, href }) => {
  return (
    <>
      <TransitionLink
        href={href}
        className="duration-250 transition-transform hover:scale-110"
      >
        <BackgroundBorderGradient className=" rounded-[12px] px-8 py-2 text-xl font-medium text-center bg-white dark:bg-zinc-900">
          {content}
        </BackgroundBorderGradient>
      </TransitionLink>
    </>
  );
};

export default BtnColor;
