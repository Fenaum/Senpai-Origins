"use client";

import React from "react";
import { m, animationProps } from "../utils/animation"
import Home from "../components/landingHome/Home";

export default function homePage() {
  return (
    <m.main
      className="flex flex-col items-center justify-center"
      {...animationProps.homePage}
    >
      <Home />
    </m.main>
  );
}
