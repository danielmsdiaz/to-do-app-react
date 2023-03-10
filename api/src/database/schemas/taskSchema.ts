import { Schema } from "mongoose";
import { TaskType } from "../../types/taskType";

export const TaskSchema = new Schema<TaskType>({
    content: {type: String, required: true}
});