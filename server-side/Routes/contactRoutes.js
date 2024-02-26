import express from "express";
import { contactUs } from "../Controllers/contactController.js";

const ContactRouter = express.Router();

ContactRouter.post("/contact-us", contactUs);

export default ContactRouter;