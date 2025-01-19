// Criação da lista

const list = [];

// Captura de elementos

const form = document.querySelector("form");

const buttonSort = document.getElementById("sort-button");

const button = document.getElementById("add");

const input = document.querySelector("input");

const friendsList = document.querySelector("ul");

// Funções

function gerarAmigoAleatorio(list) {
  const nomeAleatorio = list.sort(() => Math.random() - 0.5)[0];

  return nomeAleatorio;
}

function adicionarAmigoAleatorioNoHtml() {
  const p = document.createElement("p");
  const amigoSecreto = gerarAmigoAleatorio(list);

  p.textContent = `O amigo secreto sorteado é: ${amigoSecreto}`;
  p.style.color = "red";
  p.style.fontWeight = "bold";
  const liToRemove = document.querySelector("ul");

  liToRemove.parentNode.replaceChild(p, liToRemove);

  input.addEventListener("click", () => {
    p.parentNode.removeChild(p);
  });
}

function adicionarAmigoNaLista() {
  const inputValue = input.value;

  if (inputValue) {
    const li = document.createElement("li");
    li.textContent = inputValue;
    friendsList.appendChild(li);
    list.push(li.textContent);
    input.value = "";
  } else {
    alert("Por favor, insira um valor antes de adicionar."); // Evitar li vazios
  }
}

// Código principal

form.addEventListener("submit", (event) => {
  event.preventDefault();
  adicionarAmigoNaLista();
  
});

buttonSort.addEventListener("click", () => {
  adicionarAmigoAleatorioNoHtml();
});
