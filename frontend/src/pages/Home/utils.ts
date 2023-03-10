import axios from "axios";
import dotenv from "dotenv"

dotenv.config();

export const postTask = async (task: string) => {
    try {
        const resposta = await axios.post(${}, {
          task
        });
      } catch (erro: any) {
        throw new erro;
      }
}