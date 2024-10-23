// Função para converter o valor inserido
function converter() {
    // Pega o valor digitado pelo usuário
    const valor = document.getElementById("valor").value;

    // Pega a moeda escolhida pelo usuário
    const moeda = document.getElementById("moeda").value;

    // Taxas de conversão simples para exemplo
    const taxas = {
        "USD": 0.19, // Taxa de BRL para USD
        "EUR": 0.18, // Taxa de BRL para EUR
        "GBP": 0.16  // Taxa de BRL para GBP
    };

    // Verifica se o valor é um número válido
    if (valor && !isNaN(valor)) {
        // Calcula o valor convertido
        const convertido = valor * taxas[moeda];

        // Exibe o resultado na tela
        document.getElementById("resultado").innerHTML = 
            `O valor convertido é: ${convertido.toFixed(2)} ${moeda}`;
    } else {
        // Se o valor for inválido, exibe uma mensagem de erro
        document.getElementById("resultado").innerHTML = 
            "Por favor, insira um valor válido.";
    }
}
