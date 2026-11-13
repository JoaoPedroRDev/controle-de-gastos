// ===== Elementos da página =====
// const porque essas referências nunca são trocadas por outro elemento
const form = document.getElementById("formulario");
const nome = document.getElementById("nome");
const descricao = document.getElementById("descricao");
const data = document.getElementById("data");
const valor = document.getElementById("valor");
const listagem = document.getElementById("listagem");
const total = document.getElementById("total");

// ===== Dados =====
// Começa com o que estiver salvo no navegador.
// Se não houver nada (getItem devolve null), o || faz começar com uma lista vazia.
let lista = JSON.parse(localStorage.getItem("gastos")) || [];

// ===== Funções =====

// Cria um <li> na tela para UM gasto
function mostrarGasto(gasto) {
  const item = document.createElement("li");
  item.textContent = `${gasto.nome} - R$ ${gasto.valor}`;
  listagem.appendChild(item);
}

// Soma o valor de todos os gastos e mostra no total
function somarValores() {
  let soma = 0; // fora do forEach para ir acumulando a cada volta

  lista.forEach((gasto) => {
    soma = soma + gasto.valor;
  });

  // toFixed(2) evita números como 0.30000000000000004 e sempre mostra 2 casas
  total.textContent = soma.toFixed(2);
}

// ===== Eventos =====

form.addEventListener("submit", function (e) {
  e.preventDefault(); // impede a página de recarregar ao enviar o formulário

  // monta o objeto com os dados digitados
  const gasto = {
    nome: nome.value,
    descricao: descricao.value,
    data: data.value,
    valor: Number(valor.value), // o input devolve texto, aqui vira número
  };

  lista.push(gasto); // 1. guarda no array
  localStorage.setItem("gastos", JSON.stringify(lista)); // 2. salva (array vira texto)
  mostrarGasto(gasto); // 3. mostra na tela
  somarValores(); // 4. atualiza o total
  form.reset(); // 5. limpa os campos para o próximo gasto
});

// ===== Ao abrir a página =====
// Desenha os gastos que já estavam salvos
lista.forEach((gasto) => {
  mostrarGasto(gasto);
});

// Calcula o total uma vez só, depois de desenhar tudo (mostra 0 se a lista estiver vazia)
somarValores();
