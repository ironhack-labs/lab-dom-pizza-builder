$(document).ready(function() {
// Write your Pizza Builder JavaScript in this file.
let priceBoard = $('.price ul');
// Constants 
let basePrice = 10
let ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
// let state = {
//   pepperonni: true,
//   mushrooms: true,
//   greenPeppers: true,
//   whiteSauce: false,
//   glutenFreeCrust: false,
// }

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  // renderPepperonni()
  // renderMushrooms()
  // renderGreenPeppers()
  // renderWhiteSauce()
  // renderGlutenFreeCrust()
  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  $('.pep').toggle();  
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  $('.mushroom').toggle();  
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  $('.green-pepper').toggle();  
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  $('.sauce').toggleClass('sauce-white');  
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`  
  $('.crust').toggleClass('crust-gluten-free');  
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  $('.btn').click(function(){
    $(this).toggleClass('active');
  })

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  


}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
// document.querySelector('.btn.btn-pepperonni').onclick = function() {
//   state.pepperonni = !state.pepperonni
//   renderEverything()
// }

$('.btn-pepperonni').click(function(){    
  renderPepperonni();
  if ($('.btn-pepperonni').hasClass('active')){
    priceBoard.append(`<li id="pep-price">$1 pepperonni</li>`);
    theFinalPrice.html(`${Number(theFinalPrice.html()) + 1}`);
  } else {
    $('#pep-price').remove();
    theFinalPrice.html(`${Number(theFinalPrice.html()) -1}`);
  } 
});

$('.btn-mushrooms').click(function(){
  renderMushrooms();
  if ($('.btn-mushrooms').hasClass('active')){
    priceBoard.append(`<li id="mush-price">$1 mushrooms</li>`);
    theFinalPrice.html(`${Number(theFinalPrice.html()) + 1}`);
    } else {
      $('#mush-price').remove();
      theFinalPrice.html(`${Number(theFinalPrice.html()) -1}`);
    }
});

$('.btn-green-peppers').click(function(){
  renderGreenPeppers();
  if($('.btn-green-peppers').hasClass('active')){
    priceBoard.append(`<li id="green-price">$1 green peppers</li>`);
    theFinalPrice.html(`${Number(theFinalPrice.html()) + 1}`);
  } else {
    $('#green-price').remove();
    theFinalPrice.html(`${Number(theFinalPrice.html()) - 1}`);
  }
});

$('.btn-sauce').click(function(){
  renderWhiteSauce();  
  if ($('.btn-sauce').hasClass('active')){
   priceBoard.append(`<li id="sauce-price">$3 white sauce</li>`);
   theFinalPrice.html(`${Number(theFinalPrice.html()) + 3}`);
  } else {
    $('#sauce-price').remove();
    theFinalPrice.html(`${Number(theFinalPrice.html()) - 3}`);
  }
});

$('.btn-crust').click(function(){
  renderGlutenFreeCrust();
  if ($('.btn-crust').hasClass('active')){
    priceBoard.append(`<li id="gluten-price">$5 gluten-free crust</li>`);
    theFinalPrice.html(`${Number(theFinalPrice.html()) + 5}`);
  } else {
    $('#gluten-price').remove();
    theFinalPrice.html(`${Number(theFinalPrice.html()) - 5}`);
  }
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`



// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`


let theFinalPrice = $('#final-price');
console.log(theFinalPrice);



});


