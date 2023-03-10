import {model, connection, Model } from "mongoose";
import { TaskSchema } from "../database/schemas/taskSchema";
import { TaskType } from "../types/taskType";

const modelName: string = "Task";
export default (connection && connection.models[modelName]) ? connection.models[modelName] as Model<TaskType> : model<TaskType>(modelName, TaskSchema);

