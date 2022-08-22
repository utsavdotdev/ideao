import express, { Router } from "express";
import {
  deleteIdea,
  getAllIdea,
  getMyIdea,
  postIdea,
  searchIdea,
} from "../controllers/_idea.js";

const router = Router();

router.route("/").get(getAllIdea);
router.route("/:user_id").get(getMyIdea);
router.route("/:idea_id").delete(deleteIdea);
router.route("/search/:srh").get(searchIdea);
router.route("/").post(postIdea);

export default router;
