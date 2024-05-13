import { Router } from "express";
import { Resend } from "resend"; // Import CreateEmailOptions from resend
import config from "../config/config";
import WaitlistEmail from "../resend/welcome";
import { TODO } from "../types/custom";
import StripeWelcomeEmail from "../resend/w2";

const testRouter: Router = Router();

const resend = new Resend(config.resend.key);

// Example usage
const emailOptions: TODO = {
    from: "Zehan Khan <onboarding@resend.dev>",
    to: ["zehan9211@gmail.com"],
    subject: "Welcome",
    react: StripeWelcomeEmail()
};

testRouter.get("/send-email", async (req, res, next) => {
    try {
        const data = await resend.emails.send(emailOptions);
        res.status(200).json(data);
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export { testRouter as testRoute };