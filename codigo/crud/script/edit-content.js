document.addEventListener("DOMContentLoaded", initPage, false);

// botão de salvar alterações
document
  .querySelector("#save-button")
  .addEventListener("click", saveEditedContent, false);

// botão de excluir página
document
  .querySelector("#delete-button")
  .addEventListener("click", deleteContent, false);

function formCampos(pagina) {
  const campos = document.querySelector("form");

  switch (pagina) {
    case "inicial":
      break;
    case "formulario":
      campos.innerHTML = `
      <label class="campo-pergunta">Pergunta:<input type="text" name="pergunta-form" id="pergunta-form" /></label>
        <div class="todas-respostas">
          <label class="campo-resposta">A: <input type="url" name="resposta1" id="resposta1" /></label>
          <label class="campo-resposta">B: <input type="url" name="resposta2" id="resposta2" /></label>
          <label class="campo-resposta">C: <input type="url" name="resposta3" id="resposta3" /></label>
          <label class="campo-resposta">D: <input type="url" name="resposta4" id="resposta4" /></label>
          <label class="campo-resposta">E: <input type="url" name="resposta5" id="resposta5" /></label>
        </div>
      `;
      break;
    case "graduacoes":
      break;
    case "universidades":
      campos.innerHTML = `
      <label class="campo-title"
            >Nome:<input
              type="text"
              name="title-universidade"
              id="title-universidade"/>
      </label>
      <label class="campo-link"
            >Link:<input
              type="url"
              name="link-universidade"
              id="link-universidade"/>
      </label>
      <label class="campo-image"
            >Imagem:<input
              type="url"
              name="link-imagem-universidade"
              id="link-imagem-universidade"
          /></label>
          <label class="campo-desc"
            >Descrição:
            <textarea
              id="descricao-universidade"
              name="descricao-universidade"
              row="100"
            ></textarea>
          </label>
          <div class="line1-numbers">
            <label
              >Ensino:
              <input
                type="number"
                min="1"
                value="1"
                name="ensino-universidade"
                id="ensino-universidade"
            /></label>

            <label
              >Mercado:
              <input
                type="number"
                min="1"
                value="1"
                name="mercado-universidade"
                id="mercado-universidade"
            /></label>
          </div>

          <div class="line2-numbers">
            <label
              >Pesquisa:
              <input
                type="number"
                min="1"
                value="1"
                name="pesquisa-universidade"
                id="pesquisa-universidade"
            /></label>

            <label>
              Número de cursos:
              <input
                type="number"
                min="1"
                value="1"
                name="cursos-universidade"
                id="cursos-universidade"
            /></label>
          </div>
      `;
      break;
    default:
      break;
  }
}

function initPage() {
  let params = new URL(document.location).searchParams;
  let id = params.get("id");
  let page = params.get("page");

  console.log("id:", id);
  console.log("pagina:", page);

  formCampos(page);

  // pega o item de mesmo id no localstorage
  var storage = getStoredData(id, page);
  const form = document.querySelector("#formDados");

  switch (page) {
    case "inicial":
      document.querySelector(".page--title").innerHTML = "TELA INICIAL";
      break;
    case "formulario":
      document.querySelector(".page--title").innerHTML = "FORMULÁRIO";

      let indexF = 0;
      form[indexF++].value = storage.pergunta;
      for (let i = 0; i < storage.respostas.length; i++) {
        form[indexF++].value = storage.respostas[i];
      }
      break;
    case "graduacoes":
      document.querySelector(".page--title").innerHTML = "GRADUAÇÕES";
      break;
    case "universidades":
      document.querySelector(".page--title").innerHTML = "UNIVERSIDADE";

      let indexU = 0;
      form[indexU++].value = storage.nome;
      form[indexU++].value = storage.link;
      form[indexU++].value = storage.image;
      form[indexU++].value = storage.descricao;
      form[indexU++].value = storage.ruf2019.ensino;
      form[indexU++].value = storage.ruf2019.mercado;
      form[indexU++].value = storage.ruf2019.pesquisa;
      form[indexU++].value = storage.cursos;
      break;
    default:
      break;
  }
}

/**
 * Salva o conteudo editado
 */
function saveEditedContent() {
  let id = new URL(document.location).searchParams.get("id"); // pega id na url
  let page = new URL(document.location).searchParams.get("page"); // pega id na url

  var storage = window.localStorage.getItem(page); // pega local data

  let newStorage = JSON.parse(storage);
  console.log("before", newStorage);

  let form = document.querySelector("#formDados");

  let index = 0;

  if (storage != null) {
    switch (page) {
      case "inicial":
        break;
      case "formulario":
        newStorage[id].pergunta = form.elements[index++].value;
        newStorage[id].respostas[0] = form.elements[index++].value;
        newStorage[id].respostas[1] = form.elements[index++].value;
        newStorage[id].respostas[2] = form.elements[index++].value;
        newStorage[id].respostas[3] = form.elements[index++].value;
        newStorage[id].respostas[4] = form.elements[index++].value;
        break;
      case "graduacoes":
        break;
      case "universidades":
        newStorage[id].nome = form.elements[index++].value;
        newStorage[id].link = form.elements[index++].value;
        newStorage[id].image = form.elements[index++].value;
        newStorage[id].descricao = form.elements[index++].value;
        newStorage[id].ruf2019.ensino = parseInt(form.elements[index++].value);
        newStorage[id].ruf2019.mercado = parseInt(form.elements[index++].value);
        newStorage[id].ruf2019.pesquisa = parseInt(
          form.elements[index++].value
        );
        newStorage[id].cursos = parseInt(form.elements[index++].value);

        break;
      default:
        break;
    }
    console.log("after", newStorage);

    localStorage.setItem(page, JSON.stringify(newStorage));

    window.location.href = `./crud-index.html?page=${page}`;
  }
}

/**
 * Deleta conteúdo do storage
 */
function deleteContent() {
  let id = new URL(document.location).searchParams.get("id"); // pega id na url
  let page = new URL(document.location).searchParams.get("page"); // pega id na url

  var storage = window.localStorage.getItem(page); // pega local data
  console.log("antes:", storage);

  if (storage != null) {
    let newStorage = JSON.parse(storage);

    let index = -1;

    newStorage.forEach((element, i) => {
      if (i == id) {
        index = i;
      }
    });

    newStorage.splice(index, 1); // 2nd parameter means remove one item only

    newStorage = newStorage.map((element, i) => {
      return {
        ...element,
        id: i + 1,
      };
    });

    localStorage.setItem(page, JSON.stringify(newStorage));
    console.log("depois:", newStorage);

    window.location.href = "./crud-index.html";
  }
}

function getStoredData(id, page) {
  var storage = localStorage.getItem(page); // Recupera os dados
  storage = JSON.parse(storage);
  if (storage.length == 0 || storage== null) {
    storage = [];
  }
  storage = storage[id];

  return storage;
}
