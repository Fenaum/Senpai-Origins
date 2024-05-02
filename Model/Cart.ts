import Product from "./Product";

interface Cart {
  id: string;
  userId: string;
  products: {
    product: Product;
    quantity: number;
  }[];
  createdAt: Date;
  updatedAt: Date;
  total: number;
}

export default Cart;
