import {Model, DataTypes} from "sequelize";
import {sequelize} from "../instances/pg";

//criando uma interface para definir como será a entidade usuario, para poder extender de Model (ficar no formato aceito pelo sequelize)
export interface TaskIntance extends Model{
    id: number;
    content: string;
}

// definindo o modelo para ser persistido no banco
export const Task = sequelize.define<TaskIntance>('Task', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    content: {
        type: DataTypes.STRING
    }

}, {
    tableName: "tasks",
    timestamps: false
});