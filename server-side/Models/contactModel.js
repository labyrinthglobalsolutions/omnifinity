import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: String,
        required: true,
    },
    company: {
        type: String,
    },
    country: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;