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
  glutenFreeCrust: true,
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
  document.querySelectorAll('.green-pepper').forEach(function($green){
    if (state.greenPeppers) {
      $green.style.visibility = "visible";
    }
    else {
      $green.style.visibility = "hidden";
    }
  })
}


function renderWhiteSauce()
{
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  var element = document.querySelector(".sauce");
  if (state.whiteSauce)

  {
    element.classList.add("sauce-white");
  }
  else
  {
    element.classList.remove("sauce-white");
  }

}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  var element = document.querySelector(".crust");
  if (state.glutenFreeCrust)
  {
    element.classList.add("crust-gluten-free");
  }
  else
  {
    element.classList.remove("crust-gluten-free");
  }

}


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  var pep=document.querySelector(".btn-pepperonni"),
      mush=document.querySelector(".btn-mushrooms")
      green=document.querySelector(".btn-green-peppers")
      sauce=document.querySelector(".btn.btn-sauce")
      crust=document.querySelector(".btn-crust")

  if (state.pepperonni){pep.classList.add('active')}
  else{pep.classList.remove('active')}

  if (state.mushrooms){mush.classList.add('active')}
  else{mush.classList.remove('active')}

  if (state.greenPeppers){green.classList.add('active')}
  else{green.classList.remove('active')}

  if (state.whiteSauce){sauce.classList.add('active')}
  else{sauce.classList.remove('active')}

  if (state.glutenFreeCrust){sauce.classList.add('active')}
  else{sauce.classList.remove('active')}

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let total=basePrice;
  let list=document.querySelector('aside.panel.price ul');
  list.innerHTML='' // set the list inside the tag empty

  //compute total price
  for (let i in ingredients)
  {
    if (state[i])
    {
      total+=ingredients[i].price;
      list.innerHTML += `<li>  $${ingredients[i].price} ${ingredients[i].name} </li>`
    }
  }

  document.querySelector('aside.panel.price strong').innerHTML='$' +total
  //change the price in html

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

document.querySelector('.btn.btn-green-peppers').onclick=function() {
  state.greenPeppers=!state.greenPeppers
  renderEverything()
}


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").onclick=function(){
  state.whiteSauce!=state.whiteSauce
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick=function(){
  state.glutenFreeCrust!=state.glutenFreeCrust
  renderEverything()
}
