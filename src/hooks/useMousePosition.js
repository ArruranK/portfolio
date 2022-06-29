import { useEffect, useState } from "react";

export const useMousePosition = () => {
  const isBrowser = typeof window !== "undefined";
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    if (isBrowser) {
      window.addEventListener("mousemove", setFromEvent);
    }
    

    return () => {
      if (isBrowser) {
        window.removeEventListener("mousemove", setFromEvent);
      }
      
    };
  }, []);

  return position;
};