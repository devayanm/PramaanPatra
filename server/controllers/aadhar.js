import { Aadhar } from "../models/aadhar.js";

export const verifyAadhar = async (req, res) => {
  try {
    const findUser = await Aadhar.findOne({ aadhar_no: req.body.aadhar_no });
    res.status(200).json(findUser);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};
