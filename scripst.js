// Criação da lista
const list = [];

// Captura de elementos
const form = document.querySelector("form");
const buttonSort = document.getElementById("sort-button");
const input = document.getElementById("add-amigo");
const friendsList = document.getElementById("friends-list");
const newGameButton = document.getElementById("new_game");

// Funções
function gerarAmigoAleatorio(list) {
  const nomeAleatorio = list.sort(() => Math.random() - 0.5)[0];
  return nomeAleatorio;
}

function adicionarAmigoNoHtml() {
  const p = document.createElement("p");
  const amigoSecreto = gerarAmigoAleatorio(list);

  p.textContent = `O amigo secreto sorteado é: ${amigoSecreto}`;
  p.style.color = "red";
  p.style.fontWeight = "bold";

  friendsList.replaceWith(p);

  friendsList.dataset.replacedBy = "p";
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

function reiniciarJogo() {
  list.length = 0;

  const section = document.querySelector("#principal");
  const replacedElement = friendsList.dataset.replacedBy === "p"
    ? section.querySelector("p")
    : friendsList;

  if (replacedElement) {
    replacedElement.replaceWith(friendsList);
    friendsList.innerHTML = ""; // Limpa a lista
    delete friendsList.dataset.replacedBy; // Remove o atributo auxiliar
  }
}

// Código principal
form.addEventListener("submit", (event) => {
  event.preventDefault();
  adicionarAmigoNaLista();
});

buttonSort.addEventListener("click", () => {
  if (list.length > 0) {
    adicionarAmigoNoHtml();
  } else {
    alert("Adicione amigos antes de sortear!");
  }
});

newGameButton.addEventListener("click", () => {
  reiniciarJogo();
});
