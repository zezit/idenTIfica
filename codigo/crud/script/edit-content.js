document.addEventListener("DOMContentLoaded", initPage(), false);

document
  .querySelector("#save-button")
  .addEventListener("click", saveEditedContent, false);

function initPage() {
  let params = new URL(document.location).searchParams;
  let id = params.get("id");
  // console.log(id);

  // pega o item de mesmo id no localstorage
  var storage = localStorage.getItem("universidades"); // Recupera os dados
  storage = JSON.parse(storage);
  if (storage == null) {
    storage = [];
  }
  storage = storage[id];
  // console.log(storage[id]);

  const form = document.querySelector("#formDados");

  let index = 0;
  form[index++].value = storage.nome;
  form[index++].value = storage.link;
  form[index++].value = storage.image;
  form[index++].value = storage.descricao;
  form[index++].value = storage.ruf2019.ensino;
  form[index++].value = storage.ruf2019.mercado;
  form[index++].value = storage.ruf2019.pesquisa;
  form[index++].value = storage.cursos;
}

function salvarDados() {
  var storage = localStorage.getItem("universidades"); // Recupera os dados
  storage = JSON.parse(storage);
  if (storage == null) {
    storage = [];
  }
  console.log(storage);

  let form = document.querySelector("#formDados");

  let universidadesObj = {
    id: 1,
    nome: "PUC Minas",
    link: "https://www.pucminas.br",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b4/Entradapucminas.jpg",
    descricao: "Descrição da universidade...",
    ruf2019: {
      ensino: 50,
      pesquisa: 99,
      mercado: 6,
    },
    cursos: 130,
  };

  let index = 0;
  universidadesObj.id = storage.length; // TODO pegar o tamanho salvo no localstorage
  universidadesObj.nome = form.elements[index++].value;
  universidadesObj.link = form.elements[index++].value;
  universidadesObj.image = form.elements[index++].value;
  universidadesObj.descricao = form.elements[index++].value;
  universidadesObj.ruf2019.ensino = form.elements[index++].value;
  universidadesObj.ruf2019.mercado = form.elements[index++].value;
  universidadesObj.ruf2019.pesquisa = form.elements[index++].value;
  universidadesObj.cursos = form.elements[index++].value;

  storage.push(universidadesObj);

  console.log(storage);

  localStorage.setItem("universidades", JSON.stringify(storage));

  // pega o valor da entrada
  //   console.log(form.elements[6].value);
}

/**
 * Salva o conteudo editado
 */
function saveEditedContent() {
  let id = new URL(document.location).searchParams.get("id"); // pega id na url
  var storage = window.localStorage.getItem("universidades"); // pega local data

  if (storage != null) {
    let newStorage = JSON.parse(storage);
    console.log("before", newStorage);

    let form = document.querySelector("#formDados");

    let index = 0;
    newStorage[id].nome = form.elements[index++].value;
    newStorage[id].link = form.elements[index++].value;
    newStorage[id].image = form.elements[index++].value;
    newStorage[id].descricao = form.elements[index++].value;
    newStorage[id].ruf2019.ensino = parseInt(form.elements[index++].value);
    newStorage[id].ruf2019.mercado = parseInt(form.elements[index++].value);
    newStorage[id].ruf2019.pesquisa = parseInt(form.elements[index++].value);
    newStorage[id].cursos = parseInt(form.elements[index++].value);

    console.log("after", newStorage);

    localStorage.setItem("universidades", JSON.stringify(newStorage));

    window.location.href = "./crud-index.html";
  }
}
