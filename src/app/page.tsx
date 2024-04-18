"use client";
import { m, animationProps } from "../utils/animation"

import Home from "../components/landingHome/Home";
export default function HomePage() {
  return (
    <m.main
      className="flex flex-col items-center justify-center"
      {...animationProps.homePage}
    >
      <Home />
    </m.main>
  );
}
