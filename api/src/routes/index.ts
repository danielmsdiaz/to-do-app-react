import { Router } from "express";
import * as TaskController from "../controllers/taskController";

const routes = Router();
routes.post("/task", TaskController.createATask);
routes.get("/task", TaskController.getTasks);
routes.delete("/task/:id", TaskController.deleteTasks);
routes.put("/task/:id", TaskController.updateTask);

export default routes;