// Review.ts

interface Review {
  id: string; // Unique identifier for the review
  productID: string; // ID of the product being reviewed
  reviewerName: string; // Name of the reviewer
  rating: number; // Rating given by the reviewer (e.g., 1 to 5)
  comment: string; // Comment or review text
  createdAt: Date; // Date the review was submitted
  updatedAt?: Date; // Date the review was last updated (optional)
}

export default Review;
