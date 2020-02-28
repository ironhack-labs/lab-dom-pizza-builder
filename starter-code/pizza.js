// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenpeppers: {name: 'Green Peppers', price: 1},
  whitesauce: {name: 'White Sauce', price: 3},
  glutenfreecrust: {name: 'Gluten-Free Crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenpeppers: true,
  whitesauce: false,
  glutenfreecrust: false
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

function renderPepperonni() {
  //Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  //Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function($mushroom){
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($greenPepper){
    if (state.greenpeppers) {
      $greenPepper.style.visibility = "visible";
    }
    else {
      $greenPepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whitesauce) {
    document.querySelector('.sauce').setAttribute("class","sauce sauce-white");
  } else {
    document.querySelector('.sauce').setAttribute("class","sauce");
  };
};

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenfreecrust) {
    document.querySelector('.crust').setAttribute("class","crust crust-gluten-free");
  } else {
    document.querySelector('.crust').setAttribute("class","crust");
  };
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let $buttons = document.querySelectorAll('.btn');
  $buttons.forEach(function(button) {
    for (const ingredi in state) {
      let temp = button.innerHTML.split(" ").join("");
      let btnInnerHtml = temp.split("-").join("").toLowerCase();
      if (btnInnerHtml === ingredi) {
        if (state[ingredi] == true) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        };
      }
    }
  })    
}  

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  var totalPrice = 10;
  var $priceList = document.querySelector("aside ul");
  $priceList.innerHTML = "";
  let blabla = ingredients.pepperonni.name;
  for (const ingredi in state) {
    if (state[ingredi] == true) {
      let $newLi = document.createElement("li");
      $newLi.innerHTML = `$${ingredients[ingredi].price} ${ingredients[ingredi].name}`;
      $priceList.appendChild($newLi);
      totalPrice += ingredients[ingredi].price;
    }
  }
  document.querySelector("aside strong").innerHTML =  `$${totalPrice}` 
}


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').addEventListener('click', function(){
  state.pepperonni = !state.pepperonni
  renderEverything()
})

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function(){
  state.mushrooms = !state.mushrooms
  renderEverything()
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenpeppers = !state.greenpeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whitesauce = !state.whitesauce
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenfreecrust = !state.glutenfreecrust
  renderEverything()
}
