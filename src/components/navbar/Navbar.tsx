"use client";

import "./navbar.css";
import Icons from "../../../constants";
import effects from "../../../constants/effect";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useLoadingStore } from "../../utils/zustand";

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
        <div className={transitionClassName} style={{ position: "relative" }}>
          <Image src={effects.speed1} alt="Loading..." className="e1"></Image>
          <Image src={effects.speed2} alt="Loading..." className="e2"></Image>
        </div>
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
          <li className={isActive("/about") ? "active" : ""}>
              <button onClick={(event) => transitionAnimation("/about")}>
                ABOUT US
              </button>
          </li>
          <li className={isActive("/blog") ? "active" : ""}>
              <button onClick={(event) => transitionAnimation("/blog")}>
                BLOG
              </button>
          </li>
          <li className={isActive("/notifications") ? "active" : ""}>
            <Link href="/notifications">
              <Icons.bellIcon className="h-9 w-9" />
            </Link>
          </li>
          <li className={isActive("/user/signin") ? "active" : ""}>
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
