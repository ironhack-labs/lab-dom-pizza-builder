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
      document.querySelector('#price-pepperonni').style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
      document.querySelector('#price-pepperonni').style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach((mushroom)=>{
    if (state.mushrooms){
      mushroom.style.visibility= "visible";
      document.querySelector('#price-mushrooms').style.visibility = "visible";
    }
    else{
      mushroom.style.visibility = "hidden";
      document.querySelector('#price-mushrooms').style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach((greenPepper)=>{
    if (state.greenPeppers){
      greenPepper.style.visibility = "visible";
      document.querySelector('#price-greenPeppers').style.visibility = "visible";
    }
    else {
      greenPepper.style.visibility = "hidden";
      document.querySelector('#price-greenPeppers').style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(".sauce.sauce-white").forEach((sauce) =>{
    if(state.whiteSauce){
      sauce.style.visibility = "visible";
      document.querySelector('#price-sauce').style.visibility = "visible";
    }
    else {
      sauce.style.visibility = "hidden";
      document.querySelector('#price-sauce').style.visibility = "hidden";
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(".crust").forEach((gluten)=>{
  if (!state.glutenFreeCrust){
    gluten.className = "crust";
    document.querySelector('#price-glutenFree').style.visibility = "hidden";
  }else {
    gluten.classList.toggle("crust-gluten-free")
    document.querySelector('#price-glutenFree').style.visibility = "visible";
  }
  });
}

function renderButtons() {}
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let sum = 13;
  document.querySelectorAll(".panel.price").forEach((price)=>{
    if(!state.pepperonni){
      sum -= 1;
    }
    if(!state.mushrooms){
      sum -= 1;
    }
    if(!state.greenPeppers){
      sum -= 1;
    }
    if(state.whiteSauce){
      sum += 3;
    }
    if(state.glutenFreeCrust){
      sum += 5;
    }
    });
    let strong = document.querySelector("strong");
    strong.innerHTML = `$${sum}`;
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  document.querySelector('.btn.btn-pepperonni').classList.toggle("active");
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").onclick = function() {
  document.querySelector('.btn.btn-mushrooms').classList.toggle("active");
  state.mushrooms = !state.mushrooms
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").onclick = function() {
  document.querySelector('.btn.btn-green-peppers').classList.toggle("active");
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").onclick = function(){
  state.whiteSauce = !state.whiteSauce;
  document.querySelector('.btn.btn-sauce').classList.toggle("active");
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  document.querySelector('.btn.btn-crust').classList.toggle("active");
  renderEverything();
}