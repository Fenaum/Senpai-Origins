const admin = require("firebase-admin");
const serviceAccount = require("./senpai-origins-firebase-adminsdk-j9ucm-480ede61f1.json");

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
      name: "Hunter X Hunter Kilua Crew Neck",
      description: "This is a description for Product 1.",
      price: 34.99,
      collection: "new arrivals",
      quantity: 100,
      images: ["/images/products/hxh1.webp"],
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
      name: "Hunter X Hunter Crew Neck",
      description: "This is a description for Product 2.",
      price: 39.99,
      collection: "new arrivals",
      quantity: 50,
      images: ["/images/products/hxh2.webp"],
      categoryID: "cat_2",
    },
    {
      productID: "prod_3",
      name: "Solo Leveling Crew Neck",
      description: "This is a description for Product 3.",
      price: 29.99,
      collection: "new arrivals",
      quantity: 30,
      images: ["/images/products/sololeveling.webp"],
      categoryID: "cat_1",
    },
    {
      productID: "prod_4",
      name: "Pokemon x Naruto Cropped Hoodie",
      description: "This is a description for Product 4.",
      price: 39.99,
      collection: "new arrivals",

      quantity: 20,
      images: ["/images/products/pokemonxnaruto.webp"],
      categoryID: "cat_2",
    },
    {
      productID: "prod_5",
      name: "Attack on Titan Crew Neck",
      description: "This is a description for Product 5.",
      price: 49.99,
      collection: "new arrivals",

      quantity: 10,
      images: ["/images/products/aot.webp"],
      categoryID: "cat_1",
    },
    {
      productID: "prod_6",
      name: "Gear 6 Luffy Crew Neck",
      description: "This is a description for Product 6.",
      price: 49.99,
      collection: "special offers",

      quantity: 5,
      images: ["/images/products/luffygear6.webp"],
      categoryID: "cat_2",
    },
    {
      productID: "prod_7",
      name: "Zoro Hoodie",
      description: "This is a description for Product 7.",
      price: 49.99,
      collection: "special offers",

      images: ["/images/products/zoro.webp"],
      categoryID: "cat_1",
    },
    {
      productID: "prod_8",
      name: "Chainsaw Man Crew Neck",
      description: "This is a description for Product 8.",
      price: 39.99,
      collection: "special offers",

      quantity: 25,
      images: ["/images/products/chainsawman.webp"],
      categoryID: "cat_2",
    },
    {
      productID: "prod_9",
      name: "Fairy Eevee Crew Neck",
      description: "This is a description for Product 9.",
      price: 39.99,
      collection: "special offers",
      quantity: 35,
      images: ["/images/products/eevee.webp"],
      categoryID: "cat_1",
    },
    {
      productID: "prod_10",
      name: "Demon Slayer Crew Neck",
      description: "This is a description for Product 10.",
      price: 49.99,
      collection: "special offers",
      quantity: 35,
      images: ["/images/products/demonslayer.webp"],
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
