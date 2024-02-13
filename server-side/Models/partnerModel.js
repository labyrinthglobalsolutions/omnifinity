import mongoose from "mongoose";

const partnerSchema = new mongoose.Schema({
   partner:{
     image: {
        type: String,
        required: true,
    }
},
})
const Partner = mongoose.model('Partner', partnerSchema);
export default Partner;