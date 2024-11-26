import { User } from "../models/auth.js";
import { sendMail } from "../utils/sendEmail.js";
import { Token } from "../models/token.js";
import crypto from "crypto";

export const signUp = async (req, res) => {
  try {
    const { firstName, lastName, aadharNo, employeeId, email, password } = req.body;
    const newUser = new User({
      firstName,
      lastName,
      aadharNo,
      employeeId,
      email,
    });
    const registerUser = await User.register(newUser, password);
    req.logIn(registerUser, async (err) => {
      if (err) return res.status(500).json({ message: "Login error after registration!" });
      const token = new Token({
        userId: registerUser._id,
        token: crypto.randomBytes(32).toString("hex"),
      });
      console.log(token);
      await token.save();

      const url = `${process.env.FRONTEND_URL}/auth/${registerUser._id}/verify/${token.token}`;
      await sendMail(email, "Email Verification", url);
      res.status(201).json(registerUser);
    });
  } catch (error) {
    console.error("Sign-up error:", error); 
    res.status(500).json({ message: "Something went wrong!" });
  }
};

export const signIn = async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const token = await Token.findOne({
      userId: req.params.id,
      token: req.params.token,
    });
    if (user && token) {
      res.status(200).json({ message: "Verification Done!" });
    } else {
      res.status(404).send({ message: "Invalid link" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
  }
};
