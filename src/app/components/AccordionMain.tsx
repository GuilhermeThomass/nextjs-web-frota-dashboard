'use client'

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Chip } from "@nextui-org/chip";

type AccordionMainProps = {
    carro: string | null;
    placa: string | null;
    hora_saida: string | null;
    unidade_chegada:string|null;
}

export default function AccordionMain({carro,placa,hora_saida,unidade_chegada}:AccordionMainProps) {

    return(
        <div>
            <Accordion variant="splitted">
            <AccordionItem
                hideIndicator={true}
                isDisabled={hora_saida == null? true : false}
                textValue="frota"
                className="bg-background w-[300px] "
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
                <div className="pb-2">
                        <p className="text-[#B4B4B4] h-6 text-[14px]">
                            Indo para
                        </p>
                        <Chip size="md" className="bg-background border-2 border-[#B4B4B4] min-w-full text-[#B4B4B4]">{unidade_chegada}</Chip>
                </div>
            </AccordionItem>
        </Accordion>
        </div>

    );
}
