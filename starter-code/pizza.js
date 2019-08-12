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
  document.querySelectorAll(".mushroom").forEach(function(mushroom){
    if(state.mushrooms){
      mushroom.style.visibility ="visible";
    }
    else {
      mushroom.style.visibility ="hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(function(greenPepper){
    if(state.greenPeppers){
      greenPepper.style.visibility ="visible";
    }
    else {
      greenPepper.style.visibility ="hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauceWhite =document.querySelector(".sauce");
    if (state.whiteSauce){
      sauceWhite.classList.add("sauce-white");
    }
    else {
      sauceWhite.classList.remove("sauce-white");
    }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
document.querySelectorAll(".crust").forEach(function(glutenFree){
  if (state.glutenFreeCrust){
    glutenFree.classList.add("crust-gluten-free");
  }
  else{
    glutenFree.classList.remove("crust-gluten-free");
  }
});
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  // handled on click
  
// })
}


// var state = {
//   pepperonni: true,
//   mushrooms: true,
//   greenPeppers: true,
//   whiteSauce: false,
//   glutenFreeCrust: false
// }

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const listIngredients = document.querySelector("#list_Ingredients");
  let finalPrice = basePrice;
  listIngredients.innerHTML = "";

  console.log("in renda");
  

  for (let ingredient in ingredients){
    console.log(ingredient)
    switch(ingredients[ingredient].name){
      case "Pepperonni":
        if (state["pepperonni"]===true){
          finalPrice += ingredients[ingredient].price;
          console.log(ingredients[ingredient].price);
          listIngredients.innerHTML += "<li>$1 pepperonni</li>";
        }
        break;
      case "Mushrooms":
          if (state["mushrooms"]===true){
            finalPrice += ingredients[ingredient].price;
            listIngredients.innerHTML += "<li>$1 mushrooms</li>";
          }
          break;
      case "Green Peppers":
          if (state["greenPeppers"]===true){
            finalPrice += ingredients[ingredient].price;
            console.log("prix peperoni");
            listIngredients.innerHTML += "<li>$1 green peppers</li>";
          }
          break;
      case "White sauce":
          if (state["whiteSauce"]===true){
            finalPrice += ingredients[ingredient].price;
            listIngredients.innerHTML += "<li>$3 white sauce</li>";
          }
          break;
      case "Gluten-free crust":
          if (state["glutenFreeCrust"]===true){
            finalPrice += ingredients[ingredient].price;
            listIngredients.innerHTML += "<li>$5 gluten-free crust</li>";
          }
          break;
    }
  }
  console.log(finalPrice)
  document.querySelector("#finalPrice").innerText = "$" + finalPrice;
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  document.querySelector(".btn.btn-pepperonni").classList.toggle("active");
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  document.querySelector(".btn.btn-mushrooms").classList.toggle("active");
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector(".btn-green-peppers").onclick =function(){
  state.greenPeppers = !state.greenPeppers
  document.querySelector(".btn.btn-green-peppers").classList.toggle("active");
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn-sauce").onclick =function(){
  state.whiteSauce =!state.whiteSauce
  document.querySelector(".btn.btn-sauce").classList.toggle("active");
  renderEverything();
}


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector(".btn.btn-crust").onclick=function(){
  state.glutenFreeCrust=!state.glutenFreeCrust;
  document.querySelector(".btn.btn-crust").classList.toggle("active");
  renderEverything();
}