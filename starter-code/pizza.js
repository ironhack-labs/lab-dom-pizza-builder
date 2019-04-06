// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: false,
  mushrooms: false,
  greenPeppers: false,
  whiteSauce: false,
  glutenFreeCrust: false,
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
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

// Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function($mush){
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    }
    else {
      $mush.style.visibility = "hidden";
    }
  })
}

// Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function($green){
    if (state.greenPeppers) {
      $green.style.visibility = "visible";
    }
    else {
      $green.style.visibility = "hidden";
    }
  })
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

function renderWhiteSauce() {
  let crustElement = document.querySelector('.sauce');
  if (!state.whiteSauce) {
     crustElement.classList.remove("sauce-white");
    } else {
      crustElement.classList.add("sauce-white");
  }
}

//Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderGlutenFreeCrust() {
  let crustElement = document.querySelector('.crust');
      if (!state.glutenFreeCrust) {
         crustElement.classList.remove("crust-gluten-free");
        } else {
          crustElement.classList.add("crust-gluten-free");
      }
    }


    // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  function renderButtons() {
    let btnPepperoni = document.querySelector(".btn-pepperonni");
    if (!state.glutenFreeCrust) {
      btnPepperoni.classList.remove("active");
     } else {
       btnPepperoni.classList.add("active");
   }

   let btnMush = document.querySelector(".btn-mushrooms");
    if (!state.glutenFreeCrust) {
      btnMush.classList.remove("active")
     } else {
       btnMush.classList.add("active")
   }

   let btnGreen = document.querySelector(".btn-green-peppers");
    if (!state.glutenFreeCrust) {
      btnGreen.classList.remove("active");
     } else {
       btnGreen.classList.add("active");
   }

   let btnSauce = document.querySelector(".btn-sauce");
    if (!state.glutenFreeCrust) {
      btnSauce.classList.remove("active");
     } else {
       btnSauce.classList.add("active");
   }
   
   let btnCrust = document.querySelector(".btn-crust");
    if (!state.glutenFreeCrust) {
      btnCrust.classList.remove("active");
     } else {
       btnCrust.classList.add("active");
   }
}

  let priceMush = 0;
  let pricePep = 0;
  let priceGreen = 0;
  let priceSauce = 0;
  let priceCrust = 0;
  


function renderPrice() {
  // let price = document.querySelector('strong');
  // price.innertext = 'teste';

  // Iteration 4: change the HTML of `<aside class="panel price">`
  // if (btMush.classList.contains === "active") {
  //   priceMush = 1; 
  // }

  
  // if (btnPepperoni.classList.contains === "active") {
  //   pricePep = 1;
  // }
  // if (btnGreen.classList.contains === "active") {
  //   priceGreen = 1;
  // }
  // if (btnSauce.classList.contains === "active") {
  //   priceSauce = 3;
  // }
  // if (btnCrust.classList.contains === "active") {
  //   priceCrust = 5;
  // }
  

 //  `$ ${pricePep + priceGreen + priceMush + priceSauce + priceCrust}`;
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`

document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni;
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms;
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything()
}