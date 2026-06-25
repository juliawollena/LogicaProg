function calcularArea (base, altura) {
    let resultado = base * altura
    return resultado
};

console.log (calcularArea(5,9));


function converterCelsius (temp) {
    let resultado2 = (temp - 32 ) * 5/9
    return resultado2
};

console.log (converterCelsius (77))


function saudacaoPersonalizada (nome) { //nome é a variavel local
   return `Olá, ${nome}! Seja bem vindo(a)`
};

console.log (saudacaoPersonalizada ("Júlia"))


let nome = "Wollena" //variavel global
console.log (`Olá, ${nome}! Seja bem vindo(a)`)