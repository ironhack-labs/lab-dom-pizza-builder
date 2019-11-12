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

const ingList = document.getElementsByTagName('ul')[1].children

const list = [...ingList]
list.forEach((e)=>{
  e.style.display = 'none'
})

list[0].style.display = 'block'
list[1].style.display = 'block'
list[2].style.display = 'block'
list[3].style.display = 'block'
list[4].style.display = 'block'

const price = document.querySelector('strong')
price.innerHTML = `$${basePrice}`
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


  //renderMushroomPrice()
}

function renderPepperonni() {
  console.log(123)
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
      document.querySelector('.btn-pepperonni').classList.add('active')
    }
    else {
      $pep.style.visibility = "hidden";
      document.querySelector('.btn-pepperonni').classList.remove('active')

    }
  })
  if(state.pepperonni){
    list[0].style.display = 'block'
    basePrice += 1
    price.innerHTML = `$${basePrice}`
  } else {
    list[0].style.display = 'none'
    basePrice -= 1
    price.innerHTML = `$${basePrice}`
  }
  
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function($mush){
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
      document.querySelector('.btn-mushrooms').classList.add('active')
    }
    else {
      $mush.style.visibility = "hidden";
      document.querySelector('.btn-mushrooms').classList.remove('active')
    }
  })
  if(state.mushrooms){
    list[1].style.display = 'block'
    basePrice += 1
    price.innerHTML = `$${basePrice}`
  } else {
    list[1].style.display = 'none'
    basePrice -= 1
    price.innerHTML = `$${basePrice}`
  }
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($pepper){
    if (state.greenPeppers) {
      $pepper.style.visibility = "visible";
      document.querySelector('.btn-green-peppers').classList.add('active')
    }
    else {
      $pepper.style.visibility = "hidden";
      document.querySelector('.btn-green-peppers').classList.remove('active')
    }
  })
  if(state.greenPeppers){
    list[2].style.display = 'block'
    basePrice += 1
    price.innerHTML = `$${basePrice}`
  } else {
    list[2].style.display = 'none'
    basePrice -= 1
    price.innerHTML = `$${basePrice}`
  }
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce){
    document.querySelector('.sauce').classList.add('sauce-white')
    document.querySelector('.btn-sauce').classList.add('active')
  }
  else {
    document.querySelector('.sauce').classList.remove('sauce-white')
    document.querySelector('.btn-sauce').classList.remove('active')
    
  }
  if(state.whiteSauce){
    list[3].style.display = 'block'
    basePrice += 3
    price.innerHTML = `$${basePrice}`
  } else {
    list[3].style.display = 'none'
    basePrice -= 3
    price.innerHTML = `$${basePrice}`
  }
  
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust){
    document.querySelector('.crust').classList.add('crust-gluten-free')
    document.querySelector('.btn-crust').classList.add('active')
  }
  else {
    document.querySelector('.crust').classList.remove('crust-gluten-free')
    document.querySelector('.btn-crust').classList.remove('active')
  }
  if(state.glutenFreeCrust){
    list[4].style.display = 'block'
    basePrice += 5
    price.innerHTML = `$${basePrice}`
  } else {
    list[4].style.display = 'none'
    basePrice -= 5
    price.innerHTML = `$${basePrice}`
  }
  
}



function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderPepperonni()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderMushrooms()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderGreenPeppers()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderWhiteSauce()
}


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderGlutenFreeCrust()
}