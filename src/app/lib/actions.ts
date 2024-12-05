"use server"

import { db } from "@/db"
import { frota } from "@/db/schema"
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function getFrota() {
    const frota = await db.query.frota.findMany();
    return frota
}
export async function updateFrota(id:number) {
    await db.update(frota).set({hora_saida: new Date().toLocaleString()}).where(eq(frota.id, id));
    revalidatePath('/')
}

export async function liberaFrota(id:number) {
    await db.update(frota).set({hora_saida: null}).where(eq(frota.id, id));
    revalidatePath('/')
}

export async function clearFrota() {
    await db.update(frota).set({hora_saida: null})
    revalidatePath('/')
}


export async function create() {
    console.log("criado")
    await db.insert(frota).values({
        carro:"Teste",
        placa:"Teste",
        unidade_saida:"teste"
    })
}
