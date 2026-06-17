//elobrorar um programa que pergunte o nome do usuario, quatro valores inteiros e apresente dois resultados:
// resultado de suas adições e de suas multiplicações
//exibir ao inicio uma saudação ao usuario

//declaração de variaveis
let nome; 
let num1, num2, num3, num4, soma , multi;

console.log ("Informe o seu nome: ");

//leia (nome)
nome = "Julia";

console.log ("Informe o primeiro valor inteiro: ");
num1= 10;
console.log ("Informe o segundo valor: ");
num2=5;
console.log ("Informe o terceiro valor: ");
num3=8;
console.log ("Informe o quarto valor: ");
num4=7;

soma = num1 + num2 +num3 + num4
console.log ("A soma dos quatro valores inseridos é",soma);

multi = num1 * num2 * num3 * num4;
console.log (`A multiplição dos quatro valores é ${multi}`);


