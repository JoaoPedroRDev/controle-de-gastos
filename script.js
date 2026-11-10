const form = document.getElementById("formulario");
let nome = document.getElementById("nome");
let descricao = document.getElementById("descricao");
let data = document.getElementById("data");
let valor = document.getElementById("valor");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(Number(valor.value));
});

// arrays