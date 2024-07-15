function calcularCombustivel() {
    const tempo = parseInt(document.getElementById("tempo").value);
    const velocidade = parseInt(document.getElementById("velocidade").value);
    const kmPorLitro = 12;

    const distancia = tempo * velocidade;
    const litrosNecessarios = distancia / kmPorLitro;

    document.getElementById("resultado").innerText = `Litros necessários: ${litrosNecessarios.toFixed(3)} L`;
}