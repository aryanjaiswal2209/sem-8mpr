import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
  aadharNumber: {
    type: String,
    required: true,
  },
  panNumber: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },  
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
});

export default mongoose.model("Form", FormSchema)