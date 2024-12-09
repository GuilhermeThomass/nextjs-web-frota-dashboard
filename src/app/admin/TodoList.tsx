'use server'

import { getTodo } from "../lib/actions";
import ModalTodo from "./ModalTodo";

import TodoItem from "./TodoItem";


export default async function TodoList() {
    const todo = await getTodo();
    return (
        <div className="flex rounded-[30px] w-full flex-col gap-8">
            <div className="flex flex-row items-center justify-between">
                <h1 className="font-bold text-[16px] text-textcolor">Lista de Tarefas</h1>
                <ModalTodo/>
            </div>
            <div className="flex flex-col gap-4">
                {todo.map((i)=>(
                    <TodoItem
                        key={i.id}
                        id={i.id}
                        unidade={i.unidade}
                        descricao={i.descricao}
                        data_hora={i.data_hora}
                    />
                )).reverse()}
            </div>
        </div>
    );
  }
