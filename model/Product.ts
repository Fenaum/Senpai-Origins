// Assuming Review.ts is already defined as shown in previous messages
import Review from "./Review";

interface Variant {
  id: string; // Unique identifier for the variant
  size?: string; // Size of the product (e.g., S, M, L)
  color?: string; // Color of the product (e.g., Red, Blue, Green)
  // Add other variant-specific attributes as needed
}

interface Product {
  productID: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  images: string[];
  categoryID: string; // If using categories
  categoryName?: string; // Directly include category name for quick access
  rating?: number; // Average rating of the product
  reviews?: Review[]; // Array of reviews
  inventoryStatus?: "in_stock" | "out_of_stock" | "backordered"; // Inventory status
  tags?: string[]; // Array of tags or keywords
  createdAt?: Date; // Timestamp when the product was created
  updatedAt?: Date; // Timestamp when the product was last updated
  variants?: Variant[]; // Array of product variants
  // Other product properties...
}

export default Product;
