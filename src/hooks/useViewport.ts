// useViewport.ts
import { useState, useEffect } from "react";

export const useViewport = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check if window is defined (browser environment)
    if (typeof window !== "undefined") {
      // Initial check
      handleResize();
      // Add event listener for window resize
      window.addEventListener("resize", handleResize);
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return isMobile;
};
