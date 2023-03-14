import axios, { AxiosResponse } from "axios";

export const postTask = async (task: string) => {
  try {
    const resposta = await axios.post(import.meta.env.VITE_REACT_BASE_URL as string, {
      content: task
    });

  } catch (erro: any) {
    throw erro;
  }
}

export const editTask = async (task: any) => {
  try {
    const resposta = await axios.put(`${import.meta.env.VITE_REACT_BASE_URL as string}/${task._id}`, {
      content: task.content
    });

  } catch (erro: any) {
    throw erro;
  }
}

export const deleteTask = async (task: any) => {
  try {
    const resposta = await axios.delete(`${import.meta.env.VITE_REACT_BASE_URL as string}/${task._id}`);
  } catch (erro: any) {
    throw erro;
  }
}

export const getTasks = async (cb: (response: AxiosResponse) => void) => {
  try {
    const resposta = await axios.get(import.meta.env.VITE_REACT_BASE_URL as string);
    if (!resposta) {
      alert("Erro no carregamento das tasks!");
      return;
    }

    const final = resposta.data.tasks.map((task: any) => ({
      _id: task._id,
      content: task.content
    }));

    cb(final);
  } catch (erro: any) {
    throw erro;
  }
}
