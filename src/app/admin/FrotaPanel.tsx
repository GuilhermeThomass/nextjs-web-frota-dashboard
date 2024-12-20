import FrotaHeader from "./FrotaHeader";
import FrotaAccordion from "./FrotaAccordion";
import { getFrota } from "../lib/actions";

export default async function FrotaPanel() {
    const frota = await getFrota();
    return(
        <div className="flex flex-col w-full h-full gap-8">
            <div className="flex flex-row items-center justify-between mx-16">
                <FrotaHeader/>
            </div>
            <div className="flex flex-wrap text-textcolor gap-8 justify-center overflow-y-scroll pb-6 pt-1" >
                {
                    frota.map((values)=>{
                        return(
                            <FrotaAccordion
                                key={values.id}
                                id={values.id}
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
    );
}
