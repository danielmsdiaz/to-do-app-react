import express, {Request, Response} from "express"
import dotenv from "dotenv"
import cors from "cors"
import path from 'path';

dotenv.config();
const server = express();
server.use(cors());

server.use(express.static(path.join(__dirname, "../public")));

server.get("/ping", (req: Request, res: Response) => {
    res.json({pong: true})
});

server.listen(process.env.PORT);