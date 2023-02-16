import express, {Request, Response} from "express"
import dotenv from "dotenv"
import cors from "cors"
import path from 'path';
import router from "./routes";

dotenv.config();

const server = express();

server.use(cors());

server.use(express.urlencoded({extended: true}));
server.use(express.json());

server.use(express.static(path.join(__dirname, "../public")));
server.use("/api", router);

server.listen(process.env.PORT);