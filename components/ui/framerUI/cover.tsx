"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { SparklesCore } from "@/components/ui/framerUI/sparkles";
import { TransitionLink } from "@/components/layout/transitionLinks";

export const Cover = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={ref}
      className="w-full h-full relative hover:bg-neutral-900 group/cover inline-block dark:bg-neutral-900 bg-neutral-100 px-2 py-2 transition duration-200 rounded-lg overflow-hidden"
    >
      {/* Elemento fijo */}
      <TransitionLink href={"/portafolios"} className="">
        <span className="absolute link-absolute z-30 w-full">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            Portafolios
          </h2>
        </span>

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { duration: 0.2 } }}
              className="h-full w-full overflow-hidden absolute inset-0"
            >
              <motion.div
                animate={{ translateX: ["-50%", "0%"] }}
                transition={{
                  translateX: {
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                  },
                }}
                className="w-[200%] h-full flex"
              >
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={500}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={500}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.span
          key={String(hovered)}
          animate={{
            scale: hovered ? 0.8 : 1,
            x: hovered ? [0, -30, 30, -30, 30, 0] : 0,
            y: hovered ? [0, 30, -30, 30, -30, 0] : 0,
          }}
          exit={{ filter: "none", scale: 1, x: 0, y: 0 }}
          transition={{
            duration: 0.2,
            x: { duration: 0.2, repeat: Infinity, repeatType: "loop" },
            y: { duration: 0.2, repeat: Infinity, repeatType: "loop" },
            scale: { duration: 0.2 },
            filter: { duration: 0.2 },
          }}
          className={cn(
            "dark:text-white inline-block text-neutral-900 relative z-20 group-hover/cover:text-white transition duration-200",
            className
          )}
        >
          {children}
        </motion.span>
      </TransitionLink>
    </div>
  );
};
