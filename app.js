let productsArray = [
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

function makeList() {
  for (let i = 0; i < productsArray.length; i++) {
    var listItem = document.createElement("div");
    listItem.innerHTML = `
        <div class="product">
            <h1>${productsArray[i].name}</h1>
            <img src=${productsArray[i].image} alt="">
            <p>${productsArray[i].product}</p>
            <p>Price $${productsArray[i].price}</p>
            <p>Color: ${productsArray[i].color}</p>
        </div>
    `;
    document.getElementById("allProducts").appendChild(listItem);
  }
}
makeList();
// Getting input from user
function getInputFromUser() {
  var x = document.getElementById("userInputFilterCost").value
  x = parseInt(x)
  return filterByCost(x)
};

//Filtering products by cost
function filterByCost(value) {
  var articulosFiltrados = productsArray.filter(function(x) {
    return x.price === value; // Makes a new Array.
  });
  console.log(articulosFiltrados);
  if (articulosFiltrados.length === 0) {
     return alert(`There are not products with chosen filter, please try again`)
  }

  function renderFilteredProducts() {
    document.getElementById("allProducts").remove("allProducts"); // Removing "allProducts"
    document.getElementById("showProducts").innerHTML = `<div id="filteredProducts"></div>` // Creating "filteredProducts", this line needs to be improved
    
    for (let i = 0; i < articulosFiltrados.length; i++) {
      var listItem = document.createElement("div");
      listItem.innerHTML = `
          <div class="product">
              <h1>${articulosFiltrados[i].name}</h1>
              <img src=${articulosFiltrados[i].image} alt="">
              <p>${articulosFiltrados[i].product}</p>
              <p>Price $${articulosFiltrados[i].price}</p>
              <p>Color: ${articulosFiltrados[i].color}</p>
          </div>
      `;
      document.getElementById("filteredProducts").appendChild(listItem);
    }

  }
  renderFilteredProducts();
}
