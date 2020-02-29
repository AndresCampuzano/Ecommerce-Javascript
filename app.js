let productsArray = [
  {
    id: 1,
    name: "spacex t-shirt",
    product: "shirt",
    price: 22,
    color: "black",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/spacex_black.webp"
  },
  {
    id: 2,
    name: "starman t-shirt",
    product: "shirt",
    price: 22,
    color: "black",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/starman.webp"
  },
  {
    id: 3,
    name: "spacex t-shirt",
    product: "shirt",
    price: 22,
    color: "blue",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/spacex_blue.webp"
  },
  {
    id: 4,
    name: "spacex cap",
    product: "cap",
    price: 10,
    color: "black",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/cap_black.webp"
  },
  {
    id: 5,
    name: "spacex cap",
    product: "cap",
    price: 10,
    color: "blue",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/cap_blue.webp"
  },
  {
    id: 6,
    name: "spacex cap",
    product: "cap",
    price: 10,
    color: "blue",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/cap_blue.webp"
  },
  {
    id: 7,
    name: "occupy mars mug",
    product: "mug",
    price: 12,
    color: "black",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/spacex_mug_mars.webp"
  },
  {
    id: 8,
    name: "occupy earth mug",
    product: "mug",
    price: 12,
    color: "black",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/spacex_mug_earth.webp"
  },
  {
    id: 9,
    name: "spacex mug",
    product: "mug",
    price: 12,
    color: "black",
    image: "https://andrescampuzano.github.io/Ecommerce-Javascript/assets/img/spacex_mug_normal.webp"
  },
];

function makeList() {
  document.getElementById("showProducts").innerHTML = `<div id="allProducts"></div>`//Creating "allProducts"
  console.log(productsArray);
  for (let i = 0; i < productsArray.length; i++) {
    var listItem = document.createElement("div");
    listItem.innerHTML = `
        <div class="product">
            <h1>${productsArray[i].name}</h1>
            <img src=${productsArray[i].image} alt="">
            <p>${productsArray[i].product}</p>
            <p>Price $${productsArray[i].price}</p>
            <p>Color: ${productsArray[i].color}</p>
            <button type="button" class="btn btn-primary">Buy</button>
        </div>
    `;
    document.getElementById("allProducts").appendChild(listItem);
  }
} makeList();


// Getting input from user
function getInputFromUser() {
  makeListAgain() // rendering all data again
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

  function render() {
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
              <button type="button" class="btn btn-primary">Buy</button>
          </div>
      `;
      document.getElementById("filteredProducts").appendChild(listItem);
    }

  }
  render();
}


// Getting input from user
function getInputFromUserByRange() {
  makeListAgain() // rendering all data again
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
	
	function render() {
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
              <button type="button" class="btn btn-primary">Buy</button>
          </div>
      `;
      document.getElementById("filteredProductsByRange").appendChild(listItem);
    }

  }
  render();
}

//Getting input from dropbox
function getInputFromUserOption() {
  makeListAgain() // rendering all data again
  var optionValue = document.getElementById("mySelect").value;
	return filterByOption(optionValue);
}

function filterByOption(optionValue) {
  var productsFilteredArray = productsArray.filter(function(x) {
    return x.product === optionValue; // Makes a new Array.
  })
  console.log(productsFilteredArray);

  function render() {
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
              <button type="button" class="btn btn-primary">Buy</button>
          </div>
      `;
      document.getElementById("filteredProductsByOptions").appendChild(listItem);
    }

  }
  render();
}


// Getting input search bar
function getInputFromUserFilterByName() {
  makeListAgain() // rendering all data again
  var x = document.getElementById("userInputFilterByName").value
  value = x.toLowerCase();
  return filterByName(value)
}

function filterByName(value) {
  var productsFilteredArray = productsArray.filter(function (x) {
    return x.name.includes(value) 
  })
  console.log(productsFilteredArray);

  function render() {
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
              <button type="button" class="btn btn-primary">Buy</button>
          </div>
      `;
      document.getElementById("filteredProductsByOptions").appendChild(listItem);
    }

  }
  render();
}

//Rendering all data again
function makeListAgain() {
  console.log('rendering all data again');
  makeList();
}
