
import express from "express";
import multer from "multer";
import path from "path";
import { addPartner, deletePartner, getPartner, updatePartner } from "../Controllers/partnerController.js";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads/partners");
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

  const partnerRouter = express.Router();
 
partnerRouter.post("/addpartner", upload.single("image"),addPartner);
partnerRouter.get("/getpartner", getPartner);
partnerRouter.put("/updatepartner/:id", upload.single("image"),updatePartner);
partnerRouter.delete("/deletepartner/:id", deletePartner);
  export default partnerRouter;