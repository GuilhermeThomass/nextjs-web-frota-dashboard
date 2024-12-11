"use server"

import { db } from "@/db"
import { frota,reservas,todo } from "@/db/schema"
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
export async function setUnidadeFrota(id:number, unidade_saida:string,unidade_chegada:string) {
    const monthNames = ["Jan", "Fev", "Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
    const objDate = new Date();
    const day = objDate.getDate();
    const month = objDate.getMonth();
    const time = objDate.getHours();
    const timemin = objDate.getMinutes();

    const format1 = time+":"+timemin+"h, "+monthNames[month]+" "+day

    await db.update(frota).set({unidade_chegada: unidade_chegada, unidade_saida: unidade_saida, hora_saida: format1}).where(eq(frota.id, id));
    revalidatePath('/')
}
export async function clearFrota() {
    await db.update(frota).set({hora_saida: null, unidade_saida:null, unidade_chegada:null})
    revalidatePath('/')
}
export async function liberaFrota(id:number) {
    await db.update(frota).set({hora_saida: null , unidade_chegada: null,unidade_saida:null}).where(eq(frota.id, id));
    revalidatePath('/')
}


export async function getTodo() {
    const todo = await db.query.todo.findMany();
    return todo
}
export async function deleteTodo(id:number) {
    await db.delete(todo).where(eq(todo.id, id));
    revalidatePath('/')
}
export async function createTodo(unidade:string, descricao:string, data:string,hora:string) {
    await db.insert(todo).values({
        unidade:unidade,
        descricao:descricao,
        data_hora:data+" as "+hora+"h"
    })
    revalidatePath('/')
}

export async function getReservas() {
    const reservas = await db.query.reservas.findMany();
    return reservas
}
export async function createReservas(carro:string,placa:string,local_saida:string,local_destino:string,data_hora:string,vagas:number) {
    await db.insert(reservas).values({
        carro:carro,
        placa:placa,
        local_saida:local_saida,
        local_destino:local_destino,
        data_hora:data_hora,
        vagas:vagas
    })
    revalidatePath('/')
}
export async function deleteReserva(id:number) {
    await db.delete(reservas).where(eq(reservas.id, id));
    revalidatePath('/')
}
export async function setVagasReserva(id:number,vagas:number) {
    await db.update(reservas).set({vagas:vagas}).where(eq(reservas.id, id));
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
