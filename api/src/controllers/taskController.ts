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
        res.json({ ERRO: "Erro na listagem!" });
        throw err
        return;
    }
}

export const deleteTasks = async (req: Request, res: Response) => {
    try {
        const _id: string = req.params.id;
        const tasks: any = await Task.deleteOne({_id});
        res.json({tasks});
    }
    catch (err: any) {
        res.json({ ERRO: "Erro na deleção!" });
        throw err
        return;
    }
}

export const updateTask = async (req: Request, res: Response) => {
    try {
        const _id: string = req.params.id;
        const tasks: any = await Task.updateOne({_id}, {content: "editado"});
        res.json({tasks});
    }
    catch (err: any) {
        res.json({ ERRO: "Erro na deleção!" });
        throw err
    }
}