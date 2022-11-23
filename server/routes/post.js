import { Router } from "express";
import { postController } from "../controllers/index.js";

const router = Router();

router.get('allPosts', postController.allPosts)

// router.use(isAdmin);
router.post('addPost', postController.addPost)

export const postRouter = router;