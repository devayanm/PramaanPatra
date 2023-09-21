import express from "express";
import { signIn, signUp } from "../controllers/signUp.js";
import passport from "passport";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", passport.authenticate("local"), signIn);

export default router;
