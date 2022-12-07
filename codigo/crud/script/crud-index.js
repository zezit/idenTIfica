const TELA_INICIAL = 1;
const FORMULARIO = 2;
const GRADUACOES = 3;
const UNIVERSIDADES = 4;

// alterna entre as páginas
document
  .querySelector(".container--opt ul")
  .addEventListener("click", changePage, false);

document.addEventListener("DOMContentLoaded", initPage, false);

function initPage(event) {
  const url = new URL(window.location);
  if (url.searchParams.get("page") == null) {
    console.log("iniciando");
    url.searchParams.set("page", "inicial");
    window.history.pushState({}, "", url);
  }

  // showPage(url.searchParams.get("page"));
  verifyListBorder();
}

function showPage(page) {
  console.log(page);
  // for (let i = 1; i < 5; i++) {
  //   document.getElementById(i).classList.remove("opt--selected-initial");
  //   document.getElementById(i).classList.remove("opt--selected-center");
  //   document.getElementById(i).classList.remove("opt--selected-end");
  //   document.getElementById(i).classList.remove("opt-selected");
  // }

  // let idAux;
  // switch (page) {
  //   case "inicial":
  //     idAux = TELA_INICIAL;
  //     break;
  //   case "formularios":
  //     idAux = FORMULARIO;
  //     break;
  //   case "graduacoes":
  //     idAux = GRADUACOES;
  //     break;
  //   case "universidades":
  //     idAux = UNIVERSIDADES;
  //     break;
  //   default:
  //     break;
  // }

  // document.getElementById(idAux).classList.add("opt-selected");

  // switch (parseInt(idAux)) {
  //   case TELA_INICIAL:
  //     document.getElementById(idAux).classList.add("opt--selected-initial");
  //     break;
  //   case FORMULARIO:
  //     document.getElementById(idAux).classList.add("opt--selected-center");
  //     break;
  //   case GRADUACOES:
  //     document.getElementById(idAux).classList.add("opt--selected-center");
  //     break;
  //   case UNIVERSIDADES:
  //     document.getElementById(idAux).classList.add("opt--selected-end");
  //     break;
  //   default:
  //     break;
  // }

  // changeContent(idAux);
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
  // limpa lista
  document.getElementsByClassName("container--conteudo-list")[0].innerHTML = "";

  var sub = document.getElementById("subtitle");
  const url = new URL(window.location);

  switch (parseInt(id)) {
    case TELA_INICIAL:
      sub.innerHTML = "TELA INICIAL";
      url.searchParams.set("page", "inicial");
      window.history.pushState({}, "", url);
      break;
    case FORMULARIO:
      sub.innerHTML = "FORMULÁRIO";
      url.searchParams.set("page", "formulario");
      window.history.pushState({}, "", url);
      showFormulario();
      break;
    case GRADUACOES:
      sub.innerHTML = "GRADUAÇÕES";
      url.searchParams.set("page", "graduacoes");
      window.history.pushState({}, "", url);
      break;
    case UNIVERSIDADES:
      sub.innerHTML = "UNIVERSIDADES";
      url.searchParams.set("page", "universidades");
      window.history.pushState({}, "", url);
      showUniversidade();
      break;
    default:
      break;
  }
  verifyListBorder();
}

function showUniversidade() {
  document.getElementsByClassName("container--conteudo-list")[0].innerHTML = "";

  var storage = localStorage.getItem("universidades"); // Recupera os dados
  storage = JSON.parse(storage);
  if (storage == null) {
    storage = [];
  }

  const docToChange = document.getElementsByClassName(
    "container--conteudo-list"
  );

  storage.forEach((element, index) => {
    const novaLinha = document.createElement("li");
    let desc = element.descricao.slice(0, 50);
    desc = desc + "...";

    novaLinha.innerHTML = `
      <div class="list--inside">
          <div>
              <span class="title--content">${element.nome}</span>
              <span class="text--content">${desc}</span>
          </div>
          <div class="buttons--content">
              <a onClick=goToEditPage("./edit-content.html?id=${index}&page=universidades")>EDITAR</a>
              <button onClick="deleteContent(${index})">DELETAR</button>
          </div>
      </div>
   `;

    // console.log(novaLinha);
    docToChange[0].appendChild(novaLinha);
  });
}

