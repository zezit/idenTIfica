const TELA_INICIAL = 1;
const FORMULARIO = 2;
const GRADUACOES = 3;
const UNIVERSIDADES = 4;

document
  .querySelector(".container--opt")
  .addEventListener("click", changePage, false);

document.addEventListener("DOMContentLoaded", initPage(), false);

function initPage() {
  verifyListBorder();
}

/**
 * tratamento do botão de troca das paginas existentes
 * @param {*} event
 */
function changePage(event) {
  for (let i = 1; i < 5; i++) {
    document.getElementById(i).classList.remove("opt--selected-initial");
    document.getElementById(i).classList.remove("opt--selected-center");
    document.getElementById(i).classList.remove("opt--selected-end");
    document.getElementById(i).classList.remove("opt-selected");
  }

  document.getElementById(event.target.id).classList.add("opt-selected");

  switch (parseInt(event.target.id)) {
    case TELA_INICIAL:
      document
        .getElementById(event.target.id)
        .classList.add("opt--selected-initial");
      break;
    case FORMULARIO:
      document
        .getElementById(event.target.id)
        .classList.add("opt--selected-center");
      break;
    case GRADUACOES:
      document
        .getElementById(event.target.id)
        .classList.add("opt--selected-center");
      break;
    case UNIVERSIDADES:
      document
        .getElementById(event.target.id)
        .classList.add("opt--selected-end");
      break;
    default:
      break;
  }

  changeContent(event.target.id);
}

function changeContent(id) {
  switch (parseInt(id)) {
    case TELA_INICIAL:
      break;
    case FORMULARIO:
      break;
    case GRADUACOES:
      break;
    case UNIVERSIDADES:
      showUniversidade();
      break;
    default:
      break;
  }
}

function showUniversidade() {
  var data = [];
  //   var data = require("../../identifica/universidades/data/dados.json");
  fetch("../../identifica/universidades/data/dados.json")
    .then((response) => response.json())
    .then((content) => {
      content.forEach((uni) => {
        data.push(uni);
      });
    });

  console.log(
    "🚀 ~ file: crud-index.js ~ line 71 ~ showUniversidade ~ data",
    data[0]
  );

  const docToChange = document.getElementsByClassName(
    "container--conteudo-list"
  );

  data.forEach((element) => {
    // console.log(element);
    const novaLinha = document.createElement("li");
    novaLinha.innerHTML = `
      <div class="list--inside">
          <div>
              <span class="title--content">${element.nome}</span>
              <span class="text--content">${element.descricao}</span>
          </div>
          <div class="buttons--content">
              <button>UPDATE</button>
              <button>DELETE</button>
          </div>
      </div>
  //     `;

    console.log(novaLinha);
    docToChange.appendChild(novaLinha);
  });
}

/**
 * Adiciona item novo na base de dados de cada pagina do sistema
 */
function addNewItem() {
  const docToChange = document.getElementsByClassName(
    "container--conteudo-list"
  )[0];

  const novaLinha = document.createElement("li");
  novaLinha.innerHTML = `
      <div class="list--inside">
          <div>
              <span class="title--content">Novo Item</span>
              <span class="text--content">Insira uma descrição</span>
          </div>
          <div class="buttons--content">
              <a href="./edit-content.html">UPDATE</a>
              <button>DELETE</button>
          </div>
      </div>
  `;

  novaLinha.setAttribute("id", `list-index-${docToChange.children.length}`);

  console.log(novaLinha);
  docToChange.appendChild(novaLinha);

  verifyListBorder();
}

function verifyListBorder() {
  let list = document.getElementsByClassName("container--conteudo-list");

  if (list[0].children.length) {
    list[0].classList.add("borders-list");
  } else {
    list[0].classList.remove("borders-list");
  }
}
