'use server'
import { getFrota } from "../lib/actions";
import { cookies } from "next/headers";
import AccordionCompound, { AccordionCompoundForm, AccordionCompoundGoingTo, AccordionCompoundHeader } from "../components/AccordionCompound";


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
                                <AccordionCompound
                                    key={values.id}
                                    data={values}
                                    header={<AccordionCompoundHeader/>}
                                    content={<AccordionCompoundGoingTo/>}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
  }
