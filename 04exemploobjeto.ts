//declaraçao de um objeto chamado aluno EM TYPESCRIPT
let aluno: {nome:string; idade:number; ativo: boolean} = { 
    nome: "Júlia",
    idade: 21,
    ativo: true 
};

console.log (aluno); //exibe o objeto completo
console.log (`Nome do aluno: ${aluno.nome}`);
console.log (`Idade do aluno: ${aluno.idade}`);
if (aluno.ativo === true){
    console.log (`Situação: Ativo`)
} else {
    console.log (`Situação: Inativo`)
}