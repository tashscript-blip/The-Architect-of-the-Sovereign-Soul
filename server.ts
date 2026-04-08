import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();

let stripeClient: Stripe | null = null;

function getStripe(): Stripe {
  if (!stripeClient) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error("STRIPE_SECRET_KEY environment variable is required for payments.");
    }
    stripeClient = new Stripe(key);
  }
  return stripeClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Stripe Payment Intent
  app.post("/api/create-payment-intent", async (req, res) => {
    const { amount, currency = "usd" } = req.body;

    if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
    }

    try {
      const stripe = getStripe();
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
        automatic_payment_methods: { enabled: true },
        metadata: {
          integration_check: "lgc_llc_ciaas",
        },
      });

      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.error("Stripe error:", error);
      res.status(500).json({ error: "Failed to create payment intent." });
    }
  });

  // API Route for Engagement Intake
  app.post("/api/engage", async (req, res) => {
    const { entityName, entityType, objective } = req.body;

    if (!entityName || !entityType || !objective) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // Configure transporter
      // Note: User needs to provide SMTP_USER and SMTP_PASS in environment variables
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER,
        to: "LEGACYGROVECODEXLLC@GMAIL.COM",
        subject: `Engagement Intake: ${entityName} (${entityType})`,
        text: `
          New Engagement Intake Protocol Initiated:
          
          Entity Name: ${entityName}
          Entity Type: ${entityType}
          
          Primary Objective:
          ${objective}
          
          ---
          LGC LLC | Architect of CIaaS
        `,
      };

      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Protocol initiated. Mail dispatched." });
      } else {
        console.warn("SMTP credentials missing. Logging intake to console instead.");
        console.log("Intake Data:", { entityName, entityType, objective });
        res.json({ 
          success: true, 
          message: "Protocol recorded (Simulation Mode: SMTP credentials missing).",
          data: { entityName, entityType, objective }
        });
      }
    } catch (error) {
      console.error("Mail dispatch error:", error);
      res.status(500).json({ error: "Failed to dispatch mail protocol." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
