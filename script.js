let curtidas = 0;

const botao = document.getElementById("btnCurtir");
const contador = document.getElementById("contador");

botao.addEventListener("click", function() {
    curtidas++;
    contador.textContent = curtidas;
});