import { User } from "../models/auth.js";

export const signUp = async (req, res) => {
  try {
    const { firstName, lastName, aadharNo, employeeId, email, password } =
      req.body;
    const newUser = new User({
      firstName,
      lastName,
      aadharNo,
      employeeId,
      email,
    });
    const registerUser = await User.register(newUser, password);
    req.logIn(registerUser, async (err) => {
      if (err) err;
      res.status(201).json(registerUser);
    });
  } catch (error) {
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
