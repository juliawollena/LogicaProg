//Desenvolver um programa que pergunte dois valores numéricos inteiros e apresente o valor da diferença entre o
//maior valor e o menor valor lido.

let num1, num2, diferenca;

num1 = 8
console.log (`Insira o primeiro número:${num1}`)

num2 = 1548
console.log (`Insira o segundo número: ${num2}`)

if (num1 > num2) {
    diferenca = num1 - num2
    console.log (`A diferença de ${num1} e ${num2} é ${diferenca}`)
}
else{
    diferenca = num2 - num1
    console.log (`A diferença entre ${num2} e ${num1} é ${diferenca}`)
}