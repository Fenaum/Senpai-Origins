import { NextApiRequest, NextApiResponse } from "next";
import productsData from "../../../_data/products.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Your logic here, for example, fetching data from an external API
    // For now, we'll just return the local productsData
    res.status(200).json(productsData);
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res
      .status(500)
      .json({ message: "An error occurred while processing your request." });
  }
}
