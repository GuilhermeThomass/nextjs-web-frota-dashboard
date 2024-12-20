'use server'

import { getReservas } from "../../lib/actions";
import ReservaAccordion from "./ReservaAccordion";
import ReservaModal from "./ReservaModal";


export default async function ReservaList() {
    const reservas = await getReservas();
    return (
        <div className="flex rounded-[30px] w-full h-full flex-col gap-8 py-[24px] bg-foreground">
            <div className="flex flex-row items-center justify-between mx-[28px]">
                <h1 className="font-bold text-[16px] text-textcolor">Lista de Reservas</h1>
                <ReservaModal />
            </div>
            <div className="flex flex-col gap-4 overflow-visible overflow-y-scroll items-center">
                    {
                        reservas.map((values)=>{
                            return(
                                <ReservaAccordion
                                    variant="edit"
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
    );
}
