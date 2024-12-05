'use client'

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Chip } from "@nextui-org/chip";

type AccordionMainProps = {
    id:number;
    carro: string | null;
    placa: string | null;
    hora_saida: string | null;

}

export default function AccordionMain({id,carro,placa,hora_saida}:AccordionMainProps) {
    return(
        <div className="py-4 px-6 bg-[#394B59] rounded-lg w-[300px]">
                            <div className="flex flex-row justify-between text-textcolor font-semibold text-[16px]">
                                <p>{carro}</p>
                                <p>{placa}</p>
                            </div>
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-col">
                                        <p className="text-[#B4B4B4] text-[14px]">
                                            retirada
                                        </p>
                                        <Chip size="sm" className="bg-background border-2 border-[#B4B4B4] min-w-[78px] text-[#B4B4B4]">{hora_saida}</Chip>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[#B4B4B4] text-[14px]">
                                            retirada
                                        </p>
                                            {hora_saida != null && <Chip size="sm" className="bg-[#F4ED0B] min-w-[68px] text-[12px] text-[#C0BC23]">Ocupado</Chip>}
                                            {hora_saida == null && <Chip size="sm" className="bg-[#00FF37] min-w-[78px] text-[12px] text-[#1BBC3E]">Disponivel</Chip>}
                                    </div>
                                </div>
                             </div>
 );
}
