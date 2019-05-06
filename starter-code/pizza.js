// Write your Pizza Builder JavaScript in this file.

// // Constants 
// var basePrice = 10
// var ingredients = {
//   pepperonni: {name: 'Pepperonni', price: 1},
//   mushrooms: {name: 'Mushrooms', price: 1},
//   greenPeppers: {name: 'Green Peppers', price: 1},
//   whiteSauce: {name: 'White sauce', price: 3},
//   glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
// }

// function renderPrice() {

// }

// // Initial value of the state (the state values can change over time)
// var state = {
//   pepperonni: true,
//   mushrooms: true,
//   greenPeppers: true,
//   whiteSauce: true,
//   glutenFreeCrust: true
// }

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()
  // renderButtons()
  // renderPrice()
}

function updatePrice() {
  let totalPrice = 10; 
    visibleItems = $('aside ul li:visible');

  for (i=0; i < visibleItems.length; i++) {
    totalPrice += Number(visibleItems[i].innerText[1]);
  };
  $('.total')[0].innerText = totalPrice;
  console.log($('.total'))


}

function renderPepperonni() {
  $(".btn-pepperonni").click(function(){
    $(".pep").toggle();
    $(this).toggleClass('active');
    $('.pepPrice').toggle();
    updatePrice();
  });

}

function renderMushrooms() {
  $(".btn-mushrooms").click(function(){
    $(".mushroom").toggle();
    $(this).toggleClass('active');
    $('.mushPrice').toggle();
    updatePrice();

  });
 
}

function renderGreenPeppers() {
  $(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
    $(this).toggleClass('active');
    $('.pepperPrice').toggle();
    updatePrice();

  });
 
}

function renderWhiteSauce() {
  $('.btn-sauce').click(function() {
    $('.sauce').toggleClass('sauce-white');
    $(this).toggleClass('active');
    $('.saucePrice').toggle();
    updatePrice();

  })
}

function renderGlutenFreeCrust() {
  $('.btn-crust').click(function() {
  $('.crust').toggleClass('crust-gluten-free');
  $(this).toggleClass('active');
  $('.crustPrice').toggle();
  updatePrice();

})
}


  renderEverything()



// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
// document.querySelector('.btn.btn-pepperonni').onclick = function() {
//   state.pepperonni = !state.pepperonni
//   renderEverything()
// }

// document.querySelector('.btn.btn-mushrooms').onclick = function() {
//   state.mushrooms = !state.mushrooms
//   renderEverything()
// }

// document.querySelector('.btn-sauce').onclick = function() {
//   state.whiteSauce = !state.whiteSauce;
//   renderEverything()
// }

// document.querySelector('.btn-crust').onclick = function() {
//   state.glutenFreeCrust = !state.glutenFreeCrust;
//   renderEverything()
// }