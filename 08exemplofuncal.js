//Material 15 - Página 08 (Modularização e Funções)


let num; //variavel global que funciona no codigo todo


//toda função tem que ter parênteses
function somar (a, b) {
    let resultado = a + b //variavel local, so funciona dentro do parênteses 
    return resultado;
}; //return volta com o resultado para mim


//exibindo imediatamente o valor retornado pela função
console.log (somar (5, 3));
console.log (somar (7, 3));


//guardando o valor retornado em uma variavel

num = somar (10,20);
console.log (num);


console.log (somar (4, 5));

//função sem return, chamamos de funçao void 
function direcionador () {
   console.log ("Siga em frente! Estude sempre!")
};
 //chamando a funçao direcionador ()
direcionador ();
direcionador ();
direcionador ();

// let texto = direcionador ();
// console.log (texto); //variavel nao recebe retorno da função

function mensagem () {
 return "Ame mais, brigue menos!\n"
};

mensagem (); //perdi o retorno da função
console.log (mensagem ());


function tudao() {
 console.log (`Inicio da função tudão`)
direcionador (); //chamando a função direcionador
let calc = somar (2, 30);
console.log (`Resultado da soma ${calc}`);
let mesg = mensagem ();
direcionador ()
console.log (`Mensagem do dia ${mesg} `)
console.log (`Fim da função tudão`)
};

tudao ()