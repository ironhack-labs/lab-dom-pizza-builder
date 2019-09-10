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
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
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

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  Array.from(document.getElementsByClassName(`mushroom`)).forEach((elem) => {
    if (state.mushrooms) {
      elem.style.visibility = "visible";
    } else {
      elem.style.visibility = "hidden";
    }
  })
  
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  Array.from(document.getElementsByClassName(`green-pepper`)).forEach((elem) => {
    if (state.greenPeppers) {
      elem.style.visibility = "visible";
    } else {
      elem.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  Array.from(document.getElementsByClassName(`sauce`)).forEach((elem) => {
    if (state.whiteSauce) {
      elem.classList.remove("sauce-white");
    } else {
      elem.classList.add("sauce-white");
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  Array.from(document.getElementsByClassName(`crust`)).forEach((elem) => {
    if (state.glutenFreeCrust) {
      elem.classList.remove("crust-gluten-free");
    } else {
      elem.classList.add("crust-gluten-free");
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  Array.from(document.getElementsByClassName(`btn`)).forEach((elem) => {
    switch(elem.innerHTML){
      case "Pepperonni":
        if(state.pepperonni) {
          elem.classList.add("active");
        } else {
          elem.classList.remove("active");
        };
        break;
      case "Mushrooms":
        if(state.mushrooms) {
          elem.classList.add("active");
        } else {
          elem.classList.remove("active");
        };
        break;
      case "Green peppers":
        if(state.greenPeppers) {
          elem.classList.add("active");
        } else {
          elem.classList.remove("active");
        };
        break;
      case "White sauce":
        if(state.whiteSauce) {
          elem.classList.add("active");
        } else {
          elem.classList.remove("active");
        };
        break;
      case "Gluten-free crust":
        if(state.glutenFreeCrust) {
          elem.classList.add("active");
        } else {
          elem.classList.remove("active");
        };
        break;
    }
  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  document.querySelectorAll(".price > ul")[0].innerHTML = "";
  let total = basePrice;
  if(state.pepperonni){
    let pep = document.createElement("li");
    pep.innerHTML =`$${ingredients.pepperonni.price} ${ingredients.pepperonni.name}`;
    document.querySelectorAll(".price > ul")[0].appendChild(pep);
    total += ingredients.pepperonni.price;
  } 
  if(state.mushrooms){
    let mush = document.createElement("li");
    mush.innerHTML =`$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`;
    document.querySelectorAll(".price > ul")[0].appendChild(mush);
    total += ingredients.mushrooms.price;
  }
  if(state.greenPeppers){
    let pep = document.createElement("li");
    pep.innerHTML =`$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`;
    document.querySelectorAll(".price > ul")[0].appendChild(pep);
    total += ingredients.greenPeppers.price;
  }
  if(state.whiteSauce){
    let sau = document.createElement("li");
    sau.innerHTML =`$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`;
    document.querySelectorAll(".price > ul")[0].appendChild(sau);
    total += ingredients.whiteSauce.price;
  }
  if(state.glutenFreeCrust){
    let crust = document.createElement("li");
    crust.innerHTML =`$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`;
    document.querySelectorAll(".price > ul")[0].appendChild(crust);
    total += ingredients.glutenFreeCrust.price;
  }
  document.querySelectorAll(".price > strong")[0].innerHTML = `$${total}`;
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}