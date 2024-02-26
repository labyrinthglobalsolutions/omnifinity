import express from "express";
import dotenv from "dotenv";
const app = express();

import cors from "cors";
import addWwwToUrl from "./utils/urls.js";
import connectDB from "./Database/db.js";
import AdminRouter from "./Routes/adminRoutes.js";
import BannerRouter from "./Routes/bannerRoutes.js";
import ServiceRouter from "./Routes/serviceRoutes.js";
import partnerRouter from "./Routes/partnerRoutes.js";
import ContactRouter from "./Routes/contactRoutes.js";

//config
dotenv.config();
const port = process.env.PORT || 4800;
const frontendURL = process.env.FRONT_END_URL;
const allowedOrigins = [frontendURL, addWwwToUrl(frontendURL)];
// Use middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log("setting cors origins to: " + allowedOrigins);
connectDB();
// Serve static files (images) from the 'uploads/banners' directory
app.use('/uploads/banners', express.static('uploads/banners'));

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(
  "/api/v1",
  AdminRouter,
BannerRouter,
ServiceRouter,
partnerRouter,
ContactRouter
);
// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, this is your Node.js server!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});