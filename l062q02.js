/*Desenvolver um programa que apresente no final a soma dos valores pares existentes na faixa de 0 até 500.
Utilize um laço que varie de 2 em 2.*/


/*let cont = 0;
let acum = 1;

do {
 
acum = acum = cont
cont = cont + 2


} while (cont <= 500)

    console.log (`A soma dos valores pares existentes entre 0 ate 500 é: ${acum}`)*/

    let cont = 0;
    let acum = 0; 
     do {

     acum += cont // le como esse é igual a ele mais o outro
        cont += 2 //significa cont + cont + 2
     } while (cont <= 500)

console.log (`A soma dos valores pares existentes entre 0 ate 500 é: ${acum}`)


