// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10;
var ingredients = {
  pepperonni: {
    name: 'Pepperonni',
    price: 1
  },
  mushrooms: {
    name: 'Mushrooms',
    price: 1
  },
  greenPeppers: {
    name: 'Green Peppers',
    price: 1
  },
  whiteSauce: {
    name: 'White sauce',
    price: 3
  },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5
  }
};

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
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}


function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function ($pep) { // selectorAll because aaaalll the mini peperroni elements
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    } else {
      $pep.style.visibility = "hidden";
    }
  });
}

// Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function ($mushroom) {
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    } else {
      $mushroom.style.visibility = "hidden";
    }
  });
}

// Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function ($greenpaper) {
    if (state.greenPeppers) {
      $greenpaper.style.visibility = "visible";
    } else {
      $greenpaper.style.visibility = "hidden";
    }
  });
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  // add a function but not a for each because there is juste one class
  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add("sauce-white");
  } else {
    document.querySelector('.sauce').classList.remove("sauce-white");
  }
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add("crust-gluten-free");
  } else {
    document.querySelector('.crust').classList.remove("crust-gluten-free");
  }
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  if (state.pepperonni) {
    document.querySelector(".btn-pepperonni").classList.add("active");
  } else {
    document.querySelector(".btn-pepperonni").classList.remove("active");
  }
  if (state.mushrooms) {
    document.querySelector(".btn-mushrooms").classList.add("active");
  } else {
    document.querySelector(".btn-mushrooms").classList.remove("active");
  }
  if (state.greenPeppers) {
    document.querySelector(".btn-green-peppers").classList.add("active");
  } else {
    document.querySelector(".btn-green-peppers").classList.remove("active");
  }
  if (state.whiteSauce) {
    document.querySelector(".btn-sauce").classList.add("active");
  } else {
    document.querySelector(".btn-sauce").classList.remove("active");
  }
  if (state.glutenFreeCrust) {
    document.querySelector(".btn-crust").classList.add("active");
  } else {
    document.querySelector(".btn-crust").classList.remove("active");
  }
}

// Iteration 4: change the HTML of `<aside class="panel price">`

function renderPrice() {
  let total = 10;
  const ul = document.querySelector(".panel.price ul"); // select the ul tag with the classes panel & price

  ul.innerHTML = ''; //  set the ul list as empty (to add <li> later)

  for (let ingredientStr in ingredients) { // ingredientStr = each property (mushrooms or greenPaper...) of ingredient
    if (state[ingredientStr] === true) { // state.mushrooms === state['mushrooms']
      const ingredient = ingredients[ingredientStr]; // set -ingredient as each object of the big object -ingredients for each name of ingredients (ingredientStr)
      total += ingredient.price; // add to the total the price of each selected ingredient

      const li = document.createElement('li'); // create a new li tag
      li.innerHTML = `$${ingredient.price} ${ingredient.name}`; // add inside each li tag a text
      ul.appendChild(li); // add children to ul tag : li tags
    }
  }
  document.querySelector(".panel.price strong").innerHTML = `$${total}`; // add to each strong tag (with pan & price classes) a text with the total
}

// OTHER WAY TO DO IT (re-enforcement):
// const panel = document.querySelector(".panel.price");
// const priceDisplay = panel.querySelector("strong");
// let li = "";

// for (let key in ingredients) {
//   if (state[key] === true) {
//     basePrice += ingredients[hey].price;
//     li += `<li>$${ingredients[key].price} ${ingredients[key].name}`;
//   }
// }
// priceDisplay.textContent = "$" + basePrice;



renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function () { //querySelector only because just one button
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function () {
  state.whiteSauce = !state.whiteSauce;
  // by default : state.whiteSauce = false (donc style = hidden)
  //onclick ==> state.whiteSauce = !state.whiteSauce donc le contraire donc true (donc style = visible)
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  // by default : state.glutenFreeCrust = false (donc style = hidden)
  //onclick ==> state.glutenFreeCrust = !state.glutenFreeCrust donc le contraire donc true (donc style = visible)
  renderEverything();
};