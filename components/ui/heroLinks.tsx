import { heroIcons } from "@/data";
import Link from "next/link";

const HeroLinks = () => {
  return (
    <>
      {heroIcons.map((item) => (
        <Link
          href={item.src}
          key={item.id}
          target="_blank"
          rel="noopender noreferrer"
          className="py-[.60rem] px-[.80rem] bg-secondBg rounded-full text-2xl transition-all hover:bg-titleColor hover:text-mainColor hover:-translate-y-2 md:text-3xl md:py-[.80rem] md:px-[1rem]"
        >
          {item.icon}
        </Link>
      ))}
    </>
  );
};

export default HeroLinks;
