"use client"

import Link from "next/link"
import Image from "next/image";
import Icons from "../../../constants";
import './navbar.css'


interface Props {
  className?: string;
}

const MobileNavbar = ({className}: Props) => {
    return (
      <nav className={`flex justify-between ${className}`}>
        <button>
            <Icons.menuIcon className="w-12 h-12 m-5"/>
        </button>
        <Image src={Icons.logo} alt="Logo" className="h-20 w-20 mx-5" />
      </nav>
    );
}

export default MobileNavbar;