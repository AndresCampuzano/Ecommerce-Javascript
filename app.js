let products = [
  {
    id: 1,
    name: "SPACEX T-SHIRT",
    product: "Shirt",
    price: 22,
    color: "black",
    image: "./assets/img/spacex_black.webp"
  },
  {
    id: 2,
    name: "STARMAN T-SHIRT",
    product: "Shirt",
    price: 22,
    color: "black",
    image: "./assets/img/starman.webp"
  },
  {
    id: 3,
    name: "SPACEX T-SHIRT",
    product: "Shirt",
    price: 22,
    color: "blue",
    image: "./assets/img/spacex_blue.webp"
  },
  {
    id: 4,
    name: "SPACEX CAP",
    product: "Cap",
    price: 10,
    color: "black",
    image: "./assets/img/cap_black.webp"
  },
  {
    id: 5,
    name: "SPACEX CAP",
    product: "Cap",
    price: 10,
    color: "blue",
    image: "./assets/img/cap_blue.webp"
  },
  {
    id: 6,
    name: "SPACEX CAP",
    product: "Cap",
    price: 10,
    color: "blue",
    image: "./assets/img/cap_blue.webp"
  }
];

var listContainer = document.getElementById("showProducts");

function makelist() {
  for (let index = 0; index < products.length; index++) {
    var listItem = document.createElement("div");
    listItem.innerHTML = `
        <div class="product">
            <h1>${products[index].name}</h1>
            <img src=${products[index].image} alt="">
            <p>${products[index].product}</p>
            <p>Price $${products[index].price}</p>
            <p>Color: ${products[index].color}</p>
        </div>
    `;
    listContainer.appendChild(listItem);
  }
}
makelist();
