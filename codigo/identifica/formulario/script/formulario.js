const container = document.querySelector(".form--container");

document.addEventListener("DOMContentLoaded", initPage(), false);

const submitFormBtn = document.querySelector(".form-submit");
submitFormBtn.addEventListener("click", submmitFormTreat, false);

// Ler as universidades salvas e gerar seus componentes
function initPage() {
  console.log('Iniciando Form page')
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
      todasRespostas +=
        `<div>
            <input class="questions-radio" type="radio" id="question_${questionIndex}_a_${respIndex}" value="${respIndex}" name="question_${questionIndex}_st">
            <label class="questions-text" for="question_${questionIndex}_a_${respIndex}">${"<strong>" + indicator + " - " + "</strong>" + resp}</label>
         </div>
        `
      function nextLetter(indicator) {
        return indicator.replace(/([a-zA-Z])[^a-zA-Z]*$/, function (a) {
          var c = a.charCodeAt(0);
          switch (c) {
            case 90: return 'A';
            case 122: return 'a';
            default: return String.fromCharCode(++c);
          }
        });
      }

      indicator = nextLetter(indicator)
    });

    newQuestion.innerHTML = `
    <p class="question-st" id="question_0">
      ${questionIndex + 1 + ") " + element.pergunta}
    </p>
    ${todasRespostas}
    <br>
    `;

    container.appendChild(newQuestion);
  });

  if (storage.length != null) {
    const button = document.createElement("button")
    button.innerHTML = "Descobrir meu curso!"
    button.type = "submit"

    button.classList.add("form-link")
    button.classList.add("form-submit")

    container.appendChild(button)
  }
}

function submmitFormTreat(event) {
  event.preventDefault();

  const allQuestions = document.querySelector(".form--container")

  let checked = false

  for (let i = 0; i < allQuestions.children.length - 1; i++) {
    // console.log(allQuestions.children[i])
    checked = false
    for (let j = 1; j < allQuestions.children[i].children.length - 1; j++) {
      // console.log(allQuestions.children[i].children[j].children[0].checked)
      if (allQuestions.children[i].children[j].children[0].checked) {
        checked = true;
      }
    }
  }

  if (!checked) {
    alert("Você precisa responder todas perguntas para obter um resultado!")
  }
  else {
    // Todas perguntas respondidas; tratar o resultado e redirencionar
  }
}