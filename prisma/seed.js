import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Dados de 50 pets
// REMOVIDO O ARRAY EXTERNO EXTRA
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
  { nome: "Duquesa", especie: "Cachorro", idade: 6, dono: "Roberto Gomes" },
  { nome: "Garfield", especie: "Gato", idade: 4, dono: "Suzana Lima" },
  { nome: "Flash", especie: "Coelho", idade: 2, dono: "Tiago Ferreira" },
  { nome: "Zeca", especie: "Pássaro (Calopsita)", idade: 5, dono: "Vânia Almeida" },
  { nome: "Sasha", especie: "Cachorro", idade: 3, dono: "William Santos" },
  { nome: "Whisky", especie: "Gato", idade: 7, dono: "Yara Costa" },
  { nome: "Fred", especie: "Tartaruga", idade: 20, dono: "Xavier Rocha" },
  { nome: "Dumbo", especie: "Hamster", idade: 1, dono: "Zélia Matos" },
  { nome: "Amora", especie: "Gato", idade: 2, dono: "Alice Neves" },
  { nome: "Bilu", especie: "Cachorro", idade: 9, dono: "Bernardo Dias" },
  { nome: "Estrela", especie: "Peixe (Kinguios)", idade: 3, dono: "Catarina Borges" },
  { nome: "Cookie", especie: "Porquinho-da-Índia", idade: 0, dono: "Davi Ramos" },
  { nome: "Jabuti", especie: "Tartaruga", idade: 12, dono: "Elisa Silva" },
  { nome: "Floco", especie: "Coelho", idade: 4, dono: "Felipe Souza" },
  { nome: "Juba", especie: "Gato", idade: 5, dono: "Gabriel Pereira" },
  { nome: "Lady", especie: "Cachorro", idade: 1, dono: "Helena Matos" },
  { nome: "Pandora", especie: "Gato", idade: 1, dono: "Igor Santos" },
  { nome: "Apollo", especie: "Cachorro", idade: 8, dono: "Joana Lima" },
  { nome: "Jade", especie: "Gato", idade: 3, dono: "Kauan Rocha" },
  { nome: "Ringo", especie: "Pássaro (Agapornis)", idade: 4, dono: "Larissa Gomes" },
  { nome: "Hulk", especie: "Cachorro", idade: 2, dono: "Marcelo Alves" },
  { nome: "Mimi", especie: "Gato", idade: 10, dono: "Natália Costa" },
  { nome: "Pretinha", especie: "Cachorro", idade: 5, dono: "Otávio Mendes" },
  { nome: "Sheik", especie: "Gato", idade: 9, dono: "Priscila Nunes" },
  { nome: "Sushi", especie: "Peixe (Néon)", idade: 1, dono: "Quiteria Ferreira" },
  { nome: "Theo", especie: "Cachorro", idade: 6, dono: "Rafael Borges" },
  { nome: "Wendy", especie: "Gato", idade: 4, dono: "Sônia Vieira" },
  { nome: "Zeca", especie: "Porquinho-da-Índia", idade: 2, dono: "Tadeu Ramos" },
  { nome: "Zig", especie: "Coelho", idade: 1, dono: "Ursula Matos" },
  { nome: "Zeus", especie: "Cachorro", idade: 7, dono: "Vinícius Souza" }
];

async function main() {
  console.log("Iniciando o Seeding de Pets no banco pets_db...");

  // Limpa a tabela Pet antes de inserir (opcional)
  await prisma.Pet.deleteMany(); 
  console.log("Registros existentes de Pet deletados.");

  // Insere TODOS os pets de uma vez (usando createMany corretamente)
  const result = await prisma.Pet.createMany({
    data: dadosPets, // Agora 'dadosPets' é um array de objetos, como o Prisma espera
    skipDuplicates: true,
  });

  console.log(`Seeding concluído com sucesso: ${result.count} pets criados!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("Prisma desconectado e processo encerrado.");
  });