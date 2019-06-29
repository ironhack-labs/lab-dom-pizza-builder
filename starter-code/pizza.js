



// Write your Pizza Builder JavaScript in this file.



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



const ingredients = [
  { name: "pepperonni", price: 1, active: true },
  { name: "mushrooms", price: 1, active: true },
  { name: "green peppers", price: 1, active: true },
  { name: "white sauce", price: 3, active: true },
  { name: "gluten-free crust", price: 5, active: true }
]

function drawEntireIngredientsList() {
  let theListOnThePage = $('aside.price > ul');

  theListOnThePage.empty();
  let total = 10;
  ingredients.forEach(oneIngredient => {
    if (oneIngredient.active) {
      let newLi = $('<li></li>');
      newLi.html(`$${oneIngredient.price} ${oneIngredient.name}`)
      theListOnThePage.append(newLi);
      total += oneIngredient.price;
    }

  });
  $('#totes').html("$" + total);
}




function renderPepperonni() {

  $('.pep').toggle(1000)
  let listItem = $('#list>li:first-child')
  // listItem.toggle(1000)
  ingredients[0].active = !ingredients[0].active

}



function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  $('.mushroom').toggle(1000)
  // $('#list>li:nth-child(2)').toggle(1000)
  ingredients[1].active = !ingredients[1].active

}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  $('.green-pepper').toggle(1000)
  $('#list>li:nth-child(3)').toggle(1000)
  ingredients[2].active = !ingredients[2].active
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  $('section.sauce').toggleClass('sauce-white')
  // $('#list>li:nth-child(4)').toggle(1000)
  ingredients[3].active = !ingredients[3].active

}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  $('section.crust').toggleClass('crust-gluten-free')
  ingredients[4].active = !ingredients[4].active
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}


renderEverything()


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


$('.btn').click(function () {
  $(this).toggleClass('active')
  drawEntireIngredientsList();

})