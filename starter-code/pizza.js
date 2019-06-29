



// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: { name: 'Pepperonni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
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


$('.btn').click(function () {
  $(this).toggleClass('active')
})

// function renderPepperonni() {
//   document.querySelectorAll('.pep').forEach(function ($pep) {
//     if (state.pepperonni) {
//       $pep.style.visibility = "visible";
//     }
//     else {
//       $pep.style.visibility = "hidden";
//     }
//   })
// }

let thePrice = parseInt($('#list').next().html().slice(1))

// let thePrice = parseInt($('#panel').children('b').html().slice(1))







let total = $('#panel > strong').html().slice(1)
console.log(total)



function renderPepperonni() {

  $('.pep').toggle(1000)
  let listItem = $('#list>li:first-child')
  listItem.toggle(1000)

}



function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  $('.mushroom').toggle(1000)
  $('#list>li:nth-child(2)').toggle(1000)

}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  $('.green-pepper').toggle(1000)
  $('#list>li:nth-child(3)').toggle(1000)
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  $('section.sauce').toggleClass('sauce-white')
  $('#list>li:nth-child(4)').toggle(1000)

}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  $('section.crust').toggleClass('crust-gluten-free')
  $('#list>li:nth-child(5)').toggle(1000)
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
// document.querySelector('.btn.btn-pepperonni').onclick = function () {
//   state.pepperonni = !state.pepperonni

// }

$('.btn.btn-pepperonni').click(renderPepperonni)

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
$('.btn.btn-mushrooms').click(renderMushrooms)

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
$('.btn.btn-green-peppers').click(renderGreenPeppers)

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
$('.btn.btn-sauce').click(renderWhiteSauce)

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
$('.btn.btn-crust').click(renderGlutenFreeCrust)