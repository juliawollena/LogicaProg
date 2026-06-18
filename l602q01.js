/*Desenvolver um programa que apresente todos os valores numéricos 
inteiros pares situados na faixa de 100 a 200.  primeiro vamos fazer de 100 a 200*/


let cont = 100; //onde começa


/* o laço vai começar aqui*/ 
//faça isso
//do entra sempre 
//numeros pares posso coloar +2 no contador se a questao deixar 
// se nao deixar precisa fazer o resto da divisao em um if dentro do do. o numero par nunca sobra no resto. fazendo %2 para numeros pares.

do {
    if (cont % 2 === 0) {
     console.log ( cont ) 
     }
cont = cont + 1;

} while (cont <= 200);

// enquanto esse teste da verdadeiro

