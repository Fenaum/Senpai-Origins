import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../src/utils/firebase/firebaseConfig";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import Cart from "../../../model/Cart"; // Importing the Cart interface

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const cart: Cart = req.body; // Assuming req.body is a single Cart object
    if (!cart.items || !Array.isArray(cart.items)) {
      return res.status(400).json({ message: "Invalid cart items" });
    }

    // Calculate the total price of a cart
    const totalPrice = cart.items.reduce(
      (total, item) => total + item.price,
      0
    );

    // Check if a cart already exists for the user
    const cartsCollectionRef = collection(db, "carts");
    const q = query(cartsCollectionRef, where("userId", "==", cart.userId));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // A cart already exists for the user
      return res
        .status(400)
        .json({ message: "A cart already exists for this user" });
    }

    // Add the entire cart object as a single document
    const docRef = await addDoc(collection(db, "carts"), {
      ...cart,
      totalPrice,
    });

    res.status(200).json({
      message: "Cart added successfully",
      cartId: docRef.id, // Return the ID of the newly created document
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
