'use client'

import ModalTodo from "./ModalTodo";

export default function TodoList() {
    return (
        <div className="rounded-[30px] w-full flex-col">
            <div className="flex flex-row items-center justify-between">
                <h1 className="font-bold text-[16px] text-textcolor">Lista de Tarefas</h1>
                <ModalTodo/>
            </div>
        </div>
    );
  }
