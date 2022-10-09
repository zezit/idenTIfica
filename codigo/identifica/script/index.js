/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function onclickMenuMobile() {
    var mobileMenu = document.getElementsByClassName(
        "options--container-mobile"
    );
    mobileMenu[0].classList.toggle("show");
}

function onclickSearchMobile() {
    var logo = document.getElementsByClassName("logo-container");
    logo[0].classList.add("hide");

    var options = document.getElementsByClassName("side-options-mobile");
    options[0].classList.add("hide");

    var searchMobile = document.getElementsByClassName("search-form-mobile");
    searchMobile[0].classList.add("show");
}


window.addEventListener('resize', function(event) {
    console.log(window.screen.width)
}, true);