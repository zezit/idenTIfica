import data from "../data/dados.js";

const container = document.querySelector(".uni--containers");

document.addEventListener("DOMContentLoaded", initPage(), false);

// Ler as universidades salvas e gerar seus componentes
function initPage() {
  data.forEach((element) => {
    const newUniv = document.createElement("div");

    newUniv.innerHTML = `
        <a rel="noopener noreferrer" class="nome-univ name-univ-top" target="_blank" href="${element.link}">${element.nome}</a>
        <div class="univ-image">
          <img src="${element.image}" alt="image universidade"/>
        </div>
        <div class="right-desc">
          <a rel="noopener noreferrer" class="nome-univ" target="_blank" href="https://www.pucminas.br">PUC Minas</a>
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
          <div class="cursos-univ">
            <img src="../imagens/univ.svg" alt="universidade vector"/>
            <p>${element.cursos} cursos ofertados</p>
          </div>
        </div>
    `;
    newUniv.classList.add("poster-univ");
    container.appendChild(newUniv);
  });
}
