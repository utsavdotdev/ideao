import {Router} from "express";
import {postUser,getAlluser, getUser} from "../controllers/_user.js";

const router = Router();

router.route("/").get(getAlluser);
router.route("/").post(postUser)
router.route("/:token").get(getUser)

export default router;