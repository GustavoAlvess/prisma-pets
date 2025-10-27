// importar o prisma Client
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


// Crio variavel findAll e já exporto
export const findAll = async () => {
    //SELECT * FROM pets = findMany
    return await prisma.pet.findMany({
        orderBy: { nome: 'asc'}
    });
}

// Crio variavel findById e já exporto
export const findById = async (id) => {
    //SELECT * FROM pets WHERE id - 1
    return await prisma.pet.findUnique({
        where: { id: Number(id) }
    });
}

// Crio a variavel  create e ja exporto
export const create = async (data) => {
    return await prisma.pet.create({
        data: {
            nome: data.nome,
            especie: data.especie,
            dono: data.dono,
            idade: data.idade
        }
    })
}

//Crio variavel deletePet e ja exporto
export const deletePet = async (id) => {
    return await prisma.pet.delete({
        where: { id: Number (id)}
    })
}

// Crio a variavel update e ja exporto
export const update = async (id, data) => {
    return await prisma.pet.update({
        where: { id: Number(id)},
        data: {
            ...(data.nome && { nome: data.nome}),
            ...(data.especie && { especie: data.especie}),
            ...(data.dono && { dono: data.dono}),
            ...(data.idade && { idade: Number (data.idade)}),
        }
    })
}