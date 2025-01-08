"use client";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  className: string;
}

function esperar(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showExitAnimation, setShowExitAnimation] = useState(false);

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsTransitioning(true);

    await esperar(1000);

    router.push(href);

    await esperar(200);
    setIsTransitioning(false);
  };

  return (
    <>
      <AnimatePresence>
        {/* Animación de entrada */}
        {isTransitioning && (
          <motion.div
            key="slide-in"
            className="slide-in z-50"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </AnimatePresence>

      <Link
        onClick={handleTransition}
        href={href}
        className={className}
        {...props}
      >
        {children}
      </Link>

      <AnimatePresence>
        {/* Animación de salida */}
        {showExitAnimation && (
          <motion.div
            key="slide-out"
            className="slide-out z-50"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => setShowExitAnimation(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
