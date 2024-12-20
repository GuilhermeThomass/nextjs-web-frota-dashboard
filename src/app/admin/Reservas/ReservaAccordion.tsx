'use client'

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Button } from "../../components/Button";
import { Chip } from "@nextui-org/chip";
import { Input } from "@nextui-org/input";
import { deleteReserva, setVagasReserva } from "../../lib/actions";
import { useForm } from "react-hook-form";


type ReservaAccordionProps = {
    variant:"show" | "edit";
    id:number;
    vagas: number | null;
    carro: string | null;
    placa: string | null;
    hora: string | null;
    local_saida: string | null;
    local_destino: string | null;

}

export default function ReservaAccordion({variant,id,vagas,carro,placa,hora,local_saida,local_destino}:ReservaAccordionProps) {
    const onSubmit = (data:any) => {
        const vagas = data.vagas;
        setVagasReserva(id,vagas);
    };
    const { setValue,register,handleSubmit, formState:{} } = useForm({});
    return(
    <div>
        <Accordion variant="splitted">
            <AccordionItem
                hideIndicator={true}
                textValue="frota"
                className="bg-background w-[340px] max-sm:w-[280px]"
                title={
                    <div>
                        <div className="flex flex-row justify-between text-textcolor font-semibold text-[16px]">
                            <p>{carro}</p>
                            <p>{placa}</p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col">
                                <p className="text-[#B4B4B4] text-[14px]">
                                    Data de saida
                                </p>
                                <Chip size="sm" className="bg-background border-2 border-[#B4B4B4] min-w-[78px] text-[#B4B4B4]">{hora}</Chip>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[#B4B4B4] text-[14px]">
                                    Status
                                </p>
                                <Chip size="sm" className="bg-[#35C9FF] min-w-[68px] text-[12px] text-[#2982A3]">Reservado</Chip>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">

                            <div>
                                <p className="text-[#B4B4B4] text-[14px]">
                                    Local de Saida
                                </p>
                                <Chip size="sm" className="bg-background border-2 border-[#B4B4B4] text-[#B4B4B4]">{local_saida}</Chip>
                            </div>
                            <div className="">
                                    <p className="text-[#B4B4B4] h-6 text-[14px] mt-2">
                                        Indo para
                                    </p>
                                    <Chip size="sm" className="bg-background border-2 border-[#B4B4B4] text-[#B4B4B4]">{local_destino}</Chip>
                            </div>
                        </div>
                    </div>
                    }>
                    <div className="flex items-center justify-between pb-2">
                        <div className="">
                            <p className="text-[#B4B4B4] text-[14px]">
                                Vagas Disponiveis
                            </p>
                            <Chip size="sm" className="bg-background border-2 min-w-16 border-[#B4B4B4] text-[#B4B4B4]">{vagas}</Chip>
                        </div>
                        {variant == "edit" && <Button onClick={()=>deleteReserva(id)}variant="primary" size="sm">Deletar</Button>}
                    </div>
                    {variant == 'edit' &&
                        <form className="flex justify-between" onSubmit={handleSubmit(onSubmit)}>
                            <Input {...register('vagas')} size="sm" variant="bordered" radius="full" className="flex w-16">Vagas Disponiveis</Input>
                            <Button variant="primary" size="sm" onClick={()=>setValue("id",id)}>Editar Vagas</Button>
                        </form>}
            </AccordionItem>
        </Accordion>
    </div>
 );
}
