// Desenvolver um programa que pergunte um número e exiba a informação de que ele é positivo, negativo ou
// nulo.

let num

num = 10;
console.log (`Informe um número ${num}`);

if (num > 0){
    console.log (`${num} é um número positivo`)
}
else if (num === 0 ) {
    console.log (`${num} é um número nulo`)
}
else {
    console.log (`${num} é negativo`)
}