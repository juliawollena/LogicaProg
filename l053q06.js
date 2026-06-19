// Desenvolver um programa que apresente o valor de uma potência de uma base qualquer elevada a um expoente
// qualquer, ou seja, de be
// , onde os valores de b e e são fornecidos pelo usuário, sem utilizar Math.pow().

// let expoente = 5
// let base = 3
// let pot

// for (let cont = 1; cont <= 1; cont ++) {

//      pot = base ** expoente
//     console.log (pot)
// }




let base
let expoente 
let pot = 1

console.log ("Informe o valor da base")
base= 2
console.log ("Informe o valor do expoente")
expoente = 4
console.log (`Valores inseridos: Base: ${base}, Expoente: ${expoente}`)



for (let cont = 1; cont <= expoente; cont ++){

    pot = pot * base;
    
    console.log (pot)





}











