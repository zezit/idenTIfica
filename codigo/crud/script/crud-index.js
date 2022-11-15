const TELA_INICIAL = 1;
const FORMULARIO = 2;
const GRADUACOES = 3;
const UNIVERSIDADES = 4;

// alterna entre as páginas
document
  .querySelector(".container--opt")
  .addEventListener("click", changePage, false);

document.addEventListener("DOMContentLoaded", initPage(event), false);

function initPage(event) {
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
  // limpa lista
  document.getElementsByClassName("container--conteudo-list")[0].innerHTML = "";
  
  var sub = document.getElementById("subtitle");

  switch (parseInt(id)) {
    case TELA_INICIAL:
      sub.innerHTML = "TELA INICIAL";
      break;
    case FORMULARIO:
      sub.innerHTML = "FORMULÁRIO";
      break;
    case GRADUACOES:
      sub.innerHTML = "GRADUAÇÕES";
      break;
    case UNIVERSIDADES:
      sub.innerHTML = "UNIVERSIDADES";
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
              <a onClick=goToEditPage("./edit-content.html?id=${index}")>EDITAR</a>
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
  var storage = localStorage.getItem("universidades"); // Recupera os dados
  storage = JSON.parse(storage);
  if (storage == null) {
    storage = [];
  }
  // console.log(storage);

  let universidadesObj = {
    id: storage.length,
    nome: "Novo Item",
    link: "",
    image: "",
    descricao: "Insira uma descrição",
    ruf2019: {
      ensino: 1,
      pesquisa: 1,
      mercado: 1,
    },
    cursos: 1,
  };

  storage.push(universidadesObj);

  // console.log(storage);

  localStorage.setItem("universidades", JSON.stringify(storage));

  showUniversidade();
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

function goToEditPage(string) {
  window.location.href = string;
}

/**
 * Deleta conteúdo do storage
 */
function deleteContent(index) {
  console.log(index);

  var storage = window.localStorage.getItem("universidades"); // pega local data

  if (storage != null) {
    let newStorage = JSON.parse(storage);

    newStorage.splice(index, 1); // 2nd parameter means remove one item only

    localStorage.setItem("universidades", JSON.stringify(newStorage));

    showUniversidade();
    verifyListBorder();
  }
}
