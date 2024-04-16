"use client";

import "./navbar.css";
import Icons from "../../../constants";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useLoadingStore } from "../../utils/zustand";
import LoadingAnimation from "../animation/LoadingAnimation";
import MobileNavbar from "./MobileNavbar";
import { useViewport } from "../../hooks/useViewport";
import SideBar from "../sidebar/Sidebar";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoading, transitionAnimation } = useLoadingStore();
  const isMobile = useViewport(); // Use the useViewport hook
  const isActive = (href: string) => pathname === href;

  return (
    <>
      <LoadingAnimation isLoading={isLoading} />
      {isMobile ? (
        <MobileNavbar />
      ) : (
        <>
          <SideBar />
          <nav>
            <Image src={Icons.logo} alt="Logo" className="h-40 w-40 mx-5" />
            <ul>
              <li>
                <button
                  onClick={(event) => transitionAnimation(router, "/store")}
                  className={isActive("/store") ? "active" : ""}
                >
                  SHOP
                </button>
              </li>
              <li className={isActive("/") ? "active" : ""}>
                <button
                  onClick={(event) => transitionAnimation(router, "/")}
                  className={isActive("/") ? "active" : ""}
                >
                  HOME
                </button>
              </li>
              <li>
                <button
                  onClick={(event) => transitionAnimation(router, "/about")}
                  className={isActive("/about") ? "active" : ""}
                >
                  ABOUT US
                </button>
              </li>
              <li className={isActive("/blog") ? "active" : ""}>
                <button
                  onClick={(event) => transitionAnimation(router, "/blog")}
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
      )}
    </>
  );
};

export default Navbar;
