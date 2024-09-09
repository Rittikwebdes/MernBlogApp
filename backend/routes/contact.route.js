import express from "express";
import { getContacts } from "../controller/contact.controller.js";
const router = express.Router();

router.post("/message", getContacts)
export default router;