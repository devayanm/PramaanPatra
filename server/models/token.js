import mongoose from "mongoose";
const { Schema } = mongoose;

const tokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  token: String,
  createdAt: {
    type: Date,
    default: Date.now(),
    // expires: "10m",
  },
});

export const Token = mongoose.model("Token", tokenSchema);
