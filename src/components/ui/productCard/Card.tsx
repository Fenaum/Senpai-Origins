import CartButton from "../cartButton/CartButton";
import React from "react";
import "./card.css"
import Link from "next/link";
// import Image from "next/image";

interface Props {
  title: string;
  image: string;
  id: string;
  price: number;
}

function Card({ title, image, price, id }: Props) {
  return (
    <div
      className="product-card-container bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <Link
        href={`/product/${id}`}
        className="product-link"
      >
        <div className="product-image-container">
          <img
            src={image}
            alt={title}
            className="product-image"
          />
        </div>
        <div className="productInfoContainer">
          <h2 className="product-title">{title}</h2>
          <p className="product-price">${price}</p>
        </div>
      </Link>
         <CartButton />
    </div>
  );
}

export default Card;
