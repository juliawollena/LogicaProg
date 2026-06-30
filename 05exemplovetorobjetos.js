//material 07 - página 16

let alunos = [
    {nome: "Júlia", idade: 21, ativo: true},
    {nome: "Yan Carlo", idade: 9, ativo: false},
    {nome: "Juliane", idade: 26, ativo: true}
];

console.log (alunos[0]);

//acessando pelo indice = propriedade

console.log (`Nome do primeiro aluno(a): ${alunos [0].nome}`)

//não funciona dessa forma junto com texto
console.log (`Todos os dados do primeiro aluno(a): ${alunos[0]}`)

//percorrendo o vetor de objetos com for clássico 
//length é quantas linhas tem o objeto
for (let cont = 0; cont < alunos.length; cont++){
    console.log (`Nome: ${alunos[cont].nome}`)
     console.log (`Idade: ${alunos[cont].idade}`)
      console.log (`Ativo: ${alunos[cont].ativo}\n`)
};

//percorrendo o vetor de objetos com for off
for (let aluno of alunos) {
    console.log (`Nome: ${aluno.nome}`);
    console.log (`Idade: ${aluno.idade}`);
    console.log (`Ativa: ${aluno.ativo}\n`);
}