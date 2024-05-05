// pages/api/stripe-webhook.ts
import { buffer } from "micro";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"]!;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        buf.toString(),
        sig,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      // Here, you can update your inventory based on the session details
      // This might involve reading the line items from the session
      // and updating your inventory accordingly
    }

    // Return a response to acknowledge receipt of the event
    res.json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
