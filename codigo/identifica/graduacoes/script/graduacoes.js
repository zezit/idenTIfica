// parte 2===========================2 etrap

// CRIAR OS CARD PELO DADTA
let products = {
  data: [
    {
      productName: "Curso 01",
      category: "CATEGORIA",
      price: "TEXTO",
      image: "imagens/logo-pucc.jpg",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parâmetro passado do botão (parâmetro igual à categoria)
function filterProduct(value) {
  //Código da classe do botão
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //verifica se valor é igual a innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //seleciona todas as cartas
  let elements = document.querySelectorAll(".card");
  //percorre todos os cartões
  elements.forEach((element) => {
    //exibe todas as cartas ao clicar no botão 'all'
    if (value == "Todos") {
      element.classList.remove("hide");
    } else {
      //Verifica se o elemento contém classe de categoria
      if (element.classList.contains(value)) {
        //exibe o elemento com base na categoria
        element.classList.remove("hide");
      } else {
        //esconde outros elementos
        element.classList.add("hide");
      }
    }
  });
}

//clique no botão de pesquisa
document.getElementById("search").addEventListener("click", () => {
  //inicializações
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //percorrer todos os elementos
  elements.forEach((element, index) => {
    //verifique se o texto inclui o valor de pesquisa
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //exibir cartão correspondente
      cards[index].classList.remove("hide");
    } else {
      //esconder os outros
      cards[index].classList.add("hide");
    }
  });
});

//Inicialmente exibir todos os produtos
window.onload = () => {
  filterProduct("Todos");
};
