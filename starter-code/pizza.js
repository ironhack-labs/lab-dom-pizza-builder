// Write your Pizza Builder JavaScript in this file.

// Constants 
const basePrice = 10
const ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
const state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}



// const renderPepperonni = () =>  {
//   document.querySelectorAll('.pep').forEach($pep => {
//     if (state.pepperonni) {
//       $pep.style.visibility = "visible";
//     }
//     else {
//       $pep.style.visibility = "hidden";
//     }
//   })
// }

const renderPepperonni = () =>  document.querySelectorAll('.pep').forEach($pep =>  (state.pepperonni) ?  $pep.style.visibility = "visible"  :  $pep.style.visibility = "hidden");

const renderMushrooms = () => {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach($mush => (state.mushrooms) ? $mush.style.visibility = "visible" : $mush.style.visibility = "hidden")
};

  // Iteration 1: set the visibility of `<section class="green-pepper">`
const renderGreenPeppers = () => document.querySelectorAll('.green-pepper').forEach($gpepper => {
  (state.greenPeppers) ? $gpepper.style.visibility = "visible" : $gpepper.style.visibility = "hidden"

});


const renderWhiteSauce = () => document.querySelectorAll('.sauce').forEach($sauce => (state.whiteSauce) ? $sauce.classList.add ("sauce-white") : $sauce.classList.remove("sauce-white") );
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`


const renderGlutenFreeCrust = () => document.querySelectorAll(".crust").forEach ($crust => state.glutenFreeCrust ? $crust.classList.add ("crust-gluten-free") : $crust.classList.remove("crust-gluten-free"))
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  
  let totalPrice = basePrice;
  let listPrices = document.querySelector(".panel.price > ul");
  listPrices.innerHTML = "";
  let totalListPrices = listPrices.innerHTML;
  console.log(totalListPrices);

  if (state.pepperonni) {
    totalPrice += ingredients.pepperonni.price ;
    totalListPrices += "<li>" + ingredients.pepperonni.price.toString() + " - " + ingredients.pepperonni.name + "</li>";
  }
  console.log(totalListPrices);
  if (state.mushrooms) {
    totalPrice += ingredients.mushrooms.price;
    totalListPrices += listPrices.innerHTML = "<li>" + ingredients.mushrooms.price.toString() + " - " + ingredients.mushrooms.name + "</li>";
  }
  
  // if (state.greenPeppers) {
  //   totalPrice += ingredients.greenPeppers.price;
  //   totalListPrices += listPrices.innerHTML = "<li>" + ingredients.greenPeppers.price + " - " + ingredients.greenPeppers.price + "</li>";
  // }

  // if (state.whiteSauce) {
  //   totalPrice += ingredients.whiteSauce.price;
  //   totalListPrices += listPrices.innerHTML = "<li>" + ingredients.whiteSauce.price + " - " + ingredients.whiteSauce.price + "</li>";
  // }

  // if (state.glutenFreeCrust) {
  //   totalPrice += ingredients.glutenFreeCrust.price;
  //   totalListPrices += listPrices.innerHTML = "<li>" + ingredients.glutenFreeCrust.price + " - " + ingredients.glutenFreeCrust.price + "</li>";
  // }
  listPrices.innerHTML = totalListPrices;
  console.log(totalPrice);
  console.log(totalListPrices);

  // (state.pepperonni) ? totalPrice += ingredients.pepperonni.price : totalPrice;
  // (state.mushrooms) ? totalPrice += ingredients.mushrooms.price : totalPrice; 
  // (state.greenPeppers) ? totalPrice += ingredients.greenPeppers.price : totalPrice;
  // (state.whiteSauce) ? totalPrice += ingredients.whiteSauce.price : totalPrice;
  // (state.glutenFreeCrust) ? totalPrice += ingredients.glutenFreeCrust.price : totalPrice; 
  
  // return totalPrice;

  // let listPrices = document.querySelector(".panel.price > ul");
  // console.log(listPrices.innerHTML);
  // listPrices.innerHTML = "<li>Qualquer texto</li><li>Qualquer texto</li><li>Qualquer texto</li><li>Qualquer texto</li>" ;


}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
let btn1 = document.querySelector('.btn.btn-pepperonni')
  btn1.onclick = function() {
  state.pepperonni = !state.pepperonni;
  (state.pepperonni) ? btn1.classList.remove("active"): btn1.classList.add("active");
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
let btn2 = document.querySelector(".btn.btn-mushrooms")
btn2.onclick = function() {
  state.mushrooms = !state.mushrooms;
  (state.mushrooms) ? btn2.classList.remove("active") : btn2.classList.add("active");
  renderEverything();
}


// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
let btn3 = document.querySelector('.btn.btn-green-peppers')
btn3.onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  (state.greenPeppers) ? btn3.classList.remove("active") : btn3.classList.add("active");
  renderEverything();
}


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
let btn4 = document.querySelector('.btn.btn-sauce')
btn4.onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  (state.whiteSauce) ? btn4.classList.remove("active") : btn4.classList.add("active");
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
let btn5 = document.querySelector(".btn.btn-crust")
btn5.onclick  = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  (state.glutenFreeCrust) ? btn5.classList.remove("active") : btn5.classList.add("active");
  renderEverything();
}