import express from "express";
import multer from "multer";
import path from "path";
import { protectAdminRoute } from "../middleware/auth.js";
import { AdminLogin, AdminRegistration, AdminVerifyEmail, requestPasswordReset, resetPassword, updateAdminProfile } from "../Controllers/adminController.js";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/adminpics");
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

const AdminRouter = express.Router();

AdminRouter.post("/adminsignup", AdminRegistration);
AdminRouter.post("/adminverify", AdminVerifyEmail);
AdminRouter.post("/adminlogin", AdminLogin);



AdminRouter.post("/admin-forget-password", requestPasswordReset);
AdminRouter.post("/reset-password", resetPassword);
AdminRouter.put(
  "/admin/profile/:id",
  protectAdminRoute,
  upload.single("profilePicture"),
  updateAdminProfile
);


export default AdminRouter;

