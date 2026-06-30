async function buscarClima() {

    const url =
    "https://api.open-meteo.com/v1/forecast?latitude=-22.90&longitude=-43.20&current=temperature_2m";

    const resposta = await fetch(url);
    const dados = await resposta.json();

    document.getElementById("cidade").textContent =
        "Rio de Janeiro";

    document.getElementById("temperatura").textContent =
        dados.current.temperature_2m + " °C";

    document.getElementById("condicao").textContent =
        "Dados fornecidos pela Open-Meteo";
}

buscarClima();