/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function onclickMenuMobile() {
    var mobileMenu = document.getElementsByClassName(
        "options--container-mobile"
    );
    mobileMenu[0].classList.toggle("show");
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

window.addEventListener(
    "resize",
    function () {
        var searchMobile = document.getElementsByClassName("mob-search-form");
        var options = document.getElementsByClassName("search-button-mobile");
        if (window.screen.width >= 1024) {
            document
                .getElementsByClassName("logo-container")[0]
                .classList.add("show");

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
    },
    true
);

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








