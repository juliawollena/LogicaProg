// Elaborar um programa que apresente no final a soma dos valores pares existentes na faixa de 0 até 500. Utilize
// um laço que efetue a variação de 2 em 2.

let cont = 0;
let acum = 0; // contas de soma o acumulador começa valendo 0, multiplicação é 1

while ( cont <= 500) {
acum = acum + cont;

cont = cont + 2;
}
console.log (`A soma dos valores pares existentes entre 0 a 500 é ${acum}`)