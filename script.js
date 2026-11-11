let form = document.getElementById("formulario");
let nome = document.getElementById("nome");
let descricao = document.getElementById("descricao");
let data = document.getElementById("data");
let valor = document.getElementById("valor");
let listagem = document.getElementById("listagem");

// Pegando cada valor de cada caixa

let lista = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let gasto = {
    nome: nome.value,
    descricao: descricao.value,
    data: data.value,
    valor: Number(valor.value),
  };

  lista.push(gasto);

  console.log(lista);
});
