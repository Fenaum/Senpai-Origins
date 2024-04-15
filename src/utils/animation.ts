import { motion as m } from "framer-motion";

const animationProps = {
  homePage: {
    initial: { x: "100%" },
    animate: { x: "0%" },
    transition: { duration: 0.75, ease: "easeOut" },
    exit: { opacity: 1 },
  },
  storePage: {
    initial: { x: "-100%" },
    animate: { x: "0%" },
    transition: { duration: 0.75, ease: "easeOut" },
    exit: { opacity: 1 },
  },
};

export { m, animationProps };
