function gerarDiv() {
  const raiz = document.getElementById("divonacci");

  console.log(raiz);
}

function gerarDivonacci() {
  const raiz = document.getElementById("divonacci");
  if (!raiz) {
    console.error("Elemento com id 'divonacci' não encontrado.");
    return;
  }

  raiz.innerHTML = ""; // Limpa o conteúdo existente

  const div1 = document.createElement("div");
  div1.textContent = "Div 1";
  raiz.appendChild(div1);

  const div2 = document.createElement("div");
  div2.textContent = "Div 2";
  raiz.appendChild(div2);

  const div3 = document.createElement("div");
  div3.textContent = "Div 3";
  raiz.appendChild(div3);
}
