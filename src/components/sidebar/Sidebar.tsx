import Link from "next/link";
import Icons from "../../../constants";
import "./sidebar.css";

export default function SideBar() {
  return (
    <div>
      <div className="side-bar">
        <h1 className="text-center text-2xl font-light text-gray-800">
          Main Menu
        </h1>{" "}
        <form className="search-form">
          <input type="text" placeholder="Search..." className="search-input" />
        </form>
        <div className="dropdown">
          <Link href="/store" className="flex items-center">
            <Icons.storeIcon className="w-12 h-8" />
            <span>Shop</span>
          </Link>
          <div className="dropdown-content">
            <Link href="/store/categories/collection">Collection</Link>
            <Link href="/store/categories/men">Men</Link>
            <Link href="/store/categories/women">Women</Link>
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
  );
}
