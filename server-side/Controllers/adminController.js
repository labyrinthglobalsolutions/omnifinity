import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import CatchAsyncError from "../middleware/catchasync.js";
import AdminModel from "../Models/adminModel.js";


function sendVerificationEmail(email, code) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Account Verification",
    text: `Your verification code is: ${code}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email sending error:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}
function sendResetPasswordEmail(email, resetToken) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // const resetLink = `http://localhost:3009/reset-password/${resetToken}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Password Reset",
    text: `To reset your password, click on the following link: ${resetToken}`,
    html: `<p>To reset your password, this is your reset token:${resetToken}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email sending error:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

// Route for super admin registration
export const AdminRegistration = CatchAsyncError(async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await AdminModel.findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser) {
      return res.status(500).json({ message: "User already exists" });
    }

    const verificationCode = crypto.randomBytes(3).toString("hex");
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new AdminModel({
      username,
      email,
      password: hashedPassword,
      verificationCode,
    });
    await user.save();
    sendVerificationEmail(email, verificationCode);
    res.status(201).json({
      message: "Registration successfull. Check your email for verification.",
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Failed to register user" });
  }
});

// Route for email verification
export const AdminVerifyEmail = CatchAsyncError(async (req, res) => {
  try {
    const { email, verificationCode } = req.body;

    const user = await AdminModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.verificationCode === verificationCode) {
      user.isVerified = true;
      await user.save();
      return res.status(200).json({ message: "Email verification successful" });
    } else {
      return res.status(401).json({ message: "Incorrect verification code" });
    }
  } catch (error) {
    console.error("Verification error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Route for super-admin login

export const AdminLogin = CatchAsyncError(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await AdminModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.isVerified) {
      return res.status(400).json({
        message: "User not verified. Check your email for verification.",
      });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    // Create a JWT token with user payload
    const payload = {
      user: {
        id: user.id,
        email: user.email,
        // Add any other relevant user data to the token payload
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
      (err, token) => {
        if (err) {
          throw err;
        }

        res.status(200).json({ message: "Login successful", token });
      }
    );
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Generate and store reset token for the SuperAdmin
export const requestPasswordReset = CatchAsyncError(async (req, res) => {
  try {
    const { email } = req.body;
    const user = await AdminModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate and save a reset token for the user
    const resetToken = uuidv4(); // Generate a unique token
    user.resetPasswordToken = resetToken; // Save the token in the user document
    user.resetPasswordExpires = Date.now() + 3600000; // Token expiration time (e.g., 1 hour)
    await user.save();

    // Send the reset link to the user's email using nodemailer
    sendResetPasswordEmail(email, resetToken);
    res.status(200).json({
      message: "Password reset link sent to your email",
      resetToken,
    });
  } catch (error) {
    console.error("Password reset request error:", error);
    res.status(500).json({ error: "Failed to initiate password reset" });
  }
});

// Reset password using the reset token
export const resetPassword = CatchAsyncError(async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    const user = await AdminModel.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }, // Check if the token is not expired
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    // Update the user's password and remove/reset the resetToken and expiry fields
    user.password = await bcrypt.hash(newPassword, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({
      message: "Password reset successful",
    });
  } catch (error) {
    console.error("Password reset error:", error);
    res.status(500).json({ error: "Failed to reset password" });
  }
});

//update profile of super admin
export const updateAdminProfile = CatchAsyncError(async (req, res) => {
  try {
    const { id } = req.params;
    const { name, currentPassword, newPassword } = req.body;

    const superAdmin = await AdminModel.findById(id);

    if (!superAdmin) {
      return res.status(404).json({ error: "SuperAdmin not found" });
    }
    // Update name if provided
    if (name) {
      superAdmin.username = name;
    }

    // Update password if provided
    if (currentPassword && newPassword) {
      const isMatch = await bcrypt.compare(
        currentPassword,
        superAdmin.password
      );
      if (!isMatch) {
        return res.status(400).json({ error: "Current password is incorrect" });
      }
      superAdmin.password = await bcrypt.hash(newPassword, 10);
    }

    // Update profile picture if uploaded
    if (req.file) {
      superAdmin.profilePicture = req.file.path; // Save the file path in the database
    }

    await superAdmin.save();

    res.json({ message: "SuperAdmin profile updated successfully" });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ error: "Failed to update SuperAdmin profile" });
  }
});
