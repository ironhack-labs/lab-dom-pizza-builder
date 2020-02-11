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

function renderPrice() {
  let total = basePrice
  const ingredientsList = document.querySelector(".price>ul")
  ingredientsList.innerHTML = ""
  
  if (state.pepperonni) {
    let li = document.createElement("li")
    li.innerText = `$${ingredients.pepperonni.price} ${ingredients.pepperonni.name}`
    ingredientsList.appendChild(li)
    total += ingredients.pepperonni.price
  }
  if (state.mushrooms) {
    let li = document.createElement("li")
    li.innerText = `$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`
    ingredientsList.appendChild(li)
    total += ingredients.mushrooms.price
  }
  if (state.greenPeppers) {
    let li = document.createElement("li")
    li.innerText = `$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`
    ingredientsList.appendChild(li)
    total += ingredients.greenPeppers.price
  }
  if (state.whiteSauce) {
    let li = document.createElement("li")
    li.innerText = `$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`
    ingredientsList.appendChild(li)
    total += ingredients.whiteSauce.price
  }
  if (state.glutenFreeCrust) {
    let li = document.createElement("li")
    li.innerText = `$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`
    ingredientsList.appendChild(li)
    total += ingredients.glutenFreeCrust.price
  }
  document.getElementById("total-price").innerText = `$${total}`
  console.log("i'm working")

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
    if(state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }else{
      $mushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($greenPepper){
    if(state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    }else{
      $greenPepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let $sauce =  document.querySelector('.sauce')
    
      if(state.whiteSauce) {
        if(!Array.from($sauce.classList).includes("sauce-white")){
          $sauce.classList.add("sauce-white");
        }
      }else{
        $sauce.classList.remove("sauce-white");
    }
  
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let $crust =  document.querySelector('.crust')
  if(state.glutenFreeCrust) {
    if(!Array.from($crust.classList).includes("crust-gluten-free")){
      $crust.classList.add("crust-gluten-free");
    }
  }else{
    $crust.classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll(".btn").forEach(function(button){
    console.log(button.classList)
    if(Array.from(button.classList).includes("btn-pepperonni")){
      if(state.pepperonni){
        button.classList.add("active")
      }else{
        button.classList.remove("active")
      }
    }
    if(state){
      button.classList.add("active")
    }else{
      button.classList.remove("active")
    }
  })
}
// ??? add name atribute in HTML to each button


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}

