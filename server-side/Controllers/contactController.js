import nodemailer from "nodemailer";
import CatchAsyncError from "../middleware/catchasync.js";
import ContactModel from "../Models/contactModel.js";
import dotenv from "dotenv";
//config
dotenv.config();

//contact us
export const contactUs = CatchAsyncError(async (req, res, next) => {
  try {
    const { firstName, lastName, email, phoneNo, company, country, message } =
      req.body;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !message ||
      !phoneNo ||
      !company ||
      !country
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new ContactModel({
      firstName,
      lastName,
      email,
      phoneNo,
      company,
      country,
      message,
    });

    await newContact.save();

    // Send an email to the user
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Contact Omnifinity",
      text: `Thank you for contacting us. We will get back to you soon.`,
    };

    transporter.sendMail(userMailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email to user:", error);
        // Continue to respond to the client even if there is an error with email sending
        res.json({ success: true });
      } else {
        console.log("Email sent to user:", info.response);
        // Send a response message
        res.json({ success: true });

        // Now, send an email to the admin with user details
        const adminMailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.ADMIN_EMAIL,
          subject: "New Contact Enquiry",
          text: `A new user has contacted with the following details:
          \n\nFirstName: ${firstName}\nLastName: ${lastName}\nEmail:
           ${email}\nMessage: ${message}\nPhoneNo: ${phoneNo}\nCompany: ${company}\nCountry: ${country}`,
        };

        transporter.sendMail(adminMailOptions, (error, info) => {
          if (error) {
            console.error("Error sending email to admin:", error);
          } else {
            console.log("Email sent to admin:", info.response);
          }
        });
      }
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send("Internal Server Error");
    // Pass the error to the error handling middleware
    next(error);
  }
});
