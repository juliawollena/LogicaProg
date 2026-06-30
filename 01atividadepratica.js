let aluno  = {
    nome: "Anna Vitória",
    idade: 22,
    matricula: true
};

console.log (`Nome: ${aluno.nome}`);
console.log (`Idade: ${aluno.idade}`);

if (aluno.matricula) {
    console.log ("Situação da matricula: Ativa")
} else {
    console.log ("Situação da matricula: Inativa")
}

aluno.idade = 21
console.log (aluno)