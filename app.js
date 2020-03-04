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
  document.getElementById("showProducts").innerHTML = `<div id="allProducts" class="row"></div>`//Creating "allProducts"
  console.log(productsArray);
  countItems(productsArray.length)
  for (let i = 0; i < productsArray.length; i++) {
    var listItem = document.createElement("div");
    listItem.setAttribute("class", "col-sm-12 col-md-6 col-lg-4");
    listItem.innerHTML = `
            <div>
                <figure class="card card-product-grid" data-toggle="modal" data-target="#exampleModalCenter">
                    <div class="img-wrap">
                        <span class="badge badge-warning"> NEW </span>
                        <img src=${productsArray[i].image} alt="${productsArray[i].name}" width="100%">
                        <h3 class="h4">${productsArray[i].name.toUpperCase()}</h3>
                        <h3 class="h6">Product type: ${productsArray[i].product}</h3>
                        <h3 class="h6">Color: ${productsArray[i].color}</h3>
                        <h3 class="h6">Price: $${productsArray[i].price}</h3>
                    </div>
                    <button href="#" class="btn btn-block btn-primary">Show info</button>
                </figure>
            </div>
            `;
    document.getElementById("allProducts").appendChild(listItem);
    addEventClick(listItem, i, productsArray); // TEST MODAL
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
     return alert(`No products found, please try again.`)
  }

  function render() {
    document.getElementById("allProducts").remove("allProducts"); // Removing "allProducts"
    document.getElementById("showProducts").innerHTML = `<div id="filteredProducts" class="row"></div>` // Creating "filteredProducts", this line needs to be improved

    countItems(productsFilteredArray.length)

    for (let i = 0; i < productsFilteredArray.length; i++) {
      var listItem = document.createElement("div");
      listItem.setAttribute("class", "col-sm-12 col-md-6 col-lg-4");
      listItem.innerHTML = `
            <div>
                <figure class="card card-product-grid" data-toggle="modal" data-target="#exampleModalCenter">
                    <div class="img-wrap">
                        <span class="badge badge-warning"> NEW </span>
                        <img src=${productsFilteredArray[i].image} alt="${productsFilteredArray[i].name}" width="100%">
                        <h3 class="h4">${productsFilteredArray[i].name.toUpperCase()}</h3>
                        <h3 class="h6">Product type: ${productsFilteredArray[i].product}</h3>
                        <h3 class="h6">Color: ${productsFilteredArray[i].color}</h3>
                        <h3 class="h6">Price: $${productsFilteredArray[i].price}</h3>
                    </div>
                    <button href="#" class="btn btn-block btn-primary">Show info</button>
                </figure>
            </div>
      `;
      document.getElementById("filteredProducts").appendChild(listItem);
      addEventClick(listItem, i, productsFilteredArray); // TEST MODAL
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
     return alert(`There are not products that range, please try again.`)
  }
	
	function render() {
    document.getElementById("allProducts").remove("allProducts"); // Removing "allProducts"
    document.getElementById("showProducts").innerHTML = `<div id="filteredProductsByRange" class="row"></div>` // Creating "filteredProductsByRange", this line needs to be improved

    countItems(productsFilteredArray.length)

    for (let i = 0; i < productsFilteredArray.length; i++) {
      var listItem = document.createElement("div");
      listItem.setAttribute("class", "col-sm-12 col-md-6 col-lg-4");
      listItem.innerHTML = `
            <div>
                <figure class="card card-product-grid" data-toggle="modal" data-target="#exampleModalCenter">
                    <div class="img-wrap">
                        <span class="badge badge-warning"> NEW </span>
                        <img src=${productsFilteredArray[i].image} alt="${productsFilteredArray[i].name}" width="100%">
                        <h3 class="h4">${productsFilteredArray[i].name.toUpperCase()}</h3>
                        <h3 class="h6">Product type: ${productsFilteredArray[i].product}</h3>
                        <h3 class="h6">Color: ${productsFilteredArray[i].color}</h3>
                        <h3 class="h6">Price: $${productsFilteredArray[i].price}</h3>
                    </div>
                    <button href="#" class="btn btn-block btn-primary">Show info</button>
                </figure>
            </div>
      `;
      document.getElementById("filteredProductsByRange").appendChild(listItem);
      addEventClick(listItem, i, productsFilteredArray); // TEST MODAL
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
		if (productsFilteredArray.length === 0) {
     return alert(`Error. Please try again.`)
  }

  function render() {
    document.getElementById("allProducts").remove("allProducts"); // Removing "allProducts"
    document.getElementById("showProducts").innerHTML = `<div id="filteredProductsByOptions" class="row"></div>` // Creating "filteredProductsByOptions", this line needs to be improved

    countItems(productsFilteredArray.length)

    for (let i = 0; i < productsFilteredArray.length; i++) {
      var listItem = document.createElement("div");
      listItem.setAttribute("class", "col-sm-12 col-md-6 col-lg-4");
      listItem.innerHTML = `
            <div>
                <figure class="card card-product-grid" data-toggle="modal" data-target="#exampleModalCenter">
                    <div class="img-wrap">
                        <span class="badge badge-warning"> NEW </span>
                        <img src=${productsFilteredArray[i].image} alt="${productsFilteredArray[i].name}" width="100%">
                        <h3 class="h4">${productsFilteredArray[i].name.toUpperCase()}</h3>
                        <h3 class="h6">Product type: ${productsFilteredArray[i].product}</h3>
                        <h3 class="h6">Color: ${productsFilteredArray[i].color}</h3>
                        <h3 class="h6">Price: $${productsFilteredArray[i].price}</h3>
                    </div>
                    <button href="#" class="btn btn-block btn-primary">Show info</button>
                </figure>
            </div>
      `;
      document.getElementById("filteredProductsByOptions").appendChild(listItem);
      addEventClick(listItem, i, productsFilteredArray); // TEST MODAL
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
	if (productsFilteredArray.length === 0) {
     return alert(`No products found, please try again.`)
  }

  function render() {
    document.getElementById("allProducts").remove("allProducts"); // Removing "allProducts"
    document.getElementById("showProducts").innerHTML = `<div id="filteredProductsByOptions" class="row"></div>` // Creating "filteredProductsByOptions", this line needs to be improved

    countItems(productsFilteredArray.length)

    for (let i = 0; i < productsFilteredArray.length; i++) {
      var listItem = document.createElement("div");
      listItem.setAttribute("class", "col-sm-12 col-md-6 col-lg-4");
      listItem.innerHTML = `
            <div>
                <figure class="card card-product-grid" data-toggle="modal" data-target="#exampleModalCenter">
                    <div class="img-wrap">
                        <span class="badge badge-warning"> NEW </span>
                        <img src=${productsFilteredArray[i].image} alt="${productsFilteredArray[i].name}" width="100%">
                        <h3 class="h4">${productsFilteredArray[i].name.toUpperCase()}</h3>
                        <h3 class="h6">Product type: ${productsFilteredArray[i].product}</h3>
                        <h3 class="h6">Color: ${productsFilteredArray[i].color}</h3>
                        <h3 class="h6">Price: $${productsFilteredArray[i].price}</h3>
                    </div>
                    <button href="#" class="btn btn-block btn-primary">Show info</button>
                </figure>
            </div>
      `;
      document.getElementById("filteredProductsByOptions").appendChild(listItem);
      addEventClick(listItem, i, productsFilteredArray); // TEST MODAL
    }

  }
  render();
}

//Rendering all data again
function makeListAgain() {
  console.log('rendering all data again');
  makeList();
}


// Sorting the products by price in descending order
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

function getInputFromUserFilterDescending() {
  makeListAgain() // rendering all data again

  var copyProductsArray = [...productsArray] //Makes a copy of the Array productsArray
  copyProductsArray.sort(function (a, b) {
    return a.price - b.price;
  })
  // console.log(copyProductsArray);
  function render() {
    document.getElementById("allProducts").remove("allProducts"); // Removing "allProducts"
    document.getElementById("showProducts").innerHTML = `<div id="filteredProductsByDescending" class="row"></div>` // Creating "filteredProductsByDescending", this line needs to be improved

    countItems(copyProductsArray.length)

    for (let i = 0; i < copyProductsArray.length; i++) {
      var listItem = document.createElement("div");
      listItem.setAttribute("class", "col-sm-12 col-md-6 col-lg-4");
      listItem.innerHTML = `
            <div>
                <figure class="card card-product-grid" data-toggle="modal" data-target="#exampleModalCenter">
                    <div class="img-wrap">
                        <span class="badge badge-warning"> NEW </span>
                        <img src=${copyProductsArray[i].image} alt="${copyProductsArray[i].name}" width="100%">
                        <h3 class="h4">${copyProductsArray[i].name.toUpperCase()}</h3>
                        <h3 class="h6">Product type: ${copyProductsArray[i].product}</h3>
                        <h3 class="h6">Color: ${copyProductsArray[i].color}</h3>
                        <h3 class="h6">Price: $${copyProductsArray[i].price}</h3>
                    </div>
                    <button href="#" class="btn btn-block btn-primary">Show info</button>
                </figure>
            </div>
      `;
      document.getElementById("filteredProductsByDescending").appendChild(listItem);
      addEventClick(listItem, i, copyProductsArray); // TEST MODAL
    }

  }
  render();

}

// Sorting the products by price in ascending order
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

function getInputFromUserFilterAscending() {
  makeListAgain() // rendering all data again

  var copyProductsArray = [...productsArray] //Makes a copy of the Array productsArray
  copyProductsArray.sort(function (a, b) {
    return b.price - a.price;
  })
  // console.log(copyProductsArray);
  function render() {
    document.getElementById("allProducts").remove("allProducts"); // Removing "allProducts"
    document.getElementById("showProducts").innerHTML = `<div id="filteredProductsByAscending" class="row"></div>` // Creating "filteredProductsByDescending", this line needs to be improved

    countItems(copyProductsArray.length)

    for (let i = 0; i < copyProductsArray.length; i++) {
      var listItem = document.createElement("div");
      listItem.setAttribute("class", "col-sm-12 col-md-6 col-lg-4");
      listItem.innerHTML = `
            <div>
                <figure class="card card-product-grid" data-toggle="modal" data-target="#exampleModalCenter">
                    <div class="img-wrap">
                        <span class="badge badge-warning"> NEW </span>
                        <img src=${copyProductsArray[i].image} alt="${copyProductsArray[i].name}" width="100%">
                        <h3 class="h4">${copyProductsArray[i].name.toUpperCase()}</h3>
                        <h3 class="h6">Product type: ${copyProductsArray[i].product}</h3>
                        <h3 class="h6">Color: ${copyProductsArray[i].color}</h3>
                        <h3 class="h6">Price: $${copyProductsArray[i].price}</h3>
                    </div>
                    <button href="#" class="btn btn-block btn-primary">Show info</button>
                </figure>
            </div>
      `;
      document.getElementById("filteredProductsByAscending").appendChild(listItem);
      addEventClick(listItem, i, copyProductsArray); // TEST MODAL
    }

  }
  render();

}

function countItems(number) {
  document.getElementById('numberItems').innerHTML = `${number} Items found`
}


// MODAL:

function addEventClick($element, i, arrayData) {
  $element.addEventListener('click', () => {
      console.log(`click ${arrayData[i].name}, ${arrayData[i].product}, ${arrayData[i].price}, ${arrayData[i].color}`);
      document.getElementById('showModal').innerHTML = `
          <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">${arrayData[i].name.toUpperCase()}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <!-- product content -->
                <figure class="card card-product-grid">
                    <div class="img-wrap">
                        <span class="badge badge-warning"> NEW </span>
                        <img src=${arrayData[i].image} alt="${arrayData[i].name}" width="100%">
                        <h3 class="h4">${arrayData[i].name.toUpperCase()}</h3>
                        <h3 class="h6">Product type: ${arrayData[i].product}</h3>
                        <h3 class="h6">Color: ${arrayData[i].color}</h3>
                        <h3 class="h6">Price: $${arrayData[i].price}</h3>
                    </div>
                </figure>
                <!-- end product content -->
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Buy</button>
            </div>
            </div>
        </div>
    </div>
      `
  });
};

