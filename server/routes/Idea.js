import express ,{Router} from "express";
import { getAllIdea, getMyIdea, postIdea } from "../controllers/_idea.js";

const router = Router();

router.route("/").get(getAllIdea);
router.route("/:user_id",getMyIdea)
router.route("/").post(postIdea)

export default router;