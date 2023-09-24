import express from "express";
import { signIn, signUp } from "../controllers/signUp.js";
import passport from "passport";
import { verifyEmail } from "../controllers/signUp.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", passport.authenticate("local"), signIn);
router.get("/:id/verify/:token", verifyEmail);

export default router;
