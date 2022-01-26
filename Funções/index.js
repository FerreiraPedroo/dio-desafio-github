const alunos = [
  { nome: "Pedro", nota: 10, turma: "A1" },
  { nome: "Henrique", nota: 8, turma: "B1" },
  { nome: "Assis", nota: 5, turma: "A2" },
  { nome: "Ferreira", nota: 6, turma: "B1" },
  { nome: "Nascimento", nota: 4, turma: "A1" },
  { nome: "José", nota: 6, turma: "A2" }
];

function alunosAprovados(arr, media) {
  let aprovados = [];

  for (let i = 0; i < arr.length; i++) {
    const { nota, nome } = arr[i];

    if (nota >= media) {
      aprovados.push(nome);
    }

  }

  return aprovados;
}
console.log(alunosAprovados(alunos, 7));



const pessoa1 = { nome: "João", idade: 30 };
const pessoa2 = { nome: "Paulo", idade: 41 };
const animal = { nome: "Princesa", idade: 5, raca: "Pug" };

function calcularIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}
console.log(calcularIdade.call(pessoa2, 6))
console.log(calcularIdade.apply(animal, [6]))