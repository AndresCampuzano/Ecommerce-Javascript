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
  
  
  //   console.log(copyProductsArray);
  
  function test() {
    var copyProductsArray = [...productsArray]
    copyProductsArray.sort(function (a, b) {
      return a.price - b.price;
    })
    console.log(copyProductsArray);
    
}test()

 
  
  
//   // sort by name
//   items.sort(function(a, b) {
//     var nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     var nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
  
//     // names must be equal
//     return 0;
//   });