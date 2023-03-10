import * as SC from './styles'
import Input from '../../components/Input'
import React, { useState } from 'react'
import Button from '../../components/Button'
import { postTask } from './utils'


const Home = () => {

    const [task, setTask] = useState<string>("");
    const [taskes, setTaskes] = useState<string[]>([]);
    const [editWord, setEditWord] = useState<string | undefined>(undefined);
    const [keyRegister, setKeyRegister] = useState<number | undefined>(undefined);

    const addRecord = () => {
        if (task !== "") {
            if (editWord) {
                let temp: string[] = taskes;
                let index = temp.indexOf(editWord);
                temp[index] = task;
                setTaskes(temp);
                setEditWord(undefined);
                postTask(task);
            }
            else {
                setTaskes(arr => {
                    return [...arr, task]
                });
            }

            return setTask("");
        }
        alert("Digite um valor!");
    }

    const removeRecord = (value: string) => {
        if (value == editWord) {
            return alert("Não é possivel remover um valor que está sendo editado!")
        }
        setTaskes(taskes.filter(item => item !== value));
    }

    const editRecord = (value: string, key: number) => {
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
                            {taskes && (
                                taskes.map((item, key) => {
                                    return <SC.record>
                                        <SC.recordText key={key}>
                                            {item}
                                        </SC.recordText>
                                        <SC.recordButtons>
                                            <Button onClick={() => removeRecord(item)}>-</Button>
                                            {key == keyRegister &&
                                                <Button onClick={() => editRecord(item, key)}>{editWord == undefined ? "Edit" : "X"}</Button>
                                            }
                                            {key !== keyRegister &&
                                                <Button onClick={() => editRecord(item, key)}>Edit</Button>
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