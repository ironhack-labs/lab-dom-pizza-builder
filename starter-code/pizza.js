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
// This function is triggered once at the begining and everytime 
//the state is changed
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
  document.querySelectorAll('.green-pepper').forEach(function($greenPeper){
    if (state.greenPeppers) {
      $greenPeper.style.visibility = "visible";
    }
    else {
      $greenPeper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function($sauceWhite){
    if (state.sauceWhite) {
      $sauceWhite.classList.add("sauce-white");
    }
    else {
      $sauceWhite.classList.remove("sauce-white");
    }
  })
}

function renderGlutenFreeCrust() {
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
  if (state.pepperonni) {
    document.querySelector('.btn-pepperonni').classList.add('active')
  } else {
    document.querySelector('.btn-pepperonni').classList.remove('active')
  }

  if (state.mushrooms) {
    document.querySelector('.btn-mushrooms').classList.add('active')
  } else {
    document.querySelector('.btn-mushrooms').classList.remove('active')
  }



  if (state.greenPeppers) {
    document.querySelector('.btn-green-peppers').classList.add('active')
  } else {
    document.querySelector('.btn-green-peppers').classList.remove('active')
  }



  if (state.sauceWhite) {
    document.querySelector('.btn-sauce').classList.add('active')
  } else {
    console.log("Estou iniciando em false")
    document.querySelector('.btn-sauce').classList.remove('active')
  }



  if (state.glutenFreeCrust) {
    document.querySelector('.btn-crust').classList.add('active')
  } else {
    document.querySelector('.btn-crust').classList.remove('active')
  }

}







function renderPrice() {
  // let listItens = document.querySelector('.price ul').innerHTML = '';
  // let insertItens = document.querySelector('.price ul').innerHTML = '<li>$1 pepperonni</li>';
  // if (state.pepperonni) {
  //   resultItens;
  // }

  // if (state.mushrooms) {
  //   listItens += `<li>Mushrooms</li>`
  // }


  // if (state.greenPeppers){
  //   listItens += `<li>Green Peppers</li>`
  // }

}


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
  state.sauceWhite = !state.sauceWhite
  renderEverything()
}

document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`