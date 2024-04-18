"use client";
import Image from "next/image";
import React from "react";
import Icons from "../../../../constants";
import "./cartButton.css";

interface className {
  className?: string;
}

function CartButton({ className }: className) {
  const buttonToggle = (cartBtnId: string, cardButtonContainerId: string) => {};

  return (
    <div className="cartButton-container">
      <button
        className="cartButton"
        onClick={() => {
          console.log("clicked");
        }}
      >
        <Icons.addToCart className="h-10 w-10" />
      </button>
    </div>
  );
}

export default CartButton;
