"use client";

import { useEffect, useRef, useMemo } from "react";

const TypeAnimation = () => {
  // Textos a mostrar
  const texts = useMemo(() => ["Frontend", "Programador", "Desarrollador"], []);

  // Variables de referencia
  const index = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Tiempos de las funciones
  const typingDelay = 100;
  const deletingDelay = 100;
  const pauseDuration = 3000;

  useEffect(() => {
    const type = () => {
      const currentText = texts[index.current];

      if (isDeleting.current) {
        // Borrar un carácter
        if (elementRef.current) {
          elementRef.current.innerHTML = currentText.substring(
            0,
            charIndex.current - 1
          );
        }
        charIndex.current--;

        if (charIndex.current === 0) {
          isDeleting.current = false;
          index.current = (index.current + 1) % texts.length;
          setTimeout(() => {
            if (elementRef.current) {
              elementRef.current.classList.remove("fade");
            }
            type();
          }, 200);
          return;
        }
      } else {
        // Escribir un carácter
        if (elementRef.current) {
          elementRef.current.innerHTML = currentText.substring(
            0,
            charIndex.current + 1
          );
        }
        charIndex.current++;

        if (charIndex.current === currentText.length) {
          isDeleting.current = true;
          if (elementRef.current) {
            elementRef.current.classList.add("fade");
          }
          setTimeout(() => {
            if (elementRef.current) {
              elementRef.current.classList.remove("fade");
            }
            type();
          }, pauseDuration);
          return;
        }
      }

      timeoutRef.current = setTimeout(
        type,
        isDeleting.current ? deletingDelay : typingDelay
      );
    };

    type();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [texts]);

  return <span ref={elementRef} id="text" className="typing"></span>;
};

export default TypeAnimation;
