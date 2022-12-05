var blockClick = false;
const container = document.querySelector(".form--container");

document.addEventListener("DOMContentLoaded", initPage(), false);
document
  .querySelector(".form-submit")
  .addEventListener("click", submmitFormTreat, false);
const closePopUp = document
  .querySelector(".result-close-window")
  .addEventListener("click", closeWindowResults, false);

// para bloquear clicks atrás do popup
document
  .getElementsByTagName("section")[0]
  .addEventListener("click", blockAllClicks, false);
document
  .getElementsByTagName("header")[0]
  .addEventListener("click", blockAllClicks, false);
document
  .getElementsByTagName("footer")[0]
  .addEventListener("click", blockAllClicks, false);

function blockAllClicks(event) {
  if (blockClick) {
    console.log("BLOQUEADO");
    event.stopImmediatePropagation();
    event.preventDefault();
  }
}
// Ler as universidades salvas e gerar seus componentes
function initPage() {
  console.log("Iniciando Form page");
  var storage = localStorage.getItem("formulario"); // Recupera os dados
  storage = JSON.parse(storage);
  if (storage == null) {
    storage = [];
  }

  storage.forEach((element, questionIndex) => {
    const newQuestion = document.createElement("div");
    newQuestion.id = element.id;
    newQuestion.classList.add("indv-container");

    var todasRespostas = "";
    var indicator = "A";

    element.respostas.forEach((resp, respIndex) => {
      todasRespostas += `
      <div class=${element.respostas.length ? "div-resp" : "hide"}>
            <input class="questions-radio" type="radio" id="question_${questionIndex}_a_${respIndex}" value="${respIndex}" name="question_${questionIndex}_st">
            <label class="questions-text" for="question_${questionIndex}_a_${respIndex}">${
        "<strong>" + indicator + " - " + "</strong>" + resp
      }</label>
      </div>
        `;
      function nextLetter(indicator) {
        return indicator.replace(/([a-zA-Z])[^a-zA-Z]*$/, function (a) {
          var c = a.charCodeAt(0);
          switch (c) {
            case 90:
              return "A";
            case 122:
              return "a";
            default:
              return String.fromCharCode(++c);
          }
        });
      }

      indicator = nextLetter(indicator);
    });

    newQuestion.innerHTML = `
    <div>
      <img class="form-img" src="../imagens/form/${
        questionIndex + 1
      }.svg" alt="image${questionIndex + 1}">
    </div>
    <div class="quest-container">
      <p class="question-st" id="question_0">
        ${questionIndex + 1 + ") " + element.pergunta}
      </p>
      ${todasRespostas}
      <br>
    </div>
    `;

    container.appendChild(newQuestion);
  });

  if (storage.length != null) {
    const button = document.createElement("button");
    button.innerHTML = "Descobrir meu curso!";
    button.type = "submit";

    button.classList.add("form-link");
    button.classList.add("form-submit");

    container.appendChild(button);
  }

  resWindow();
}

function submmitFormTreat(event) {
  event.preventDefault();
  if (!blockClick) {
    const allQuestions = document.getElementsByClassName("quest-container");

    let checked = false;

    for (let i = 0; i < allQuestions.length; i++) {
      checked = false;
      for (let j = 1; j < allQuestions[i].children.length - 1; j++) {
        // console.log(
        //   "respostas da pergunta ",
        //   i + 1,
        //   ": ",
        //   allQuestions[i].children[j]
        // );
        if (allQuestions[i].children[j].children[0].checked) {
          // console.log(allQuestions[i].children[j].children[0]);
          checked = true;
        }
      }
    }

    if (!checked) {
      alert("Você precisa responder todas perguntas para obter um resultado!");
    } else {
      // Todas perguntas respondidas; tratar o resultado e redirencionar
      treatResponses(allQuestions);
    }
  }
}

function treatResponses(allQuestions) {
  const popUpResult = document.getElementsByClassName("popup-result")[0];

  let maiorPontuacao = {};

  let points = [
    { name: "Ciências da Computação", pontos: 0 },
    { name: "Sistemas de Informação", pontos: 0 },
    { name: "Engenharia de Software", pontos: 0 },
    { name: "Engenharia de Computação", pontos: 0 },
    { name: "Analise e Desenvolvimento de Sistemas", pontos: 0 },
  ];

  for (let i = 0; i < allQuestions.length; i++) {
    for (let j = 1; j < allQuestions[i].children.length - 1; j++) {
      if (allQuestions[i].children[j].children[0].checked) {
        points[j - 1].pontos++;
      }
    }
  }

  maiorPontuacao.index = 0;
  maiorPontuacao.pontos = points[0].pontos;
  maiorPontuacao.iguais = [];

  for (let i = 1; i < points.length; i++) {
    if (points[i].pontos > maiorPontuacao.pontos) {
      maiorPontuacao.index = i;
    } else if (points[i].pontos == maiorPontuacao.pontos) {
      maiorPontuacao.iguais.push(i);
    }
  }
  console.log(points);
  if (maiorPontuacao.iguais.length) {
    maiorPontuacao.index = maiorPontuacao.iguais[0];
  }
  console.log(maiorPontuacao);
  popUpResult.classList.remove("hide");
  popUpResult.classList.add("show-popup");

  window.scrollTo({
    top: 80,
    behavior: "smooth",
  });

  blockClick = true;

  document.getElementsByTagName("section")[0].classList.add("blur-page");
  document.getElementsByTagName("header")[0].classList.add("blur-page");
  document.getElementsByTagName("footer")[0].classList.add("blur-page");

  fillPopUpResult(points[maiorPontuacao.index].name, popUpResult);
}

function fillPopUpResult(nome, janela) {
  // nome do curso
  janela.querySelector(".result-title").innerHTML = nome;

  // imagem aleatória da pasta
  janela.querySelector(
    ".result-random-image"
  ).src = `../imagens/form/${parseInt(1 + Math.random() * 11)}.svg`;

  // Descrição do curso
  let courseDescription = "";
  var storage = localStorage.getItem("graduacoes"); // Recupera os dados
  storage = JSON.parse(storage);
  if (storage == null) {
    storage = [];
  }

  for (let i = 0; i < storage.length; i++) {
    if (nome.toUpperCase() == storage[i].nome.toUpperCase()) {
      courseDescription = storage[i].descricao;
      break;
    }
  }
  janela.querySelector(".result-description").innerHTML = courseDescription;
}

function closeWindowResults() {
  const popUpResult = document.getElementsByClassName("popup-result")[0];

  popUpResult.classList.add("hide");
  popUpResult.classList.remove("show-popup");

  document.getElementsByTagName("section")[0].classList.remove("blur-page");
  document.getElementsByTagName("header")[0].classList.remove("blur-page");
  document.getElementsByTagName("footer")[0].classList.remove("blur-page");

  blockClick = false;
}
