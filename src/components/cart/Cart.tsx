import { useState, useEffect } from "react";
import { auth } from "../../utils/firebase/firebaseConfig";
import Cart from "../../../model/Cart";
import Product from "../../../model/Product"

export default function CartComponent() {
  const [cart, setCart] = useState<Cart>(
    {
        id: "",
        items: [],
        totalPrice: () => 0,
    }
  );
  const [products, setProducts] = useState<Product[]>([]);
  const currentUser = auth.currentUser;

  // Check if currentUser is not null before accessing its uid
  const currentUserId = currentUser ? currentUser.uid : null;

  async function getCart() {
    try {
      const response = await fetch(`/api/cart/${currentUserId}`);
      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  }

  async function getProducts() {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    if (currentUserId) {
      getCart();
      getProducts();
    }
  }, [currentUserId]);

  // Function to enrich cart items with product details
const enrichCartItems = () => {
  if (cart && products.length > 0) {
    // Assuming `cart.items` is an array of items, each with a `productID`
    const enrichedItems = cart.items.map((cartItem) => {
      // Find the corresponding product for each cart item
      const product = products.find(
        (product) => product.productID === cartItem.productID
      );
      // Return a new object that includes all properties of the cart item and adds the product details
      return {
        ...cartItem,
        productDetails: product ? product : null, // Add product details to the cart item
      };
    });

    // Now `enrichedItems` contains cart items with their corresponding product details
    // You can use this enriched array to render your cart items
  }
};

  // Call `enrichCartItems` whenever `cart` or `products` changes
  useEffect(() => {
    enrichCartItems();
  }, [cart, products]);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {/* Render your cart items here */}
    </div>
  );
}
