'use server'
import { getFrota } from "../lib/actions";
import AccordionMain from "../components/AccordionMain";
import { cookies } from "next/headers";


export default async function Frota() {
    (await cookies()).get('session')
    const frota = await getFrota();
    return (
        <div className="flex w-full h-full py-[28px] px-[32px]">
            <div className="bg-foreground rounded-[30px] h-fit min-h-full">
                <div className="flex flex-wrap text-textcolor gap-4 justify-center overflow-y-scroll scroll-smooth py-6" >
                    {
                        frota.map((values)=>{
                            return(
                                <AccordionMain
                                    key={values.id}
                                    carro={values.carro}
                                    placa={values.placa}
                                    hora_saida={values.hora_saida}
                                    unidade_chegada={values.unidade_chegada}

                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
  }
