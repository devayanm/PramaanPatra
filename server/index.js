import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import { User } from "./models/auth.js";
import authRoute from "./routes/signUp.js";
import certificateRoute from "./routes/createCertificate.js";

mongoose
  .connect("mongodb://127.0.0.1:27017/sih")
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;
const session_config = {
  secret: process.env.SESSIONSECRET,
  resave: true,
  saveUninitialized: true,
  name: "session",
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(session_config));
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/auth", authRoute);
app.use("/", certificateRoute);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
