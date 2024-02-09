import fs from 'fs';
import Service from '../Models/serviceModel.js';
import CatchAsyncError from "../middleware/catchasync.js";

export const addService = CatchAsyncError(async (req, res) => {
  try {
    const { title,slogan, description } = req.body;
    const imagePath = req.file.filename;

    const newService = await Service.create({
      service: {
        title,
        slogan,
        description,
        image: imagePath,
      },
    });

    res.status(201).json(newService);
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

export const updateService = CatchAsyncError(async (req, res) => {
  const { id } = req.params;
  const { title,slogan, description } = req.body;
  const newImage = req.file;

  try {
    const serviceToUpdate = await Service.findById(id);

    if (!serviceToUpdate) {
      return res.status(404).json({
        success: false,
        message: 'Service not found',
      });
    }

    // Delete old image before updating with the new one
    if (newImage && serviceToUpdate.service.image) {
      const oldImagePath = `uploads/services/${serviceToUpdate.service.image}`;
      try {
        fs.unlinkSync(oldImagePath);
      } catch (err) {
        console.error('Error deleting old image:', err);
      }
    }

const updatedFields = { 'service.title': title,'service.slogan': slogan, 'service.description': description };
    if (newImage) {
      const filename = newImage.filename;
      updatedFields['service.image'] = filename;
    }

    const updatedService = await Service.findByIdAndUpdate(
      id,
      { $set: updatedFields },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: 'Service updated successfully',
      service: updatedService,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
});

export const deleteService = CatchAsyncError(async (req, res) => {
  const { id } = req.params;

  try {
    const serviceToDelete = await Service.findById(id);

    if (!serviceToDelete) {
      return res.status(404).json({ error: "Service not found" });
    }

    // Delete associated image before deleting the service
    if (serviceToDelete.service.image) {
      const imagePath = `uploads/services/${serviceToDelete.service.image}`;
      try {
        fs.unlinkSync(imagePath);
      } catch (err) {
        console.error('Error deleting image:', err);
      }
    }

    const deletedService = await Service.findByIdAndDelete(id);

    res.status(200).json(deletedService);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
export const getServices = CatchAsyncError(async (req, res) => {
    try{
        const services = await Service.find();
        res.status(200).json(services);
    }
    catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})
