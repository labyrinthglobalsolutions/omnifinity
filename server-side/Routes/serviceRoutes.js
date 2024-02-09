
import express from "express";
import multer from "multer";
import path from "path";
import { addService, deleteService, getServices, updateService } from "../Controllers/serviceController.js";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads/services");
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

  const ServiceRouter = express.Router();
  ServiceRouter.post("/addservice", upload.single("image"),addService);
  ServiceRouter.get("/getservice", getServices);
  ServiceRouter.put("/update-service/:id", upload.single("image"), updateService);
  ServiceRouter.delete("/delete-service/:id", deleteService);

  export default ServiceRouter;