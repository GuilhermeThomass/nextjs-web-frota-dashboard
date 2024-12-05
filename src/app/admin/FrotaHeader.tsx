'use client'

import { Button } from "../components/Button";
import { clearFrota } from "../lib/actions";

type FrotaHeaderProps = {

}

export default function FrotaHeader({}:FrotaHeaderProps) {
    return(
        <>
            <h1 className="font-bold text-[24px] text-textcolor">Frota Atual</h1>
            <div className="flex gap-6">
                    <Button variant="secondary" size="md">Adicionar Carro</Button>
                    <Button variant="primary" size="md" onClick={()=>{clearFrota()}}>Atualizar Carros</Button>
            </div>
        </>

    );
}
