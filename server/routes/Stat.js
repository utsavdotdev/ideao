import { Router } from "express";
import { stat, topIdean } from "../controllers/_stat.js";
const router = Router();

router.route("/").get(stat);
router.route("/top").get(topIdean);

export default router;
