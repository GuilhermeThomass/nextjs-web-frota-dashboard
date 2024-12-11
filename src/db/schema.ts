import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  age: int().notNull(),
  email: text().notNull().unique(),
});

export const frota = sqliteTable('frota',{
    id: int().primaryKey({autoIncrement: true}),
    carro: text(),
    placa: text(),
    unidade_saida: text(),
    unidade_chegada: text(),
    hora_saida: text().default(sql`(current_timestamp)`),
})
export const reservas = sqliteTable('reservas',{
    id: int().primaryKey({autoIncrement: true}),
    carro: text(),
    placa: text(),
    local_saida: text(),
    local_destino: text(),
    data_hora: text(),
    vagas: int()
})

export const todo = sqliteTable('todo_list',{
    id: int().primaryKey({autoIncrement: true}),
    unidade: text(),
    data_hora: text(),
    descricao: text(),
})
