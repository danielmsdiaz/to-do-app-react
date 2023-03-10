import { Request, Response } from "express";
import Task from "../models/Task";
import { TaskType } from "../types/taskType";

export const createATask = async (req: Request, res: Response) => {
    try {
        const task: TaskType = { content: "teste4" };
        const result = await Task.create(task);

        res.json({ id: `${result._id}` });
    }
    catch (err: any) {
        res.json({ ERRO: "Erro na criação!" });
        throw err
        return;
    }
}

export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks: TaskType[] = await Task.find({});
        res.json({tasks});
    }
    catch (err: any) {
        res.json({ ERRO: "Erro na criação!" });
        throw err
        return;
    }
}