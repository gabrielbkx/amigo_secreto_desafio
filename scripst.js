const list = [];

const buttonSort = document.getElementById("sort-button");

const button = document.getElementById("add");

const input = document.querySelector("input");

const friendsList = document.querySelector("ul");

function gerarAmigoAleatorio(list) {

  const nomeAleatorio = list.sort(() => Math.random() - 0.5)[0];

  return nomeAleatorio;

}

button.addEventListener("click", () => {
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
});


buttonSort.addEventListener("click", () => {
  const h4 = document.createElement("h4")
  const amigoSecreto = gerarAmigoAleatorio(list);

})