import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const { Schema } = mongoose;

const authSchema = new Schema({
  firstName: String,
  lastName: String,
  aadharNo: String,
  employeeId: String,
  email: String,
  password: String,
});

authSchema.plugin(passportLocalMongoose, { usernameField: "email" });
export const User = mongoose.model("User", authSchema);
