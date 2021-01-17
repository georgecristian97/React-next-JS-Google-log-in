import express from "express";
import { currentUser } from "../controllers/auth";

const router = express.Router();

router.post("/:message", currentUser);

module.exports = router;//we have require in api
