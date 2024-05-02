interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    inventoryLevel: number;
    images?: string[];
    categories?: string[];
    tags?: string[];
    rating?: number;
    reviews?: Review[];
    createdAt?: Date;
    updatedAt?: Date;
}

interface Review {
    id: number;
    productId: number;
    author: string;
    content: string;
    rating: number;
    createdAt?: Date;
    updatedAt?: Date;
    replies?: Reply[];
}

interface Reply {
    id: number;
    reviewId: number;
    author: string;
    content: string;
    createdAt?: Date;
    updatedAt?: Date;
    replies?: Reply[];
    parentReplyId?: number;
}

export default Product;
