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
  document.querySelectorAll('.green-pepper').forEach(function($pepper){
    if (state.greenPeppers) {
      $pepper.style.visibility = "visible";
    }
    else {
      $pepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function($sauce){
    if (state.whiteSauce) {
      $sauce.classList.add("sauce-white");
    }
    else {
      $sauce.classList.remove("sauce-white");
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function($crust){
    if (state.glutenFreeCrust) {
      $crust.classList.add("crust-gluten-free");
    }
    else {
      $crust.classList.remove("crust-gluten-free");
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn.btn-pepperonni').forEach(function($button){
      if (state.pepperonni){
        $button.classList.remove("active")
      }else{$button.classList.add("active");
    }
   })

   document.querySelectorAll('.btn.btn-mushrooms').forEach(function($button){
    if (state.mushrooms){
      $button.classList.remove("active")
    }else{$button.classList.add("active");
  }
 })

 document.querySelectorAll('.btn.btn-green-peppers').forEach(function($button){
  if (state.greenPeppers){
    $button.classList.remove("active")
  }else{$button.classList.add("active");
}
})

document.querySelectorAll('.btn.btn-sauce').forEach(function($button){
  if (state.whiteSauce){
    $button.classList.remove("active")
  }else{$button.classList.add("active");
}
})

document.querySelectorAll('.btn.btn-crust').forEach(function($button){
  if (state.glutenFreeCrust){
    $button.classList.remove("active")
  }else{$button.classList.add("active");
}
})
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

 let ingredientsList = document.querySelector(".panel.price ul");
 let totalPriceTag = document.querySelector(".panel.price strong");
  let totalPrice = basePrice;
  let list = ""

    if (state.pepperonni){
      list += `<li>$${ingredients.pepperonni.price} ${ingredients.pepperonni.name}</li>`
      totalPrice += ingredients.pepperonni.price;
      }
    if (state.mushrooms){
      list += `<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`
      totalPrice += ingredients.mushrooms.price;
    }
    if (state.greenPeppers){
      list += `<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`
      totalPrice += ingredients.greenPeppers.price;
    }
    if (state.whiteSauce){
      list += `<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`
      totalPrice += ingredients.whiteSauce.price;
    }
    if (state.glutenFreeCrust){
      list += `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`
      totalPrice += ingredients.glutenFreeCrust.price;
    }
      
      
      ingredientsList.innerHTML = list;
      totalPriceTag.innerText = `$${totalPrice}`;
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