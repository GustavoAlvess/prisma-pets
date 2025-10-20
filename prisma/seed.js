import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Dados de 20 pets (a mesma lista)
const dadosPets = [
  { nome: "Simba", especie: "Gato", idade: 3, dono: "André Pereira" },
  { nome: "Thor", especie: "Cachorro", idade: 5, dono: "Julia Silva" },
  { nome: "Bolinha", especie: "Hamster", idade: 0, dono: "Vitor Ramos" },
  { nome: "Chico", especie: "Pássaro (Calopsita)", idade: 3, dono: "Lúcia Ferreira" },
  { nome: "Luna", especie: "Cachorro", idade: 2, dono: "Pedro Rocha" },
  { nome: "Tom", especie: "Gato", idade: 8, dono: "Gustavo Santos" },
  { nome: "Pingo", especie: "Gato", idade: 1, dono: "João Lucas" },
  { nome: "Nemo", especie: "Peixe (Palhaço)", idade: 1, dono: "Daniela Borges" },
  { nome: "Max", especie: "Cachorro", idade: 7, dono: "Carla Matos" },
  { nome: "Pipoca", especie: "Porquinho-da-Índia", idade: 1, dono: "Rodrigo Castro" },
  { nome: "Louro", especie: "Pássaro (Papagaio)", idade: 10, dono: "Márcio Neves" },
  { nome: "Mel", especie: "Cachorro", idade: 4, dono: "Mariana Costa" },
  { nome: "Dourado", especie: "Peixe (Betta)", idade: 2, dono: "Eduardo Souza" },
  { nome: "Toby", especie: "Tartaruga", idade: 15, dono: "Renata Oliveira" },
  { nome: "Bob", especie: "Cachorro", idade: 1, dono: "Ricardo Alves" },
  { nome: "Nina", especie: "Gato", idade: 2, dono: "Heloisa Mendes" },
  { nome: "Coelho", especie: "Coelho", idade: 3, dono: "Patrícia Nunes" },
  { nome: "Piu-Piu", especie: "Pássaro (Canário)", idade: 2, dono: "Tatiana Gomes" },
  { nome: "Mia", especie: "Gato", idade: 6, dono: "Fabiana Dias" },
  { nome: "Esmeralda", especie: "Pássaro (Periquito)", idade: 1, dono: "Sérgio Vieira" },
];

async function main() {
  console.log("Iniciando o Seeding de Pets no banco pets_db...");

  // Limpa a tabela Petshop antes de inserir (opcional)
  await prisma.pet.deleteMany();
  console.log("Registros existentes de Petshop deletados.");

  // Insere todos os pets
  for (const Pet of dadosPets) {
    await prisma.pet.create({
      data: Pet,
    });
  }

  console.log(`Seeding concluído com sucesso: ${dadosPets.length} pets criados!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });