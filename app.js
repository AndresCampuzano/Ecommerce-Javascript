let productsArray = [
  {
    id: 1,
    name: "SPACEX T-SHIRT",
    product: "shirt",
    price: 22,
    color: "black",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/spacex_black.webp"
  },
  {
    id: 2,
    name: "STARMAN T-SHIRT",
    product: "shirt",
    price: 22,
    color: "black",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/starman.webp"
  },
  {
    id: 3,
    name: "SPACEX T-SHIRT",
    product: "shirt",
    price: 22,
    color: "blue",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/spacex_blue.webp"
  },
  {
    id: 4,
    name: "SPACEX CAP",
    product: "cap",
    price: 10,
    color: "black",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/cap_black.webp"
  },
  {
    id: 5,
    name: "SPACEX CAP",
    product: "cap",
    price: 10,
    color: "blue",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/cap_blue.webp"
  },
  {
    id: 6,
    name: "SPACEX CAP",
    product: "cap",
    price: 10,
    color: "blue",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/cap_blue.webp"
  },
  {
    id: 7,
    name: "OCCUPY MARS MUG",
    product: "mug",
    price: 12,
    color: "black",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/spacex_mug_mars.webp"
  },
  {
    id: 8,
    name: "OCCUPY EARTH MUG",
    product: "mug",
    price: 12,
    color: "black",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/spacex_mug_earth.webp"
  },
  {
    id: 9,
    name: "SPACEX MUG",
    product: "mug",
    price: 12,
    color: "black",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/spacex_mug_normal.webp"
  },
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
} makeList();


// Getting input from user
function getInputFromUser() {
  var x = document.getElementById("userInputFilterCost").value
  x = parseInt(x)
  return filterByCost(x)
};

//Filtering products by cost
function filterByCost(value) {
  var productsFilteredArray = productsArray.filter(function(x) {
    return x.price === value; // Makes a new Array.
  });
  console.log(productsFilteredArray);
  if (productsFilteredArray.length === 0) {
     return alert(`There are not products with chosen filter, please try again`)
  }

  function renderFilteredProducts() {
    document.getElementById("allProducts").remove("allProducts"); // Removing "allProducts"
    document.getElementById("showProducts").innerHTML = `<div id="filteredProducts"></div>` // Creating "filteredProducts", this line needs to be improved
    
    for (let i = 0; i < productsFilteredArray.length; i++) {
      var listItem = document.createElement("div");
      listItem.innerHTML = `
          <div class="product">
              <h1>${productsFilteredArray[i].name}</h1>
              <img src=${productsFilteredArray[i].image} alt="">
              <p>${productsFilteredArray[i].product}</p>
              <p>Price $${productsFilteredArray[i].price}</p>
              <p>Color: ${productsFilteredArray[i].color}</p>
          </div>
      `;
      document.getElementById("filteredProducts").appendChild(listItem);
    }

  }
  renderFilteredProducts();
}


// Getting input from user
function getInputFromUserByRange() {
  var one = document.getElementById("userInputFilterCostOne").value
  one = parseInt(one)
	var two = document.getElementById("userInputFilterCostTwo").value
	two = parseInt(two)
	//var testOne = 10
	//var testTwo = 12
  return filterByCostByRange(one, two)
};

function filterByCostByRange(one, two) {
	var productsFilteredArray = productsArray.filter(function(x) {
    return x.price >= one && x.price <= two; // Makes a new Array.
  });
	console.log(productsFilteredArray)
	if (productsFilteredArray.length === 0) {
     return alert(`There are not products with chosen filter, please try again`)
  }
	
	function renderFilteredProductsByRange() {
    document.getElementById("allProducts").remove("allProducts"); // Removing "allProducts"
    document.getElementById("showProducts").innerHTML = `<div id="filteredProductsByRange"></div>` // Creating "filteredProductsByRange", this line needs to be improved
    
    for (let i = 0; i < productsFilteredArray.length; i++) {
      var listItem = document.createElement("div");
      listItem.innerHTML = `
          <div class="product">
              <h1>${productsFilteredArray[i].name}</h1>
              <img src=${productsFilteredArray[i].image} alt="">
              <p>${productsFilteredArray[i].product}</p>
              <p>Price $${productsFilteredArray[i].price}</p>
              <p>Color: ${productsFilteredArray[i].color}</p>
          </div>
      `;
      document.getElementById("filteredProductsByRange").appendChild(listItem);
    }

  }
  renderFilteredProductsByRange();
}

//Getting input from dropbox
function getInputFromUserOption() {
  var optionValue = document.getElementById("mySelect").value;
	return filterByOption(optionValue);
}

function filterByOption(optionValue) {
  var productsFilteredArray = productsArray.filter(function(x) {
    return x.product === optionValue; // Makes a new Array.
  })
  console.log(productsFilteredArray);

  function renderFilteredProducts() {
    document.getElementById("allProducts").remove("allProducts"); // Removing "allProducts"
    document.getElementById("showProducts").innerHTML = `<div id="filteredProductsByOptions"></div>` // Creating "filteredProductsByOptions", this line needs to be improved
    
    for (let i = 0; i < productsFilteredArray.length; i++) {
      var listItem = document.createElement("div");
      listItem.innerHTML = `
          <div class="product">
              <h1>${productsFilteredArray[i].name}</h1>
              <img src=${productsFilteredArray[i].image} alt="">
              <p>${productsFilteredArray[i].product}</p>
              <p>Price $${productsFilteredArray[i].price}</p>
              <p>Color: ${productsFilteredArray[i].color}</p>
          </div>
      `;
      document.getElementById("filteredProductsByOptions").appendChild(listItem);
    }

  }
  renderFilteredProducts();
}

