import express from "express";
import { verifyAadhar } from "../controllers/aadhar.js";

const router = express.Router();

router.post("/aadhar", verifyAadhar);

export default router;
