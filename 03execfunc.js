// - Escreva uma função chamada verificarMaioridade em
// TypeScript. Ela deve receber um parâmetro chamado idade (do Ipo number) e retornar uma string dizendo
// "Maior de idade" se a idade for 18 ou mais, ou "Menor de idade" caso contrário. CerIfique-se de definir o
// Ipo do retorno da função.


function verificarMaioridade (idade) {
if (idade <= 18){
    console.log ("Maior de idade")
} else {
    console.log ("Menor de idade")
}
};

console.log (verificarMaioridade(8))