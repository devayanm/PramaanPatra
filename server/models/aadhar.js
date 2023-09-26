import mongoose from "mongoose";
const { Schema } = mongoose;

const aadharSchema = new Schema({
  name: String,
  aadhar_no: String,
});

export const Aadhar = mongoose.model("Aadhar", aadharSchema);
