const botao = document.getElementById("btnStatus");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", async () => {

    resultado.textContent = "Verificando...";

    try {

        const resposta = await fetch("/api/status");

        const dados = await resposta.json();

        resultado.textContent = dados.mensagem;

    } catch (erro) {

        resultado.textContent = "Erro ao conectar com o servidor.";

        console.error(erro);
    }
});