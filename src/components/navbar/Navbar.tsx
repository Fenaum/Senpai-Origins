"use client";

import "./navbar.css";
import Icons from "../../../constants";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useLoadingStore } from "../../utils/zustand";
import LoadingAnimation from "../animation/LoadingAnimation"

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoading, startLoading, stopLoading } = useLoadingStore();

 const transitionAnimation = (href: string) => {
   startLoading();
   setTimeout(() => {
     stopLoading();
     router.push(href); // Navigate to the desired path after loading is complete
   }, 500);
 };

  const isActive = (href: string) => pathname === href;
  const transitionClassName = isLoading ? "transition-effect" : "";

  return (
    <>
      {isLoading && (
        <LoadingAnimation transitionClassName={transitionClassName} />
      )}
      <nav>
        <Image src={Icons.logo} alt="Logo" className="h-40 w-40 mx-5" />
        <ul>
          <li>
            <button
              onClick={(event) => transitionAnimation("/store")}
              className={isActive("/store") ? "active" : ""}
            >
              SHOP
            </button>
          </li>
          <li className={isActive("/") ? "active" : ""}>
            <button
              onClick={(event) => transitionAnimation("/")}
              className={isActive("/") ? "active" : ""}
            >
              HOME
            </button>
          </li>
          <li>
            <button
              onClick={(event) => transitionAnimation("/about")}
              className={isActive("/about") ? "active" : ""}
            >
              ABOUT US
            </button>
          </li>
          <li className={isActive("/blog") ? "active" : ""}>
            <button
              onClick={(event) => transitionAnimation("/blog")}
              className={isActive("/blog") ? "active" : ""}
            >
              BLOG
            </button>
          </li>
          <li>
            <Link href="/notifications">
              <Icons.bellIcon className="h-9 w-9" />
            </Link>
          </li>
          <li>
            <Link href="/user/signin">
              <Icons.userIcon className="h-10 w-10" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
