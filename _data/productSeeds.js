const admin = require("firebase-admin");
const serviceAccount = require("./senpai-origins-firebase-adminsdk-j9ucm-fa3116a74a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function seedProducts() {
  console.log("Deleting all existing products...");
  const productsSnapshot = await db.collection("products").get();
  const deletePromises = productsSnapshot.docs.map((doc) => doc.ref.delete());
  await Promise.all(deletePromises);
  console.log("All existing products have been deleted.");

  console.log("Seeding 10 new unique products...");
  const products = [
    {
      productID: "prod_1",
      name: "Product 1",
      description: "This is a description for Product 1.",
      price: 10.99,
      quantity: 100,
      images: [],
      categoryID: "cat_1",
      categoryName: "Category 1",
      rating: 4.5,
      reviews: [
        {
          id: "rev_1",
          productID: "prod_1",
          reviewerName: "John Doe",
          rating: 5,
          comment: "Great product!",
          createdAt: new Date(),
        },
      ],
      inventoryStatus: "in_stock",
      tags: ["tag1", "tag2"],
      createdAt: new Date(),
      updatedAt: new Date(),
      variants: [
        {
          id: "var_1",
          size: "S",
          color: "Red",
        },
        {
          id: "var_2",
          size: "M",
          color: "Blue",
        },
      ],
    },
    {
      productID: "prod_2",
      name: "Product 2",
      description: "This is a description for Product 2.",
      price: 19.99,
      quantity: 50,
      images: [],
      categoryID: "cat_2",
    },
    {
      productID: "prod_3",
      name: "Product 3",
      description: "This is a description for Product 3.",
      price: 29.99,
      quantity: 30,
      images: [],
      categoryID: "cat_1",
    },
    {
      productID: "prod_4",
      name: "Product 4",
      description: "This is a description for Product 4.",
      price: 39.99,
      quantity: 20,
      images: [],
      categoryID: "cat_2",
    },
    {
      productID: "prod_5",
      name: "Product 5",
      description: "This is a description for Product 5.",
      price: 49.99,
      quantity: 10,
      images: [],
      categoryID: "cat_1",
    },
    {
      productID: "prod_6",
      name: "Product 6",
      description: "This is a description for Product 6.",
      price: 59.99,
      quantity: 5,
      images: [],
      categoryID: "cat_2",
    },
    {
      productID: "prod_7",
      name: "Product 7",
      description: "This is a description for Product 7.",
      price: 69.99,
      quantity: 15,
      images: [],
      categoryID: "cat_1",
    },
    {
      productID: "prod_8",
      name: "Product 8",
      description: "This is a description for Product 8.",
      price: 79.99,
      quantity: 25,
      images: [],
      categoryID: "cat_2",
    },
    {
      productID: "prod_9",
      name: "Product 9",
      description: "This is a description for Product 9.",
      price: 89.99,
      quantity: 35,
      images: [],
      categoryID: "cat_1",
    },
    // Define other 9 products here...
  ];

  const batch = db.batch();
  products.forEach((product, index) => {
    const productRef = db.collection("products").doc();
    batch.set(productRef, product);
  });

  await batch.commit();
  console.log("10 new unique products have been seeded.");
}

seedProducts().catch(console.error);
