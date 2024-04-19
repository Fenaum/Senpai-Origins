"use client";

import "./navbar.css";
import Icons from "../../../constants";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLoadingStore } from "../../utils/zustand";
import LoadingAnimation from "../animation/LoadingAnimation";
import MobileNavbar from "./MobileNavbar";
import { useViewport } from "../../hooks/useViewport";
import SideBar from "../sidebar/Sidebar";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoading, transitionAnimation } = useLoadingStore();
  const isActive = (href: string) => pathname === href;
  const isMobile = useViewport(); // Use the useViewport hook

  // State to track whether the component is mounted on the client-side
  const [isClient, setIsClient] = useState(false);

  // Effect to set isClient to true when the component mounts on the client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // If the component is not mounted on the client-side, return null
  if (!isClient) {
    return null;
  }

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
          <hr className="nav-break" />
        </>
      )}
    </>
  );
};

export default Navbar;
