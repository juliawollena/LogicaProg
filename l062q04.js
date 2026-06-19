// Desenvolver um programa que apresente os resultados de uma tabuada de um número n qualquer a ser
// perguntado ao usuário (n x 1, n x 2, n x 3, ... , n x 9, n x 10)



let cont = 1 // de onde a tabuada vai começar
let num = 7 // numero que o usuario escolheu
let resultado // guarda a multiplicaçao

console.log (`Informe um número de 1 a 10: ${num}`) // pergunta ao usuario


do {

    resultado = cont * num //a multiplicação. os calculos sempre precisam vir antes do console.log
    console.log (`${num} x ${cont} = ${resultado}`) //printa na tela o resultado 

 cont += 1//ele acrescenta um. ele sempre vai na ultima linha antes do while 

} while (cont <= 10); // ate aonde vai a tabuada 






