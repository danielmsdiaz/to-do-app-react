import { Request, Response } from "express";

export const createTask = (req: Request, res: Response) => {
    res.json({created:true});
}

export const getTasks = (req: Request, res: Response) => {
    res.json({array:true});
}