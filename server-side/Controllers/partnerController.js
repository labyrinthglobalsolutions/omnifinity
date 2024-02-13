import Partner from "../Models/partnerModel.js";
import CatchAsyncError from "../middleware/catchasync.js";
import fs from "fs";

// Add Partner
export const addPartner = CatchAsyncError(async (req, res) => {
  const imagePath = req.file.filename;
  const partner = new Partner({
    partner: {
      image: imagePath,
    },
  });
  await partner.save();
  res.status(201).json({
    success: true,
    message: "Partner added successfully",
    partner,
  });
});

// Get Partner by ID
export const getPartner = CatchAsyncError(async (req, res) => {
  const partners = await Partner.find();
  if (!partners) {
    return res.status(404).json({
      success: false,
      message: "Partner not found",
    });
  }
  res.status(200).json({
    success: true,
    partners,
  });
});

// Update Partner by ID
export const updatePartner = CatchAsyncError(async (req, res) => {
  const { id } = req.params;
  const newImage = req.file;
  const updatedFields = {};

  const partnerToUpdate = await Partner.findById(id);

  if (!partnerToUpdate) {
    return res.status(404).json({
      success: false,
      message: "Partner not found",
    });
  }

  // Delete old image before updating with the new one
  // Delete old image before updating with the new one
  if (newImage && partnerToUpdate.partner.image) {
    const oldImagePath = `uploads/partners/${partnerToUpdate.partner.image}`;
    try {
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
        console.log("Old image deleted successfully");
      } else {
        console.log("Old image not found");
      }
    } catch (err) {
      console.error("Error deleting old image:", err);
    }
  }

  if (newImage) {
    const filename = newImage.filename;
    updatedFields["partner.image"] = filename;
  }

  const updatedPartner = await Partner.findByIdAndUpdate(
    id,
    { $set: updatedFields },
    { new: true }
  );

  res.status(200).json({
    success: true,
    message: "Partner updated successfully",
    partner: updatedPartner,
  });
});

// Delete Partner by ID
export const deletePartner = CatchAsyncError(async (req, res) => {
  const { id } = req.params;
  const partnerToDelete = await Partner.findById(id);

  if (!partnerToDelete) {
    return res.status(404).json({
      success: false,
      message: "Partner not found",
    });
  }

  // Delete associated image file
  if (partnerToDelete.partner.image) {
    const imagePath = `uploads/partners/${partnerToDelete.partner.image}`;
    try {
      fs.unlinkSync(imagePath);
      console.log("Image deleted successfully");
    } catch (err) {
      console.error("Error deleting image:", err);
    }
  }

  await Partner.findByIdAndDelete(id);

  res.status(200).json({
    success: true,
    message: "Partner deleted successfully",
  });
});
