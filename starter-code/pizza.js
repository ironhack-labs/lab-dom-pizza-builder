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
  document.querySelectorAll('.mushroom').forEach(function($mush){
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    }
    else {
      $mush.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($greenpep){
    if (state.greenPeppers) {
      $greenpep.style.visibility = "visible";
    }
    else {
      $greenpep.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce) {
    let sauce = [...document.getElementsByClassName('sauce')];
    if(sauce.length!==0) sauce[0].className = 'sauce sauce-white';
  }
  else {
    let sauce = [...document.getElementsByClassName('sauce sauce-white')];
    if(sauce.length!==0) sauce[0].className = 'sauce';
  }
}
function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    let crust = [...document.getElementsByClassName('crust')];
    if(crust.length!==0) crust[0].className= 'crust crust-gluten-free';
  }
  else {
    let crust = [...document.getElementsByClassName('crust crust-gluten-free')];
    if(crust.length!==0) crust[0].className = 'crust';
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  for (elements in state){
    switch (elements) {
      case `pepperonni`:
        button = [...document.getElementsByClassName(`btn-pepperonni`)][0]
        button.className = button.className.split(' active')[0]
        if(state[elements]===true) {
          button.className += ' active'
        }
        break;
      case `mushrooms`:
        button = [...document.getElementsByClassName(`btn-mushrooms`)][0]
        button.className = button.className.split(' active')[0]
        if(state[elements]===true) {
          button.className += ' active'
        }
        break;      
      case `greenPeppers`:
        button = [...document.getElementsByClassName(`btn-green-peppers`)][0]
        button.className = button.className.split(' active')[0]
        if(state[elements]===true) {
          button.className += ' active'
        }
        break;
      case `whiteSauce`:
        button = [...document.getElementsByClassName(`btn-sauce`)][0]
        button.className = button.className.split(' active')[0]
        if(state[elements]===true) {
          button.className += ' active'
        }
        break;
      case `glutenFreeCrust`:
        button = [...document.getElementsByClassName(`btn-crust`)][0]
        button.className = button.className.split(' active')[0]
        if(state[elements]===true) {
          button.className += ' active'
        }
        break;
    }
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let count =0;
  let ulList = document.getElementById('list_price')
  ulList.innerHTML="";
  let sumTotal = document.getElementById('sumTotal')
  let li
  for (elements in state){
    switch (elements) {
      case `pepperonni`:
        li = document.createElement('li')
        if(state[elements]===true) {
          li.appendChild(document.createTextNode(`$${ingredients[elements].price} ${ingredients[elements].name}`))
          ulList.appendChild(li)
          count += ingredients[elements].price
        }
        break;
      case `mushrooms`:
        li = document.createElement('li')
        if(state[elements]===true) {
          li.appendChild(document.createTextNode(`$${ingredients[elements].price} ${ingredients[elements].name}`))
          ulList.appendChild(li)
          count += ingredients[elements].price
        }
        break;    
      case `greenPeppers`:
        li = document.createElement('li')
        if(state[elements]===true) {
          li.appendChild(document.createTextNode(`$${ingredients[elements].price} ${ingredients[elements].name}`))
          ulList.appendChild(li)
          count += ingredients[elements].price
        }
        break;
      case `whiteSauce`:
        li = document.createElement('li')
        if(state[elements]===true) {
          li.appendChild(document.createTextNode(`$${ingredients[elements].price} ${ingredients[elements].name}`))
          ulList.appendChild(li)
          count += ingredients[elements].price
        }
        break;
      case `glutenFreeCrust`:
        li = document.createElement('li')
        if(state[elements]===true) {
          li.appendChild(document.createTextNode(`$${ingredients[elements].price}  ${ingredients[elements].name}`))
          ulList.appendChild(li)
          count += ingredients[elements].price
        }
        break;
    }

  }
  sumTotal.innerText=`$${count+10}`
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