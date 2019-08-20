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
document.querySelector(".btn.btn-sauce").classList.remove("active");
document.querySelector(".btn.btn-crust").classList.remove("active");


function renderPepperonni() {

  document.querySelectorAll('.pep').forEach(function(pep){
    if (state.pepperonni) {
      pep.style.visibility = "visible";
      document.querySelector(".btn.btn-pepperonni").classList.add("active");


    }
    else {
      pep.style.visibility = "hidden";
      document.querySelector(".btn.btn-pepperonni").classList.remove("active");


    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function(mushroom){
    if (state.mushrooms) {
      mushroom.style.visibility = "visible";
      document.querySelector(".btn.btn-mushrooms").classList.add("active");

    }
    else {
      mushroom.style.visibility = "hidden";
      document.querySelector(".btn.btn-mushrooms").classList.remove("active");
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function(greenPepper){
    if (state.greenPeppers) {
      greenPepper.style.visibility = "visible";
      document.querySelector(".btn.btn-green-peppers").classList.add("active");


    }
    else {
      greenPepper.style.visibility = "hidden";
      document.querySelector(".btn.btn-green-peppers").classList.remove("active");


    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(".sauce").forEach(function (whiteSalsa){
    if (state.whiteSauce) {
      whiteSalsa.classList.add("sauce-white");
      document.querySelector(".btn.btn-sauce").classList.add("active");

    }
    else if(state.whiteSauce===false){
    document.querySelector(".btn.btn-sauce").classList.remove("active");
    whiteSalsa.classList.remove("sauce-white");}
    

  })

};

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(".crust").forEach(function (crusto){
    if (state.glutenFreeCrust) {
      crusto.classList.add("crust-gluten-free");
      document.querySelector(".btn.btn-crust").classList.add("active");
    }
    else if(state.glutenFreeCrust===false){
      document.querySelector(".btn.btn-crust").classList.remove("active");
    crusto.classList.remove("crust-gluten-free");}
  })

}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  document.querySelector(".price ul").innerHTML="";
let newStr = ""
  basePrice=10;

  for(const stato in state){
    if (state[stato]){
     basePrice+=ingredients[stato].price;
      newStr += `<li>$${ingredients[stato].price} ${ingredients[stato].name} </li>`
    }
  }

  console.log(basePrice);
  document.querySelector(".price ul").innerHTML= newStr
  document.querySelector("strong").innerText="$" + basePrice ;
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni;

  renderEverything()

}


// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  console.log(state.glutenFreeCrust)

  renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function(){
state.whiteSauce =!state.whiteSauce;
renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function(){
  state.glutenFreeCrust =!state.glutenFreeCrust;

  renderEverything()
  
  }