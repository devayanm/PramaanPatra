import express from "express";
import {
  createCertificate,
  getCertificate,
} from "../controllers/createCertificate.js";

const router = express.Router();

router.post("/create-certificate", createCertificate);
router.get("/get-certificate", getCertificate);

export default router;
