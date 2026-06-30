// Desenvolver um programa que pergunte cinco elementos de um vetor a. No final, apresente a soma de todos os
// elementos deste vetor.

let soma =[];

console.log ("Digite o primeiro número:");
soma [0]= 5;
console.log ("Digite o segundo número:");
soma [1]= 4;
console.log ("Digite o terceiro número:");
soma [2] = 3;
console.log ("Digite o quarto número:");
soma [3] = 2;
console.log ("Digite o quinto número:");
soma [4] = 1;

let acum = 0;

for (let cont = 0; cont < soma.length; cont++){
acum = acum + soma [cont]; 
};
 
console.log (`A soma dos valores digitados é ${acum}`);