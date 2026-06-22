// Desenvolver um programa que apresente o total da soma de n números inteiros do número 1 até n, onde n é um
// valor informado pelo usuário.

let num; 
let acum = 0;
let cont = 0

console.log ("Informe um número")
num = 7
console.log (`Número informado: ${num}`)

for (cont = 1 ; cont <= num; cont ++ ){
    acum = acum + cont
}
console.log (`A soma dos números de 1 a ${num} é: ${acum}`)