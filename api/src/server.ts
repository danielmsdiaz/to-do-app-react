import express, {Request, Response} from "express"
import dotenv from "dotenv"
import cors from "cors"
import path from 'path';
import { mongoConnect } from "./database/mongo";
import routes from "./routes";

dotenv.config();

mongoConnect(process.env.MONGO_URL as string);

const server = express();
server.use(cors());
server.use(express.urlencoded({extended: true}));
server.use(express.json());
server.use(routes);
server.use(express.static(path.join(__dirname, "../public")));
server.listen(process.env.PORT);