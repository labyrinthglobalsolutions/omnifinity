import express from "express";
import multer from "multer";
import path from "path";
import { addBanner, deleteBanner, getBanners, updateBanner } from "../Controllers/bannerController.js";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads/banners");
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
  
      cb(
        null,
        file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
      );
    },
  });
  const upload = multer({ storage });

  const BannerRouter = express.Router();
  BannerRouter.post("/addbanner", upload.single("image"),addBanner);
  BannerRouter.get("/getbanner", getBanners);
  BannerRouter.put("/update-banner/:id", upload.single("image"), updateBanner);
  BannerRouter.delete("/delete-banner/:id", deleteBanner);

  export default BannerRouter;