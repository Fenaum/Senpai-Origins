import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../src/utils/firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import Cart from "../../../model/Cart";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      // Assuming the user ID is passed as a query parameter named 'userId'
      const userId = req.query.userId as string;
      console.log(`Attempting to fetch cart items for user ID: ${userId}`);

      // Create a reference to the "carts" collection
      const cartsCollectionRef = collection(db, "carts");

      // Create a query against the collection to find documents where the "userID" field matches the provided user ID
      const q = query(cartsCollectionRef, where("userId", "==", userId));

      // Execute the query
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Assuming you want to return all matching cart items
        const cartsData = querySnapshot.docs.map((doc) => doc.data() as Cart);
        console.log(`Found cart items:`, cartsData);
        res.status(200).json(cartsData);
      } else {
        console.log(`No cart items found for user ID ${userId}.`);
        res
          .status(404)
          .json({ error: "No cart items found for the provided user ID" });
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
      res.status(500).json({ error: "Failed to fetch cart items" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
