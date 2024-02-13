import Banner from "../Models/bannerModel.js";
import CatchAsyncError from "../middleware/catchasync.js";


import fs from 'fs';

export const addBanner = CatchAsyncError(async (req, res) => {
  try {
    const { title, description } = req.body;
    const imagePath = req.file.filename;

    const newBanner = await Banner.create({
      banner: {
        title,
        description,
        image: imagePath,
      },
    });

    res.status(201).json(newBanner);
  } catch (error) {
    console.error(error);

    // If an error occurs, delete the uploaded image
    if (req.file) {
      const imagePath = req.file.path;
      fs.unlinkSync(imagePath);
    }

    res.status(500).json({ error: "Internal Server Error" });
  }
});


// export const addBanner = CatchAsyncError(async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     const imagePath = req.file.filename;

//     const newBanner = await Banner.create({
//       banner: {
//         title,
//         description,
//         image: imagePath,
//       },
//     });

//     res.status(201).json(newBanner);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// Get all banners
export const getBanners = CatchAsyncError(async (req, res) => {
  try {
    const banners = await Banner.find();
    if (!banners) {
      return res.status(404).json({ error: "Banner not found" });
    }
    res.status(200).json(banners);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update banner

// export const updateBanner = CatchAsyncError(async (req, res) => {
//     const { id } = req.params;
//     const { title, description } = req.body;
//     const image = req.file;

//     try {
//         const updatedFields = { 'banner.title': title, 'banner.description': description };
//         if (image) {
//             const filename = image.filename;
//             updatedFields['banner.image'] = filename;
//         }

//         const updatedBanner = await Banner.findByIdAndUpdate(
//             id,
//             { $set: updatedFields },
//             { new: true }
//         );

//         if (!updatedBanner) {
//             return res.status(404).json({
//                 success: false,
//                 message: 'Banner not found',
//             });
//         }

//         res.status(200).json({
//             success: true,
//             message: 'Banner updated successfully',
//             banner: updatedBanner,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             success: false,
//             message: 'Internal Server Error',
//         });
//     }
// });
export const updateBanner = CatchAsyncError(async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const newImage = req.file;

  try {
    const bannerToUpdate = await Banner.findById(id);

    if (!bannerToUpdate) {
      return res.status(404).json({
        success: false,
        message: 'Banner not found',
      });
    }

    // Delete old image before updating with the new one
    if (newImage && bannerToUpdate.banner.image) {
      const oldImagePath = `uploads/banners/${bannerToUpdate.banner.image}`;
      try {
        fs.unlinkSync(oldImagePath);
      } catch (err) {
        console.error('Error deleting old image:', err);
      }
    }

    const updatedFields = {  };
    if (newImage) {
      const filename = newImage.filename;
      updatedFields['banner.image'] = filename;
    }

    const updatedBanner = await Banner.findByIdAndUpdate(
      id,
      { $set: updatedFields },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: 'Banner updated successfully',
      banner: updatedBanner,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
});
// Delete banner
// export const deleteBanner = CatchAsyncError(async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deletedBanner = await Banner.findByIdAndDelete(id);

//     if (!deletedBanner) {
//       return res.status(404).json({ error: "Banner not found" });
//     }

//     res.status(200).json(deletedBanner);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });
export const deleteBanner = CatchAsyncError(async (req, res) => {
  const { id } = req.params;

  try {
    const bannerToDelete = await Banner.findById(id);

    if (!bannerToDelete) {
      return res.status(404).json({ error: "Banner not found" });
    }

    // Delete associated image before deleting the banner
    if (bannerToDelete.banner.image) {
      const imagePath = `uploads/banners/${bannerToDelete.banner.image}`;
      try {
        fs.unlinkSync(imagePath);
      } catch (err) {
        console.error('Error deleting image:', err);
      }
    }

    const deletedBanner = await Banner.findByIdAndDelete(id);

    res.status(200).json(deletedBanner);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});