"use client";

import React, { useEffect, useRef } from "react";
import "./styles.css";

interface StarBackgroundProps {
  className: string;
}

const StarBackground: React.FC<StarBackgroundProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const generateStars = (className: string) => {
    const starContainer = containerRef.current;
    if (!starContainer) return;

    const starCount = 30;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add(className);

      // Posición aleatoria en el contenedor
      star.style.left = Math.random() * 100 + "vw";
      star.style.bottom = Math.random() * 100 + "vh";

      // Duración aleatoria de la animación de movimiento
      star.style.animationDuration = Math.random() * 10 + 5 + "s";

      // Tamaño aleatorio de la estrella
      const starSize = Math.random() * 3 + 1 + "px";
      star.style.width = starSize;
      star.style.height = starSize;

      starContainer.appendChild(star);
    }
  };

  useEffect(() => {
    generateStars(className);
  }, [className]);

  return <div ref={containerRef} className="star-background"></div>;
};

export default function StarsContainer() {
  return (
    <div>
      <StarBackground className="star" />
      <StarBackground className="star-down" />
    </div>
  );
}
