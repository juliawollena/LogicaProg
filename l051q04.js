/*Desenvolver um programa que apresente o valor da soma dos cem primeiros números inteiros (1 + 2 + 3 + 4 + ...
+ 97 + 98 + 99 + 100).*/

let cont = 1;
let acum = 0; //acumulador começa valendo zero para contass de soma e subtração mas multiplicação ou divisisão seria 1

while (cont <= 100) {

acum = acum + cont;
cont = cont + 1;

}

console.log (`A soma dos cem primeiros números inteiros é ${acum}`);
