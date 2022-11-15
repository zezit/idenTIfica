document.addEventListener("DOMContentLoaded", initPage(), false);

document
  .querySelector("#save-button")
  .addEventListener("click", salvarDados, false);

function initPage() {
  console.log(window.location);
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
