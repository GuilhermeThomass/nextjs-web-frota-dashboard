import FrotaHeader from "./FrotaHeader";
import { getFrota } from "../../lib/actions";
import AccordionCompound, { AccordionCompoundForm, AccordionCompoundHeader } from "../../components/AccordionCompound";

export default async function FrotaPanel() {
    const frota = await getFrota();
    return(
        <div className="flex flex-col w-full h-full gap-8">
            <div className="flex flex-row items-center justify-between mx-8">
                <FrotaHeader/>
            </div>
            <div className="flex flex-wrap text-textcolor gap-4 justify-center overflow-y-scroll pb-6 pt-1" >
                {
                    frota.map((values)=>{
                        return(
                            <AccordionCompound
                                key={values.id}
                                data={values}
                                header={<AccordionCompoundHeader/>}
                                content={<AccordionCompoundForm/>}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}
