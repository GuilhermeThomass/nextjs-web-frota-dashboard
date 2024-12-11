'use client'

import { Button } from "../components/Button";
import { clearFrota } from "../lib/actions";

export default function FrotaHeader() {
    return(
        <>
            <h1 className="font-bold text-[24px] text-textcolor">Frota Atual</h1>
            <div className="flex gap-6">
                    <Button variant="primary" size="md" onClick={()=>{clearFrota()}}>Atualizar Carros</Button>
            </div>
        </>

    );
}
