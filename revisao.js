// Crie um objeto aluno
// Com as propriedades: nome (string), idade (number) e matriculado
// (boolean). Use seus próprios dados!
// Acesse e exiba cada propriedade
// Use console.log para exibir cada valor separadamente usando a
// notação de ponto.
// Modifique uma propriedade
// Altere o valor de idade para um número diferente e exiba o novo
// valor no console.


let aluno = {
    nome : "Yan",
    idade : 21,
    matricula : true,
};

console.log (`Nome: ${aluno.nome}`);
console.log (`Idade: ${aluno.idade}`);

if (aluno.matricula) {
    console.log (`Situação da Matricula: Ativo`)
} else {
    console.log (`Situação da Matricula: Inativo`)
}



console.log (aluno)