"use client";

import { portfolioParalax } from "@/data";
import { HeroParallaxUI } from "../ui/framerUI/hero-parallax";

export function HeroParallax() {
  return <HeroParallaxUI portfolios={portfolioParalax} />;
}
