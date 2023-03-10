import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const mongoConnect = async (url: string) => {
    try {
        console.log("Conectando ao MongoDB...");
        
        await mongoose.connect(url,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            } as ConnectOptions);

        console.log("Conectado com sucesso!");
    }
    catch (err) {
        console.log("ERRO", err);
    }
}