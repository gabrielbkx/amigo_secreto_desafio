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

<<<<<<< HEAD
  friendsList.replaceWith(p);

  friendsList.dataset.replacedBy = "p";
=======
  liToRemove.parentNode.replaceChild(p, liToRemove);

  input.addEventListener("click", () => {
    p.parentNode.removeChild(p);
  });
>>>>>>> parent of 0623442 (adicionado botao de reiniciar o jogo e adicionado no scrips.js a função que cuida disso)
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

<<<<<<< HEAD
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

=======
>>>>>>> parent of 0623442 (adicionado botao de reiniciar o jogo e adicionado no scrips.js a função que cuida disso)
// Código principal

form.addEventListener("submit", (event) => {
  event.preventDefault();
  adicionarAmigoNaLista();
  
});

buttonSort.addEventListener("click", () => {
  adicionarAmigoAleatorioNoHtml();
});
