'use client'

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Chip } from "@nextui-org/chip";
import { PropsWithChildren, ReactNode } from "react";
import AccordionContext, { useAccordionContext } from "./AccordionContext";
import { liberaFrota, setUnidadeFrota } from "../lib/actions";
import { useForm } from "react-hook-form";
import { Button } from "./Button";
import { Input } from "@nextui-org/input";

type Data = {
    carro: string | null;
    placa: string | null;
    hora_saida: string | null;
    unidade_chegada: string | null;
    id: number;
    unidade_saida: string | null;
}
type Props = PropsWithChildren & {
    data : Data;
    header?: ReactNode;
    content?: ReactNode;
}

export default function AccordionCompound({data,header,content}:Props) {

    return(
        <AccordionContext.Provider value={{data}}>
        <div>
            <Accordion variant="splitted">
            <AccordionItem
                hideIndicator={true}
                textValue="frota"
                className="bg-background w-[300px] "
                title={
                    <div>
                        {header}
                    </div>
                }>
                {content}
            </AccordionItem>
        </Accordion>
        </div>
    </AccordionContext.Provider>

    );
}

export function AccordionCompoundHeader(){
    const {data} = useAccordionContext();
    return(
        <>
            <div className="flex flex-row justify-between text-textcolor font-semibold text-[16px]">
                <p>{data.carro}</p>
                <p>{data.placa}</p>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <p className="text-[#B4B4B4] text-[14px]">Retirada</p>
                    <Chip size="sm" className="bg-background border-2 border-[#B4B4B4] min-w-[78px] text-[#B4B4B4]">{data.hora_saida}</Chip>
                </div>
                <div className="flex flex-col">
                    <p className="text-[#B4B4B4] text-[14px]">Status</p>
                    {data.hora_saida != null && <Chip size="sm" className="bg-[#F4ED0B] min-w-[68px] text-[12px] text-[#C0BC23]">Ocupado</Chip>}
                    {data.hora_saida == null && <Chip size="sm" className="bg-[#00FF37] min-w-[78px] text-[12px] text-[#1BBC3E]">Disponivel</Chip>}
                </div>
            </div>
        </>
    )
}

export function AccordionCompoundGoingTo() {
    const {data} = useAccordionContext();
    return(
        <div className="pb-2">
            <p className="text-[#B4B4B4] h-6 text-[14px]">Indo para</p>
            <Chip size="md" className="bg-background border-2 border-[#B4B4B4] min-w-full text-[#B4B4B4]">{data.unidade_chegada}</Chip>
        </div>
    )
}

export function AccordionCompoundForm() {
    const onSubmit = (i:any) => {
        const unidade_chegada = i.unidade_chegada;
        const unidade_saida = i.unidade_saida;
        setUnidadeFrota(i.id,unidade_saida,unidade_chegada);
    };
    const { setValue,register,handleSubmit, formState:{} } = useForm({});
    const {data} = useAccordionContext();
    return(
        <>
        {data.hora_saida != null &&
            <div className="flex flex-col justify-start gap-4">
                <div>
                    <p className="text-[#B4B4B4] h-6 text-[14px]">Indo para</p>
                    <Chip size="md" className="bg-background border-2 border-[#B4B4B4] min-w-full text-[#B4B4B4]">{data.unidade_chegada}</Chip>
                </div>
                <div className="flex justify-end">
                    <Button variant="primary" size="md" onClick={()=>{liberaFrota(data.id)}}>Liberar</Button>
                </div>
        </div>}

        {data.hora_saida == null &&
            <form className="flex flex-col gap-2 items-end w-full" onSubmit={handleSubmit(onSubmit)}>
                <Input variant="bordered" className="h-10" type="text" label="Saida "{...register("unidade_saida")}/>
                <Input variant="bordered" className="h-10" color="default" type="text" label="Chegada" {...register("unidade_chegada")}/>
                <div>
                    <Button variant="primary" size="md" type="submit" onClick={()=>setValue("id",data.id)}>Ocupar</Button>
                </div>
            </form>}
        </>
    )
}
