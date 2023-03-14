import * as SC from './styles'
import Input from '../../components/Input'
import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import { deleteTask, editTask, getTasks, postTask } from './utils'


const Home = () => {

    const [task, setTask] = useState<string>("");
    const [tasks, setTasks] = useState<{ _id: string, content: string }[]>([]);

    const [editWord, setEditWord] = useState<string | undefined>(undefined);
    const [keyRegister, setKeyRegister] = useState<string | undefined>(undefined);

    useEffect(() => {
        getTasks((arr: any) => {
            setTasks(arr);
        });
    });

    const addRecord = () => {
        if (task !== "") {
            if (editWord) {
                editTask({_id: keyRegister, content: task});
                setEditWord(undefined);
            }
            else {
                postTask(task);
            }

            return setTask("");
        }
        alert("Digite um valor!");
    }

    const removeRecord = (task: { _id: string, content: string }) => {
        if (task.content == editWord) {
            return alert("Não é possivel remover um valor que está sendo editado!")
        }
        deleteTask(task);
    }

    const editRecord = (value: string, key: string) => {
        if (!editWord) {
            setTask(value);
            setEditWord(value);
            setKeyRegister(key)
        }
        else {
            if (keyRegister == key) {
                setEditWord(undefined);
                setTask("");
            }
            else {
                setTask(value);
                setEditWord(value);
                setKeyRegister(key)
            }
        }
    }

    return (
        <>
            <SC.Container>
                <SC.Label>
                    TO DO LIST
                </SC.Label>
                <SC.Content>
                    <SC.upperPart>
                        <Input type="text" placeholder="Digite uma tarefa!" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setTask(e.target.value) }} value={task} />
                        <Button onClick={addRecord}>+</Button>
                    </SC.upperPart>
                    <SC.lowerPart>
                        <SC.recordsArea>
                            {tasks && (
                                tasks.map((item) => {
                                    return <SC.record>
                                        <SC.recordText>
                                            {item.content}
                                        </SC.recordText>
                                        <SC.recordButtons>
                                            <Button onClick={() => removeRecord(item)}>-</Button>
                                            {item._id == keyRegister &&
                                                <Button onClick={() => editRecord(item.content, item._id)}>{editWord == undefined ? "Edit" : "X"}</Button>
                                            }
                                            {item._id !== keyRegister &&
                                                <Button onClick={() => editRecord(item.content, item._id)}>Edit</Button>
                                            }
                                        </SC.recordButtons>
                                    </SC.record>
                                })
                            )}
                        </SC.recordsArea>
                    </SC.lowerPart>
                </SC.Content>
            </SC.Container>
        </>
    )
}

export default Home