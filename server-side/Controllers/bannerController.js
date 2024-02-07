import Banner from "../Models/bannerModel.js";
import CatchAsyncError from "../middleware/catchasync.js";

// Add banners
// export const addBanners = CatchAsyncError(async (req, res) => {
//     const { banners } = req.body;
//     console.log(req.body)
//     const uploadedImage = req.file; // Access the uploaded image from req.file

//     try {
//         // Assuming you want to store the image filename in the 'image' field
//         banners.forEach(banner => {
//             banner.image = uploadedImage.filename;
//         });

//         const newBanner = await Banner.create({ banners });
//         res.status(201).json(newBanner);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

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
    res.status(500).json({ error: "Internal Server Error" });
  }
});

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
//   const { id } = req.params;
//   const { title, description } = req.body; // assuming 'title' and 'description' are part of your form data
//   const image = req.file;

//   try {
//     const updatedFields = {
//       "banner.title": title,
//       "banner.description": description,
//     };
//     if (image) {
//       const filename = image.filename;
//       updatedFields["banner.image"] = filename;
//     }
//     const updatedBanner = await Banner.findByIdAndUpdate(
//       id,
//       { $set: updatedFields }, // use $set to update only specified fields
//       { new: true }
//     );
//     if (!updatedBanner) {
//       return res.status(404).json({ error: "Banner not found" });
//     }

//     res.status(200).json(updatedBanner);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });
export const updateBanner = CatchAsyncError(async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const image = req.file;

    try {
        const updatedFields = { 'banner.title': title, 'banner.description': description };
        if (image) {
            const filename = image.filename;
            updatedFields['banner.image'] = filename;
        }

        const updatedBanner = await Banner.findByIdAndUpdate(
            id,
            { $set: updatedFields },
            { new: true }
        );

        if (!updatedBanner) {
            return res.status(404).json({
                success: false,
                message: 'Banner not found',
            });
        }

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
export const deleteBanner = CatchAsyncError(async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBanner = await Banner.findByIdAndDelete(id);

    if (!deletedBanner) {
      return res.status(404).json({ error: "Banner not found" });
    }

    res.status(200).json(deletedBanner);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
