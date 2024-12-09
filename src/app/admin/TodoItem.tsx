'use client'

import { FaRegTrashAlt } from "react-icons/fa";
import { deleteTodo } from "../lib/actions";
import {Tooltip} from "@nextui-org/tooltip";

type TodoItemProps = {
    id:number;
    unidade: string | null;
    data_hora:string| null;
    descricao:string| null;
}

export default function TodoItem({id,unidade,data_hora,descricao}:TodoItemProps) {
    return(
        <Tooltip color="danger" showArrow={true} placement="top" content="Click para excluir">
            <div className="bg-background flex flex-row justify-between items-center px-4 py-2 rounded-2xl
                        transition ease-in-out
                        hover:scale-110
                        hover:border-white/25
                        hover:cursor-pointer
                        active:scale-95"
                        onClick={()=>(deleteTodo(id))}
                        >
                <div key={id} className="flex flex-col font-semibold text-[14px] text-textcolor gap-2">
                    <div className="flex flex-row justify-between gap-4">
                        <p>{unidade}</p>
                        <p>{data_hora}</p>
                    </div>
                    <div>
                        <p>{descricao}</p>
                    </div>
                </div>
                <div>
                    <FaRegTrashAlt color="#E72254" size={20}/>
                </div>
            </div>
    </Tooltip>
 );
}
