import { Router } from "express";
import { eventController } from "../controllers/index.js";

const router = Router();

router.get('allEvents', eventController.allEvents)

// router.use(isAdmin);
router.post('addEvent', eventController.addEvent)

export const eventRouter = router;