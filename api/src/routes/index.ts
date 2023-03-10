import { Router } from "express";
import * as TaskController from "../controllers/taskController";

const routes = Router();
routes.post("/task", TaskController.createATask);
routes.get("/task", TaskController.getTasks);

export default routes;