//  Fazer um algoritmo que efetue o cálculo do valor de uma prestação em atraso, utilizando a fórmula prestação =
// valor + (valor x (taxa : 100) x tempo em dias)

let valor = 2000
let taxa = 10
let dias = 30
let prestação

prestação = valor + (valor * ( taxa / 100) * dias)

console.log (`O valor da prestação em atraso é ${prestação}`)