function showFormulario() {
  document.getElementsByClassName("container--conteudo-list")[0].innerHTML = "";

  var storage = localStorage.getItem("formulario"); // Recupera os dados
  storage = JSON.parse(storage);
  if (storage == null) {
    storage = [];
  }

  const docToChange = document.getElementsByClassName(
    "container--conteudo-list"
  );

  storage.forEach((element, index) => {
    const novaLinha = document.createElement("li");
    let quest = element.pergunta.slice(0, 50);
    quest = quest + "...";

    novaLinha.innerHTML = `
      <div class="list--inside">
          <div>
              <span class="title--content">${index + 1 + ") "}</span>
              <span class="text--content">${quest}</span>
          </div>
          <div class="buttons--content">
              <a onClick=goToEditPage("./edit-content.html?id=${index}&page=formulario")>EDITAR</a>
              <button onClick="deleteContent(${index})">DELETAR</button>
          </div>
      </div>
   `;

    // console.log(novaLinha);
    docToChange[0].appendChild(novaLinha);
  });
}

/**
 * Adiciona item novo na base de dados de cada pagina do sistema
 */
function addNewItem() {
  // salva no localstorage
  let elemento = document.querySelector(".opt-selected");
  var page = elemento.classList[0];
  var storage = localStorage.getItem(page); // Recupera os dados
  storage = JSON.parse(storage);
  if (storage == null) {
    storage = [];
  }
  console.log(storage);

  switch (page) {
    case "inicial":
      break;
    case "formulario":
      storage.push({
        id: storage.length + 1,
        pergunta: "Nova pergunta",
        respostas: [
          "Resposta A",
          "Resposta B",
          "Resposta C",
          "Resposta D",
          "Resposta E",
        ],
      });
      break;
    case "graduacoes":
      break;
    case "universidades":
      storage.push({
        id: storage.length,
        nome: "Novo Item",
        link: "",
        image:
          "https://media.istockphoto.com/id/922962354/vector/no-image-available-sign.jpg?b=1&s=170667a&w=0&k=20&c=VqpxaeBt-p0q2JlujQV-0fmCsaD3NeP4mmOUX4uZEIc=",
        descricao: "Insira uma descrição",
        ruf2019: {
          ensino: 1,
          pesquisa: 1,
          mercado: 1,
        },
        cursos: 1,
      });
      break;
    default:
      break;
  }

  console.log(storage);

  localStorage.setItem(page, JSON.stringify(storage));

  showPage(page);
  verifyListBorder();
}

function showPage(pagina) {
  switch (pagina) {
    case "inicial":
      break;
    case "formulario":
      showFormulario();
      break;
    case "graduacoes":
      break;
    case "universidades":
      showUniversidade();
      break;
    default:
      break;
  }
}

function verifyListBorder() {
  let list = document.getElementsByClassName("container--conteudo-list");

  if (list[0].children.length) {
    list[0].classList.add("borders-list");
  } else {
    list[0].classList.remove("borders-list");
  }
}

function goToEditPage(string) {
  window.location.href = string;
}

/**
 * Deleta conteúdo do storage
 */
function deleteContent(index) {
  console.log(index);

  let elemento = document.querySelector(".opt-selected");
  var page = elemento.classList[0];

  var storage = window.localStorage.getItem(page); // pega local data

  if (storage != null) {
    let newStorage = JSON.parse(storage);

    newStorage.splice(index, 1); // 2nd parameter means remove one item only

    newStorage = newStorage.map((element, i) => {
      return {
        ...element,
        id: i + 1,
      };
    });

    localStorage.setItem(page, JSON.stringify(newStorage));

    showPage(page);
    verifyListBorder();
  }
}
