interface Cart {
  id: string; // Unique identifier for the cart
  userId?: string; // Optional: ID of the user associated with the cart
  items: { productID: string; price: number }[]; // Array of objects with productID and price
  createdA?: Date; // Date the cart was created
  updatedAt?: Date; // Date the cart was last updated (optional)
  totalPrice?(): number; // Function to calculate the total price of the cart
}

export default Cart;
