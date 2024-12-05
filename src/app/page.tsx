'use server'
import { getFrota } from "./lib/actions";
import AccordionMain from "./components/AccordionMain";


export default async function Home() {
    const frota = await getFrota();
    return (
        <div className="flex w-full h-full py-[28px] px-[32px]">
            <div className="bg-[#203240] rounded-[30px] h-full overflow-scroll">
                <div className="flex flex-wrap text-textcolor gap-8 justify-center overflow-scroll scroll-smooth scroll py-6" >
                    {
                        frota.map((values)=>{
                            return(
                                <AccordionMain
                                    key={values.id}
                                    id={values.id}
                                    carro={values.carro}
                                    placa={values.placa}
                                    hora_saida={values.hora_saida}

                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
  }
