"use client";

import React from "react";
import { m, animationProps } from "../../utils/animation";
import Home from "../../components/storeHome/Home"

function page() {
  return (
    <m.div 
    {...animationProps.storePage}
    className="flex flex-col items-center justify-center"
    >
      <Home />
    </m.div>
  );
}

export default page;
