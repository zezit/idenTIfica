window.addEventListener("resize", resWindow, true);
document
  .querySelector(".button--search-bar")
  .addEventListener("click", searchResults, false);

document
  .querySelector(".mob-button--search-bar")
  .addEventListener("click", searchResults, false);

document
  .querySelector(".clear-button--search-bar")
  .addEventListener("click", closeList, false);

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function onclickMenuMobile() {
  var mobileMenu = document.getElementsByClassName("options--container-mobile");
  mobileMenu[0].classList.toggle("show");
}

function closeList() {
  document.querySelector(".list-found").classList.add("hide");
  document.querySelector(".list-found-mob").classList.add("hide");
}

function searchResults(event) {
  event.stopPropagation();
  event.preventDefault();

  var aux =
    event.path[1].classList[0] == "button--search-bar"
      ? ".search-input"
      : ".mob-search-input";

  const inputSearch = document.querySelector(aux).value;
  if (!inputSearch.length) {
    return;
  }

  aux =
    event.path[1].classList[0] == "button--search-bar"
      ? ".list-found"
      : ".list-found-mob";

  const containerList = document.querySelector(aux);
  containerList.innerHTML = "";

  var found = []; // armazena os resultados

  var universidades = localStorage.getItem("universidades"); // Recupera os dados
  universidades = JSON.parse(universidades);
  if (universidades == null) {
    universidades = [];
  }

  universidades.forEach((element) => {
    if (
      element.nome
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(
          inputSearch
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
        ) ||
      inputSearch
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(
          element.nome
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
        )
    ) {
      found.push({
        page: "universidades",
        id: element.id,
        show: element.nome,
      });
    }
  });

  // var graduacoes = localStorage.getItem("graduacoes"); // Recupera os dados
  // graduacoes = JSON.parse(graduacoes);
  // if (graduacoes == null) {
  //   graduacoes = [];
  // }

  // graduacoes.forEach((element) => {
  //   if (
  //     element.nome
  //       .toLowerCase()
  //       .normalize("NFD")
  //       .replace(/[\u0300-\u036f]/g, "")
  //       .includes(
  //         inputSearch
  //           .toLowerCase()
  //           .normalize("NFD")
  //           .replace(/[\u0300-\u036f]/g, "")
  //       ) ||
  //     inputSearch
  //       .toLowerCase()
  //       .normalize("NFD")
  //       .replace(/[\u0300-\u036f]/g, "")
  //       .includes(
  //         element.nome
  //           .toLowerCase()
  //           .normalize("NFD")
  //           .replace(/[\u0300-\u036f]/g, "")
  //       )
  //   ) {
  //     found.push({
  //       page: "graduacoes",
  //       id: element.id,
  //       show: element.nome,
  //     });
  //   }
  // });

  const allFound = document.createElement("ul");
  allFound.id = "lista-encontrados";
  var listasConjunto = "";

  document.querySelector(aux).classList.remove("hide");

  if (found.length) {
    console.log("found", found);

    found.forEach((element) => {
      listasConjunto += `
      <li class="">
        <a target="_blank" rel="noopener noreferrer" href="codigo/identifica/${element.page}/${element.page}.html#${element.id}">${element.show}</a>
      </li>
      `;
      // Todo teste, remover depois
      // listasConjunto += `
      // <li class="">
      //   <a href="/identifica/${element.page}/${element.page}.html#${element.id}">${element.show}</a>
      // </li>
      // `;
      console.log("item", listasConjunto);
    });

    allFound.innerHTML = listasConjunto;
  } else {
    listasConjunto += `
    <li class="">
      Nada foi encontrado.
    </li>
    `;

    allFound.innerHTML = listasConjunto;
  }

  console.log("allFound", allFound);
  containerList.appendChild(allFound);
}

/* Esconde todos itens da barra para mostrar apenas o input de pesquisa */
function onclickSearchMobile() {
  var logo = document.getElementsByClassName("logo-container");
  logo[0].classList.remove("show");
  logo[0].classList.add("hide");

  var options = document.getElementsByClassName("search-button-mobile");
  options[0].classList.remove("show");
  options[0].classList.add("hide");
  options = document.getElementsByClassName("menu-mobile-icon");
  options[0].classList.remove("show");
  options[0].classList.add("hide");

  var searchMobile = document.getElementsByClassName("mob-search-form");
  searchMobile[0].classList.remove("hide");
  searchMobile[0].classList.add("show");
}

function resWindow() {
  var searchMobile = document.getElementsByClassName("mob-search-form");
  if (window.screen.width >= 1024) {
    console.log("maior que 1024");
    document.getElementsByClassName("logo-container")[0].classList.add("show");

    searchMobile[0].classList.remove("show");
    searchMobile[0].classList.add("hide");

    // esconde menu mobile caso estiver aberto
    document
      .getElementsByClassName("options--container-mobile")[0]
      .classList.remove("show");
    document
      .getElementsByClassName("options--container-mobile")[0]
      .classList.add("hide");

    // esconde 2 opções do mobile
    document
      .getElementsByClassName("side-options-mobile")[0]
      .classList.remove("show");
    document
      .getElementsByClassName("side-options-mobile")[0]
      .classList.add("hide");
  } else {
    document
      .getElementsByClassName("side-options-mobile")[0]
      .classList.remove("hide");
    document
      .getElementsByClassName("side-options-mobile")[0]
      .classList.add("show");
  }
}

function hideMobileSearch() {
  var logo = document.getElementsByClassName("logo-container");
  logo[0].classList.add("show");
  logo[0].classList.remove("hide");

  var options = document.getElementsByClassName("search-button-mobile");
  options[0].classList.remove("hide");
  options[0].classList.add("show");

  options = document.getElementsByClassName("menu-mobile-icon");
  options[0].classList.remove("hide");
  options[0].classList.add("show");

  var searchMobile = document.getElementsByClassName("mob-search-form");
  searchMobile[0].classList.add("hide");
  searchMobile[0].classList.remove("show");
}
