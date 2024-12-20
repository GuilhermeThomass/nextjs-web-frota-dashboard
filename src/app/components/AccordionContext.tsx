'use client'

import { createContext, useContext } from "react";

type Data = {
    carro: string | null;
    placa: string | null;
    hora_saida: string | null;
    unidade_chegada: string | null;
    id: number;
    unidade_saida: string | null;
}
type Props ={
    data : Data;
}

const AccordionContext = createContext<Props | null>(null);

export function useAccordionContext(){
    const context = useContext(AccordionContext);
    if(!context){
        throw new Error ('useAccordionContext must be used with a AccordionCompound')
    }
    return context
}

export default AccordionContext;
