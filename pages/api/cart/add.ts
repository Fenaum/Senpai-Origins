import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../src/utils/firebase/firebaseConfig";
import Cart from "../../../model/Cart"
import { collection, addDoc } from "firebase/firestore";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const cartItem: Cart = req.body;
    const docRef = await addDoc(collection(db, "carts"), cartItem);
    res.status(200).json({ message: "Cart item added successfully", id: docRef.id });
  } else {
    res.status(405).json({ message: "Method not allowed" }); 
  }
}