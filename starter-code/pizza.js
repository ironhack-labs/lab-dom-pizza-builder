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

// When btn-pepperonni clicked, toggle ("matched elements will be revealed or hidden immediately, with no animation, by changing the CSS display property")
$('.btn-pepperonni').click(function () {
  $('.pep').toggle();
})

$('.btn-mushrooms').click(function () {
  $('.mushroom').toggle();
})

$('.btn-green-peppers').click(function () {
  $('.green-pepper').toggle();
})

$('.btn-sauce').click(function () {
  $('.sauce-white').toggle();
})

$('.btn-crust').click(function () {
  $('.crust').toggleClass("crust-gluten-free");
})


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}


renderEverything()

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
//   javascript
document.querySelector('.btn.btn-crust').onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}