
//declaraçao de um objeto chamado aluno
let aluno = {
    nome: "Júlia",
    idade: 21,
    ativo: true 
};

// console.log (aluno); //exibe o objeto completo
console.log (`Nome do aluno: ${aluno.nome}`);
console.log (`Idade do aluno: ${aluno.idade}`);
if (aluno.ativo === true){
    console.log (`Situação: Ativo`)
} else {
    console.log (`Situação: Inativo`)
}


//exemplo notação de colchetes

let propriedade = "nome";
console.log (aluno[propriedade]); //Julia

// também funciona diretamente

console.log (aluno["idade"]);

//declarando novo objeto

let produto = {
    nome: "Notebook",
    preco: 3000,

};
console.log (produto);

//modificando o preco do notebook
produto.preco =2800;
console.log (produto);

//adicionar uma nova propriedade (uma nova chave) 
produto.estoque = 15;
console.log (produto)