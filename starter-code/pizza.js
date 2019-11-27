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
  document.querySelectorAll('.green-pepper').forEach(function($pepper){
    if (state.greenPeppers) {
      $pepper.style.visibility = "visible";
    }
    else {
      $pepper.style.visibility = "hidden";
    }
  })
}
 // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach(function($white){
    if (state.whiteSauce) {
      $white.classList.add("sauce-white")    }
    else {
      $white.classList.remove("sauce-white")    }
  })
}
// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach(function($crust){
    if (state.glutenFreeCrust) {
      $crust.classList.add("crust-gluten-free");
    }
    else {
      $crust.classList.remove("crust-gluten-free")
    }
  })
}
// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
      if (state.pepperonni == true){
        document.querySelector(".btn.btn-pepperonni").classList.remove("active");
      } else {
        document.querySelector(".btn.btn-pepperonni").classList.add("active");
      }
      if (state.mushrooms == true){
        document.querySelector(".btn.btn-mushrooms").classList.remove("active");
      } else {
        document.querySelector(".btn.btn-mushrooms").classList.add("active");
      }
      if (state.greenPeppers == true){
        document.querySelector(".btn.btn-green-peppers").classList.remove("active");
      } else {
        document.querySelector(".btn.btn-green-peppers").classList.add("active");
      }
      if (state.whiteSauce == true){
        document.querySelector(".btn.btn-sauce").classList.remove("active");
      } else {
        document.querySelector(".btn.btn-sauce").classList.add("active");
      }
      if (state.glutenFreeCrust == true){
        document.querySelector(".btn.btn-crust").classList.remove("active");
      } else {
        document.querySelector(".btn.btn-crust").classList.add("active");
      }
    }
// Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {

  //get the list of li tags
  let ulParent = document.querySelector(".panel.price ul");
  //console.log(ulParent);
  let liItems = ulParent.querySelectorAll("li");
  //console.log(liItems);
  //console.log(liItems.length);

  //access ingredients inner Object values
  let ingredientValues = Object.values(ingredients);
  //console.log(ingredientValues);
  //console.log(ingredientValues[0].name);

  let stateValues = Object.values(state);
  //console.log(stateValues);
  //console.log(stateValues[0]);
  
  //calculate new total
  let newTotal = 10;
  let strongTag = document.querySelector(".panel.price strong");
  //console.log(strongTag);

  //iterate through all li items and set its equivalent of ingredients
  // todo add if / else

  for (i=0; i<liItems.length; i++){

    if (stateValues[i]) { 
      liItems[i].innerText = `$${ingredientValues[i].price} ${ingredientValues[i].name}`;
      newTotal += ingredientValues[i].price;
      liItems[i].style.display = "block";
    }
    else {
      liItems[i].style.display = "none";
    }
    if (i === liItems.length-1) {
      strongTag.innerText = `$${newTotal}`;
    }
  }
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