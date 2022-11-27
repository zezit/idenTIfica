const container = document.querySelector(".uni--containers");

var cards = 0;

document.addEventListener("DOMContentLoaded", initPage(), false);
window.addEventListener("resize", windowSizeChange, false);

// Ler as universidades salvas e gerar seus componentes
function initPage() {
  var storage = localStorage.getItem("universidades"); // Recupera os dados
  storage = JSON.parse(storage);
  if (storage == null) {
    storage = [];
  }

  storage.forEach((element) => {
    cards++;
    const newUniv = document.createElement("div");
    newUniv.id = element.id;
    
    newUniv.innerHTML = `
        <a rel="noopener noreferrer" class="nome-univ name-univ-top" target="_blank" href="${element.link}">${element.nome}</a>
        <div class="univ-image">
          <img src="${element.image}" alt="image universidade"/>
        </div>
        <div class="right-desc">
          <a rel="noopener noreferrer" class="nome-univ" target="_blank" href="${element.link}">${element.nome}</a>
          <div class="top-univ-cursos">
            <img src="../imagens/univ.svg" alt="universidade vector"/>
            <p>${element.cursos} cursos ofertados</p>
          </div>
          <p class="desc-univ">
            ${element.descricao}
          </p>
          <table class="ruf-univ">
            <tr class="ruf-titles">
              <td>Ensino</td>
              <td>Pesquisa</td>
              <td>Mercado</td>
            </tr>
            <tr class="ruf-value">
              <td class="ensino-pos">${element.ruf2019.ensino}º</td>
              <td class="pesquisa-pos">${element.ruf2019.pesquisa}º</td>
              <td class="mercado-pos">${element.ruf2019.mercado}º</td>
            </tr>
          </table>

          <div class="mobile-ruf-univ">
              <table class="ruf-vertical">
                <tr class="ruf-titles-vertical">
                  <td class="border-top">Ensino</td>
                  <td class="ensino-pos">${element.ruf2019.ensino}º</td>
                </tr>
                <tr class="ruf-titles-vertical">
                  <td>Pesquisa</td>
                  <td class="pesquisa-pos">${element.ruf2019.pesquisa}º</td>
                </tr>
                <tr class="ruf-titles-vertical">
                  <td>Mercado</td>
                  <td class="mercado-pos">${element.ruf2019.mercado}º</td>
                </tr>
              </table>
          </div>

          <div class="link--ver-mais">
            <a id=${element.id} class="open-more">Ver mais...</a>
          </div>

          <div class="cursos-univ">
            <img src="../imagens/univ.svg" alt="universidade vector"/>
            <p>${element.cursos} cursos ofertados</p>
          </div>
        </div>
    `;
    newUniv.classList.add("poster-univ");

    container.appendChild(newUniv);
  });

  windowSizeChange();
}

function windowSizeChange() {
  if (window.screen.width <= 750) {
    const newDesc = document.getElementsByClassName("desc-univ");

    for (let i = 0; i < newDesc.length; i++) {
      var textOld = newDesc.item(i).innerHTML;
      var textoNew = textOld.slice(0, 300);
      textoNew = textoNew + "...";

      newDesc.item(i).innerHTML = textoNew;
    }
  } else {
    const div = document.querySelectorAll(".mobile-ruf-univ");
    for (let i = 0; i < div.length; i++) {
      div[i].classList.remove("show-flex");
    }

    var storage = localStorage.getItem("universidades"); // Recupera os dados
    storage = JSON.parse(storage);
    if (storage == null) {
      storage = [];
    }
  }
}

var elements = document.getElementsByClassName("open-more");

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", verMais, false);
}

function verMais() {
  const div =
    document.getElementsByClassName("uni--containers")[0].children[
      parseInt(this.id) - 1
    ];

  div.querySelector(".univ-image img").classList.add("show");
  div.querySelector(".mobile-ruf-univ").classList.add("show-flex");
  div.querySelector(".link--ver-mais").classList.add("hide");
}
