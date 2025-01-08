"use client";

import { NavBarIcons } from "@/data";
import { LayoutGrid } from "lucide-react";
import { useState } from "react";
import { TransitionLink } from "./transitionLinks";

const NavToggle = ({ children }: { children: React.ReactNode }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <nav className="flex flex-col items-center justify-center rounded-full bg-secondBg my-2 p-[0.3rem] md:p-[0.45rem]">
      <button
        className={`p-[0.4rem] md:px-2 rounded-full nav__link  ${
          isActive ? "active" : ""
        }`}
        onClick={toggleButton}
      >
        <LayoutGrid className="w-4 h-4 md:w-6 md:h-6" />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isActive ? "max-h-[500px] opacity-100 mt-1" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </nav>
  );
};

const Sidebar = () => {
  return (
    <header className="fixed z-[100] flex flex-col items-start justify-start mt-auto mx-3 2xl:mx-6">
      <NavToggle>
        {NavBarIcons.map((item, index) => (
          <TransitionLink
            href={item.link}
            key={index}
            className={`transition duration-150 rounded-full cursor-pointer nav__link`}
          >
            <span className="block p-[0.4rem] md:px-2 mt-2 rounded-full">
              {item.icon}
            </span>
          </TransitionLink>
        ))}
      </NavToggle>
    </header>
  );
};

export default Sidebar;
