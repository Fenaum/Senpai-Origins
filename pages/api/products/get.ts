import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../src/utils/firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore"; 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
            const productCollection = collection(db, 'products');
            const productSnapshot = await getDocs(productCollection);
            const productList = productSnapshot.docs.map((doc) => doc.data());
            res.status(200).json(productList);
        } catch (error) {
            res.status(500).json({ error });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }   
}