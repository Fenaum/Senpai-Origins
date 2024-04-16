'use client'

import Link from "next/link";
import Icons from "../../../constants";
import "./sidebar.css";
import useSidebarToggle from "@/hooks/useSidebarToggle";

export default function SideBar() {
 useSidebarToggle("sidebar-menu-btn", "side-bar");

  return (
    <>
      <button id="sidebar-menu-btn" className="sidebar-menu-btn">
        <Icons.sideBarMenu className="h-14 w-14" />
      </button>
      <div id="side-bar" className="side-bar">
        <div className="side-bar-content">
          <form className="search-form">
            <input
              type="text"
              placeholder="Search..."
              className="search-input font-light text-sm"
            />
          </form>
          <div className="dropdown">
            <Link href="/store/products" className="flex items-center">
              <Icons.storeIcon className="w-12 h-8" />
              <span>Shop</span>
            </Link>
            <div className="dropdown-content">
              <Link href="/store/categories/collection">
                <Icons.shopIcon className="w-12 h-8" />
                <span>New Collection</span>
              </Link>
              <Link href="/store/categories/special-offers">
                <Icons.promotionShopIcon className="w-12 h-8" />
                <span>Special Offers</span>
              </Link>
            </div>
          </div>
          <div className="dropdown">
            <Link href="/orders" className="flex items-center">
              <Icons.ordersIcon className="w-12 h-8" />
              <span>My Orders</span>
            </Link>
            <div className="dropdown-content">
              <Link href="/orders/status" className="flex items-center">
                <Icons.orderStatus className="w-12 h-8" />
                <span>Order Status</span>
              </Link>
              <Link href="/orders/track" className="flex items-center">
                <Icons.shippingIcon className="w-12 h-8" />
                <span className="whitespace-nowrap">Track Shipping</span>
              </Link>
            </div>
          </div>
          <Link href="/cart" className="flex items-center">
            <Icons.cartIcon className="w-12 h-8" />
            <span>My Cart</span>
          </Link>
          <Link href="/help" className="flex items-center">
            <Icons.supportIcon className="w-12 h-8" />
            <span>Support</span>
          </Link>
          <Link href="/contact" className="flex items-center">
            <Icons.commIcon className="w-12 h-8" />
            <span>Contact Us</span>
          </Link>
          <hr />
          <Link href="/settings" className="flex items-center">
            <Icons.settingIcon className="w-12 h-8" />
            <span>Settings</span>
          </Link>
        </div>
      </div>
    </>
  );
}
