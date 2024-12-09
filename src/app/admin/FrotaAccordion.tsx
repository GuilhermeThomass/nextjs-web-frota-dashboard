'use client'

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Button } from "../components/Button";
import { Chip } from "@nextui-org/chip";
import {Input} from "@nextui-org/input";

import { liberaFrota, setUnidadeFrota } from "../lib/actions";
import { useForm } from "react-hook-form";


type FrotaAccordionProps = {
    id:number;
    carro: string | null;
    placa: string | null;
    hora_saida: string | null;
    unidade_chegada: string | null;

}

export default function FrotaAccordion({id,carro,placa,hora_saida,unidade_chegada}:FrotaAccordionProps) {
    const onSubmit = (data:any) => {
        let unidade_chegada = data.unidade_chegada;
        let unidade_saida = data.unidade_saida;
        setUnidadeFrota(id,unidade_saida,unidade_chegada);
    };
    const { setValue,register,handleSubmit, formState:{isSubmitting} } = useForm({});
    return(
    <div>
        <Accordion variant="splitted" className="w-[300px]">
            <AccordionItem
                textValue="frota"
                className="bg-background w-[300px]"
                title={
                    <div>
                        <div className="flex flex-row justify-between text-textcolor font-semibold text-[16px]">
                            <p>{carro}</p>
                            <p>{placa}</p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col">
                                <p className="text-[#B4B4B4] text-[14px]">
                                    Retirada
                                </p>
                                <Chip size="sm" className="bg-background border-2 border-[#B4B4B4] min-w-[78px] text-[#B4B4B4]">{hora_saida}</Chip>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[#B4B4B4] text-[14px]">
                                    Status
                                </p>
                                {hora_saida != null && <Chip size="sm" className="bg-[#F4ED0B] min-w-[68px] text-[12px] text-[#C0BC23]">Ocupado</Chip>}
                                {hora_saida == null && <Chip size="sm" className="bg-[#00FF37] min-w-[78px] text-[12px] text-[#1BBC3E]">Disponivel</Chip>}
                            </div>
                        </div>
                    </div>
                }>
                {hora_saida != null &&
                    <div className="flex flex-col justify-start">
                        <div>
                            <p>Indo para</p>
                            <div className="border-2 border-[#B4B4B4] px-4 py-2 rounded-full my-2">{unidade_chegada}</div>
                        </div>
                        <div className="flex justify-end">
                            <Button variant="primary" size="md" onClick={()=>{liberaFrota(id)}}>Liberar</Button>
                        </div>
                    </div>}
                {hora_saida == null &&
                    <form className="flex flex-col gap-2 items-end w-full" onSubmit={handleSubmit(onSubmit)}>
                        <Input className="h-10" type="text" label="Saida "{...register("unidade_saida")}/>
                        <Input className="h-10" color="default" type="text" label="Chegada" {...register("unidade_chegada")}/>
                        <div>
                            <Button variant="primary" size="md" type="submit" onClick={()=>setValue("id",id)}>Reservar</Button>
                        </div>
                    </form>}
            </AccordionItem>
        </Accordion>
    </div>
 );
}
