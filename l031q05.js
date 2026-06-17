//fazer um programa que pergunte o sálario de um funcionário e apresente este salário com aumento de 15%

let salario, acrescimo, salarioFinal;

console.log ("Informe seu salário");
salario = 1612.99;

acrescimo = 1612.99 * 15 /100;
salarioFinal = salario + acrescimo;

console.log (`Seu novo salário é R$ ${salarioFinal.toFixed(2)}`);

