'use server'
import { getReservas } from "../lib/actions";
import ReservaAccordion from "../admin/Reservas/ReservaAccordion";
import { cookies } from "next/headers";


export default async function Reservas() {
    (await cookies()).get('session')
    const reservas = await getReservas();
    return (
        <div className="flex w-full h-full py-[28px] px-[32px]">
            <div className="bg-foreground rounded-[30px] h-fit min-h-full w-full">
                <div className="flex flex-wrap text-textcolor gap-4 justify-center overflow-y-scroll scroll-smooth scroll py-6" >
                    {
                        reservas.map((values)=>{
                            return(
                                <ReservaAccordion
                                    variant="show"
                                    key={values.id}
                                    vagas={values.vagas}
                                    carro={values.carro}
                                    hora={values.data_hora}
                                    id={values.id}
                                    placa={values.placa}
                                    local_saida={values.local_saida}
                                    local_destino={values.local_destino}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
  }
