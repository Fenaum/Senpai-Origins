"use client";
import { motion as m } from "framer-motion";

import Home from "../components/landingHome/Home";
export default function HomePage() {
  return (
    <m.main
      className="flex items-center justify-center"
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <Home />
    </m.main>
  );
}
