import express from "express";
import { protectAdminRoute } from "../middleware/auth.js";
import {
  AdminLogin,
  AdminRegistration,
  AdminVerifyEmail,
  requestPasswordReset,
  resetPassword,
  updateAdminProfile,
} from "../Controllers/adminController.js";

const AdminRouter = express.Router();

AdminRouter.post("/adminsignup", AdminRegistration);
AdminRouter.post("/adminverify", AdminVerifyEmail);
AdminRouter.post("/adminlogin", AdminLogin);

AdminRouter.post("/admin-forget-password", requestPasswordReset);
AdminRouter.post("/reset-password", resetPassword);
// AdminRouter.put(
//   "/admin/profile/:id",
//   protectAdminRoute,
//   upload.single("profilePicture"),
//   updateAdminProfile
// );

export default AdminRouter;
