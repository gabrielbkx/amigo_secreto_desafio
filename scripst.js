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
  const p = document.createElement("p")
  const amigoSecreto = gerarAmigoAleatorio(list);

  p.textContent = `O amigo secreto sorteado é: ${amigoSecreto}`;
  p.style.color = "red";
  p.style.fontWeight = "bold"
  const liToRemove = document.querySelector("ul");

  liToRemove.parentNode.replaceChild(p, liToRemove);

})

