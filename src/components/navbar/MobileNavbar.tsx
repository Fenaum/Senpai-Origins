"use client"

import Link from "next/link"
import Image from "next/image";
import Icons from "../../../constants";
import './navbar.css'
import { useState } from "react";

interface Props {
  className?: string;
}

const MobileNavbar = ({className}: Props) => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const handleClick = () => {
     setIsMenuOpen(!isMenuOpen);
   };

    return (
      <nav className={`flex justify-between ${className}`}>
        <div>
          <button
            onClick={handleClick}
            className={`NavMenu-button ${isMenuOpen ? "rotate" : ""}`}
          >
            <Icons.menuIcon className="w-12 h-12 m-5" />
          </button>
          <ul className={`NavMenu-items first-item ${isMenuOpen ? "show" : ""}`}>
            <div className="menu-break"/>
            <li>
              <Link onClick={handleClick} href="/store/products">
                ALL PRODUCTS
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} href="/store/products/new-arrivals">
                NEW COLLECTION
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} href="/store/products/special-offers">
                SPECIAL OFFERS
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} href="/orders">
                ORDER STATUS
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} href="/orders/shipping/">
                TRACK SHIPPING
              </Link>
            </li>
            <hr className="menu-line-break"/>
            <li>
              <Link onClick={handleClick} href="/about">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} href="/help">
                SUPPORT
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} href="/contact">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/">
          <Image src={Icons.logo} alt="Logo" className="h-24 w-24" />
        </Link>
        <div className="flex ">
          <Link href="/store">
            <Icons.storeIcon className="w-10 h-10 m-1" />
          </Link>
          <Link href="/cart">
            <Icons.cartIcon className="w-11 h-11 m-1" />
          </Link>
          <Link href="profile">
            <Icons.userMobileIcon className="w-10 h-10 m-1" />
          </Link>
        </div>
      </nav>
    );
}

export default MobileNavbar;