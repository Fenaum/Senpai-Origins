import Product from './Product';

interface Cart {
  id: string; // Unique identifier for the cart
  userID?: string; // Optional: ID of the user associated with the cart
  items: Product[]; // Array of items in the cart
  totalPrice: number; // Total price of all items in the cart
  createdAt: Date; // Date the cart was created
  updatedAt?: Date; // Date the cart was last updated (optional)
}

export default Cart;
