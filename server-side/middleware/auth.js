import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import  AdminModel  from "../Models/adminModel.js";

dotenv.config();

export const protectAdminRoute = async (req, res, next) => {
    try {
      let token;
      // console.log("admin  route called");
      if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
      ) {
        // console.log(req.headers);
        token = req.headers.authorization.split(" ")[1]; // Extract token from the header
      }
      // console.log(token);
      if (!token) {
        return res.status(401).json({ message: "Authorization denied" });
      }
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // console.log(decoded);
      // Find Super Admin by ID from the decoded token
  const Admin = await AdminModel.findById(decoded.user.id);
      // console.log(Admin);
      if (!Admin || Admin.role !== "Admin") {
        return res.status(403).json({ message: "Unauthorized access" });
      }
      req.Admin = Admin;
  
      next(); // Move to the protected route if authentication is successful
    } catch (error) {
      res.status(401).json({ message: "Token is not valid" });
    }
  };