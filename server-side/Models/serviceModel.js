import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  service: {
    title: {
      type: String,
      required: true,
    },
    slogan: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
   image: {
     type: String,
     required: true,
   }

  },
});

const Service = mongoose.model('Service', serviceSchema);
export default Service;
