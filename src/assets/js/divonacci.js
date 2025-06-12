function verificarTriangulo() {
  const lado1 = parseFloat(document.getElementById("lado1").value);
  const lado2 = parseFloat(document.getElementById("lado2").value);
  const lado3 = parseFloat(document.getElementById("lado3").value);
  const resultadoDiv = document.getElementById("resultado");

  // Limpa o resultado anterior e remove classes de estilo
  resultadoDiv.textContent = "";
  resultadoDiv.className = "";

  // Verifica se os inputs são números válidos e positivos
  if (
    isNaN(lado1) ||
    isNaN(lado2) ||
    isNaN(lado3) ||
    lado1 <= 0 ||
    lado2 <= 0 ||
    lado3 <= 0
  ) {
    resultadoDiv.textContent =
      "Por favor, insira valores numéricos positivos para todos os lados.";
    resultadoDiv.classList.add("error");
    return;
  }

  // Verifica a condição de existência de um triângulo
  // A soma de quaisquer dois lados deve ser maior que o terceiro lado.
  if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    let tipo = "";
    if (lado1 === lado2 && lado2 === lado3) {
      tipo = "Equilátero";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      tipo = "Isósceles";
    } else {
      tipo = "Escaleno";
    }
    resultadoDiv.textContent = `É um triângulo ${tipo}. ✅`;
    resultadoDiv.classList.add("success");
  } else {
    resultadoDiv.textContent =
      "Os lados fornecidos não formam um triângulo. ❌";
    resultadoDiv.classList.add("error");
  }
}
