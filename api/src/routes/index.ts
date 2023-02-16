import { Router } from "express";
import * as taskController from "../controllers/taskController";

const router = Router();
router.get("/get_tasks", taskController.getTasks);
export default router;