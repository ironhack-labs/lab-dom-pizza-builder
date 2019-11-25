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
var toppingattributes=["pepperonni","mushrooms","greenPeppers","whiteSauce","glutenFreeCrust"];
function logState(){
  var toppings=toppingattributes.filter(function(topping){return(state[topping])});
  console.log("State: ",toppings.join(" "));
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything(info) {
  console.log(info)
  logState();
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
  document.querySelectorAll('.mushroom').forEach(function($mushroom){
    $mushroom.style.visibility = (state.mushrooms?"visible":"hidden");
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($greenpepper){
    $greenpepper.style.visibility = (state.greenPeppers?"visible":"hidden");
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function($whitesauce){
    $whitesauce.style.visibility = (state.whiteSauce?"visible":"hidden");
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function($crustglutenfree){
    $crustglutenfree.style.visibility = (state.glutenFreeCrust?"visible":"hidden");
  });
}

function syncButton(button,active){
  if(active)button.classList.add(["active"]);else button.classList.remove(["active"]);
}
function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  syncButton(document.querySelector('.btn-pepperonni'),state.pepperonni);
  syncButton(document.querySelector('.btn-mushrooms'),state.mushrooms);
  syncButton(document.querySelector('.btn-green-peppers'),state.greenPeppers);
  syncButton(document.querySelector('.btn-sauce'),state.whiteSauce);
  syncButton(document.querySelector('.btn-crust'),state.glutenFreeCrust);
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  // 1. compute the total price
  // reduce is the way to go
  var price=toppingattributes.reduce(
    function(pricesofar,toppingattributename){
      if(!state[toppingattributename])return pricesofar;
      return pricesofar+ingredients[toppingattributename].price;
    },10);
  console.log("Total price: ",price);
  document.querySelector("aside.panel.price strong").innerHTML="$"+String(price);
  // only show the selected items
  var toppinglist=document.querySelector("aside.panel.price ul");
  console.log("Showing the selected toppings...");
  for(let toppingindex=4;toppingindex>=0;toppingindex--)
    toppinglist.children[toppingindex].style.display=(state[toppingattributes[toppingindex]]?"block":"none");
}


renderEverything("Initialization")

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything((state.pepperonni?"+":"-")+"Pepperonni")
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything((state.mushrooms?"+":"-")+"Mushrooms")
}
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything((state.greenPeppers?"+":"-")+"Green peppers")
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything((state.whiteSauce?"+":"-")+"White sauce")
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything((state.glutenFreeCrust?"+":"-")+"Gluten-free crust")
}