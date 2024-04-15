"use client";

import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { m, animationProps } from "../../utils/animation";
import Home from "../../components/storeHome/Home"

function page() {
  return (
    <m.div 
    {...animationProps.storePage}
    className="flex"
    >
      <Sidebar />
      <Home />
    </m.div>
  );
}

export default page;
