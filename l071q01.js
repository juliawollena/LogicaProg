// Crie 2 vetores chamados nome e profissao, cada um com 5 elementos. Pergunte ao usuário o nome e a profissão
// de 5 pessoas e preencha estes vetores. Ao final exiba um relatório apontando o nome e a profissão de cada uma
// das 5 pessoas cadastradas.

let nome = []
let profissao = []


console.log ("Digite seu nome");
console.log ("Digite sua profissão");
nome [0] = "Tatiane"
profissao[0] = "Médica"
nome [1] = "Juliane"
profissao[1]= "Advogada"
nome[2]= "Júlia"
profissao[2]= "Desenvolvedora"
nome [3] = "Cristiane"
profissao [3] = "Consultura"
nome [4] = "Yan"
profissao[4] = "Jogador de Futebol"



for (let cont = 0; cont < 5; cont ++) {
    console.log (`Nome: ${nome [cont]} - Profissão: ${profissao[cont]}\n`)
}


